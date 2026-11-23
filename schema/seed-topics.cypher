// 운영체제 단원(Topic) 시드. MERGE라 여러 번 실행해도 같은 결과가 된다.
// 단원 구성은 일반적인 운영체제 교재 목차(개요 → 프로세스 → 메모리 → 저장장치 → 보호)를 따른다.
// 그래프 파일(data/os-graph.rl)은 git에 올리지 않으므로, 이 파일이 단원 데이터의 원본이다.

UNWIND [
  {order: 1,  slug: 'os-overview',         name: '운영체제 개요',      summary: '운영체제의 역할, 커널 모드와 사용자 모드, 인터럽트'},
  {order: 2,  slug: 'os-structure',        name: '운영체제 구조',      summary: '시스템 콜, 커널 구조(모놀리식·마이크로커널), 부팅'},
  {order: 3,  slug: 'process',             name: '프로세스',           summary: '프로세스 상태, PCB, 문맥 교환, 프로세스 간 통신'},
  {order: 4,  slug: 'thread',              name: '스레드와 동시성',    summary: '스레드 모델, 멀티코어, 사용자·커널 스레드'},
  {order: 5,  slug: 'cpu-scheduling',      name: 'CPU 스케줄링',       summary: '스케줄링 기준과 알고리즘(FCFS, SJF, RR, MLFQ)'},
  {order: 6,  slug: 'synchronization',     name: '프로세스 동기화',    summary: '경쟁 조건, 임계 구역, 뮤텍스, 세마포어, 모니터'},
  {order: 7,  slug: 'deadlock',            name: '교착 상태',          summary: '교착 상태 조건, 예방·회피·탐지, 은행원 알고리즘'},
  {order: 8,  slug: 'memory-management',   name: '메모리 관리',        summary: '주소 바인딩, 연속 할당, 페이징, 세그멘테이션, TLB'},
  {order: 9,  slug: 'virtual-memory',      name: '가상 메모리',        summary: '요구 페이징, 페이지 교체, 스래싱, 작업 집합'},
  {order: 10, slug: 'storage',             name: '대용량 저장장치',    summary: 'HDD·SSD 구조, 디스크 스케줄링, RAID'},
  {order: 11, slug: 'file-system',         name: '파일 시스템',        summary: '파일·디렉터리, 할당 방식, inode, 저널링'},
  {order: 12, slug: 'io-system',           name: '입출력 시스템',      summary: '폴링·인터럽트·DMA, 디바이스 드라이버, 버퍼링'},
  {order: 13, slug: 'protection-security', name: '보호와 보안',        summary: '접근 제어, 권한 분리, 메모리 보호, 보안 위협'}
] AS row
MERGE (t:Topic {slug: row.slug})
ON CREATE SET t.createdAt = '2026-11-23'
SET t.name = row.name, t.order = row.order, t.summary = row.summary, t.updatedAt = '2026-11-23'
RETURN t.order AS order, t.name AS name
ORDER BY order;
