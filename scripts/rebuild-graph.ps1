<#
.SYNOPSIS
  레포의 파일만으로 relate 그래프를 처음부터 다시 만든다.
.DESCRIPTION
  그래프 파일(data/os-graph.rl)은 git에 없다. 이 스크립트가 원본 파일로 재구축한다.
    1. schema/init.cypher        제약조건·인덱스
    2. schema/seed-topics.cypher 단원 13개
    3. graph-data/*.json         단원별 데이터, 번호 순서로 두 번 (두 번째에 앞쪽 참조가 채워진다)
  relate는 writer가 하나뿐이다. Claude Code가 같은 파일로 MCP 서버를 띄워 둔 상태라면
  Claude Code를 닫고 실행하거나, -Database로 다른 경로를 준다.
.EXAMPLE
  ./scripts/rebuild-graph.ps1                               # data/os-graph.rl (없을 때만)
  ./scripts/rebuild-graph.ps1 -Force                        # 기존 파일을 지우고 다시
  ./scripts/rebuild-graph.ps1 -Database $env:TEMP\test.rl   # 다른 경로에 만들어 보기
#>
param(
  [string] $Database = (Join-Path $PSScriptRoot '..\data\os-graph.rl'),
  [switch] $Force
)

$ErrorActionPreference = 'Stop'
$root = Resolve-Path (Join-Path $PSScriptRoot '..')

$relate = (Get-Command relate -ErrorAction SilentlyContinue)?.Source
if (-not $relate) {
  $fallback = Join-Path $env:LOCALAPPDATA 'Programs\relate\relate.exe'
  if (Test-Path $fallback) { $relate = $fallback } else { throw 'relate CLI를 찾을 수 없다. https://relatedb.ai 의 설치 스크립트로 설치한다.' }
}

$Database = [IO.Path]::GetFullPath($Database)
if (Test-Path $Database) {
  if (-not $Force) { throw "$Database 가 이미 있다. 덮어쓰려면 -Force." }
  Remove-Item $Database -Force
  Get-ChildItem (Split-Path $Database) -Filter ((Split-Path $Database -Leaf) + '*') -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force
}
New-Item -ItemType Directory -Force (Split-Path $Database) | Out-Null

function Invoke-Relate([string] $CypherFile, [string[]] $Extra = @()) {
  $out = Get-Content -Raw -Encoding utf8 $CypherFile | & $relate query --database $Database --mode jsonl @Extra 2>&1
  if ($LASTEXITCODE -ne 0) { throw "relate 실패 ($CypherFile): $out" }
}

Write-Output "relate: $(& $relate --version | Select-Object -First 1)"
Write-Output "store : $Database"

Invoke-Relate (Join-Path $root 'schema\init.cypher')
Write-Output '[1/3] schema/init.cypher'
Invoke-Relate (Join-Path $root 'schema\seed-topics.cypher')
Write-Output '[2/3] schema/seed-topics.cypher'

$files = Get-ChildItem (Join-Path $root 'graph-data') -Filter '*.json' | Where-Object Name -match '^\d{2}-.+\.json$' | Sort-Object Name
if (-not $files) { throw 'graph-data/ 에 단원 파일이 없다.' }
$loader = Join-Path $root 'scripts\load-topic.cypher'
foreach ($pass in 1, 2) {
  foreach ($f in $files) { Invoke-Relate $loader @('--fetch-params', "data=$($f.FullName)") }
  Write-Output "[3/3] graph-data pass $pass ($($files.Count) files)"
}

Write-Output ''
& $relate query --database $Database --read-only --mode table -c "MATCH (n) WITH labels(n)[0] AS label, count(*) AS n RETURN label, n ORDER BY label"
& $relate query --database $Database --read-only --mode table -c "MATCH ()-[r]->() RETURN count(r) AS relationships"
