<#
.SYNOPSIS
  HTML 시각화 자료를 PNG로 렌더링한다 (Microsoft Edge headless, 2배 해상도).
.EXAMPLE
  ./render.ps1 -Html ../posts/assets/os-overview/dual-mode.html -Width 1040 -Height 640
  # 같은 폴더에 dual-mode.png가 생긴다.
#>
param(
  [Parameter(Mandatory)] [string] $Html,
  [int] $Width = 1040,
  [int] $Height = 700,
  [string] $Out
)

$ErrorActionPreference = 'Stop'
$htmlPath = (Resolve-Path $Html).Path
if (-not $Out) { $Out = [IO.Path]::ChangeExtension($htmlPath, '.png') }

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Microsoft Edge를 찾을 수 없다.' }

# 호출마다 별도 프로필을 써서 여러 렌더링이 동시에 돌아도 충돌하지 않게 한다.
$profileDir = Join-Path ([IO.Path]::GetTempPath()) ('os-graph-render-' + [guid]::NewGuid().ToString('N'))
$url = 'file:///' + ($htmlPath -replace '\\', '/')
if (Test-Path $Out) { Remove-Item $Out -Force }

try {
  & $edge --headless=new --disable-gpu --hide-scrollbars --no-first-run `
    --user-data-dir="$profileDir" --force-device-scale-factor=2 `
    --window-size="$Width,$Height" --virtual-time-budget=3000 `
    --screenshot="$Out" $url 2>$null | Out-Null

  $deadline = (Get-Date).AddSeconds(20)
  while (-not (Test-Path $Out) -and (Get-Date) -lt $deadline) { Start-Sleep -Milliseconds 200 }
  if (-not (Test-Path $Out)) { throw "렌더링 실패: $Out" }
  Write-Output "rendered $Out"
}
finally {
  Start-Sleep -Milliseconds 300
  Remove-Item -LiteralPath $profileDir -Recurse -Force -ErrorAction SilentlyContinue
}
