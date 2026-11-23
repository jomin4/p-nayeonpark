window.OS_GRAPH = {
 "generatedAt": "2026-11-23",
 "areas": [
  {
   "id": 1,
   "name": "기초",
   "units": [
    1,
    2
   ]
  },
  {
   "id": 2,
   "name": "프로세스·CPU",
   "units": [
    3,
    4,
    5
   ]
  },
  {
   "id": 3,
   "name": "동시성",
   "units": [
    6,
    7
   ]
  },
  {
   "id": 4,
   "name": "메모리",
   "units": [
    8,
    9
   ]
  },
  {
   "id": 5,
   "name": "저장·입출력",
   "units": [
    10,
    11,
    12
   ]
  },
  {
   "id": 6,
   "name": "보호",
   "units": [
    13
   ]
  }
 ],
 "topics": [
  {
   "order": 1,
   "slug": "os-overview",
   "name": "운영체제 개요",
   "summary": "운영체제의 역할, 커널 모드와 사용자 모드, 인터럽트",
   "area": 1,
   "post": {
    "title": "운영체제 개요: 커널 모드, 사용자 모드, 그리고 인터럽트",
    "path": "../../posts/2026-11-23-os-overview.md"
   },
   "concepts": 17,
   "visuals": 3,
   "sources": 5,
   "questions": 5,
   "open": 2,
   "levels": [
    7,
    8,
    2
   ]
  },
  {
   "order": 2,
   "slug": "os-structure",
   "name": "운영체제 구조",
   "summary": "시스템 콜, 커널 구조(모놀리식·마이크로커널), 부팅",
   "area": 1,
   "post": {
    "title": "운영체제 구조: 시스템 콜, 커널 설계, 그리고 부팅",
    "path": "../../posts/2026-11-23-os-structure.md"
   },
   "concepts": 19,
   "visuals": 3,
   "sources": 8,
   "questions": 6,
   "open": 2,
   "levels": [
    5,
    12,
    2
   ]
  },
  {
   "order": 3,
   "slug": "process",
   "name": "프로세스",
   "summary": "프로세스 상태, PCB, 문맥 교환, 프로세스 간 통신",
   "area": 2,
   "post": {
    "title": "프로세스: 실행 중인 프로그램의 구조, 상태, 그리고 일생",
    "path": "../../posts/2026-11-23-process.md"
   },
   "concepts": 19,
   "visuals": 4,
   "sources": 7,
   "questions": 6,
   "open": 2,
   "levels": [
    5,
    13,
    1
   ]
  },
  {
   "order": 4,
   "slug": "thread",
   "name": "스레드와 동시성",
   "summary": "스레드 모델, 멀티코어, 사용자·커널 스레드",
   "area": 2,
   "post": {
    "title": "스레드와 동시성: 한 프로세스 안의 여러 실행 흐름",
    "path": "../../posts/2026-11-23-thread.md"
   },
   "concepts": 19,
   "visuals": 4,
   "sources": 7,
   "questions": 6,
   "open": 2,
   "levels": [
    4,
    12,
    3
   ]
  },
  {
   "order": 5,
   "slug": "cpu-scheduling",
   "name": "CPU 스케줄링",
   "summary": "스케줄링 기준과 알고리즘(FCFS, SJF, RR, MLFQ)",
   "area": 2,
   "post": {
    "title": "CPU 스케줄링: 누구에게, 언제, 얼마나 CPU를 줄까",
    "path": "../../posts/2026-11-23-cpu-scheduling.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 6,
   "questions": 6,
   "open": 2,
   "levels": [
    9,
    8,
    3
   ]
  },
  {
   "order": 6,
   "slug": "synchronization",
   "name": "프로세스 동기화",
   "summary": "경쟁 조건, 임계 구역, 뮤텍스, 세마포어, 모니터",
   "area": 3,
   "post": {
    "title": "프로세스 동기화: 경쟁 조건에서 락, 세마포어, 모니터까지",
    "path": "../../posts/2026-11-23-synchronization.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 8,
   "questions": 6,
   "open": 2,
   "levels": [
    4,
    14,
    2
   ]
  },
  {
   "order": 7,
   "slug": "deadlock",
   "name": "교착 상태",
   "summary": "교착 상태 조건, 예방·회피·탐지, 은행원 알고리즘",
   "area": 3,
   "post": {
    "title": "교착 상태: 서로를 기다리다 모두 멈출 때",
    "path": "../../posts/2026-11-23-deadlock.md"
   },
   "concepts": 16,
   "visuals": 4,
   "sources": 6,
   "questions": 6,
   "open": 2,
   "levels": [
    3,
    12,
    1
   ]
  },
  {
   "order": 8,
   "slug": "memory-management",
   "name": "메모리 관리",
   "summary": "주소 바인딩, 연속 할당, 페이징, 세그멘테이션, TLB",
   "area": 4,
   "post": {
    "title": "메모리 관리: 주소 변환, 연속 할당, 페이징, 그리고 TLB",
    "path": "../../posts/2026-11-23-memory-management.md"
   },
   "concepts": 19,
   "visuals": 4,
   "sources": 11,
   "questions": 6,
   "open": 2,
   "levels": [
    7,
    10,
    2
   ]
  },
  {
   "order": 9,
   "slug": "virtual-memory",
   "name": "가상 메모리",
   "summary": "요구 페이징, 페이지 교체, 스래싱, 작업 집합",
   "area": 4,
   "post": {
    "title": "가상 메모리: 페이지 폴트, 페이지 교체, 그리고 스래싱",
    "path": "../../posts/2026-11-23-virtual-memory.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 6,
   "questions": 6,
   "open": 2,
   "levels": [
    0,
    16,
    4
   ]
  },
  {
   "order": 10,
   "slug": "storage",
   "name": "대용량 저장장치",
   "summary": "HDD·SSD 구조, 디스크 스케줄링, RAID",
   "area": 5,
   "post": {
    "title": "대용량 저장장치: HDD, SSD, 디스크 스케줄링, 그리고 RAID",
    "path": "../../posts/2026-11-23-storage.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 12,
   "questions": 6,
   "open": 2,
   "levels": [
    4,
    13,
    3
   ]
  },
  {
   "order": 11,
   "slug": "file-system",
   "name": "파일 시스템",
   "summary": "파일·디렉터리, 할당 방식, inode, 저널링",
   "area": 5,
   "post": {
    "title": "파일 시스템: 파일 디스크립터, inode, 할당 방식, 그리고 저널링",
    "path": "../../posts/2026-11-23-file-system.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 12,
   "questions": 6,
   "open": 2,
   "levels": [
    5,
    13,
    2
   ]
  },
  {
   "order": 12,
   "slug": "io-system",
   "name": "입출력 시스템",
   "summary": "폴링·인터럽트·DMA, 디바이스 드라이버, 버퍼링",
   "area": 5,
   "post": {
    "title": "입출력 시스템: 장치 컨트롤러, 폴링과 인터럽트, DMA, 그리고 블로킹·비동기 입출력",
    "path": "../../posts/2026-11-23-io-system.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 12,
   "questions": 6,
   "open": 3,
   "levels": [
    8,
    9,
    3
   ]
  },
  {
   "order": 13,
   "slug": "protection-security",
   "name": "보호와 보안",
   "summary": "접근 제어, 권한 분리, 메모리 보호, 보안 위협",
   "area": 6,
   "post": {
    "title": "보호와 보안: 접근 행렬, 유닉스 권한, 그리고 버퍼 오버플로 완화",
    "path": "../../posts/2026-11-23-protection-security.md"
   },
   "concepts": 20,
   "visuals": 4,
   "sources": 17,
   "questions": 6,
   "open": 2,
   "levels": [
    6,
    11,
    3
   ]
  }
 ],
 "concepts": [
  {
   "slug": "dual-mode",
   "name": "이중 모드",
   "level": 1,
   "summary": "CPU가 사용자 모드와 커널 모드를 하드웨어로 구분해, 위험한 작업은 커널만 하게 만드는 보호 구조",
   "unit": 1
  },
  {
   "slug": "interrupt",
   "name": "인터럽트",
   "level": 1,
   "summary": "CPU가 실행 중인 코드를 멈추고 상태를 저장한 뒤 정해진 처리 루틴(핸들러)으로 넘어가게 하는 신호",
   "unit": 1
  },
  {
   "slug": "kernel",
   "name": "커널",
   "level": 1,
   "summary": "운영체제의 핵심 부분. 커널 모드에서 실행되며 하드웨어와 모든 자원에 직접 접근한다",
   "unit": 1
  },
  {
   "slug": "kernel-mode",
   "name": "커널 모드",
   "level": 1,
   "summary": "운영체제가 실행되는 모드. 특권 명령어를 포함해 기계의 모든 자원을 쓸 수 있다 (supervisor mode)",
   "unit": 1
  },
  {
   "slug": "operating-system",
   "name": "운영체제",
   "level": 1,
   "summary": "CPU·메모리·디스크 같은 물리 자원을 가상화하고 관리하며, 프로그램이 쓸 수 있는 표준 인터페이스(시스템 콜)를 제공하는 소프트웨어",
   "unit": 1
  },
  {
   "slug": "user-mode",
   "name": "사용자 모드",
   "level": 1,
   "summary": "일반 프로그램이 실행되는 제한된 모드. 입출력이나 특권 명령어를 직접 실행할 수 없다",
   "unit": 1
  },
  {
   "slug": "virtualization",
   "name": "가상화",
   "level": 1,
   "summary": "물리 자원을 더 쓰기 쉽고 강력한 가상 형태(프로세스, 주소 공간, 파일)로 바꾸는 운영체제의 기본 기법",
   "unit": 1
  },
  {
   "slug": "exception",
   "name": "예외",
   "level": 2,
   "summary": "0으로 나누기, 잘못된 메모리 접근, 사용자 모드의 특권 명령어처럼 실행 중 오류로 생기는 이벤트. 폴트는 원인 명령어를 다시 실행한다",
   "unit": 1
  },
  {
   "slug": "hardware-interrupt",
   "name": "하드웨어 인터럽트",
   "level": 2,
   "summary": "장치나 타이머가 CPU 실행과 상관없이(비동기로) 보내는 인터럽트. 명령어 경계에서 처리된다",
   "unit": 1
  },
  {
   "slug": "interrupt-handler",
   "name": "인터럽트 핸들러",
   "level": 2,
   "summary": "인터럽트·트랩·예외 종류마다 커널이 준비해 둔 처리 코드 (ISR, interrupt service routine)",
   "unit": 1
  },
  {
   "slug": "privileged-instruction",
   "name": "특권 명령어",
   "level": 2,
   "summary": "커널 모드에서만 실행되는 명령어(입출력, 타이머 설정, 트랩 테이블 등록, 인터럽트 끄기). 사용자 모드에서 실행하면 예외가 발생한다",
   "unit": 1
  },
  {
   "slug": "protection-ring",
   "name": "보호 링",
   "level": 2,
   "summary": "x86의 0~3단계 권한 구조. 대부분의 운영체제는 링 0(커널)과 링 3(사용자)만 쓴다",
   "unit": 1
  },
  {
   "slug": "timer-interrupt",
   "name": "타이머 인터럽트",
   "level": 2,
   "summary": "타이머가 몇 밀리초마다 일으키는 인터럽트. 프로세스가 협조하지 않아도 운영체제가 CPU 제어권을 되찾게 한다",
   "unit": 1
  },
  {
   "slug": "trap",
   "name": "트랩",
   "level": 2,
   "summary": "프로그램이 특수 명령어로 일부러 커널에 들어가는 동기적 이벤트. 시스템 콜이 대표적이며 처리 후 다음 명령어로 돌아간다",
   "unit": 1
  },
  {
   "slug": "trap-table",
   "name": "트랩 테이블",
   "level": 2,
   "summary": "이벤트 번호별 핸들러 주소를 담은 표. 커널이 부팅 때 특권 명령어로 하드웨어에 등록한다 (인터럽트 벡터 테이블)",
   "unit": 1
  },
  {
   "slug": "cooperative-multitasking",
   "name": "협력적 멀티태스킹",
   "level": 3,
   "summary": "프로세스가 시스템 콜 등으로 스스로 CPU를 돌려주길 기다리는 방식. 무한 루프에 빠지면 재부팅밖에 방법이 없다",
   "unit": 1
  },
  {
   "slug": "return-from-trap",
   "name": "트랩 복귀",
   "level": 3,
   "summary": "커널 스택에 저장한 레지스터를 복원하고 사용자 모드로 되돌아가는 특수 명령어 (return-from-trap)",
   "unit": 1
  },
  {
   "slug": "api",
   "name": "API",
   "level": 1,
   "summary": "라이브러리가 함수 형태로 제공하는 프로그래밍 인터페이스. 유닉스 계열은 libc(POSIX), Windows는 Windows API 아래 Native API(ntdll.dll)가 시스템 콜을 부른다",
   "unit": 2
  },
  {
   "slug": "boot-process",
   "name": "부팅 과정",
   "level": 1,
   "summary": "전원을 켠 뒤 펌웨어 → 부트로더 → 커널 초기화 → initramfs → init(PID 1) 순서로 제어권이 넘어가 운영체제가 실행 가능한 상태가 되는 과정",
   "unit": 2
  },
  {
   "slug": "kernel-architecture",
   "name": "커널 구조",
   "level": 1,
   "summary": "운영체제 서비스(파일 시스템, 드라이버, 네트워크)를 커널 공간과 사용자 공간 중 어디에, 어떻게 나눠 둘지에 대한 설계. 모놀리식·계층형·마이크로커널·하이브리드로 나뉜다",
   "unit": 2
  },
  {
   "slug": "system-call",
   "name": "시스템 콜",
   "level": 1,
   "summary": "프로그램이 커널에 서비스(파일 입출력, 프로세스 생성 등)를 요청하는 인터페이스. 번호와 인자를 레지스터에 넣고 트랩 명령어로 커널 모드에 들어간다",
   "unit": 2
  },
  {
   "slug": "system-call-types",
   "name": "시스템 콜의 종류",
   "level": 1,
   "summary": "프로세스 제어, 파일 관리, 장치 관리, 정보 유지, 통신, 보호의 여섯 가지 분류 (예: fork, read, ioctl, getpid, pipe, chmod)",
   "unit": 2
  },
  {
   "slug": "bios",
   "name": "BIOS",
   "level": 2,
   "summary": "PC 메인보드의 전통적 펌웨어. POST로 장치를 점검하고 부팅 장치의 MBR(512바이트, 1단계 부트로더와 파티션 표)을 읽어 실행한다",
   "unit": 2
  },
  {
   "slug": "bootloader",
   "name": "부트로더",
   "level": 2,
   "summary": "펌웨어 다음에 실행되어 압축된 커널 이미지(bzImage)와 initramfs를 메모리에 올리고 커널로 제어를 넘기는 프로그램 (GRUB 2, systemd-boot)",
   "unit": 2
  },
  {
   "slug": "init-process",
   "name": "init 프로세스",
   "level": 2,
   "summary": "커널이 PID 1로 실행하는 첫 사용자 공간 프로세스. 파일 시스템을 마운트하고 서비스를 시작하며 가장 늦게 끝난다. 현재 많은 배포판은 systemd, 예전에는 SysV init을 썼다",
   "unit": 2
  },
  {
   "slug": "layered-kernel",
   "name": "계층형 구조",
   "level": 2,
   "summary": "운영체제를 층으로 쌓고 위층은 아래층만 쓰게 한 구조. Dijkstra 팀의 THE 시스템(1968)이 대표 예로, 아래층부터 하나씩 만들고 시험할 수 있다",
   "unit": 2
  },
  {
   "slug": "loadable-kernel-module",
   "name": "적재 가능한 커널 모듈",
   "level": 2,
   "summary": "실행 중인 커널에 다시 컴파일하지 않고 올리고 내리는 코드 조각(드라이버, 파일 시스템 등). 커널 공간에서 실행된다. 리눅스는 init_module·finit_module·delete_module 시스템 콜로 다룬다",
   "unit": 2
  },
  {
   "slug": "microkernel",
   "name": "마이크로커널",
   "level": 2,
   "summary": "커널에는 주소 공간 관리, 스레드, IPC 같은 최소 기능만 두고 파일 시스템·드라이버·네트워크는 사용자 공간 서버가 맡는 구조. 안정적이지만 IPC와 문맥 교환 비용이 든다 (Mach, L4, MINIX 3, QNX)",
   "unit": 2
  },
  {
   "slug": "monolithic-kernel",
   "name": "모놀리식 커널",
   "level": 2,
   "summary": "스케줄러, 메모리 관리, 파일 시스템, 드라이버, 네트워크 스택이 모두 커널 모드의 한 주소 공간에서 실행되는 구조. 빠르지만 한 부분의 버그가 커널 전체에 영향을 준다 (Linux, FreeBSD, Solaris)",
   "unit": 2
  },
  {
   "slug": "syscall-wrapper",
   "name": "시스템 콜 래퍼",
   "level": 2,
   "summary": "시스템 콜을 감싼 libc 함수. 인자를 레지스터에 옮기고 번호를 정해 트랩 명령어를 실행하며, 실패하면 errno를 설정하고 -1을 돌려준다. 래퍼가 없으면 syscall()로 직접 부른다",
   "unit": 2
  },
  {
   "slug": "system-call-number",
   "name": "시스템 콜 번호",
   "level": 2,
   "summary": "커널이 시스템 콜을 구분하는 정수. x86-64 리눅스에서 read는 0, write는 1, getpid는 39이며 <sys/syscall.h>의 SYS_* 상수로 쓴다. 없는 번호는 ENOSYS",
   "unit": 2
  },
  {
   "slug": "system-call-parameter-passing",
   "name": "시스템 콜 매개변수 전달",
   "level": 2,
   "summary": "시스템 콜 인자를 커널에 넘기는 방법. 레지스터(x86-64는 rdi·rsi·rdx·r10·r8·r9로 최대 6개), 구조체 주소(메모리 블록), 스택(MIPS o32의 5~8번째 인자)",
   "unit": 2
  },
  {
   "slug": "system-call-table",
   "name": "시스템 콜 테이블",
   "level": 2,
   "summary": "시스템 콜 번호를 커널 함수(sys_write 등)에 대응시킨 표. x86-64 리눅스는 arch/x86/entry/syscalls/syscall_64.tbl에 정의하며 아키텍처마다 따로 있다",
   "unit": 2
  },
  {
   "slug": "uefi",
   "name": "UEFI",
   "level": 2,
   "summary": "BIOS를 대신하는 펌웨어 규격. 부트로더를 EFI 응용 프로그램(예: grubx64.efi)으로 실행하며, EFI 부트 스텁으로 커널을 직접 띄우거나 Secure Boot를 쓸 수 있다",
   "unit": 2
  },
  {
   "slug": "hybrid-kernel",
   "name": "하이브리드 커널",
   "level": 3,
   "summary": "마이크로커널을 닮은 구조를 가지되 서비스 대부분을 커널 공간에 두는 커널. Windows NT와 XNU(Mach + BSD)가 예이며, 사실상 모놀리식이라는 비판도 있다",
   "unit": 2
  },
  {
   "slug": "initramfs",
   "name": "initramfs",
   "level": 3,
   "summary": "커널이 처음 올리는 임시 루트 파일 시스템(early user space). 진짜 루트가 있는 저장 장치의 드라이버를 적재하고 루트를 찾은 뒤 pivot_root로 진짜 루트로 바꾼다",
   "unit": 2
  },
  {
   "slug": "pid",
   "name": "프로세스 ID",
   "level": 1,
   "summary": "운영체제가 프로세스마다 붙이는 고유 번호(PID). kill이나 wait처럼 특정 프로세스를 가리킬 때 쓴다",
   "unit": 3
  },
  {
   "slug": "process",
   "name": "프로세스",
   "level": 1,
   "summary": "실행 중인 프로그램. 주소 공간(메모리), 레지스터(PC·SP 포함), 열린 파일 같은 입출력 정보로 이루어진 운영체제의 CPU 가상화 단위",
   "unit": 3
  },
  {
   "slug": "process-memory-layout",
   "name": "프로세스 메모리 구조",
   "level": 1,
   "summary": "프로세스 주소 공간을 코드(text)·데이터·힙·스택으로 나눈 배치. 힙과 스택은 빈 공간의 양 끝에서 서로를 향해 자란다",
   "unit": 3
  },
  {
   "slug": "process-state",
   "name": "프로세스 상태",
   "level": 1,
   "summary": "프로세스가 생애 동안 거치는 생성·준비·실행·대기·종료 상태와 그 사이의 전이(디스패치, 타이머 인터럽트, 입출력 요청·완료, exit)",
   "unit": 3
  },
  {
   "slug": "program",
   "name": "프로그램",
   "level": 1,
   "summary": "디스크에 실행 파일 형태로 저장된 명령어와 정적 데이터의 묶음. 스스로는 실행되지 않는 정적인 존재다",
   "unit": 3
  },
  {
   "slug": "context-switch",
   "name": "문맥 교환",
   "level": 2,
   "summary": "실행 중인 프로세스의 레지스터 상태를 저장하고 다른 프로세스의 저장된 상태를 복원해 CPU를 넘기는 저수준 메커니즘. 하드웨어가 커널 스택에, 운영체제가 PCB에 두 번 저장한다",
   "unit": 3
  },
  {
   "slug": "exec",
   "name": "exec",
   "level": 2,
   "summary": "현재 프로세스의 코드·데이터를 새 프로그램으로 덮어쓰고 힙·스택을 초기화하는 시스템 콜 계열. 새 프로세스를 만들지 않으며(PID 유지) 성공하면 돌아오지 않는다",
   "unit": 3
  },
  {
   "slug": "exit",
   "name": "exit",
   "level": 2,
   "summary": "프로세스를 끝내고 부모가 읽을 종료 상태 값을 남기는 호출. 보통 성공이면 0, 실패면 0이 아닌 값을 쓴다",
   "unit": 3
  },
  {
   "slug": "fork",
   "name": "fork",
   "level": 2,
   "summary": "호출한 프로세스를 거의 그대로 복제해 자식 프로세스를 만드는 유닉스 시스템 콜. 부모에게는 자식 PID를, 자식에게는 0을 돌려준다",
   "unit": 3
  },
  {
   "slug": "ipc",
   "name": "프로세스 간 통신",
   "level": 2,
   "summary": "주소 공간이 분리된 프로세스들이 데이터를 주고받도록 운영체제가 제공하는 메커니즘(IPC). 공유 메모리와 메시지 전달 두 모델이 있다",
   "unit": 3
  },
  {
   "slug": "message-passing",
   "name": "메시지 전달",
   "level": 2,
   "summary": "커널을 거쳐 send/receive로 데이터를 주고받는 IPC. 메시지마다 시스템 콜이 들어 느리지만 쓰기 간단하고 여러 컴퓨터 사이에서도 동작한다",
   "unit": 3
  },
  {
   "slug": "orphan-process",
   "name": "고아 프로세스",
   "level": 2,
   "summary": "부모가 먼저 종료된 채 실행 중인 프로세스. 유닉스에서는 init(또는 subreaper)이 새 부모가 된다",
   "unit": 3
  },
  {
   "slug": "pcb",
   "name": "프로세스 제어 블록",
   "level": 2,
   "summary": "커널이 프로세스마다 두는 자료 구조(PCB, process descriptor). 상태, PID, 레지스터와 PC, 스케줄링·메모리·회계·입출력 정보를 담고 프로세스 목록으로 관리된다",
   "unit": 3
  },
  {
   "slug": "pipe",
   "name": "파이프",
   "level": 2,
   "summary": "커널 안의 큐로 한 방향 바이트 통로를 만드는 유닉스 IPC. pipe()가 읽기·쓰기 두 fd를 돌려주고, 보통 fork로 자식에게 물려줘 쓴다",
   "unit": 3
  },
  {
   "slug": "ready-queue",
   "name": "준비 큐",
   "level": 2,
   "summary": "CPU만 받으면 바로 실행할 수 있는 준비 상태 프로세스들이 줄 서 있는 큐. 스케줄러가 여기서 다음 프로세스를 고른다",
   "unit": 3
  },
  {
   "slug": "shared-memory",
   "name": "공유 메모리",
   "level": 2,
   "summary": "같은 메모리 영역을 여러 프로세스의 주소 공간에 붙이는 IPC. 설정 후에는 시스템 콜 없이 메모리 속도로 통신하지만 동시 접근은 직접 조율해야 한다",
   "unit": 3
  },
  {
   "slug": "wait",
   "name": "wait",
   "level": 2,
   "summary": "부모가 자식 프로세스의 종료를 기다리고 종료 상태를 받아 가는 시스템 콜(waitpid 포함). 이 호출로 좀비가 회수된다",
   "unit": 3
  },
  {
   "slug": "zombie-process",
   "name": "좀비 프로세스",
   "level": 2,
   "summary": "실행은 끝났지만 부모가 아직 wait하지 않아 PID·종료 상태 등이 프로세스 표에 남아 있는 프로세스. 쌓이면 새 프로세스를 만들 수 없다",
   "unit": 3
  },
  {
   "slug": "context-switch-cost",
   "name": "문맥 교환 비용",
   "level": 3,
   "summary": "문맥 교환 동안 낭비되는 CPU 시간. 레지스터 저장·복원과 메모리 맵 교체 같은 직접 비용과, TLB 비우기와 캐시 공유로 생기는 간접 비용이 있다",
   "unit": 3
  },
  {
   "slug": "concurrency-vs-parallelism",
   "name": "동시성과 병렬성",
   "level": 1,
   "summary": "동시성은 여러 작업의 실행 기간이 겹치는 것(코어 하나에서 번갈아 실행해도 됨), 병렬성은 여러 작업이 같은 순간에 실행되는 것(코어 여러 개 필요)",
   "unit": 4
  },
  {
   "slug": "multicore",
   "name": "멀티코어",
   "level": 1,
   "summary": "CPU 코어 여러 개를 한 칩에 넣은 구조. 스레드를 코어마다 하나씩 올려 병렬로 실행할 수 있다",
   "unit": 4
  },
  {
   "slug": "multithreading",
   "name": "멀티스레딩",
   "level": 1,
   "summary": "한 프로세스에 스레드를 여러 개 두는 것. 여러 CPU에서 일을 나누는 병렬화와, 한 스레드가 I/O를 기다리는 동안 다른 스레드가 일하는 I/O 겹치기에 쓴다",
   "unit": 4
  },
  {
   "slug": "thread",
   "name": "스레드",
   "level": 1,
   "summary": "프로세스 안의 실행 흐름 하나. 같은 프로세스의 스레드끼리 주소 공간(코드·데이터·힙)과 열린 파일을 공유하고, 레지스터·PC·스택은 각자 가진다",
   "unit": 4
  },
  {
   "slug": "amdahls-law",
   "name": "암달의 법칙",
   "level": 2,
   "summary": "병렬화 비율 p, 코어 수 N일 때 속도 향상은 1/((1-p)+p/N). 코어를 무한히 늘려도 1/(1-p)를 넘지 못한다 (95%면 최대 20배)",
   "unit": 4
  },
  {
   "slug": "clone",
   "name": "clone 시스템 콜",
   "level": 2,
   "summary": "새 실행 흐름이 부모와 무엇을 공유할지(CLONE_VM, CLONE_FILES, CLONE_SIGHAND, CLONE_THREAD 등) 플래그로 고르는 리눅스 시스템 콜. 스레드 구현이 대표 용도다",
   "unit": 4
  },
  {
   "slug": "kernel-thread",
   "name": "커널 스레드",
   "level": 2,
   "summary": "운영체제가 직접 관리하고 스케줄링하는 스레드 단위. 프로세스마다 적어도 하나 있으며, 같은 프로세스 안에서의 전환은 가상 메모리를 바꾸지 않는다",
   "unit": 4
  },
  {
   "slug": "many-to-one-model",
   "name": "다대일 모델",
   "level": 2,
   "summary": "사용자 스레드 전부를 커널 스레드 하나에 대응시키는 N:1 모델. 전환은 빠르지만 멀티코어를 못 쓰고, 블로킹 I/O가 프로세스 전체를 멈춘다 (GNU Portable Threads)",
   "unit": 4
  },
  {
   "slug": "multithreading-model",
   "name": "멀티스레딩 모델",
   "level": 2,
   "summary": "사용자 스레드를 커널 스레드에 대응시키는 방식. N:1(다대일), 1:1(일대일), M:N(다대다)이 있다",
   "unit": 4
  },
  {
   "slug": "one-to-one-model",
   "name": "일대일 모델",
   "level": 2,
   "summary": "사용자 스레드 하나를 커널 스레드 하나에 대응시키는 1:1 모델. 가장 단순하고 멀티코어를 쓸 수 있으며, 리눅스(NPTL)·Win32·macOS·FreeBSD가 쓴다",
   "unit": 4
  },
  {
   "slug": "pthread-create",
   "name": "pthread_create",
   "level": 2,
   "summary": "새 스레드를 만들어 start_routine(arg)부터 실행하게 하는 pthreads 함수. 인자·반환 값이 void *라 어떤 타입이든 넘길 수 있고, 실행 순서는 스케줄러가 정한다",
   "unit": 4
  },
  {
   "slug": "pthread-join",
   "name": "pthread_join",
   "level": 2,
   "summary": "지정한 스레드가 끝날 때까지 기다리고 반환 값을 받는 pthreads 함수. 스레드 스택에 있는 지역 변수 주소를 반환하면 안 된다",
   "unit": 4
  },
  {
   "slug": "pthreads",
   "name": "POSIX 스레드",
   "level": 2,
   "summary": "유닉스 계열의 표준 스레드 API (pthreads). 헤더 pthread.h를 쓰고 리눅스에서는 -pthread 옵션으로 컴파일한다",
   "unit": 4
  },
  {
   "slug": "tcb",
   "name": "스레드 제어 블록",
   "level": 2,
   "summary": "스레드 하나의 상태(레지스터 등)를 저장하는 자료구조 (TCB, thread control block). 프로세스의 PCB에 대응하며 스레드마다 하나씩 있다",
   "unit": 4
  },
  {
   "slug": "thread-stack",
   "name": "스레드별 스택",
   "level": 2,
   "summary": "멀티스레드 프로세스에서 스레드마다 따로 두는 스택. 지역 변수·인자·반환 값이 놓이며, 주소 공간 안에 스레드 수만큼 흩어져 있다",
   "unit": 4
  },
  {
   "slug": "user-thread",
   "name": "사용자 스레드",
   "level": 2,
   "summary": "사용자 공간 라이브러리가 만들고 스케줄링하는 스레드. 커널은 존재를 모른다. 전환이 매우 빠르지만, N:1에서는 블로킹 시스템 콜 하나가 프로세스 전체를 멈춘다",
   "unit": 4
  },
  {
   "slug": "many-to-many-model",
   "name": "다대다 모델",
   "level": 3,
   "summary": "사용자 스레드 M개를 커널 스레드 N개에 대응시키는 M:N 모델. 시스템 콜 없이 전환하면서 병렬성도 얻지만 구현이 복잡해, 옛 Solaris·NetBSD·FreeBSD는 1:1로 돌아갔다",
   "unit": 4
  },
  {
   "slug": "nptl",
   "name": "NPTL",
   "level": 3,
   "summary": "glibc의 리눅스 pthreads 구현 (Native POSIX Thread Library). 1:1 구현이며 모든 스레드가 한 스레드 그룹에 들어가 PID를 공유한다. LinuxThreads를 대체했다",
   "unit": 4
  },
  {
   "slug": "thread-group",
   "name": "스레드 그룹",
   "level": 3,
   "summary": "CLONE_THREAD로 묶인 리눅스 스레드들의 집합. 그룹은 TGID를 공유해 getpid()가 같고, 스레드마다 고유한 TID(gettid())를 가진다",
   "unit": 4
  },
  {
   "slug": "cpu-scheduler",
   "name": "CPU 스케줄러",
   "level": 1,
   "summary": "준비 큐에 있는 프로세스 가운데 다음에 CPU를 쓸 프로세스를 고르는 커널 구성 요소 (단기 스케줄러, short-term scheduler)",
   "unit": 5
  },
  {
   "slug": "fcfs",
   "name": "선착순 스케줄링",
   "level": 1,
   "summary": "도착한 순서대로 끝까지 실행하는 비선점형 알고리즘 (FCFS, FIFO). 단순하고 기아가 없지만 긴 작업 뒤에 짧은 작업이 줄 서면 평균 반환 시간이 크게 늘어난다",
   "unit": 5
  },
  {
   "slug": "non-preemptive-scheduling",
   "name": "비선점형 스케줄링",
   "level": 1,
   "summary": "프로세스가 종료하거나 I/O 등으로 스스로 CPU를 내놓을 때만 스케줄링하는 방식 (협력적 스케줄링). 일단 실행되면 끝날 때까지 빼앗지 않는다",
   "unit": 5
  },
  {
   "slug": "preemptive-scheduling",
   "name": "선점형 스케줄링",
   "level": 1,
   "summary": "실행 중인 프로세스를 타이머 인터럽트나 더 급한 프로세스의 도착 때 강제로 멈추고 다른 프로세스를 실행할 수 있는 방식. 현대 범용 운영체제의 스케줄러는 거의 모두 선점형이다",
   "unit": 5
  },
  {
   "slug": "response-time",
   "name": "응답 시간",
   "level": 1,
   "summary": "작업이 도착해서 처음 CPU를 받을 때까지 걸린 시간. 첫 실행 시각 − 도착 시각. 대화형 시스템에서 중요하다",
   "unit": 5
  },
  {
   "slug": "round-robin",
   "name": "라운드 로빈",
   "level": 1,
   "summary": "준비 큐를 원형으로 돌며 각 프로세스를 타임 퀀텀만큼만 실행하고 맨 뒤로 보내는 선점형 알고리즘 (RR). 응답 시간은 좋지만 반환 시간은 나쁜 편이다",
   "unit": 5
  },
  {
   "slug": "scheduling-criteria",
   "name": "스케줄링 평가 기준",
   "level": 1,
   "summary": "스케줄링 알고리즘을 비교하는 잣대. CPU 이용률, 처리량, 반환 시간, 대기 시간, 응답 시간, 공정성이 있으며 성능과 공정성은 자주 서로 부딪친다",
   "unit": 5
  },
  {
   "slug": "turnaround-time",
   "name": "반환 시간",
   "level": 1,
   "summary": "작업이 도착해서 완료될 때까지 걸린 시간. 완료 시각 − 도착 시각 (turnaround time)",
   "unit": 5
  },
  {
   "slug": "waiting-time",
   "name": "대기 시간",
   "level": 1,
   "summary": "프로세스가 준비 큐에서 CPU를 기다린 시간의 합. CPU만 쓰는 작업이라면 반환 시간 − 실행 시간과 같다",
   "unit": 5
  },
  {
   "slug": "aging",
   "name": "에이징",
   "level": 2,
   "summary": "오래 기다린 프로세스일수록 우선순위를 점점 올려 주어 기아를 막는 기법 (aging)",
   "unit": 5
  },
  {
   "slug": "convoy-effect",
   "name": "호위 효과",
   "level": 2,
   "summary": "자원을 오래 쓰는 작업 하나 뒤에 짧은 작업들이 줄줄이 묶여 기다리는 현상 (convoy effect). FCFS의 대표적 약점이다",
   "unit": 5
  },
  {
   "slug": "dispatcher",
   "name": "디스패처",
   "level": 2,
   "summary": "스케줄러가 고른 프로세스에 실제로 CPU를 넘기는 모듈. 문맥 교환, 사용자 모드 전환, 재개 위치로 점프를 하며, 여기에 걸리는 시간을 디스패치 지연이라 한다",
   "unit": 5
  },
  {
   "slug": "priority-scheduling",
   "name": "우선순위 스케줄링",
   "level": 2,
   "summary": "각 프로세스에 우선순위를 매겨 가장 높은 것부터 실행하는 방식. 선점형·비선점형 모두 가능하며 SJF는 예측 버스트가 짧을수록 우선순위가 높은 특수한 경우다",
   "unit": 5
  },
  {
   "slug": "sjf",
   "name": "최단 작업 우선",
   "level": 2,
   "summary": "다음 CPU 버스트가 가장 짧은 작업부터 끝까지 실행하는 비선점형 알고리즘 (SJF). 동시에 도착한 작업들에 대해서는 평균 반환 시간이 최적이지만 버스트 길이를 미리 알아야 한다",
   "unit": 5
  },
  {
   "slug": "srtf",
   "name": "최소 잔여 시간 우선",
   "level": 2,
   "summary": "SJF에 선점을 더한 알고리즘 (SRTF, STCF, 선점형 SJF). 새 작업이 도착할 때마다 남은 시간이 가장 짧은 작업을 실행해 평균 반환 시간을 줄인다",
   "unit": 5
  },
  {
   "slug": "starvation",
   "name": "기아",
   "level": 2,
   "summary": "더 높은 우선순위의 작업이 계속 들어와서 낮은 우선순위 작업이 무기한 CPU를 받지 못하는 현상 (starvation, indefinite blocking)",
   "unit": 5
  },
  {
   "slug": "time-quantum",
   "name": "타임 퀀텀",
   "level": 2,
   "summary": "라운드 로빈 등에서 한 프로세스가 한 번에 쓸 수 있는 CPU 시간 (time slice). 짧으면 문맥 교환 비용이 커지고, 길면 FCFS처럼 동작해 응답성이 떨어진다",
   "unit": 5
  },
  {
   "slug": "cfs",
   "name": "완전 공정 스케줄러",
   "level": 3,
   "summary": "리눅스 2.6.23부터 쓰인 공정 분배 스케줄러 (CFS). 가상 실행 시간(vruntime)이 가장 작은 태스크를 레드-블랙 트리에서 골라 실행하고, nice 값을 가중치로 바꿔 CPU 몫을 나눈다. 6.6부터 EEVDF로 옮겨 가기 시작했다",
   "unit": 5
  },
  {
   "slug": "mlfq",
   "name": "다단계 피드백 큐",
   "level": 3,
   "summary": "우선순위가 다른 여러 큐를 두고, 작업이 CPU를 쓰는 모습을 관찰해 큐 사이를 옮기는 스케줄러 (MLFQ). 작업 길이를 몰라도 짧은 작업과 대화형 작업을 먼저 처리해 SJF와 RR의 장점을 함께 노린다",
   "unit": 5
  },
  {
   "slug": "priority-boost",
   "name": "우선순위 부스트",
   "level": 3,
   "summary": "MLFQ에서 일정 주기 S마다 모든 작업을 맨 위 큐로 올리는 규칙. 기아를 막고 성격이 바뀐 작업을 다시 제대로 대우한다",
   "unit": 5
  },
  {
   "slug": "critical-section",
   "name": "임계 구역",
   "level": 1,
   "summary": "공유 변수나 자원에 접근해서, 둘 이상의 스레드가 동시에 실행하면 안 되는 코드 조각",
   "unit": 6
  },
  {
   "slug": "mutex",
   "name": "뮤텍스",
   "level": 1,
   "summary": "상호 배제를 위한 락. POSIX의 pthread_mutex_t처럼 락을 못 얻으면 대기 큐에서 잠들고, 락을 놓는 쪽이 깨운다",
   "unit": 6
  },
  {
   "slug": "mutual-exclusion",
   "name": "상호 배제",
   "level": 1,
   "summary": "한 스레드가 임계 구역 안에 있으면 다른 스레드는 들어오지 못하게 막는 성질",
   "unit": 6
  },
  {
   "slug": "race-condition",
   "name": "경쟁 조건",
   "level": 1,
   "summary": "여러 스레드가 공유 데이터에 접근할 때 결과가 실행 타이밍(인터리빙)에 따라 달라지는 상황. 공유 데이터를 두고 생기면 데이터 경쟁이라 하며, 결과가 비결정적이 된다",
   "unit": 6
  },
  {
   "slug": "atomic-instruction",
   "name": "원자적 명령어",
   "level": 2,
   "summary": "메모리를 읽고 고치고 쓰는 일을 중간에 끼어들 수 없게 한 번에 실행하는 하드웨어 명령어. test-and-set, compare-and-swap, fetch-and-add, load-linked/store-conditional 등",
   "unit": 6
  },
  {
   "slug": "binary-semaphore",
   "name": "이진 세마포어",
   "level": 2,
   "summary": "초깃값이 1이라 0과 1만 오가는 세마포어. 락처럼 상호 배제에 쓴다. 값이 N까지 가는 것은 카운팅 세마포어라 한다",
   "unit": 6
  },
  {
   "slug": "bounded-buffer-problem",
   "name": "유한 버퍼 문제",
   "level": 2,
   "summary": "크기가 정해진 버퍼를 두고 생산자는 넣고 소비자는 꺼내는 고전 문제(생산자-소비자 문제). 세마포어 empty(MAX), full(0), mutex(1)로 풀며, mutex를 먼저 잡으면 교착 상태가 된다",
   "unit": 6
  },
  {
   "slug": "compare-and-swap",
   "name": "compare-and-swap",
   "level": 2,
   "summary": "메모리 값이 기대한 값과 같을 때만 새 값으로 바꾸고 원래 값을 돌려주는 원자적 명령어. x86에서는 lock cmpxchg(compare-and-exchange)다",
   "unit": 6
  },
  {
   "slug": "condition-variable",
   "name": "조건 변수",
   "level": 2,
   "summary": "조건이 참이 될 때까지 잠들어 기다리는 대기 큐. wait는 락을 놓고 잠드는 일을 원자적으로 하고, signal은 기다리는 스레드 하나를 깨운다(없으면 사라짐). Mesa 의미론 때문에 조건은 while로 다시 확인한다",
   "unit": 6
  },
  {
   "slug": "critical-section-problem",
   "name": "임계 구역 문제",
   "level": 2,
   "summary": "진입 구역과 퇴출 구역을 설계하는 문제. 해결책은 상호 배제, 진행(비어 있으면 진입 결정을 무한히 미루지 않음), 한정 대기(추월 횟수에 상한)를 모두 지켜야 한다",
   "unit": 6
  },
  {
   "slug": "dining-philosophers-problem",
   "name": "식사하는 철학자 문제",
   "level": 2,
   "summary": "다섯 철학자가 사이사이 놓인 포크 다섯 개 중 양쪽 둘을 집어야 먹는 Dijkstra의 고전 문제. 모두 왼쪽부터 집으면 교착 상태가 생기고, 한 명의 순서를 바꿔 기다림의 원을 끊는다",
   "unit": 6
  },
  {
   "slug": "interrupt-disabling",
   "name": "인터럽트 끄기",
   "level": 2,
   "summary": "임계 구역 동안 인터럽트를 꺼서 문맥 교환을 막는 가장 오래된 상호 배제 방법. 특권 명령어라 사용자 프로그램에 줄 수 없고 멀티프로세서에서는 통하지 않는다",
   "unit": 6
  },
  {
   "slug": "monitor",
   "name": "모니터",
   "level": 2,
   "summary": "데이터를 감추고 한 번에 한 메서드만 실행되게 해 상호 배제를 언어가 지켜 주는 동기화 구조. 락 하나와 하나 이상의 조건 변수로 이루어진다",
   "unit": 6
  },
  {
   "slug": "petersons-algorithm",
   "name": "피터슨 알고리즘",
   "level": 2,
   "summary": "flag 배열과 turn 변수만으로 두 스레드의 임계 구역 문제를 푸는 1981년의 소프트웨어 해법. 메모리 접근 순서를 바꾸는 현대 CPU에서는 메모리 배리어 없이 동작하지 않는다",
   "unit": 6
  },
  {
   "slug": "readers-writers-problem",
   "name": "읽기-쓰기 문제",
   "level": 2,
   "summary": "읽는 스레드는 여럿이 동시에, 쓰는 스레드는 혼자만 접근하게 하는 고전 문제. 읽기 우선 해법(첫 번째 문제)은 쓰는 스레드를 굶길 수 있다",
   "unit": 6
  },
  {
   "slug": "semaphore",
   "name": "세마포어",
   "level": 2,
   "summary": "Dijkstra가 만든 정수 값과 대기 큐로 된 동기화 도구. wait(P, sem_wait)는 값을 줄이고 필요하면 기다리며, signal(V, sem_post)은 값을 늘리고 하나를 깨운다. 초깃값으로 락, 자원 세기, 순서 맞추기에 쓴다",
   "unit": 6
  },
  {
   "slug": "spinlock",
   "name": "스핀락",
   "level": 2,
   "summary": "락이 풀릴 때까지 CPU를 쓰며 계속 확인하는(바쁜 대기) 락. 문맥 교환 비용이 없어 멀티코어의 짧은 임계 구역에 맞지만, 단일 CPU에서는 낭비가 크고 공정성을 보장하지 않는다",
   "unit": 6
  },
  {
   "slug": "test-and-set",
   "name": "test-and-set",
   "level": 2,
   "summary": "옛 값을 돌려주면서 동시에 새 값을 쓰는 원자적 명령어(원자적 교환). x86에서는 xchg로 제공되며 가장 단순한 스핀락의 재료다",
   "unit": 6
  },
  {
   "slug": "futex",
   "name": "futex",
   "level": 3,
   "summary": "리눅스가 제공하는 메모리 주소 하나와 커널 대기 큐의 짝. futex_wait(값이 그대로면 잠들기)와 futex_wake(하나 깨우기)로, 경쟁이 있을 때만 커널에 들어가는 뮤텍스를 만든다",
   "unit": 6
  },
  {
   "slug": "priority-inversion",
   "name": "우선순위 역전",
   "level": 3,
   "summary": "높은 우선순위 스레드가 낮은 스레드가 쥔 락을 기다리는 동안 중간 우선순위 스레드가 낮은 스레드를 선점해, 사실상 높은 스레드가 중간 스레드에 밀리는 현상. 우선순위 상속으로 막는다",
   "unit": 6
  },
  {
   "slug": "deadlock",
   "name": "교착 상태",
   "level": 1,
   "summary": "프로세스나 스레드의 집합에서 각자가 다른 구성원이 쥔 자원을 기다리느라 아무도 진행하지 못하는 상태 (deadlock). 바깥에서 끼어들지 않으면 영원히 풀리지 않는다. Dijkstra는 '죽음의 포옹(deadly embrace)'이라 불렀다",
   "unit": 7
  },
  {
   "slug": "deadlock-conditions",
   "name": "교착 상태의 필요 조건",
   "level": 1,
   "summary": "교착이 생기려면 동시에 성립해야 하는 네 조건. 상호 배제, 점유 대기, 비선점, 순환 대기. 1971년 Coffman 등이 정리해 Coffman 조건이라고도 한다. 하나라도 깨면 교착은 생기지 않는다",
   "unit": 7
  },
  {
   "slug": "ostrich-algorithm",
   "name": "타조 알고리즘",
   "level": 1,
   "summary": "교착이 드물고 피해가 작다고 보고 아무 대책 없이 무시하는 방법 (ostrich algorithm). 교착이 생기면 재시작으로 해결한다. 위키백과는 MINIX와 초기 UNIX가 이 방식을 썼다고 적는다",
   "unit": 7
  },
  {
   "slug": "circular-wait",
   "name": "순환 대기",
   "level": 2,
   "summary": "P0는 P1이 쥔 자원을, P1은 P2가 쥔 자원을, …, Pn은 P0가 쥔 자원을 기다리는 원형 사슬 (circular wait). 자원 할당 그래프에서는 사이클로 나타난다",
   "unit": 7
  },
  {
   "slug": "deadlock-avoidance",
   "name": "교착 상태 회피",
   "level": 2,
   "summary": "각 프로세스가 앞으로 쓸 자원을 미리 알고, 요청이 올 때마다 승인해도 안전 상태가 유지되는지 검사해 불안전하면 기다리게 하는 방법 (deadlock avoidance). 조건을 깨지 않는 대신 사전 정보가 필요하고 보수적이다",
   "unit": 7
  },
  {
   "slug": "deadlock-detection",
   "name": "교착 상태 탐지",
   "level": 2,
   "summary": "교착이 생기는 것은 허용하고, 주기적으로 또는 특정 신호가 있을 때 대기 그래프의 사이클이나 은행원식 검사로 교착에 빠진 프로세스를 찾아내는 방법 (deadlock detection). 데이터베이스 시스템이 많이 쓴다",
   "unit": 7
  },
  {
   "slug": "deadlock-prevention",
   "name": "교착 상태 예방",
   "level": 2,
   "summary": "네 가지 필요 조건 중 하나가 아예 성립하지 못하도록 코드나 자원 사용 규칙을 설계하는 방법 (deadlock prevention). 락 순서 고정, 한꺼번에 획득, trylock 후 반납, 락 없는 자료 구조가 있다",
   "unit": 7
  },
  {
   "slug": "deadlock-recovery",
   "name": "교착 상태 회복",
   "level": 2,
   "summary": "탐지된 교착을 푸는 방법 (deadlock recovery). 관련 프로세스를 모두 또는 하나씩 종료하거나, 희생자의 자원을 선점하고 롤백한다. 같은 프로세스만 계속 희생되면 기아가 생긴다",
   "unit": 7
  },
  {
   "slug": "hold-and-wait",
   "name": "점유 대기",
   "level": 2,
   "summary": "자원을 하나 이상 쥔 채로 다른 자원을 기다리는 상황 (hold and wait). 필요한 락을 처음에 한꺼번에 얻게 하면 깨지지만 동시성이 줄고 미리 다 알아야 한다",
   "unit": 7
  },
  {
   "slug": "livelock",
   "name": "라이브락",
   "level": 2,
   "summary": "스레드들이 멈춰 있지는 않고 상태를 계속 바꾸며 움직이지만 서로 양보·재시도를 반복해 아무도 진행하지 못하는 상태 (livelock). trylock 후 반납을 되풀이할 때 생길 수 있고, 무작위 지연으로 확률을 낮춘다. 기아의 특수한 경우로 본다",
   "unit": 7
  },
  {
   "slug": "lock-ordering",
   "name": "락 순서 정하기",
   "level": 2,
   "summary": "모든 스레드가 락을 정해진 전체 또는 부분 순서대로만 잡게 해서 순환 대기를 없애는 예방 기법 (lock ordering). 가장 실용적이고 널리 쓰이지만 규칙일 뿐이라 한 곳이라도 어기면 깨진다. 락 주소 순서로 잡는 요령도 있다",
   "unit": 7
  },
  {
   "slug": "no-preemption",
   "name": "비선점",
   "level": 2,
   "summary": "쥐고 있는 자원을 강제로 빼앗을 수 없고 가진 쪽이 스스로 내놓아야만 풀리는 성질 (no preemption). trylock으로 실패하면 쥔 락을 스스로 반납하는 방식이 이 조건을 우회한다",
   "unit": 7
  },
  {
   "slug": "resource-allocation-graph",
   "name": "자원 할당 그래프",
   "level": 2,
   "summary": "프로세스(원)와 자원 유형(사각형, 안의 점은 인스턴스)을 요청 간선 P→R과 할당 간선 R→P로 이은 방향 그래프. 사이클이 없으면 교착이 없다. 인스턴스가 하나씩이면 사이클이 곧 교착이고, 여럿이면 사이클은 교착의 가능성일 뿐이다",
   "unit": 7
  },
  {
   "slug": "safe-state",
   "name": "안전 상태",
   "level": 2,
   "summary": "모든 프로세스가 남은 요구를 채우고 끝날 수 있는 실행 순서(안전 순서)가 하나라도 있는 자원 할당 상태 (safe state). 안전 상태는 교착이 아니다. 불안전 상태라고 반드시 교착이 되는 것은 아니지만 보장할 수 없게 된다",
   "unit": 7
  },
  {
   "slug": "wait-for-graph",
   "name": "대기 그래프",
   "level": 2,
   "summary": "자원 할당 그래프에서 자원 노드를 지우고 'Pi가 Pj가 쥔 자원을 기다린다'를 Pi→Pj로 접어 만든 그래프 (wait-for graph). 자원 유형마다 인스턴스가 하나일 때 이 그래프의 사이클로 교착을 탐지한다",
   "unit": 7
  },
  {
   "slug": "bankers-algorithm",
   "name": "은행원 알고리즘",
   "level": 3,
   "summary": "Dijkstra가 THE 운영체제를 설계하며 만든 교착 회피 알고리즘 (banker's algorithm). Available·Max·Allocation·Need 행렬로 안전 순서를 찾는 안전성 검사를 하고, 요청을 가정해 승인한 상태가 안전할 때만 실제로 준다. 최대 요구를 미리 알아야 하고 프로세스 수가 고정이라고 가정해 범용 OS에서는 거의 쓰지 않는다",
   "unit": 7
  },
  {
   "slug": "contiguous-allocation",
   "name": "연속 메모리 할당",
   "level": 1,
   "summary": "프로세스 하나에 물리 메모리의 연속된 한 덩어리를 주는 방식. 운영체제는 빈 칸(hole) 목록을 관리하고 요청마다 들어갈 칸을 고른다",
   "unit": 8
  },
  {
   "slug": "external-fragmentation",
   "name": "외부 단편화",
   "level": 1,
   "summary": "빈 공간의 합은 요청보다 크지만 연속되지 않은 작은 조각들로 흩어져 할당할 수 없는 상태. 크기가 제각각인 덩어리를 할당·해제하는 연속 할당과 세그멘테이션에서 생긴다",
   "unit": 8
  },
  {
   "slug": "internal-fragmentation",
   "name": "내부 단편화",
   "level": 1,
   "summary": "요청보다 큰 고정 크기 단위로 할당해 할당된 단위 안에 남는 쓰이지 않는 공간. 페이징에서는 프로세스당 평균 반 페이지가 낭비된다",
   "unit": 8
  },
  {
   "slug": "logical-address",
   "name": "논리 주소",
   "level": 1,
   "summary": "CPU가 만들어 내고 프로그램이 보는 주소. 실행 시간 바인딩에서는 가상 주소라고도 하며, 메모리에 닿기 전에 MMU가 물리 주소로 바꾼다",
   "unit": 8
  },
  {
   "slug": "mmu",
   "name": "메모리 관리 장치",
   "level": 1,
   "summary": "모든 메모리 참조를 가로채 논리(가상) 주소를 물리 주소로 바꾸고 접근 권한을 검사하는 CPU 안의 하드웨어(MMU). 베이스·한계 레지스터, 페이지 테이블 워크 회로, TLB 등을 포함한다",
   "unit": 8
  },
  {
   "slug": "paging",
   "name": "페이징",
   "level": 1,
   "summary": "논리 주소 공간을 같은 크기의 페이지로, 물리 메모리를 같은 크기의 프레임으로 나누고 아무 페이지나 아무 프레임에 놓는 비연속 할당. 주소를 페이지 번호와 오프셋으로 쪼개 변환하며 외부 단편화가 없다",
   "unit": 8
  },
  {
   "slug": "physical-address",
   "name": "물리 주소",
   "level": 1,
   "summary": "메모리 장치가 실제로 받는 주소. 사용자 프로그램은 물리 주소를 직접 보지 못한다",
   "unit": 8
  },
  {
   "slug": "address-binding",
   "name": "주소 바인딩",
   "level": 2,
   "summary": "프로그램의 기호 주소를 실제 메모리 주소로 정하는 일. 컴파일 시간(절대 코드)·적재 시간(재배치 가능 코드)·실행 시간(하드웨어가 매번 변환) 세 시점이 있고 현대 운영체제는 실행 시간 바인딩을 쓴다",
   "unit": 8
  },
  {
   "slug": "base-limit-register",
   "name": "베이스·한계 레지스터",
   "level": 2,
   "summary": "CPU마다 하나씩 있는 레지스터 쌍. 논리 주소가 한계보다 작은지 검사(보호)한 뒤 베이스를 더해(동적 재배치) 물리 주소를 만든다. 설정은 특권 명령이고 문맥 교환 때 PCB에 저장·복원한다",
   "unit": 8
  },
  {
   "slug": "best-fit",
   "name": "최적 적합",
   "level": 2,
   "summary": "요청이 들어가는 빈 칸 중 가장 작은 칸에 할당하는 전략. 큰 칸을 아끼지만 목록 전체를 뒤져야 하고 쓸모없이 작은 조각이 남는다",
   "unit": 8
  },
  {
   "slug": "compaction",
   "name": "압축",
   "level": 2,
   "summary": "사용 중인 메모리 덩어리를 한쪽으로 옮겨 흩어진 빈 칸을 하나로 합치는 외부 단편화 대책. 실행 시간 바인딩이어야 가능하고(베이스만 고침) 메모리 복사 비용이 크다",
   "unit": 8
  },
  {
   "slug": "first-fit",
   "name": "최초 적합",
   "level": 2,
   "summary": "빈 칸 목록을 앞에서부터 찾다가 처음 들어가는 칸에 할당하는 전략. 전체를 뒤지지 않아 빠르지만 목록 앞쪽에 작은 조각이 쌓인다",
   "unit": 8
  },
  {
   "slug": "page-table",
   "name": "페이지 테이블",
   "level": 2,
   "summary": "프로세스마다 하나씩 두는, 페이지 번호를 프레임 번호로 바꾸는 표. 메모리에 있고 PTBR(x86은 CR3)이 위치를 가리키며, 선형 표는 32비트·4KB 페이지에서 프로세스당 4MB가 든다",
   "unit": 8
  },
  {
   "slug": "page-table-entry",
   "name": "페이지 테이블 항목",
   "level": 2,
   "summary": "페이지 테이블의 한 칸(PTE). 프레임 번호와 함께 valid, 보호(R/W/실행), present, dirty, accessed, user/supervisor 같은 비트를 담는다. x86은 valid 없이 present 비트 하나로 둘을 겸한다",
   "unit": 8
  },
  {
   "slug": "segmentation",
   "name": "세그멘테이션",
   "level": 2,
   "summary": "코드·힙·스택 같은 논리적 세그먼트마다 베이스·한계 쌍을 두는 방식. 주소는 세그먼트 번호+오프셋이고 세그먼트별 보호·공유가 쉽지만 크기가 제각각이라 외부 단편화가 생긴다",
   "unit": 8
  },
  {
   "slug": "tlb",
   "name": "TLB",
   "level": 2,
   "summary": "MMU 안에 있는 주소 변환 전용 캐시(translation lookaside buffer). 최근 페이지 번호→프레임 번호 변환을 병렬 검색으로 찾아 히트면 페이지 테이블 접근을 생략하고, 미스면 페이지 워크 후 항목을 채우고 명령을 다시 실행한다",
   "unit": 8
  },
  {
   "slug": "worst-fit",
   "name": "최악 적합",
   "level": 2,
   "summary": "가장 큰 빈 칸에 할당해 남는 조각을 크게 남기려는 전략. 목록 전체를 뒤져야 하고, 시뮬레이션·연구에서 시간과 공간 모두 최초·최적 적합보다 나쁘게 나온다",
   "unit": 8
  },
  {
   "slug": "effective-access-time",
   "name": "유효 접근 시간",
   "level": 3,
   "summary": "TLB 히트율 h를 반영한 평균 메모리 접근 시간(EAT) = h × 히트 시간 + (1−h) × 미스 시간. 예: 메모리 100ns, TLB 20ns, 히트율 80%면 140ns",
   "unit": 8
  },
  {
   "slug": "multilevel-page-table",
   "name": "다단계 페이지 테이블",
   "level": 3,
   "summary": "페이지 테이블을 페이지 크기 조각으로 나누고 비어 있는 조각은 만들지 않으며 위 단계 표(페이지 디렉터리)로 조각 위치를 기록하는 트리 구조. 공간을 아끼는 대신 TLB 미스 때 단계마다 메모리를 한 번 더 읽는다. x86-64는 9비트씩 4단계를 쓴다",
   "unit": 8
  },
  {
   "slug": "clock-algorithm",
   "name": "클럭 알고리즘",
   "level": 2,
   "summary": "참조 비트로 LRU를 근사하는 교체 정책(2차 기회 알고리즘). 원형 목록을 시곗바늘이 돌며 참조 비트가 1이면 0으로 지우고 넘어가고, 0인 페이지를 내보낸다. 모든 비트가 1이면 FIFO와 같아진다",
   "unit": 9
  },
  {
   "slug": "copy-on-write",
   "name": "쓰기 시 복사",
   "level": 2,
   "summary": "페이지를 복사해야 할 때 실제로 복사하지 않고 양쪽 주소 공간에 읽기 전용으로 공유해 두었다가, 누군가 쓰려고 할 때 일어나는 폴트에서 그 페이지만 복사하는 기법(COW). fork 직후 exec하는 유닉스 패턴에서 불필요한 복사를 없앤다",
   "unit": 9
  },
  {
   "slug": "demand-paging",
   "name": "요구 페이징",
   "level": 2,
   "summary": "페이지를 미리 다 올리지 않고 실제로 접근될 때(페이지 폴트가 날 때) 메모리로 가져오는 방식. 처음에 아무 페이지도 올리지 않는 경우를 순수 요구 페이징이라 한다",
   "unit": 9
  },
  {
   "slug": "dirty-bit",
   "name": "더티 비트",
   "level": 2,
   "summary": "페이지가 메모리에 올라온 뒤 수정되었는지 나타내는 비트(modify bit). 수정된(dirty) 페이지는 내보낼 때 디스크에 써야 하므로, 많은 교체 정책이 깨끗한(clean) 페이지를 먼저 고른다",
   "unit": 9
  },
  {
   "slug": "fifo-page-replacement",
   "name": "FIFO 페이지 교체",
   "level": 2,
   "summary": "메모리에 가장 먼저 들어온 페이지를 내보내는 교체 정책. 구현은 큐 하나로 간단하지만 자주 쓰는 페이지도 오래됐다는 이유로 내보내며 벨레이디의 이상 현상을 보일 수 있다",
   "unit": 9
  },
  {
   "slug": "frame-allocation",
   "name": "프레임 할당",
   "level": 2,
   "summary": "물리 프레임을 프로세스들에게 몇 개씩 나눠 줄지 정하는 정책. 균등 할당과 크기에 비례한 할당이 있고, 교체 대상을 자기 프레임에서만 고르는 지역 교체와 모든 프레임에서 고르는 전역 교체로 나뉜다",
   "unit": 9
  },
  {
   "slug": "locality-of-reference",
   "name": "참조 지역성",
   "level": 2,
   "summary": "프로그램이 최근에 쓴 페이지(시간 지역성)와 그 근처 페이지(공간 지역성)를 다시 쓰는 경향. 교체 정책과 작업 집합 모델이 기대는 경험적 성질이며 모든 프로그램이 따르는 법칙은 아니다",
   "unit": 9
  },
  {
   "slug": "lru",
   "name": "LRU",
   "level": 2,
   "summary": "가장 오랫동안 사용되지 않은 페이지를 내보내는 교체 정책(Least Recently Used). 지역성 덕분에 OPT에 가깝게 동작하지만, 정확히 구현하려면 모든 메모리 접근마다 기록을 갱신해야 해서 비싸다",
   "unit": 9
  },
  {
   "slug": "memory-mapped-file",
   "name": "메모리 맵 파일",
   "level": 2,
   "summary": "파일을 프로세스 가상 주소 공간의 한 구간에 대응시켜 포인터로 읽고 쓰게 하는 방식(mmap). 아직 메모리에 없는 부분에 처음 닿으면 페이지 폴트로 요구 페이징된다. MAP_SHARED는 변경을 파일과 다른 프로세스에 반영하고, MAP_PRIVATE는 쓰기 시 복사로 사본을 만든다",
   "unit": 9
  },
  {
   "slug": "optimal-page-replacement",
   "name": "최적 페이지 교체",
   "level": 2,
   "summary": "앞으로 가장 오랫동안 쓰이지 않을 페이지를 내보내는 정책(OPT, MIN). 폴트 수가 가능한 최소지만 미래를 알아야 해서 구현할 수 없고, 다른 알고리즘을 평가하는 기준선으로 쓴다",
   "unit": 9
  },
  {
   "slug": "page-fault",
   "name": "페이지 폴트",
   "level": 2,
   "summary": "주소 공간에 속한 유효한 페이지지만 물리 메모리에 없는 페이지에 접근할 때 하드웨어가 일으키는 예외. 커널의 페이지 폴트 핸들러가 프레임을 확보하고 디스크에서 페이지를 읽어 페이지 테이블을 갱신한 뒤 그 명령어를 다시 실행한다",
   "unit": 9
  },
  {
   "slug": "page-replacement",
   "name": "페이지 교체",
   "level": 2,
   "summary": "빈 프레임이 없을 때 메모리에 있는 페이지 하나(victim)를 골라 내보내고 그 자리에 필요한 페이지를 넣는 일. 무엇을 내보낼지 정하는 규칙이 교체 정책이고, 목표는 페이지 폴트 수를 줄이는 것이다",
   "unit": 9
  },
  {
   "slug": "present-bit",
   "name": "present 비트",
   "level": 2,
   "summary": "페이지 테이블 항목(PTE)에서 그 페이지가 지금 물리 메모리에 있는지(1) 디스크에 있는지(0)를 나타내는 비트. 0이면 하드웨어가 페이지 폴트를 일으키고, 이때 PTE의 PFN 자리에 디스크 주소를 둘 수 있다",
   "unit": 9
  },
  {
   "slug": "swap-space",
   "name": "스왑 공간",
   "level": 2,
   "summary": "메모리에서 내보낸 페이지를 페이지 단위로 보관하는 디스크 영역. 크기가 시스템이 동시에 쓸 수 있는 페이지 수의 상한을 정한다. 실행 파일의 코드 페이지처럼 파일 시스템에서 다시 읽을 수 있는 페이지는 스왑 대신 원래 파일에서 읽는다",
   "unit": 9
  },
  {
   "slug": "thrashing",
   "name": "스래싱",
   "level": 2,
   "summary": "실행 중인 프로세스들이 요구하는 메모리가 물리 메모리를 넘어 시스템이 계속 페이지를 들이고 내보내기만 하는 상태. 실행보다 페이징에 시간을 더 써서 CPU 이용률이 급격히 떨어진다",
   "unit": 9
  },
  {
   "slug": "virtual-memory",
   "name": "가상 메모리",
   "level": 2,
   "summary": "프로세스마다 크고 연속된 자기만의 주소 공간이 있는 것처럼 보이게 하는 운영체제의 메모리 가상화. 주소 공간의 일부를 디스크에 두어 물리 메모리보다 큰 주소 공간을 주고, 프로세스끼리 메모리를 격리한다",
   "unit": 9
  },
  {
   "slug": "beladys-anomaly",
   "name": "벨레이디의 이상 현상",
   "level": 3,
   "summary": "프레임 수를 늘렸는데 페이지 폴트가 오히려 늘어나는 현상. 참조열 1 2 3 4 1 2 5 1 2 3 4 5에서 FIFO는 프레임 3개일 때 9번, 4개일 때 10번 폴트를 낸다",
   "unit": 9
  },
  {
   "slug": "page-fault-frequency",
   "name": "페이지 폴트 빈도",
   "level": 3,
   "summary": "프로세스별 페이지 폴트 비율을 직접 재서 프레임을 조절하는 방법(PFF). 비율이 상한을 넘으면 프레임을 더 주고, 하한보다 낮으면 프레임을 거둬 다른 프로세스에 준다",
   "unit": 9
  },
  {
   "slug": "stack-algorithm",
   "name": "스택 알고리즘",
   "level": 3,
   "summary": "프레임 N개일 때 메모리에 있는 페이지 집합이 항상 프레임 N+1개일 때 집합의 부분집합이 되는 교체 알고리즘(스택 성질). LRU와 OPT가 여기에 속하며, 이런 알고리즘은 벨레이디의 이상 현상을 보이지 않는다",
   "unit": 9
  },
  {
   "slug": "working-set",
   "name": "작업 집합",
   "level": 3,
   "summary": "최근 Δ번의 참조(작업 집합 창)에 나타난 페이지들의 집합. 모든 프로세스의 작업 집합 크기 합이 프레임 수보다 크면 스래싱이 생기므로, 운영체제는 일부 프로세스를 멈춰(승인 제어) 스래싱을 막는다",
   "unit": 9
  },
  {
   "slug": "disk-geometry",
   "name": "디스크 구조",
   "level": 1,
   "summary": "플래터의 각 면(표면)에 동심원 트랙이 있고, 트랙은 섹터(보통 512바이트)로 나뉘며, 모든 플래터에서 같은 위치의 트랙을 묶어 실린더라 한다. 운영체제는 이를 0~n-1번 섹터 배열(LBA)로 본다",
   "unit": 10
  },
  {
   "slug": "hdd",
   "name": "하드 디스크 드라이브",
   "level": 1,
   "summary": "자성 물질을 입힌 원판(플래터)을 일정 속도로 돌리고 암 끝의 헤드로 읽고 쓰는 저장장치. 기계적으로 움직이므로 무작위 접근이 순차 접근보다 수백 배 느리다 (HDD)",
   "unit": 10
  },
  {
   "slug": "raid",
   "name": "RAID",
   "level": 1,
   "summary": "여러 디스크를 묶어 바깥에는 크고 빠르고 믿을 만한 디스크 하나처럼 보이게 하는 기법. 레벨(0 스트라이핑, 1 미러링, 5·6 패리티, 10 미러 위 스트라이핑)마다 용량·내결함성·성능이 다르다 (Redundant Array of Inexpensive Disks)",
   "unit": 10
  },
  {
   "slug": "ssd",
   "name": "SSD",
   "level": 1,
   "summary": "움직이는 부품 없이 NAND 플래시 칩 여러 개와 컨트롤러(FTL)로 만든 저장장치. 위치와 상관없이 빠르게 읽지만, 덮어쓰기를 직접 할 수 없어 내부에서 쓰기를 관리해야 한다 (solid-state drive)",
   "unit": 10
  },
  {
   "slug": "c-scan",
   "name": "C-SCAN 스케줄링",
   "level": 2,
   "summary": "한 방향으로만 쓸면서 요청을 처리하고, 끝에 닿으면 요청을 처리하지 않고 처음 끝으로 돌아가 다시 시작하는 SCAN 변형. 가운데 트랙을 우대하는 SCAN보다 대기 시간이 고르다 (circular SCAN)",
   "unit": 10
  },
  {
   "slug": "disk-access-time",
   "name": "디스크 접근 시간",
   "level": 2,
   "summary": "요청 하나를 처리하는 시간 T = 탐색 시간 + 회전 지연 + 전송 시간. 작은 무작위 읽기는 탐색·회전이 거의 전부이고, 큰 순차 읽기는 전송이 거의 전부다",
   "unit": 10
  },
  {
   "slug": "disk-scheduling",
   "name": "디스크 스케줄링",
   "level": 2,
   "summary": "대기 중인 입출력 요청 중 다음에 처리할 것을 고르는 일. HDD에서는 요청마다 걸릴 시간(탐색·회전)을 추정할 수 있어 SJF처럼 가까운 요청부터 처리하려 한다",
   "unit": 10
  },
  {
   "slug": "ftl",
   "name": "플래시 변환 계층",
   "level": 2,
   "summary": "논리 블록 읽기·쓰기를 플래시의 읽기·지우기·프로그램 명령으로 바꾸는 SSD 펌웨어. 대부분 로그 구조로, 새 쓰기를 빈 페이지에 덧붙이고 매핑 테이블로 논리→물리 위치를 기록한다 (FTL)",
   "unit": 10
  },
  {
   "slug": "look-scheduling",
   "name": "LOOK 스케줄링",
   "level": 2,
   "summary": "SCAN처럼 한 방향으로 쓸되 디스크 끝까지 가지 않고 그 방향의 마지막 요청에서 방향을 바꾸는 방식. C-LOOK은 C-SCAN을 같은 식으로 고친 것이다",
   "unit": 10
  },
  {
   "slug": "nand-flash",
   "name": "NAND 플래시",
   "level": 2,
   "summary": "트랜지스터에 갇힌 전하로 비트를 저장하는 비휘발성 메모리. 읽기·프로그램은 페이지(수 KB) 단위, 지우기는 블록(128~256KB) 단위이고, 프로그램한 페이지는 블록을 지우기 전에는 다시 쓸 수 없으며 P/E 횟수가 한정돼 있다",
   "unit": 10
  },
  {
   "slug": "raid-parity",
   "name": "RAID 패리티",
   "level": 2,
   "summary": "한 스트라이프의 데이터 블록을 비트별로 XOR한 값을 저장해, 디스크 하나를 잃으면 나머지를 다시 XOR해 복구하는 중복 방식. 작은 쓰기마다 옛 데이터·옛 패리티를 읽고 새로 써야 해서 I/O가 4번 든다",
   "unit": 10
  },
  {
   "slug": "rotational-latency",
   "name": "회전 지연",
   "level": 2,
   "summary": "헤드가 트랙에 도착한 뒤 원하는 섹터가 헤드 밑으로 돌아올 때까지 기다리는 시간. 평균은 반 바퀴로, 7,200 RPM이면 약 4.17ms다 (rotational delay)",
   "unit": 10
  },
  {
   "slug": "scan-scheduling",
   "name": "SCAN 스케줄링",
   "level": 2,
   "summary": "헤드가 디스크 한쪽 끝에서 반대쪽 끝까지 한 방향으로 쓸면서 지나가는 요청을 처리하고, 끝에 닿으면 방향을 바꾸는 방식. 엘리베이터 알고리즘이라고도 하며 기아를 막는다",
   "unit": 10
  },
  {
   "slug": "seek-time",
   "name": "탐색 시간",
   "level": 2,
   "summary": "암을 움직여 헤드를 원하는 트랙에 올려놓는 시간. 가속·등속·감속·안착(0.5~2ms) 단계가 있고, 평균 탐색 거리는 전체 거리의 약 1/3이다 (seek time)",
   "unit": 10
  },
  {
   "slug": "sstf",
   "name": "최단 탐색 시간 우선",
   "level": 2,
   "summary": "현재 헤드 위치에서 가장 가까운 트랙의 요청부터 처리하는 디스크 스케줄링. 총 이동 거리는 줄지만 가까운 요청이 계속 들어오면 먼 요청이 기아에 빠진다 (SSTF)",
   "unit": 10
  },
  {
   "slug": "trim",
   "name": "TRIM",
   "level": 2,
   "summary": "파일 시스템이 더 이상 쓰지 않는 블록 범위를 장치에 알려 주는 명령. SSD는 그 매핑을 지우고 가비지 컬렉션 때 복사하지 않아도 된다. 리눅스에서는 fstrim이나 discard 마운트 옵션으로 보낸다",
   "unit": 10
  },
  {
   "slug": "wear-leveling",
   "name": "웨어 레벨링",
   "level": 2,
   "summary": "지우기·프로그램이 특정 블록에 몰려 그 블록만 먼저 닳지 않도록 쓰기를 전체 블록에 고르게 퍼뜨리는 FTL 기법. 오래 안 바뀌는 데이터도 가끔 옮겨 그 블록이 쓰기를 나눠 받게 한다",
   "unit": 10
  },
  {
   "slug": "linux-io-scheduler",
   "name": "리눅스 I/O 스케줄러",
   "level": 3,
   "summary": "블록 계층(blk-mq)에서 요청을 합치고 재배열하는 교체 가능한 모듈. /sys/block/<장치>/queue/scheduler로 mq-deadline, kyber, bfq, none 중에서 고르며, none은 재배열하지 않는다",
   "unit": 10
  },
  {
   "slug": "ssd-garbage-collection",
   "name": "SSD 가비지 컬렉션",
   "level": 3,
   "summary": "덮어쓰기로 생긴 옛 버전 페이지(쓰레기)를 회수하는 FTL 작업. 쓰레기가 있는 블록에서 살아 있는 페이지를 읽어 로그 끝에 다시 쓰고 그 블록을 지운다",
   "unit": 10
  },
  {
   "slug": "write-amplification",
   "name": "쓰기 증폭",
   "level": 3,
   "summary": "FTL이 플래시에 실제로 쓴 바이트 수 ÷ 호스트가 SSD에 요청한 바이트 수. 가비지 컬렉션과 웨어 레벨링의 복사 때문에 1보다 커지고, 클수록 성능과 수명이 나빠진다",
   "unit": 10
  },
  {
   "slug": "directory",
   "name": "디렉터리",
   "level": 1,
   "summary": "(사람이 읽는 이름, inode 번호) 쌍의 목록을 데이터로 담은 특수한 파일. 자신을 가리키는 '.'과 부모를 가리키는 '..' 항목을 항상 가지며, 사용자는 직접 쓸 수 없고 파일 생성·삭제 같은 시스템 콜로만 바뀐다",
   "unit": 11
  },
  {
   "slug": "file",
   "name": "파일",
   "level": 1,
   "summary": "만들고 읽고 쓰고 지울 수 있는 바이트 배열. 운영체제가 디스크 블록을 이름으로 다루게 가상화한 추상화이며, 파일 시스템 안의 진짜 이름은 inode 번호(i-number)라는 저수준 이름이다",
   "unit": 11
  },
  {
   "slug": "file-allocation",
   "name": "파일 할당 방식",
   "level": 1,
   "summary": "파일의 논리 블록을 디스크의 어느 블록에 두고 그 위치를 어디에 기록할지 정하는 방법. 연속·연결·색인 할당이 기본이며 순차·임의 접근 속도, 외부 단편화, 파일 크기 변경의 쉬움을 서로 맞바꾼다",
   "unit": 11
  },
  {
   "slug": "file-descriptor",
   "name": "파일 디스크립터",
   "level": 1,
   "summary": "open()이 돌려주는 프로세스별 작은 정수(fd). PCB 안 fd 테이블 배열의 인덱스이고 각 칸은 열린 파일 테이블의 항목을 가리킨다. 0·1·2는 표준 입력·출력·오류라 처음 연 파일은 보통 3을 받는다",
   "unit": 11
  },
  {
   "slug": "inode",
   "name": "아이노드",
   "level": 1,
   "summary": "파일 하나의 메타데이터(종류, 크기, 소유자, 권한, 시간, 링크 수, 데이터 블록 위치)를 담는 디스크 위 구조체(index node). 파일 이름은 담지 않으며 inode 테이블에 배열로 놓여 번호로 위치를 바로 계산한다. ext4 기본 inode 레코드는 256바이트다",
   "unit": 11
  },
  {
   "slug": "contiguous-file-allocation",
   "name": "연속 파일 할당",
   "level": 2,
   "summary": "파일 블록을 디스크의 연속된 구간에 두고 디렉터리에 시작 블록과 길이만 적는 방식. i번째 블록 위치를 계산 한 번으로 구해 순차·임의 접근이 빠르지만 연속 메모리 할당처럼 외부 단편화가 생기고 파일을 키우기 어렵다. (시작, 길이) 쌍을 여러 개 쓰는 익스텐트가 ext4·XFS에 쓰인다",
   "unit": 11
  },
  {
   "slug": "crash-consistency",
   "name": "크래시 일관성",
   "level": 2,
   "summary": "inode·비트맵·데이터 블록처럼 여러 곳을 고치는 갱신 도중 전원이 꺼져도 파일 시스템을 일관된 상태로 유지하는 문제. 디스크는 한 번에 한 쓰기만 끝내므로 일부만 기록되면 비트맵과 inode 불일치, 공간 누수, 쓰레기 데이터가 생긴다",
   "unit": 11
  },
  {
   "slug": "free-space-bitmap",
   "name": "빈 공간 비트맵",
   "level": 2,
   "summary": "블록(또는 inode)마다 비트 하나로 사용 여부를 기록하는 빈 공간 관리 구조. vsfs·ext2는 inode 비트맵과 데이터 비트맵을 따로 두고 할당·해제할 때만 읽고 고친다. 연속 빈 블록을 찾기 쉽지만 4KiB 블록 1TiB 디스크면 32MiB가 든다. 연결 리스트·그룹화·카운팅 방식도 있다",
   "unit": 11
  },
  {
   "slug": "fsck",
   "name": "파일 시스템 검사기",
   "level": 2,
   "summary": "마운트 전에 슈퍼블록, 비트맵과 inode, 링크 수, 중복·범위 밖 블록 포인터, 디렉터리 구조를 전부 훑어 메타데이터 불일치를 고치는 UNIX 도구. 비트맵은 inode를 믿고 다시 만들고 고아 inode는 lost+found로 옮긴다. 디스크 전체를 읽어 큰 볼륨에서 매우 느리고, 메타데이터는 맞는데 내용이 쓰레기인 경우는 못 고친다",
   "unit": 11
  },
  {
   "slug": "hard-link",
   "name": "하드 링크",
   "level": 2,
   "summary": "같은 inode 번호를 가리키는 이름을 디렉터리에 하나 더 넣는 것(link(), ln). inode의 링크 수가 1 늘고, unlink()는 이름을 떼며 링크 수를 줄여 0이 될 때 inode와 데이터 블록을 해제한다. 디렉터리나 다른 파일 시스템의 파일로는 만들 수 없다",
   "unit": 11
  },
  {
   "slug": "indexed-allocation",
   "name": "색인 할당",
   "level": 2,
   "summary": "파일의 블록 번호들을 색인 블록 하나에 모아 두는 방식. i번째 블록을 색인의 i번 칸으로 바로 찾아 임의 접근이 빠르고 외부 단편화가 없지만, 작은 파일도 색인 블록 하나를 차지한다. 색인이 넘치면 연결형·다단계·결합형(UNIX inode)으로 늘린다",
   "unit": 11
  },
  {
   "slug": "journaling",
   "name": "저널링",
   "level": 2,
   "summary": "디스크 구조를 제자리에서 고치기 전에 바꿀 내용을 저널(로그)에 먼저 적는 미리 쓰기 로깅. 저널 쓰기 → 커밋 블록(512바이트 한 섹터) 쓰기 → 체크포인트 → 해제 순서이고, 크래시 후에는 커밋된 트랜잭션만 다시 실행(redo)하고 나머지는 버려 전체를 훑지 않고 복구한다. ext3·ext4(jbd2), XFS, NTFS가 쓴다",
   "unit": 11
  },
  {
   "slug": "linked-allocation",
   "name": "연결 할당",
   "level": 2,
   "summary": "각 블록이 다음 블록 번호를 가리키는 연결 리스트로 파일을 저장하는 방식. 외부 단편화가 없고 파일을 쉽게 키우지만 임의 접근이 느리고 포인터 하나가 깨지면 뒤가 사라진다. FAT는 다음 블록 포인터를 디스크 앞쪽 표 하나로 모아 메모리에 캐시하는 변형으로, inode가 없어 하드 링크를 만들 수 없다",
   "unit": 11
  },
  {
   "slug": "open-file-table",
   "name": "열린 파일 테이블",
   "level": 2,
   "summary": "시스템 전체에 하나 있는 열린 파일 항목(POSIX의 open file description, 리눅스의 struct file)의 표. 항목마다 현재 오프셋, 읽기·쓰기 같은 상태 플래그, 참조 수, inode 포인터를 담는다. open()마다 새 항목이 생기고 fork()·dup()은 같은 항목을 공유해 오프셋도 공유한다",
   "unit": 11
  },
  {
   "slug": "page-cache",
   "name": "페이지 캐시",
   "level": 2,
   "summary": "파일 블록을 주 메모리에 페이지 단위로 캐시하는 커널 캐시. 많은 현대 운영체제는 가상 메모리 페이지와 파일 페이지를 하나의 통합 페이지 캐시로 동적으로 나눠 쓴다. 읽기는 캐시 히트로 I/O를 없애고, 쓰기는 5~30초 미뤄 묶고 스케줄링하지만 fsync()로 강제하지 않으면 크래시 때 잃을 수 있다",
   "unit": 11
  },
  {
   "slug": "path-resolution",
   "name": "경로 탐색",
   "level": 2,
   "summary": "경로 이름을 '/'로 나눈 구성 요소마다 현재 디렉터리에서 이름을 찾아 다음 inode로 내려가는 과정. 절대 경로는 프로세스의 루트(대부분 UNIX 파일 시스템에서 inode 2), 상대 경로는 현재 작업 디렉터리에서 시작한다. 단계마다 디렉터리 inode와 데이터를 읽어 I/O가 경로 길이에 비례하고, 리눅스는 심볼릭 링크를 최대 40번까지 따라간다",
   "unit": 11
  },
  {
   "slug": "symbolic-link",
   "name": "심볼릭 링크",
   "level": 2,
   "summary": "대상의 경로 문자열을 내용으로 담은 별도 종류의 파일(ln -s, symlink()). 자기 inode를 가지고 대상의 링크 수를 늘리지 않아 디렉터리나 다른 파일 시스템도 가리킬 수 있지만, 대상이 지워지면 끊어진 링크가 된다. ext4는 60바이트 미만 경로를 inode의 i_block 자리에 바로 저장한다",
   "unit": 11
  },
  {
   "slug": "vfs",
   "name": "가상 파일 시스템",
   "level": 2,
   "summary": "open·read·write·stat 같은 파일 시스템 콜을 받아 ext4, tmpfs, proc 같은 서로 다른 구현으로 함수 포인터 표를 통해 넘겨 주는 커널 계층(VFS). 리눅스 VFS는 superblock, inode, dentry, file 네 객체를 쓰고, 메모리에만 있는 dentry 캐시로 경로 탐색을 빠르게 한다",
   "unit": 11
  },
  {
   "slug": "indirect-block",
   "name": "간접 블록",
   "level": 3,
   "summary": "데이터 대신 블록 포인터를 담은 블록. ext2·ext3 inode는 i_block 15칸에 직접 포인터 12개와 단일·이중·삼중 간접 포인터를 하나씩 두어, 4KiB 블록·4바이트 포인터(블록당 1024개)에서 12 + 1024 + 1024² + 1024³ 블록, 약 4.004 TiB를 가리킨다. 간접 단계마다 디스크 읽기가 하나씩 는다",
   "unit": 11
  },
  {
   "slug": "metadata-journaling",
   "name": "메타데이터 저널링",
   "level": 3,
   "summary": "사용자 데이터는 저널에 쓰지 않고 메타데이터만 저널링해 데이터를 두 번 쓰는 비용을 피하는 방식. ext4 기본값 data=ordered는 관련 데이터를 커밋 전에 제자리에 먼저 써서 inode가 쓰레기를 가리키지 않게 하고, data=writeback은 순서를 보장하지 않아 빠르지만 크래시 뒤 옛 데이터가 보일 수 있다. data=journal은 데이터까지 저널링한다",
   "unit": 11
  },
  {
   "slug": "block-device",
   "name": "블록 장치",
   "level": 1,
   "summary": "디스크처럼 고정 크기 블록 단위로 임의 접근하고 파일 시스템을 올릴 수 있는 장치. /dev에 노드가 있고 ls -l에서 b로 표시된다. 리눅스는 애플리케이션이 블록 장치도 아무 바이트 수로나 읽고 쓰게 해 준다",
   "unit": 12
  },
  {
   "slug": "blocking-io",
   "name": "블로킹 입출력",
   "level": 1,
   "summary": "입출력 시스템 콜이 끝날 때까지 호출한 프로세스를 대기 상태로 잠재우는 방식. 코드가 단순하고 기다리는 동안 다른 프로세스가 CPU를 쓴다. 리눅스 read()의 기본 동작이다",
   "unit": 12
  },
  {
   "slug": "character-device",
   "name": "문자 장치",
   "level": 1,
   "summary": "콘솔·직렬 포트·키보드처럼 바이트 흐름으로 접근하는 장치. 드라이버는 보통 open·read·write·close를 구현하고, 대부분 순차 접근만 된다. /dev 노드가 ls -l에서 c로 표시된다",
   "unit": 12
  },
  {
   "slug": "device-controller",
   "name": "장치 컨트롤러",
   "level": 1,
   "summary": "장치를 실제로 움직이는 하드웨어. 운영체제에는 상태·명령·데이터 레지스터로 된 인터페이스를 보이고, 복잡한 컨트롤러는 내부에 작은 CPU·메모리·펌웨어를 가진다. 일이 끝나면 IRQ 선으로 인터럽트를 보낸다",
   "unit": 12
  },
  {
   "slug": "device-driver",
   "name": "디바이스 드라이버",
   "level": 1,
   "summary": "특정 장치를 다루는 세부 사항을 감싸고, 위로는 공통 인터페이스를 보이는 커널 코드. 리눅스 코드의 70% 이상을 차지하고 버그가 많아 커널 충돌의 주요 원인이며, 보통 적재 가능 커널 모듈로 올린다",
   "unit": 12
  },
  {
   "slug": "dma",
   "name": "DMA",
   "level": 1,
   "summary": "운영체제가 메모리 위치·크기·대상 장치만 알려 주면 DMA 엔진(또는 버스 마스터 장치)이 CPU 개입 없이 메모리와 장치 사이에서 데이터를 옮기고, 끝나면 인터럽트로 알리는 방식 (direct memory access). 장치는 가상 주소가 아닌 DMA(버스) 주소를 쓴다",
   "unit": 12
  },
  {
   "slug": "interrupt-driven-io",
   "name": "인터럽트 구동 입출력",
   "level": 1,
   "summary": "장치에 명령을 보낸 뒤 요청한 프로세스를 잠재우고 다른 프로세스를 실행하다가, 장치가 끝내고 보낸 하드웨어 인터럽트의 핸들러에서 결과를 읽고 프로세스를 깨우는 방식. 계산과 입출력을 겹치게 한다",
   "unit": 12
  },
  {
   "slug": "polling",
   "name": "폴링",
   "level": 1,
   "summary": "CPU가 장치의 상태 레지스터를 반복해서 읽으며 준비되거나 끝날 때까지 기다리는 방식(바쁜 대기). 단순하고 빠른 장치에는 효율적이지만, 느린 장치를 기다리는 동안 CPU 시간을 버린다",
   "unit": 12
  },
  {
   "slug": "asynchronous-io",
   "name": "비동기 입출력",
   "level": 2,
   "summary": "요청만 넣고 호출이 즉시 돌아오며, 입출력이 뒤에서 완전히 끝난 뒤 완료를 통지받는 방식. 리눅스 io_uring은 사용자 공간과 커널이 공유하는 제출 큐(SQE)와 완료 큐(CQE) 링으로 이것을 구현한다",
   "unit": 12
  },
  {
   "slug": "buffering",
   "name": "버퍼링",
   "level": 2,
   "summary": "장치 사이를 오가는 데이터를 메모리에 잠시 담아 두는 일. 속도 차이(이중 버퍼링), 전송 크기 차이(패킷 분해·조립), 복사 의미론(write 후 사용자 버퍼를 고쳐도 안전) 때문에 한다. 버퍼는 유일한 사본일 수 있고 캐시는 항상 사본이다",
   "unit": 12
  },
  {
   "slug": "io-subsystem",
   "name": "커널 입출력 서브시스템",
   "level": 2,
   "summary": "드라이버 위에서 장치 종류와 상관없이 공통으로 필요한 일을 하는 커널 계층. 입출력 스케줄링, 버퍼링, 캐싱, 스풀링과 장치 예약, 오류 처리, 입출력 보호를 맡는다",
   "unit": 12
  },
  {
   "slug": "memory-mapped-io",
   "name": "메모리 맵 입출력",
   "level": 2,
   "summary": "장치 레지스터를 메모리와 같은 물리 주소 공간의 일부에 두고 일반 load/store 명령으로 접근하는 방식. 새 명령어가 필요 없지만 주소 공간 일부를 내주고, 캐시가 쓰기 순서를 바꾸지 않게 주의해야 한다 (MMIO)",
   "unit": 12
  },
  {
   "slug": "network-device",
   "name": "네트워크 장치",
   "level": 2,
   "summary": "다른 호스트와 패킷을 주고받는 인터페이스(eth0, loopback). 드라이버는 연결을 모르고 패킷만 다루며, /dev 노드 없이 이름만 있고 커널은 read/write 대신 패킷 송신 함수를 부른다",
   "unit": 12
  },
  {
   "slug": "non-blocking-io",
   "name": "논블로킹 입출력",
   "level": 2,
   "summary": "호출이 기다리지 않고 즉시 돌아오는 방식. O_NONBLOCK인 fd에서 읽을 데이터가 없으면 read()가 EAGAIN(또는 EWOULDBLOCK)으로 실패한다. 일반 파일과 블록 장치에는 효과가 없다",
   "unit": 12
  },
  {
   "slug": "port-mapped-io",
   "name": "포트 입출력",
   "level": 2,
   "summary": "장치 레지스터를 메모리와 별도인 입출력 포트 주소 공간에 두고 x86의 in·out 같은 전용 명령어로 접근하는 방식. 이 명령어는 특권 명령어라 커널만 장치를 직접 다룬다 (port-mapped I/O, isolated I/O)",
   "unit": 12
  },
  {
   "slug": "programmed-io",
   "name": "프로그램 입출력",
   "level": 2,
   "summary": "CPU가 장치의 데이터 레지스터에 직접 읽고 쓰며 데이터를 한 워드씩 옮기는 방식(PIO). 큰 블록을 옮기면 CPU가 단순 복사에 묶인다",
   "unit": 12
  },
  {
   "slug": "spooling",
   "name": "스풀링",
   "level": 2,
   "summary": "프린터처럼 여러 작업의 출력을 섞을 수 없는 장치를 위해 각 작업의 출력을 스풀 디렉터리의 파일로 모아 두고, 스케줄러가 한 번에 하나씩 장치에 보내는 방식 (simultaneous peripheral operations on-line)",
   "unit": 12
  },
  {
   "slug": "interrupt-coalescing",
   "name": "인터럽트 병합",
   "level": 3,
   "summary": "장치가 인터럽트를 바로 보내지 않고 잠깐 기다려 여러 완료를 인터럽트 하나로 묶어 보내는 최적화. 인터럽트 처리 비용은 줄지만 요청 하나의 지연은 늘어난다 (interrupt coalescing)",
   "unit": 12
  },
  {
   "slug": "io-multiplexing",
   "name": "입출력 다중화",
   "level": 3,
   "summary": "여러 fd를 한 번에 기다리다 준비된 fd만 골라 읽는 방식(select, poll, epoll). epoll은 관심 목록과 준비 목록을 두고 레벨·에지 트리거를 지원한다. 준비만 알려 줄 뿐 복사는 이후의 read가 동기적으로 한다",
   "unit": 12
  },
  {
   "slug": "napi",
   "name": "NAPI",
   "level": 3,
   "summary": "리눅스 네트워크 스택의 인터럽트·폴링 혼합 방식. 인터럽트가 오면 IRQ를 가리고 NAPI 인스턴스를 예약하며, poll 메서드가 budget만큼 패킷을 처리하다 일이 끝나면 napi_complete_done() 후 IRQ를 다시 켠다",
   "unit": 12
  },
  {
   "slug": "authentication",
   "name": "인증",
   "level": 1,
   "summary": "사용자나 프로세스가 주장하는 신원이 맞는지 확인하는 일. 아는 것·가진 것·나 자신(생체)으로 하며, 확인된 신원을 로그인 때 프로세스에 붙인다. 무엇을 허용할지 정하는 인가와 다르다",
   "unit": 13
  },
  {
   "slug": "least-privilege",
   "name": "최소 권한 원칙",
   "level": 1,
   "summary": "사용자·프로세스에게 일에 꼭 필요한 최소한의 권한만 주는 원칙. 실수나 침입이 생겨도 남는 권한이 적어 피해가 작다",
   "unit": 13
  },
  {
   "slug": "protection",
   "name": "보호",
   "level": 1,
   "summary": "어떤 프로세스·사용자가 어떤 자원을 어떤 방식으로 쓸 수 있는지 운영체제가 통제하는 내부 메커니즘. 이중 모드, 메모리 보호, 접근 제어가 여기에 속하고, 무엇을 허용할지(정책)는 따로 정한다",
   "unit": 13
  },
  {
   "slug": "security",
   "name": "보안",
   "level": 1,
   "summary": "보호 메커니즘 위에서 안팎의 의도적인 공격으로부터 기밀성·무결성·가용성을 지키는 일. 인증, 공격 완화 기법, 운영 정책까지 포함한다",
   "unit": 13
  },
  {
   "slug": "superuser",
   "name": "슈퍼유저(root)",
   "level": 1,
   "summary": "UID 0인 관리용 사용자. 전통적으로 커널의 권한 검사를 모두 건너뛴다. 공격자가 시스템에 들어온 뒤 가장 먼저 노리는 신원이다",
   "unit": 13
  },
  {
   "slug": "unix-file-permission",
   "name": "유닉스 파일 권한",
   "level": 1,
   "summary": "inode에 저장한 9비트 ACL(소유자·그룹·기타 × rwx)에 setuid·setgid·sticky 3비트를 더한 12비트 모드. 소유자→그룹→기타 순으로 한 부류의 비트만 검사한다",
   "unit": 13
  },
  {
   "slug": "access-control-list",
   "name": "접근 제어 목록",
   "level": 2,
   "summary": "접근 행렬의 열. 객체마다 어떤 주체가 어떤 권한을 갖는지 목록(ACL)을 붙인다. 누가 접근할 수 있는지 알기 쉽고 회수가 쉽지만, 한 주체의 전체 권한을 알려면 모든 목록을 뒤져야 한다",
   "unit": 13
  },
  {
   "slug": "access-matrix",
   "name": "접근 행렬",
   "level": 2,
   "summary": "행은 도메인, 열은 객체, 칸은 그 도메인이 그 객체에 가진 권한인 표. 실제로는 크고 비어 있어 열(ACL)이나 행(capability 목록)으로 잘라 저장한다",
   "unit": 13
  },
  {
   "slug": "aslr",
   "name": "주소 공간 배치 무작위화",
   "level": 2,
   "summary": "스택·힙·공유 라이브러리·(PIE) 실행 파일의 위치를 실행마다 무작위로 바꿔 공격자가 점프할 주소를 모르게 하는 기법(ASLR). 리눅스는 randomize_va_space(0·1·2)로 조절하며, 무작위 비트가 적거나 주소가 새면 약해진다",
   "unit": 13
  },
  {
   "slug": "buffer-overflow",
   "name": "버퍼 오버플로",
   "level": 2,
   "summary": "고정 크기 버퍼에 길이 검사 없이 더 많이 써서 옆 메모리를 덮는 버그. 스택에서는 복귀 주소를 덮어 함수 복귀 때 실행 흐름을 빼앗을 수 있다(스택 스매싱)",
   "unit": 13
  },
  {
   "slug": "capability",
   "name": "권한 목록(capability)",
   "level": 2,
   "summary": "접근 행렬의 행. 주체가 객체별 권한 토큰(capability)을 들고 있다가 내민다. 위임·최소 권한이 쉽지만 위조를 막아야 하고(커널 메모리 보관 또는 암호) 회수가 어렵다",
   "unit": 13
  },
  {
   "slug": "nx-bit",
   "name": "NX 비트(DEP)",
   "level": 2,
   "summary": "페이지 테이블 항목의 실행 금지 비트(x86-64 PTE의 63번, 인텔은 XD). 스택·힙 같은 데이터 페이지에서 코드 실행을 막는다. Windows는 DEP, OpenBSD는 W^X라 부르며 ROP·return-to-libc로 우회될 수 있다",
   "unit": 13
  },
  {
   "slug": "password-salt",
   "name": "솔트를 섞은 비밀번호 해시",
   "level": 2,
   "summary": "비밀번호 대신 '비밀번호+솔트'의 암호학적 해시와 솔트를 함께 저장하는 방식. 솔트는 비밀번호마다 다른 난수라 미리 계산한 사전·레인보 테이블을 무력화한다. 느린 해시(Argon2id 등)가 권장된다",
   "unit": 13
  },
  {
   "slug": "privilege-escalation",
   "name": "권한 상승",
   "level": 2,
   "summary": "주어진 것보다 큰 권한을 얻는 것. setuid처럼 의도된 기능이기도 하지만, 공격자가 낮은 권한의 발판에서 setuid 프로그램이나 root 데몬의 결함을 이용해 root가 되는 공격을 가리키기도 한다",
   "unit": 13
  },
  {
   "slug": "protection-domain",
   "name": "보호 도메인",
   "level": 2,
   "summary": "<객체, 권한 집합> 쌍의 집합. 프로세스는 한 도메인 안에서 실행되며 그 권한만 쓴다. 유닉스에서는 사용자가 도메인이고 setuid로 실행 중에 도메인을 바꾼다",
   "unit": 13
  },
  {
   "slug": "security-design-principles",
   "name": "보안 설계 원칙",
   "level": 2,
   "summary": "Saltzer와 Schroeder(1975)가 정리한 원칙들. 메커니즘의 경제성, 기본 거부(fail-safe defaults), 완전한 중재, 공개 설계, 권한 분리(중요한 동작에 둘 이상의 조건), 최소 권한, 공통 메커니즘 최소화, 수용성",
   "unit": 13
  },
  {
   "slug": "setuid",
   "name": "setuid",
   "level": 2,
   "summary": "실행 파일의 모드 비트(4000). 실행하면 유효 UID(와 저장된 set-user-ID)가 파일 소유자로 바뀐다. 프로그램 실행 동안만 권한을 빌려 주는 권한 상승 장치라 허술하면 위험하다",
   "unit": 13
  },
  {
   "slug": "linux-capabilities",
   "name": "리눅스 capabilities",
   "level": 3,
   "summary": "root의 특권을 CAP_NET_BIND_SERVICE, CAP_DAC_OVERRIDE, CAP_SETUID 같은 조각으로 나눠 스레드마다 켜고 끄는 리눅스 기능. permitted·effective·inheritable·bounding·ambient 집합과 파일 capability(setcap)가 있다",
   "unit": 13
  },
  {
   "slug": "sandbox",
   "name": "샌드박스",
   "level": 3,
   "summary": "프로세스가 쓸 수 있는 권한·시스템 콜·보이는 자원을 줄여 가두는 기법. 리눅스에서는 capabilities, seccomp(시스템 콜 필터, 상속되고 제거 불가), 네임스페이스(PID·mount·net·user 등 자원의 격리된 사본)를 겹쳐 만든다",
   "unit": 13
  },
  {
   "slug": "stack-canary",
   "name": "스택 카나리",
   "level": 3,
   "summary": "버퍼와 복귀 주소 사이에 둔 값. 함수가 돌아가기 직전에 바뀌었는지 비교해 바뀌었으면 프로그램을 끝낸다. GCC의 -fstack-protector 계열 옵션이 넣으며, 힙 오버플로나 카나리 유출은 막지 못한다",
   "unit": 13
  }
 ],
 "prerequisites": [
  [
   "access-control-list",
   "unix-file-permission"
  ],
  [
   "access-matrix",
   "access-control-list"
  ],
  [
   "access-matrix",
   "capability"
  ],
  [
   "address-binding",
   "compaction"
  ],
  [
   "address-binding",
   "mmu"
  ],
  [
   "api",
   "syscall-wrapper"
  ],
  [
   "atomic-instruction",
   "compare-and-swap"
  ],
  [
   "atomic-instruction",
   "test-and-set"
  ],
  [
   "authentication",
   "password-salt"
  ],
  [
   "bankers-algorithm",
   "deadlock-detection"
  ],
  [
   "base-limit-register",
   "compaction"
  ],
  [
   "base-limit-register",
   "contiguous-allocation"
  ],
  [
   "base-limit-register",
   "protection"
  ],
  [
   "base-limit-register",
   "segmentation"
  ],
  [
   "beladys-anomaly",
   "stack-algorithm"
  ],
  [
   "bios",
   "bootloader"
  ],
  [
   "blocking-io",
   "asynchronous-io"
  ],
  [
   "blocking-io",
   "non-blocking-io"
  ],
  [
   "boot-process",
   "bios"
  ],
  [
   "boot-process",
   "uefi"
  ],
  [
   "bootloader",
   "initramfs"
  ],
  [
   "buffer-overflow",
   "aslr"
  ],
  [
   "buffer-overflow",
   "nx-bit"
  ],
  [
   "buffer-overflow",
   "privilege-escalation"
  ],
  [
   "buffer-overflow",
   "stack-canary"
  ],
  [
   "buffering",
   "page-cache"
  ],
  [
   "buffering",
   "spooling"
  ],
  [
   "circular-wait",
   "lock-ordering"
  ],
  [
   "circular-wait",
   "resource-allocation-graph"
  ],
  [
   "clone",
   "thread-group"
  ],
  [
   "compare-and-swap",
   "spinlock"
  ],
  [
   "concurrency-vs-parallelism",
   "multicore"
  ],
  [
   "concurrency-vs-parallelism",
   "race-condition"
  ],
  [
   "condition-variable",
   "bounded-buffer-problem"
  ],
  [
   "condition-variable",
   "monitor"
  ],
  [
   "context-switch",
   "base-limit-register"
  ],
  [
   "context-switch",
   "context-switch-cost"
  ],
  [
   "context-switch",
   "cpu-scheduler"
  ],
  [
   "context-switch",
   "dispatcher"
  ],
  [
   "context-switch",
   "interrupt-driven-io"
  ],
  [
   "context-switch",
   "tcb"
  ],
  [
   "context-switch",
   "time-quantum"
  ],
  [
   "context-switch",
   "tlb"
  ],
  [
   "contiguous-allocation",
   "best-fit"
  ],
  [
   "contiguous-allocation",
   "contiguous-file-allocation"
  ],
  [
   "contiguous-allocation",
   "external-fragmentation"
  ],
  [
   "contiguous-allocation",
   "first-fit"
  ],
  [
   "contiguous-allocation",
   "worst-fit"
  ],
  [
   "convoy-effect",
   "sjf"
  ],
  [
   "cooperative-multitasking",
   "timer-interrupt"
  ],
  [
   "copy-on-write",
   "memory-mapped-file"
  ],
  [
   "cpu-scheduler",
   "dispatcher"
  ],
  [
   "cpu-scheduler",
   "non-preemptive-scheduling"
  ],
  [
   "cpu-scheduler",
   "preemptive-scheduling"
  ],
  [
   "cpu-scheduler",
   "scheduling-criteria"
  ],
  [
   "cpu-scheduler",
   "thrashing"
  ],
  [
   "crash-consistency",
   "fsck"
  ],
  [
   "crash-consistency",
   "journaling"
  ],
  [
   "critical-section",
   "deadlock-conditions"
  ],
  [
   "critical-section",
   "mutual-exclusion"
  ],
  [
   "critical-section-problem",
   "petersons-algorithm"
  ],
  [
   "deadlock",
   "deadlock-avoidance"
  ],
  [
   "deadlock",
   "deadlock-conditions"
  ],
  [
   "deadlock",
   "livelock"
  ],
  [
   "deadlock",
   "ostrich-algorithm"
  ],
  [
   "deadlock-avoidance",
   "safe-state"
  ],
  [
   "deadlock-conditions",
   "circular-wait"
  ],
  [
   "deadlock-conditions",
   "deadlock-prevention"
  ],
  [
   "deadlock-conditions",
   "hold-and-wait"
  ],
  [
   "deadlock-conditions",
   "no-preemption"
  ],
  [
   "deadlock-detection",
   "deadlock-recovery"
  ],
  [
   "deadlock-prevention",
   "livelock"
  ],
  [
   "deadlock-prevention",
   "lock-ordering"
  ],
  [
   "demand-paging",
   "memory-mapped-file"
  ],
  [
   "demand-paging",
   "page-fault"
  ],
  [
   "device-controller",
   "device-driver"
  ],
  [
   "device-controller",
   "memory-mapped-io"
  ],
  [
   "device-controller",
   "polling"
  ],
  [
   "device-controller",
   "port-mapped-io"
  ],
  [
   "device-driver",
   "block-device"
  ],
  [
   "device-driver",
   "character-device"
  ],
  [
   "device-driver",
   "io-subsystem"
  ],
  [
   "device-driver",
   "linux-io-scheduler"
  ],
  [
   "device-driver",
   "network-device"
  ],
  [
   "device-driver",
   "vfs"
  ],
  [
   "dining-philosophers-problem",
   "deadlock"
  ],
  [
   "directory",
   "hard-link"
  ],
  [
   "directory",
   "path-resolution"
  ],
  [
   "dirty-bit",
   "clock-algorithm"
  ],
  [
   "disk-access-time",
   "disk-scheduling"
  ],
  [
   "disk-access-time",
   "file-allocation"
  ],
  [
   "disk-access-time",
   "raid"
  ],
  [
   "disk-geometry",
   "rotational-latency"
  ],
  [
   "disk-geometry",
   "seek-time"
  ],
  [
   "disk-scheduling",
   "linux-io-scheduler"
  ],
  [
   "disk-scheduling",
   "sstf"
  ],
  [
   "dual-mode",
   "kernel-mode"
  ],
  [
   "dual-mode",
   "protection"
  ],
  [
   "dual-mode",
   "protection-ring"
  ],
  [
   "dual-mode",
   "system-call"
  ],
  [
   "dual-mode",
   "trap"
  ],
  [
   "dual-mode",
   "user-mode"
  ],
  [
   "exception",
   "base-limit-register"
  ],
  [
   "exception",
   "page-fault"
  ],
  [
   "exception",
   "page-table-entry"
  ],
  [
   "exec",
   "copy-on-write"
  ],
  [
   "exit",
   "orphan-process"
  ],
  [
   "exit",
   "zombie-process"
  ],
  [
   "external-fragmentation",
   "compaction"
  ],
  [
   "external-fragmentation",
   "contiguous-file-allocation"
  ],
  [
   "external-fragmentation",
   "paging"
  ],
  [
   "fcfs",
   "convoy-effect"
  ],
  [
   "fcfs",
   "disk-scheduling"
  ],
  [
   "fcfs",
   "round-robin"
  ],
  [
   "fifo-page-replacement",
   "beladys-anomaly"
  ],
  [
   "fifo-page-replacement",
   "clock-algorithm"
  ],
  [
   "file",
   "directory"
  ],
  [
   "file",
   "file-allocation"
  ],
  [
   "file",
   "file-descriptor"
  ],
  [
   "file",
   "inode"
  ],
  [
   "file-allocation",
   "contiguous-file-allocation"
  ],
  [
   "file-allocation",
   "free-space-bitmap"
  ],
  [
   "file-allocation",
   "indexed-allocation"
  ],
  [
   "file-allocation",
   "linked-allocation"
  ],
  [
   "file-descriptor",
   "io-multiplexing"
  ],
  [
   "file-descriptor",
   "non-blocking-io"
  ],
  [
   "file-descriptor",
   "open-file-table"
  ],
  [
   "fork",
   "clone"
  ],
  [
   "fork",
   "copy-on-write"
  ],
  [
   "fork",
   "exec"
  ],
  [
   "fork",
   "open-file-table"
  ],
  [
   "fork",
   "pipe"
  ],
  [
   "fork",
   "wait"
  ],
  [
   "frame-allocation",
   "thrashing"
  ],
  [
   "free-space-bitmap",
   "crash-consistency"
  ],
  [
   "ftl",
   "ssd-garbage-collection"
  ],
  [
   "ftl",
   "wear-leveling"
  ],
  [
   "hard-link",
   "fsck"
  ],
  [
   "hard-link",
   "symbolic-link"
  ],
  [
   "hardware-interrupt",
   "interrupt-driven-io"
  ],
  [
   "hardware-interrupt",
   "timer-interrupt"
  ],
  [
   "hdd",
   "contiguous-file-allocation"
  ],
  [
   "hdd",
   "disk-geometry"
  ],
  [
   "hdd",
   "journaling"
  ],
  [
   "hdd",
   "raid"
  ],
  [
   "hdd",
   "ssd"
  ],
  [
   "indexed-allocation",
   "indirect-block"
  ],
  [
   "initramfs",
   "init-process"
  ],
  [
   "inode",
   "crash-consistency"
  ],
  [
   "inode",
   "directory"
  ],
  [
   "inode",
   "file-allocation"
  ],
  [
   "inode",
   "hard-link"
  ],
  [
   "inode",
   "indirect-block"
  ],
  [
   "inode",
   "open-file-table"
  ],
  [
   "inode",
   "path-resolution"
  ],
  [
   "inode",
   "unix-file-permission"
  ],
  [
   "inode",
   "vfs"
  ],
  [
   "interrupt",
   "exception"
  ],
  [
   "interrupt",
   "hardware-interrupt"
  ],
  [
   "interrupt",
   "interrupt-disabling"
  ],
  [
   "interrupt",
   "interrupt-handler"
  ],
  [
   "interrupt",
   "trap"
  ],
  [
   "interrupt-coalescing",
   "napi"
  ],
  [
   "interrupt-disabling",
   "atomic-instruction"
  ],
  [
   "interrupt-driven-io",
   "blocking-io"
  ],
  [
   "interrupt-driven-io",
   "device-driver"
  ],
  [
   "interrupt-driven-io",
   "dma"
  ],
  [
   "interrupt-driven-io",
   "interrupt-coalescing"
  ],
  [
   "interrupt-driven-io",
   "napi"
  ],
  [
   "interrupt-handler",
   "interrupt-driven-io"
  ],
  [
   "interrupt-handler",
   "trap-table"
  ],
  [
   "io-subsystem",
   "buffering"
  ],
  [
   "ipc",
   "message-passing"
  ],
  [
   "ipc",
   "pipe"
  ],
  [
   "ipc",
   "shared-memory"
  ],
  [
   "journaling",
   "metadata-journaling"
  ],
  [
   "kernel",
   "dual-mode"
  ],
  [
   "kernel",
   "kernel-architecture"
  ],
  [
   "kernel",
   "kernel-thread"
  ],
  [
   "kernel-architecture",
   "layered-kernel"
  ],
  [
   "kernel-architecture",
   "microkernel"
  ],
  [
   "kernel-architecture",
   "monolithic-kernel"
  ],
  [
   "kernel-mode",
   "base-limit-register"
  ],
  [
   "kernel-mode",
   "boot-process"
  ],
  [
   "kernel-mode",
   "context-switch"
  ],
  [
   "kernel-mode",
   "privileged-instruction"
  ],
  [
   "kernel-thread",
   "multithreading-model"
  ],
  [
   "least-privilege",
   "linux-capabilities"
  ],
  [
   "least-privilege",
   "sandbox"
  ],
  [
   "linux-capabilities",
   "sandbox"
  ],
  [
   "loadable-kernel-module",
   "device-driver"
  ],
  [
   "locality-of-reference",
   "lru"
  ],
  [
   "locality-of-reference",
   "working-set"
  ],
  [
   "logical-address",
   "address-binding"
  ],
  [
   "logical-address",
   "mmu"
  ],
  [
   "logical-address",
   "virtual-memory"
  ],
  [
   "lru",
   "clock-algorithm"
  ],
  [
   "lru",
   "stack-algorithm"
  ],
  [
   "memory-mapped-file",
   "page-cache"
  ],
  [
   "microkernel",
   "hybrid-kernel"
  ],
  [
   "mlfq",
   "priority-boost"
  ],
  [
   "mmu",
   "base-limit-register"
  ],
  [
   "mmu",
   "dma"
  ],
  [
   "mmu",
   "nx-bit"
  ],
  [
   "mmu",
   "page-fault"
  ],
  [
   "mmu",
   "paging"
  ],
  [
   "monolithic-kernel",
   "hybrid-kernel"
  ],
  [
   "monolithic-kernel",
   "loadable-kernel-module"
  ],
  [
   "multicore",
   "amdahls-law"
  ],
  [
   "multilevel-page-table",
   "effective-access-time"
  ],
  [
   "multilevel-page-table",
   "indirect-block"
  ],
  [
   "multithreading",
   "concurrency-vs-parallelism"
  ],
  [
   "multithreading-model",
   "many-to-many-model"
  ],
  [
   "multithreading-model",
   "many-to-one-model"
  ],
  [
   "multithreading-model",
   "one-to-one-model"
  ],
  [
   "mutex",
   "condition-variable"
  ],
  [
   "mutex",
   "deadlock"
  ],
  [
   "mutex",
   "futex"
  ],
  [
   "mutex",
   "monitor"
  ],
  [
   "mutex",
   "priority-inversion"
  ],
  [
   "mutex",
   "semaphore"
  ],
  [
   "mutual-exclusion",
   "critical-section-problem"
  ],
  [
   "mutual-exclusion",
   "interrupt-disabling"
  ],
  [
   "nand-flash",
   "ftl"
  ],
  [
   "non-blocking-io",
   "asynchronous-io"
  ],
  [
   "non-blocking-io",
   "io-multiplexing"
  ],
  [
   "non-preemptive-scheduling",
   "fcfs"
  ],
  [
   "one-to-one-model",
   "nptl"
  ],
  [
   "open-file-table",
   "vfs"
  ],
  [
   "operating-system",
   "kernel"
  ],
  [
   "operating-system",
   "virtualization"
  ],
  [
   "optimal-page-replacement",
   "stack-algorithm"
  ],
  [
   "page-cache",
   "crash-consistency"
  ],
  [
   "page-fault",
   "copy-on-write"
  ],
  [
   "page-fault",
   "page-replacement"
  ],
  [
   "page-fault",
   "thrashing"
  ],
  [
   "page-replacement",
   "dirty-bit"
  ],
  [
   "page-replacement",
   "fifo-page-replacement"
  ],
  [
   "page-replacement",
   "frame-allocation"
  ],
  [
   "page-replacement",
   "lru"
  ],
  [
   "page-replacement",
   "optimal-page-replacement"
  ],
  [
   "page-table",
   "multilevel-page-table"
  ],
  [
   "page-table",
   "page-table-entry"
  ],
  [
   "page-table",
   "tlb"
  ],
  [
   "page-table-entry",
   "demand-paging"
  ],
  [
   "page-table-entry",
   "dirty-bit"
  ],
  [
   "page-table-entry",
   "nx-bit"
  ],
  [
   "page-table-entry",
   "page-fault"
  ],
  [
   "page-table-entry",
   "present-bit"
  ],
  [
   "paging",
   "internal-fragmentation"
  ],
  [
   "paging",
   "page-table"
  ],
  [
   "paging",
   "virtual-memory"
  ],
  [
   "path-resolution",
   "file-descriptor"
  ],
  [
   "path-resolution",
   "symbolic-link"
  ],
  [
   "path-resolution",
   "vfs"
  ],
  [
   "pcb",
   "context-switch"
  ],
  [
   "pcb",
   "file-descriptor"
  ],
  [
   "pcb",
   "tcb"
  ],
  [
   "petersons-algorithm",
   "atomic-instruction"
  ],
  [
   "physical-address",
   "address-binding"
  ],
  [
   "physical-address",
   "dma"
  ],
  [
   "physical-address",
   "memory-mapped-io"
  ],
  [
   "physical-address",
   "mmu"
  ],
  [
   "pid",
   "fork"
  ],
  [
   "pid",
   "pcb"
  ],
  [
   "polling",
   "interrupt-driven-io"
  ],
  [
   "polling",
   "napi"
  ],
  [
   "polling",
   "programmed-io"
  ],
  [
   "preemptive-scheduling",
   "race-condition"
  ],
  [
   "preemptive-scheduling",
   "round-robin"
  ],
  [
   "preemptive-scheduling",
   "spinlock"
  ],
  [
   "preemptive-scheduling",
   "srtf"
  ],
  [
   "present-bit",
   "page-fault"
  ],
  [
   "priority-scheduling",
   "cfs"
  ],
  [
   "priority-scheduling",
   "mlfq"
  ],
  [
   "priority-scheduling",
   "priority-inversion"
  ],
  [
   "priority-scheduling",
   "starvation"
  ],
  [
   "privileged-instruction",
   "base-limit-register"
  ],
  [
   "privileged-instruction",
   "interrupt-disabling"
  ],
  [
   "privileged-instruction",
   "port-mapped-io"
  ],
  [
   "privileged-instruction",
   "protection"
  ],
  [
   "privileged-instruction",
   "trap-table"
  ],
  [
   "process",
   "deadlock"
  ],
  [
   "process",
   "file-descriptor"
  ],
  [
   "process",
   "ipc"
  ],
  [
   "process",
   "logical-address"
  ],
  [
   "process",
   "pid"
  ],
  [
   "process",
   "process-memory-layout"
  ],
  [
   "process",
   "process-state"
  ],
  [
   "process",
   "protection-domain"
  ],
  [
   "process",
   "thread"
  ],
  [
   "process",
   "virtual-memory"
  ],
  [
   "process-memory-layout",
   "buffer-overflow"
  ],
  [
   "process-memory-layout",
   "exec"
  ],
  [
   "process-memory-layout",
   "segmentation"
  ],
  [
   "process-state",
   "blocking-io"
  ],
  [
   "process-state",
   "cpu-scheduler"
  ],
  [
   "process-state",
   "page-fault"
  ],
  [
   "process-state",
   "pcb"
  ],
  [
   "process-state",
   "ready-queue"
  ],
  [
   "program",
   "process"
  ],
  [
   "programmed-io",
   "dma"
  ],
  [
   "protection",
   "protection-domain"
  ],
  [
   "protection",
   "security"
  ],
  [
   "protection-domain",
   "access-matrix"
  ],
  [
   "protection-domain",
   "setuid"
  ],
  [
   "protection-ring",
   "protection-domain"
  ],
  [
   "pthread-create",
   "pthread-join"
  ],
  [
   "pthreads",
   "mutex"
  ],
  [
   "pthreads",
   "nptl"
  ],
  [
   "pthreads",
   "pthread-create"
  ],
  [
   "race-condition",
   "critical-section"
  ],
  [
   "raid",
   "raid-parity"
  ],
  [
   "resource-allocation-graph",
   "deadlock-detection"
  ],
  [
   "resource-allocation-graph",
   "wait-for-graph"
  ],
  [
   "response-time",
   "round-robin"
  ],
  [
   "rotational-latency",
   "disk-access-time"
  ],
  [
   "round-robin",
   "mlfq"
  ],
  [
   "round-robin",
   "time-quantum"
  ],
  [
   "safe-state",
   "bankers-algorithm"
  ],
  [
   "scan-scheduling",
   "c-scan"
  ],
  [
   "scan-scheduling",
   "look-scheduling"
  ],
  [
   "scheduling-criteria",
   "response-time"
  ],
  [
   "scheduling-criteria",
   "turnaround-time"
  ],
  [
   "scheduling-criteria",
   "waiting-time"
  ],
  [
   "security",
   "authentication"
  ],
  [
   "security",
   "security-design-principles"
  ],
  [
   "security-design-principles",
   "least-privilege"
  ],
  [
   "seek-time",
   "disk-access-time"
  ],
  [
   "segmentation",
   "external-fragmentation"
  ],
  [
   "semaphore",
   "binary-semaphore"
  ],
  [
   "semaphore",
   "bounded-buffer-problem"
  ],
  [
   "semaphore",
   "deadlock"
  ],
  [
   "semaphore",
   "dining-philosophers-problem"
  ],
  [
   "semaphore",
   "readers-writers-problem"
  ],
  [
   "setuid",
   "privilege-escalation"
  ],
  [
   "shared-memory",
   "race-condition"
  ],
  [
   "sjf",
   "priority-scheduling"
  ],
  [
   "sjf",
   "srtf"
  ],
  [
   "spinlock",
   "mutex"
  ],
  [
   "ssd",
   "linux-io-scheduler"
  ],
  [
   "ssd",
   "nand-flash"
  ],
  [
   "ssd-garbage-collection",
   "trim"
  ],
  [
   "ssd-garbage-collection",
   "write-amplification"
  ],
  [
   "sstf",
   "scan-scheduling"
  ],
  [
   "starvation",
   "aging"
  ],
  [
   "starvation",
   "critical-section-problem"
  ],
  [
   "starvation",
   "deadlock-recovery"
  ],
  [
   "starvation",
   "livelock"
  ],
  [
   "starvation",
   "priority-boost"
  ],
  [
   "starvation",
   "readers-writers-problem"
  ],
  [
   "starvation",
   "sstf"
  ],
  [
   "superuser",
   "linux-capabilities"
  ],
  [
   "superuser",
   "privilege-escalation"
  ],
  [
   "superuser",
   "setuid"
  ],
  [
   "swap-space",
   "demand-paging"
  ],
  [
   "syscall-wrapper",
   "system-call-parameter-passing"
  ],
  [
   "system-call",
   "clone"
  ],
  [
   "system-call",
   "exec"
  ],
  [
   "system-call",
   "file-descriptor"
  ],
  [
   "system-call",
   "fork"
  ],
  [
   "system-call",
   "futex"
  ],
  [
   "system-call",
   "io-subsystem"
  ],
  [
   "system-call",
   "many-to-one-model"
  ],
  [
   "system-call",
   "memory-mapped-file"
  ],
  [
   "system-call",
   "message-passing"
  ],
  [
   "system-call",
   "protection"
  ],
  [
   "system-call",
   "sandbox"
  ],
  [
   "system-call",
   "syscall-wrapper"
  ],
  [
   "system-call",
   "system-call-number"
  ],
  [
   "system-call",
   "system-call-parameter-passing"
  ],
  [
   "system-call",
   "system-call-types"
  ],
  [
   "system-call",
   "vfs"
  ],
  [
   "system-call",
   "wait"
  ],
  [
   "system-call-number",
   "system-call-table"
  ],
  [
   "test-and-set",
   "spinlock"
  ],
  [
   "thrashing",
   "page-fault-frequency"
  ],
  [
   "thrashing",
   "working-set"
  ],
  [
   "thread",
   "clone"
  ],
  [
   "thread",
   "deadlock"
  ],
  [
   "thread",
   "kernel-thread"
  ],
  [
   "thread",
   "multithreading"
  ],
  [
   "thread",
   "pthreads"
  ],
  [
   "thread",
   "race-condition"
  ],
  [
   "thread",
   "tcb"
  ],
  [
   "thread",
   "thread-stack"
  ],
  [
   "thread",
   "user-thread"
  ],
  [
   "thread-group",
   "nptl"
  ],
  [
   "thread-stack",
   "pthread-create"
  ],
  [
   "time-quantum",
   "cfs"
  ],
  [
   "timer-interrupt",
   "context-switch"
  ],
  [
   "timer-interrupt",
   "preemptive-scheduling"
  ],
  [
   "tlb",
   "context-switch-cost"
  ],
  [
   "tlb",
   "effective-access-time"
  ],
  [
   "tlb",
   "multilevel-page-table"
  ],
  [
   "tlb",
   "page-fault"
  ],
  [
   "trap",
   "context-switch"
  ],
  [
   "trap",
   "return-from-trap"
  ],
  [
   "trap",
   "system-call"
  ],
  [
   "trap-table",
   "return-from-trap"
  ],
  [
   "trap-table",
   "system-call-table"
  ],
  [
   "turnaround-time",
   "sjf"
  ],
  [
   "uefi",
   "bootloader"
  ],
  [
   "unix-file-permission",
   "setuid"
  ],
  [
   "user-mode",
   "microkernel"
  ],
  [
   "user-thread",
   "multithreading-model"
  ],
  [
   "virtual-memory",
   "demand-paging"
  ],
  [
   "virtual-memory",
   "page-cache"
  ],
  [
   "virtual-memory",
   "swap-space"
  ],
  [
   "virtualization",
   "file"
  ],
  [
   "virtualization",
   "logical-address"
  ],
  [
   "virtualization",
   "process"
  ],
  [
   "virtualization",
   "virtual-memory"
  ],
  [
   "wait",
   "zombie-process"
  ],
  [
   "wait-for-graph",
   "deadlock-detection"
  ],
  [
   "working-set",
   "page-fault-frequency"
  ]
 ],
 "confused": [
  {
   "a": "kernel",
   "b": "operating-system",
   "note": "커널은 운영체제의 핵심 부분일 뿐, 운영체제 전체(라이브러리·시스템 프로그램 포함)와 같지 않다",
   "unit": 1
  },
  {
   "a": "exception",
   "b": "trap",
   "note": "트랩은 의도한 호출이라 다음 명령어로, 폴트형 예외는 원인 명령어로 돌아간다. 용어는 아키텍처마다 다르다",
   "unit": 1
  },
  {
   "a": "hardware-interrupt",
   "b": "trap",
   "note": "하드웨어 인터럽트는 장치가 비동기로, 트랩은 프로그램이 동기적으로 일으킨다",
   "unit": 1
  },
  {
   "a": "dual-mode",
   "b": "protection-ring",
   "note": "이중 모드는 개념(두 단계), 보호 링은 x86의 구현(네 단계 중 0과 3만 사용)",
   "unit": 1
  },
  {
   "a": "api",
   "b": "system-call",
   "note": "API(libc 함수)는 사용자 공간 라이브러리의 평범한 함수 호출이고, 시스템 콜은 트랩 명령어로 커널 모드에 들어가는 요청이다.",
   "unit": 2
  },
  {
   "a": "syscall-wrapper",
   "b": "system-call",
   "note": "래퍼 함수를 부르는 순간은 함수 호출일 뿐이고, 커널 진입은 래퍼 안에서 syscall 같은 트랩 명령어가 실행될 때 일어난다",
   "unit": 2
  },
  {
   "a": "system-call-table",
   "b": "trap-table",
   "note": "트랩 테이블은 하드웨어가 이벤트별 핸들러를 찾는 표, 시스템 콜 테이블은 그 핸들러 안에서 커널이 번호별 함수를 찾는 표다",
   "unit": 2
  },
  {
   "a": "hybrid-kernel",
   "b": "microkernel",
   "note": "하이브리드 커널은 마이크로커널 같은 구조를 갖지만 서비스 대부분이 커널 공간에 있어 마이크로커널의 안정성 이점이 없다",
   "unit": 2
  },
  {
   "a": "bootloader",
   "b": "init-process",
   "note": "부트로더는 커널이 뜨기 전에 커널을 메모리에 올리는 프로그램, init은 커널이 뜬 뒤 처음 실행되는 사용자 프로세스(PID 1)다",
   "unit": 2
  },
  {
   "a": "process",
   "b": "program",
   "note": "프로그램은 디스크의 정적인 실행 파일이고, 프로세스는 메모리·레지스터·열린 파일을 가진 실행 중인 인스턴스다. 한 프로그램으로 여러 프로세스를 만들 수 있다",
   "unit": 3
  },
  {
   "a": "exec",
   "b": "fork",
   "note": "fork는 같은 프로그램을 도는 프로세스를 하나 더 만들고, exec는 프로세스 수는 그대로 두고(PID 유지) 실행할 프로그램을 바꾼다",
   "unit": 3
  },
  {
   "a": "orphan-process",
   "b": "zombie-process",
   "note": "좀비는 자식이 끝났는데 부모가 wait하지 않은 것, 고아는 자식이 살아 있는데 부모가 먼저 끝난 것이다. 고아는 init이 입양한다",
   "unit": 3
  },
  {
   "a": "message-passing",
   "b": "shared-memory",
   "note": "공유 메모리는 설정 후 커널을 거치지 않아 빠르지만 동기화를 직접 해야 하고, 메시지 전달은 메시지마다 시스템 콜이 들어 느리지만 간단하다",
   "unit": 3
  },
  {
   "a": "context-switch",
   "b": "trap",
   "note": "트랩(모드 전환)은 같은 프로세스가 사용자 모드에서 커널 모드로 들어가는 것이고, 문맥 교환은 CPU를 쓰는 프로세스 자체가 바뀌는 것이다. 모드 전환만으로는 문맥 교환이 아니다",
   "unit": 3
  },
  {
   "a": "process",
   "b": "thread",
   "note": "프로세스는 자원(주소 공간·파일)을 가진 단위, 스레드는 그 안에서 실행·스케줄링되는 단위다. 같은 프로세스의 스레드는 주소 공간을 공유하지만 프로세스끼리는 따로다",
   "unit": 4
  },
  {
   "a": "pcb",
   "b": "tcb",
   "note": "PCB는 프로세스 전체 상태(주소 공간 등 포함), TCB는 스레드 하나의 실행 상태(레지스터 등)를 담는다. 스레드 전환 때는 페이지 테이블을 바꾸지 않는다",
   "unit": 4
  },
  {
   "a": "kernel-thread",
   "b": "user-thread",
   "note": "누가 관리·스케줄링하느냐의 차이. 사용자 스레드는 라이브러리가(커널은 모름), 커널 스레드는 운영체제가 스케줄링한다",
   "unit": 4
  },
  {
   "a": "kernel-mode",
   "b": "kernel-thread",
   "note": "커널 스레드는 커널이 스케줄링하는 단위라는 뜻이지 커널 모드에서만 실행된다는 뜻이 아니다. 1:1 모델의 pthread 스레드는 평소 사용자 모드에서 실행된다",
   "unit": 4
  },
  {
   "a": "clone",
   "b": "fork",
   "note": "fork는 부모를 복사해 새 프로세스를 만들고, clone은 무엇을 공유할지 플래그로 고른다. 메모리·파일·시그널 핸들러를 공유하고 CLONE_THREAD를 주면 스레드가 된다",
   "unit": 4
  },
  {
   "a": "cpu-scheduler",
   "b": "dispatcher",
   "note": "스케줄러는 다음에 실행할 프로세스를 '고르고', 디스패처는 고른 프로세스에 CPU를 실제로 '넘긴다'(문맥 교환·모드 전환·점프)",
   "unit": 5
  },
  {
   "a": "sjf",
   "b": "srtf",
   "note": "SJF는 비선점형이라 실행 중인 작업을 끝까지 돌리고, SRTF는 더 짧은 작업이 도착하면 선점한다. OSTEP은 SRTF를 STCF(PSJF)라고 부른다",
   "unit": 5
  },
  {
   "a": "response-time",
   "b": "turnaround-time",
   "note": "반환 시간은 도착부터 '완료'까지, 응답 시간은 도착부터 '처음 실행'까지다. RR은 응답 시간이 좋지만 반환 시간은 나쁘다",
   "unit": 5
  },
  {
   "a": "response-time",
   "b": "waiting-time",
   "note": "대기 시간은 준비 큐에서 기다린 시간의 '합', 응답 시간은 첫 실행까지 기다린 시간이다. 위키백과는 wait time을 첫 실행까지로 정의하는 등 자료마다 정의가 다르다",
   "unit": 5
  },
  {
   "a": "aging",
   "b": "priority-boost",
   "note": "에이징은 기다린 프로세스의 우선순위를 조금씩 올리고, MLFQ의 부스트는 주기 S마다 모든 작업을 한꺼번에 맨 위 큐로 올린다. 둘 다 기아를 막는다",
   "unit": 5
  },
  {
   "a": "mutex",
   "b": "spinlock",
   "note": "둘 다 상호 배제를 주지만 스핀락은 CPU를 쓰며 계속 확인(바쁜 대기, 문맥 교환 없음)하고, 뮤텍스는 대기 큐에서 잠들었다 깨어난다(문맥 교환 비용). 짧은 임계 구역과 멀티코어면 스핀락, 아니면 뮤텍스가 유리하다",
   "unit": 6
  },
  {
   "a": "binary-semaphore",
   "b": "mutex",
   "note": "이진 세마포어도 락처럼 쓰지만, 세마포어는 값을 올리는 스레드와 내리는 스레드가 달라도 되어 순서 맞추기(초깃값 0)에도 쓴다. 뮤텍스는 상호 배제만을 위한 도구다",
   "unit": 6
  },
  {
   "a": "condition-variable",
   "b": "semaphore",
   "note": "세마포어의 signal(sem_post)은 기다리는 스레드가 없어도 값을 올려 기억하지만, 조건 변수의 signal은 기다리는 스레드가 없으면 사라진다. 그래서 조건 변수는 락으로 보호한 상태 변수와 함께 쓴다",
   "unit": 6
  },
  {
   "a": "priority-inversion",
   "b": "starvation",
   "note": "기아는 낮은 우선순위 작업이 계속 밀려 CPU를 못 받는 것이고, 우선순위 역전은 높은 우선순위 스레드가 락 때문에 낮은 스레드를 기다리다 중간 스레드에게까지 밀리는 것이다. 해결책도 에이징과 우선순위 상속으로 다르다",
   "unit": 6
  },
  {
   "a": "critical-section",
   "b": "mutex",
   "note": "임계 구역은 보호가 필요한 코드 조각(문제)이고, 뮤텍스는 그 구역을 보호하는 도구(해결책)다",
   "unit": 6
  },
  {
   "a": "deadlock",
   "b": "livelock",
   "note": "교착은 모두가 막혀(blocked) 멈춰 있고, 라이브락은 모두가 계속 실행되며 상태를 바꾸지만 진행이 없다. CPU 사용률로 보면 교착은 조용하고 라이브락은 바쁘다",
   "unit": 7
  },
  {
   "a": "deadlock",
   "b": "starvation",
   "note": "교착은 집합 전체가 서로를 기다리는 사이클이라 저절로 풀리지 않는다. 기아는 특정 프로세스 하나가 계속 밀리는 것이고 다른 프로세스들은 잘 진행하며, 상황이 바뀌면 풀릴 수 있다",
   "unit": 7
  },
  {
   "a": "deadlock-avoidance",
   "b": "deadlock-prevention",
   "note": "예방은 네 조건 중 하나를 설계 단계에서 아예 없앤다(예: 락 순서). 회피는 조건을 그대로 두고, 미리 알려진 최대 요구를 바탕으로 요청마다 안전 상태가 유지되는지 검사해 승인 여부를 정한다(예: 은행원 알고리즘)",
   "unit": 7
  },
  {
   "a": "deadlock",
   "b": "safe-state",
   "note": "불안전 상태 ≠ 교착 상태. 안전 상태는 교착이 아니고, 불안전 상태는 교착으로 갈 '수도' 있는 상태일 뿐이다. 회피 알고리즘은 불안전으로 가는 요청까지 보수적으로 막는다",
   "unit": 7
  },
  {
   "a": "no-preemption",
   "b": "preemptive-scheduling",
   "note": "교착 조건의 비선점은 '자원(락)을 강제로 빼앗을 수 없다'는 뜻이고, 선점형 스케줄링은 'CPU를 빼앗을 수 있다'는 뜻이다. CPU가 선점형이어도 락은 보통 비선점이다",
   "unit": 7
  },
  {
   "a": "logical-address",
   "b": "physical-address",
   "note": "논리 주소는 CPU가 만들고 프로그램이 보는 주소, 물리 주소는 메모리 장치가 받는 주소다. 컴파일·적재 시간 바인딩에서는 둘이 같고, 실행 시간 바인딩에서만 MMU가 둘을 다르게 만든다",
   "unit": 8
  },
  {
   "a": "external-fragmentation",
   "b": "internal-fragmentation",
   "note": "내부 단편화는 할당된 단위 안에 남는 낭비(고정 크기 할당, 페이징), 외부 단편화는 할당된 덩어리들 사이의 흩어진 빈 칸(가변 크기 할당, 세그멘테이션)이다",
   "unit": 8
  },
  {
   "a": "paging",
   "b": "segmentation",
   "note": "페이징은 내용과 무관한 같은 크기 페이지로 나눠 외부 단편화가 없고, 세그멘테이션은 코드·힙·스택 같은 논리 단위로 크기가 제각각이라 외부 단편화가 생긴다. segmentation fault라는 이름은 페이징 시스템에서도 쓰인다",
   "unit": 8
  },
  {
   "a": "page-table",
   "b": "tlb",
   "note": "페이지 테이블은 메모리에 있는 전체 변환표이고 TLB는 그 일부를 MMU 안에 캐시한 것이다. PTE의 valid는 '할당되지 않은 페이지'를, TLB 항목의 valid는 '캐시된 변환이 없음'을 뜻한다",
   "unit": 8
  },
  {
   "a": "mmu",
   "b": "tlb",
   "note": "MMU는 주소 변환과 권한 검사를 하는 하드웨어 전체이고, TLB는 MMU 안에서 최근 변환을 보관하는 캐시 부품이다",
   "unit": 8
  },
  {
   "a": "paging",
   "b": "virtual-memory",
   "note": "페이징은 주소 공간을 고정 크기 페이지로 나눠 물리 프레임에 대응시키는 변환 기법이고, 가상 메모리는 그 위에서 일부 페이지를 디스크에 두고 필요할 때 가져와 물리 메모리보다 큰 주소 공간을 주는 추상화다. 스왑 공간도 가상 메모리 자체가 아니라 그 재료다",
   "unit": 9
  },
  {
   "a": "fifo-page-replacement",
   "b": "lru",
   "note": "FIFO는 페이지가 들어온 시각(적재 시각)이 가장 오래된 것을, LRU는 마지막으로 쓰인 시각(사용 시각)이 가장 오래된 것을 내보낸다. 자주 쓰는 페이지도 FIFO에서는 쫓겨난다",
   "unit": 9
  },
  {
   "a": "page-fault",
   "b": "tlb",
   "note": "TLB 미스는 변환 정보가 TLB에 없을 뿐이라 페이지 테이블에서 찾아 TLB를 채우면 끝나지만, 페이지 폴트는 페이지 자체가 물리 메모리에 없어 커널이 디스크 입출력을 해야 한다. 비용 차이가 수만 배다",
   "unit": 9
  },
  {
   "a": "beladys-anomaly",
   "b": "thrashing",
   "note": "둘 다 '늘렸는데 나빠지는' 현상이지만 다르다. 스래싱은 프로세스를 늘려 메모리가 모자라 시스템 전체가 느려지는 것이고, 벨레이디의 이상 현상은 한 참조열에서 FIFO에 프레임을 늘렸는데 폴트가 늘어나는 알고리즘의 성질이다",
   "unit": 9
  },
  {
   "a": "copy-on-write",
   "b": "shared-memory",
   "note": "쓰기 시 복사는 쓰기 전까지만 공유하고 누가 쓰는 순간 그 페이지를 복사해 서로의 변경이 보이지 않게 하고, 공유 메모리는 계속 같은 페이지를 공유해 한쪽의 쓰기가 다른 쪽에 바로 보인다",
   "unit": 9
  },
  {
   "a": "rotational-latency",
   "b": "seek-time",
   "note": "탐색은 암이 트랙 사이를 움직이는 시간(반지름 방향), 회전 지연은 트랙에 도착한 뒤 섹터가 돌아오길 기다리는 시간(원주 방향)이다. 둘 다 위치 잡기 비용이고 현대 디스크에서는 크기가 비슷하다",
   "unit": 10
  },
  {
   "a": "c-scan",
   "b": "scan-scheduling",
   "note": "SCAN은 양방향으로 쓸며 돌아오는 길에도 요청을 처리한다. C-SCAN은 한 방향으로만 처리하고 처리 없이 처음으로 돌아가므로 총 이동 거리는 늘지만 가장자리 트랙이 덜 불리하다",
   "unit": 10
  },
  {
   "a": "look-scheduling",
   "b": "scan-scheduling",
   "note": "SCAN은 요청이 없어도 디스크 끝(0이나 마지막 실린더)까지 간다. LOOK은 그 방향의 마지막 요청에서 바로 돌아선다. 교재마다 SCAN을 LOOK처럼 설명하는 경우도 있다",
   "unit": 10
  },
  {
   "a": "ssd-garbage-collection",
   "b": "trim",
   "note": "가비지 컬렉션은 SSD 안에서 쓰레기 페이지를 회수하는 작업이고, TRIM은 호스트가 '이 범위는 이제 안 쓴다'고 알려 주는 명령이다. TRIM이 있으면 GC가 지운 파일의 페이지를 살아 있는 것으로 여겨 복사하지 않는다",
   "unit": 10
  },
  {
   "a": "nand-flash",
   "b": "paging",
   "note": "플래시의 페이지(쓰기 단위)와 블록(지우기 단위)은 가상 메모리의 페이지나 디스크·파일 시스템의 블록과 이름만 같고 뜻이 다르다. 플래시에서는 블록이 페이지를 여러 개 담는 더 큰 단위다",
   "unit": 10
  },
  {
   "a": "hard-link",
   "b": "symbolic-link",
   "note": "하드 링크는 같은 inode 번호를 가리키는 디렉터리 항목이라 링크 수를 올리고 대상을 지워도 남은 이름으로 접근된다. 심볼릭 링크는 경로 문자열을 담은 별도 파일(자기 inode)이라 링크 수를 바꾸지 않고, 디렉터리·다른 파일 시스템도 가리킬 수 있지만 대상이 지워지면 끊어진다",
   "unit": 11
  },
  {
   "a": "file-descriptor",
   "b": "open-file-table",
   "note": "파일 디스크립터는 프로세스별 배열의 인덱스(정수)일 뿐이고, 오프셋과 상태 플래그는 그 fd가 가리키는 시스템 전체 열린 파일 항목에 있다. 그래서 fork·dup으로 fd가 둘이어도 항목이 하나면 오프셋을 공유하고, 같은 파일을 두 번 open하면 항목이 둘이라 오프셋이 따로 움직인다",
   "unit": 11
  },
  {
   "a": "directory",
   "b": "inode",
   "note": "파일 이름은 inode가 아니라 디렉터리 항목에 있다. inode는 메타데이터와 블록 위치를 담고, 디렉터리는 이름을 inode 번호로 바꾸는 표다. 그래서 한 inode에 이름이 여러 개(하드 링크) 있을 수 있다",
   "unit": 11
  },
  {
   "a": "fsck",
   "b": "journaling",
   "note": "fsck는 불일치를 허용한 뒤 부팅 때 디스크 전체를 훑어 고치는 사후 방식이고, 저널링은 갱신 전에 저널에 먼저 적어 크래시 후 커밋된 트랜잭션만 재생하는 사전 방식이다. 복구 비용이 디스크 크기가 아니라 저널 크기에 비례한다",
   "unit": 11
  },
  {
   "a": "contiguous-allocation",
   "b": "contiguous-file-allocation",
   "note": "연속 파일 할당은 디스크 블록을, 8단원의 연속 메모리 할당은 물리 메모리를 연속 구간으로 준다. 최초·최적 적합 선택과 외부 단편화라는 같은 문제를 겪지만, 디스크에서는 헤드 이동 비용 때문에 연속 배치의 이득이 더 크다",
   "unit": 11
  },
  {
   "a": "polling",
   "b": "spinlock",
   "note": "둘 다 바쁜 대기지만, 폴링은 장치의 상태 레지스터를, 스핀락은 다른 CPU가 쥔 락 변수를 반복 확인한다",
   "unit": 12
  },
  {
   "a": "polling",
   "b": "programmed-io",
   "note": "폴링은 장치가 준비될 때까지 기다리는 방식, PIO는 CPU가 데이터를 직접 옮기는 방식이다. 같이 쓰이는 경우가 많지만 인터럽트와 PIO를 함께 쓸 수도 있다",
   "unit": 12
  },
  {
   "a": "memory-mapped-file",
   "b": "memory-mapped-io",
   "note": "메모리 맵 입출력은 장치 레지스터를 물리 주소로 접근하는 하드웨어 방식이고, 메모리 맵 파일(mmap)은 파일 내용을 페이지 단위로 주소 공간에 올리는 운영체제 기법이다",
   "unit": 12
  },
  {
   "a": "dma",
   "b": "memory-mapped-io",
   "note": "메모리 맵 입출력은 CPU가 장치 레지스터에 접근하는 방식, DMA는 장치가 CPU 없이 메모리에 접근하는 방식이다. 드라이버는 MMIO 레지스터에 DMA 주소를 써서 전송을 시작시킨다",
   "unit": 12
  },
  {
   "a": "asynchronous-io",
   "b": "non-blocking-io",
   "note": "논블로킹은 지금 되는 만큼만 하고 즉시 돌아오며(없으면 EAGAIN), 비동기는 요청을 넣고 즉시 돌아온 뒤 작업이 완전히 끝나면 통지한다. epoll은 준비 통지라 비동기가 아니다",
   "unit": 12
  },
  {
   "a": "protection",
   "b": "security",
   "note": "보호는 누가 무엇을 쓸지 강제하는 내부 메커니즘(실수하는 프로그램도 대상), 보안은 그 위에서 의도적인 공격까지 막는 더 넓은 문제다",
   "unit": 13
  },
  {
   "a": "access-control-list",
   "b": "capability",
   "note": "같은 접근 행렬을 ACL은 열(객체별 명단), capability는 행(주체별 열쇠 꾸러미)으로 자른 것. ACL은 회수가 쉽고 capability는 위임이 쉽다",
   "unit": 13
  },
  {
   "a": "capability",
   "b": "linux-capabilities",
   "note": "접근 행렬의 capability는 특정 객체에 대한 위조 불가능한 권한 토큰이고, 리눅스 capabilities는 root 특권을 작업 종류별로 나눈 조각으로 특정 객체를 가리키지 않는다",
   "unit": 13
  },
  {
   "a": "access-control-list",
   "b": "authentication",
   "note": "인증은 '누구인가'를 확인하고, ACL 같은 접근 제어(인가)는 확인된 신원에게 '무엇을 허용할까'를 정한다. 접근 제어는 인증이 맞았다고 가정한다",
   "unit": 13
  },
  {
   "a": "setuid",
   "b": "superuser",
   "note": "setuid는 파일 소유자의 신원으로 실행하라는 비트일 뿐이다. 소유자가 alice면 alice 권한으로 실행되고, 위험한 것은 root 소유 setuid 프로그램이다",
   "unit": 13
  }
 ],
 "sources": [
  {
   "url": "https://en.wikipedia.org/wiki/Interrupt",
   "title": "Interrupt - Wikipedia",
   "kind": "doc",
   "units": [
    1
   ],
   "describes": [
    "interrupt",
    "hardware-interrupt",
    "trap",
    "exception",
    "interrupt-handler"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf",
   "title": "OSTEP Ch.2 Introduction to Operating Systems",
   "kind": "book",
   "units": [
    1
   ],
   "describes": [
    "operating-system",
    "virtualization",
    "system-call"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf",
   "title": "OSTEP Ch.6 Mechanism: Limited Direct Execution",
   "kind": "book",
   "units": [
    1,
    3
   ],
   "describes": [
    "dual-mode",
    "user-mode",
    "kernel-mode",
    "privileged-instruction",
    "trap",
    "trap-table",
    "return-from-trap",
    "timer-interrupt",
    "cooperative-multitasking",
    "context-switch",
    "context-switch-cost",
    "pcb"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Protection_ring",
   "title": "Protection ring - Wikipedia",
   "kind": "doc",
   "units": [
    1
   ],
   "describes": [
    "protection-ring",
    "kernel-mode",
    "privileged-instruction"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/User_space_and_kernel_space",
   "title": "User space and kernel space - Wikipedia",
   "kind": "doc",
   "units": [
    1
   ],
   "describes": [
    "kernel",
    "user-mode",
    "kernel-mode"
   ]
  },
  {
   "url": "https://docs.kernel.org/process/adding-syscalls.html",
   "title": "Adding a New System Call - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "system-call-table",
    "system-call-number",
    "system-call-parameter-passing"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Booting_process_of_Linux",
   "title": "Booting process of Linux - Wikipedia",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "boot-process",
    "bios",
    "uefi",
    "bootloader",
    "initramfs",
    "init-process"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Hybrid_kernel",
   "title": "Hybrid kernel - Wikipedia",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "hybrid-kernel",
    "microkernel",
    "monolithic-kernel"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Kernel_(operating_system)",
   "title": "Kernel (operating system) - Wikipedia",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "kernel-architecture",
    "monolithic-kernel",
    "microkernel",
    "loadable-kernel-module",
    "hybrid-kernel"
   ]
  },
  {
   "url": "https://raw.githubusercontent.com/torvalds/linux/master/arch/x86/entry/syscalls/syscall_64.tbl",
   "title": "Linux source: arch/x86/entry/syscalls/syscall_64.tbl",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "system-call-table",
    "system-call-number",
    "system-call-types",
    "loadable-kernel-module"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/System_call",
   "title": "System call - Wikipedia",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "system-call",
    "system-call-types",
    "api",
    "syscall-wrapper",
    "system-call-parameter-passing"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/THE_multiprogramming_system",
   "title": "THE multiprogramming system - Wikipedia",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "layered-kernel"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/syscall.2.html",
   "title": "syscall(2) - Linux manual page",
   "kind": "doc",
   "units": [
    2
   ],
   "describes": [
    "system-call",
    "syscall-wrapper",
    "system-call-number",
    "system-call-parameter-passing"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Context_switch",
   "title": "Context switch - Wikipedia",
   "kind": "doc",
   "units": [
    3
   ],
   "describes": [
    "context-switch",
    "context-switch-cost",
    "pcb",
    "ready-queue"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf",
   "title": "OSTEP Ch.4 The Abstraction: The Process",
   "kind": "book",
   "units": [
    3
   ],
   "describes": [
    "program",
    "process",
    "process-memory-layout",
    "process-state",
    "pcb",
    "zombie-process",
    "exit"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf",
   "title": "OSTEP Ch.5 Interlude: Process API",
   "kind": "book",
   "units": [
    3
   ],
   "describes": [
    "pid",
    "fork",
    "exec",
    "wait",
    "pipe"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/3_Processes.html",
   "title": "UIC CS 385 Course Notes: Processes",
   "kind": "doc",
   "units": [
    3
   ],
   "describes": [
    "process",
    "process-memory-layout",
    "process-state",
    "pcb",
    "context-switch",
    "context-switch-cost",
    "ipc",
    "shared-memory",
    "message-passing",
    "pipe",
    "orphan-process",
    "exit"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/fork.2.html",
   "title": "fork(2) - Linux manual page",
   "kind": "doc",
   "units": [
    3
   ],
   "describes": [
    "fork",
    "pid",
    "copy-on-write"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/wait.2.html",
   "title": "wait(2) - Linux manual page",
   "kind": "doc",
   "units": [
    3
   ],
   "describes": [
    "wait",
    "zombie-process",
    "orphan-process"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Amdahl%27s_law",
   "title": "Amdahl's law - Wikipedia",
   "kind": "doc",
   "units": [
    4
   ],
   "describes": [
    "amdahls-law",
    "multicore"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Concurrent_computing",
   "title": "Concurrent computing - Wikipedia",
   "kind": "doc",
   "units": [
    4
   ],
   "describes": [
    "concurrency-vs-parallelism"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf",
   "title": "OSTEP Ch.26 Concurrency: An Introduction",
   "kind": "book",
   "units": [
    4,
    6
   ],
   "describes": [
    "thread",
    "tcb",
    "thread-stack",
    "multithreading",
    "context-switch",
    "pthread-create",
    "pthread-join",
    "race-condition",
    "critical-section",
    "mutual-exclusion",
    "atomic-instruction"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-api.pdf",
   "title": "OSTEP Ch.27 Interlude: Thread API",
   "kind": "book",
   "units": [
    4
   ],
   "describes": [
    "pthreads",
    "pthread-create",
    "pthread-join",
    "thread-stack"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Thread_(computing)",
   "title": "Thread (computing) - Wikipedia",
   "kind": "doc",
   "units": [
    4
   ],
   "describes": [
    "thread",
    "user-thread",
    "kernel-thread",
    "multithreading-model",
    "many-to-one-model",
    "one-to-one-model",
    "many-to-many-model",
    "nptl"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/clone.2.html",
   "title": "clone(2) - Linux manual page",
   "kind": "doc",
   "units": [
    4
   ],
   "describes": [
    "clone",
    "thread-group",
    "fork"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/pthreads.7.html",
   "title": "pthreads(7) - Linux manual page",
   "kind": "doc",
   "units": [
    4
   ],
   "describes": [
    "pthreads",
    "nptl",
    "thread",
    "one-to-one-model",
    "thread-group"
   ]
  },
  {
   "url": "https://docs.kernel.org/scheduler/sched-design-CFS.html",
   "title": "CFS Scheduler - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    5
   ],
   "describes": [
    "cfs"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf",
   "title": "OSTEP Ch.7 Scheduling: Introduction",
   "kind": "book",
   "units": [
    5
   ],
   "describes": [
    "turnaround-time",
    "response-time",
    "scheduling-criteria",
    "fcfs",
    "convoy-effect",
    "sjf",
    "srtf",
    "round-robin",
    "time-quantum",
    "preemptive-scheduling",
    "non-preemptive-scheduling"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf",
   "title": "OSTEP Ch.8 Scheduling: The Multi-Level Feedback Queue",
   "kind": "book",
   "units": [
    5
   ],
   "describes": [
    "mlfq",
    "priority-boost",
    "starvation",
    "time-quantum"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-lottery.pdf",
   "title": "OSTEP Ch.9 Scheduling: Proportional Share (Linux CFS)",
   "kind": "book",
   "units": [
    5
   ],
   "describes": [
    "cfs"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Scheduling_(computing)",
   "title": "Scheduling (computing) - Wikipedia",
   "kind": "doc",
   "units": [
    5
   ],
   "describes": [
    "cpu-scheduler",
    "dispatcher",
    "scheduling-criteria",
    "fcfs",
    "srtf",
    "priority-scheduling",
    "starvation",
    "round-robin",
    "cfs"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/6_CPU_Scheduling.html",
   "title": "UIC Operating Systems Course Notes: CPU Scheduling",
   "kind": "doc",
   "units": [
    5
   ],
   "describes": [
    "cpu-scheduler",
    "dispatcher",
    "preemptive-scheduling",
    "non-preemptive-scheduling",
    "scheduling-criteria",
    "waiting-time",
    "fcfs",
    "convoy-effect",
    "sjf",
    "srtf",
    "priority-scheduling",
    "starvation",
    "aging",
    "round-robin",
    "time-quantum",
    "mlfq"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf",
   "title": "OSTEP Ch.28 Locks",
   "kind": "book",
   "units": [
    6
   ],
   "describes": [
    "mutual-exclusion",
    "interrupt-disabling",
    "petersons-algorithm",
    "atomic-instruction",
    "test-and-set",
    "compare-and-swap",
    "spinlock",
    "mutex",
    "futex",
    "priority-inversion"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf",
   "title": "OSTEP Ch.30 Condition Variables",
   "kind": "book",
   "units": [
    6
   ],
   "describes": [
    "condition-variable",
    "bounded-buffer-problem",
    "monitor"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf",
   "title": "OSTEP Ch.31 Semaphores",
   "kind": "book",
   "units": [
    6
   ],
   "describes": [
    "semaphore",
    "binary-semaphore",
    "bounded-buffer-problem",
    "readers-writers-problem",
    "dining-philosophers-problem"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Peterson%27s_algorithm",
   "title": "Peterson's algorithm - Wikipedia",
   "kind": "doc",
   "units": [
    6
   ],
   "describes": [
    "petersons-algorithm",
    "critical-section-problem",
    "mutual-exclusion"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Priority_inversion",
   "title": "Priority inversion - Wikipedia",
   "kind": "doc",
   "units": [
    6
   ],
   "describes": [
    "priority-inversion"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/5_Synchronization.html",
   "title": "UIC Operating Systems Course Notes: Process Synchronization",
   "kind": "doc",
   "units": [
    6
   ],
   "describes": [
    "critical-section",
    "critical-section-problem",
    "petersons-algorithm",
    "test-and-set",
    "spinlock",
    "mutex",
    "semaphore",
    "binary-semaphore",
    "monitor",
    "condition-variable",
    "bounded-buffer-problem",
    "readers-writers-problem",
    "dining-philosophers-problem",
    "priority-inversion"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/sem_overview.7.html",
   "title": "sem_overview(7) - Linux manual page",
   "kind": "doc",
   "units": [
    6
   ],
   "describes": [
    "semaphore"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Banker%27s_algorithm",
   "title": "Banker's algorithm - Wikipedia",
   "kind": "doc",
   "units": [
    7
   ],
   "describes": [
    "bankers-algorithm",
    "safe-state",
    "deadlock-avoidance"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Deadlock_(computer_science)",
   "title": "Deadlock (computer science) - Wikipedia",
   "kind": "doc",
   "units": [
    7
   ],
   "describes": [
    "deadlock",
    "deadlock-conditions",
    "deadlock-prevention",
    "deadlock-avoidance",
    "deadlock-detection",
    "deadlock-recovery",
    "ostrich-algorithm",
    "livelock",
    "lock-ordering"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf",
   "title": "OSTEP Ch.32 Common Concurrency Problems",
   "kind": "book",
   "units": [
    7
   ],
   "describes": [
    "deadlock",
    "deadlock-conditions",
    "hold-and-wait",
    "no-preemption",
    "circular-wait",
    "deadlock-prevention",
    "lock-ordering",
    "deadlock-avoidance",
    "bankers-algorithm",
    "deadlock-detection",
    "livelock"
   ]
  },
  {
   "url": "https://docs.kernel.org/locking/lockdep-design.html",
   "title": "Runtime locking correctness validator - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    7
   ],
   "describes": [
    "lock-ordering",
    "deadlock-detection",
    "circular-wait"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/7_Deadlocks.html",
   "title": "UIC Operating Systems Course Notes: Deadlocks",
   "kind": "doc",
   "units": [
    7
   ],
   "describes": [
    "deadlock",
    "deadlock-conditions",
    "hold-and-wait",
    "no-preemption",
    "circular-wait",
    "resource-allocation-graph",
    "wait-for-graph",
    "deadlock-prevention",
    "deadlock-avoidance",
    "safe-state",
    "bankers-algorithm",
    "deadlock-detection",
    "deadlock-recovery",
    "ostrich-algorithm"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man3/pthread_mutex_lock.3p.html",
   "title": "pthread_mutex_lock(3p) - Linux manual page",
   "kind": "doc",
   "units": [
    7
   ],
   "describes": [
    "deadlock",
    "no-preemption"
   ]
  },
  {
   "url": "https://docs.kernel.org/arch/x86/x86_64/5level-paging.html",
   "title": "5-level paging - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    8
   ],
   "describes": [
    "multilevel-page-table"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Memory_management_unit",
   "title": "Memory management unit - Wikipedia",
   "kind": "doc",
   "units": [
    8
   ],
   "describes": [
    "mmu",
    "paging",
    "segmentation",
    "multilevel-page-table",
    "external-fragmentation",
    "internal-fragmentation"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf",
   "title": "OSTEP Ch.15 Mechanism: Address Translation",
   "kind": "book",
   "units": [
    8
   ],
   "describes": [
    "logical-address",
    "physical-address",
    "mmu",
    "base-limit-register",
    "internal-fragmentation",
    "context-switch"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf",
   "title": "OSTEP Ch.16 Segmentation",
   "kind": "book",
   "units": [
    8
   ],
   "describes": [
    "segmentation",
    "external-fragmentation",
    "compaction",
    "best-fit",
    "worst-fit",
    "first-fit"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-freespace.pdf",
   "title": "OSTEP Ch.17 Free-Space Management",
   "kind": "book",
   "units": [
    8
   ],
   "describes": [
    "first-fit",
    "best-fit",
    "worst-fit",
    "external-fragmentation",
    "internal-fragmentation"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf",
   "title": "OSTEP Ch.18 Paging: Introduction",
   "kind": "book",
   "units": [
    8
   ],
   "describes": [
    "paging",
    "page-table",
    "page-table-entry",
    "logical-address",
    "physical-address"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf",
   "title": "OSTEP Ch.19 Paging: Faster Translations (TLBs)",
   "kind": "book",
   "units": [
    8
   ],
   "describes": [
    "tlb",
    "mmu",
    "context-switch-cost",
    "page-table-entry"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-smalltables.pdf",
   "title": "OSTEP Ch.20 Paging: Smaller Tables",
   "kind": "book",
   "units": [
    8
   ],
   "describes": [
    "multilevel-page-table",
    "page-table",
    "tlb"
   ]
  },
  {
   "url": "https://docs.kernel.org/mm/page_tables.html",
   "title": "Page Tables - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    8
   ],
   "describes": [
    "page-table",
    "multilevel-page-table",
    "mmu",
    "tlb",
    "page-fault"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Translation_lookaside_buffer",
   "title": "Translation lookaside buffer - Wikipedia",
   "kind": "doc",
   "units": [
    8
   ],
   "describes": [
    "tlb",
    "effective-access-time",
    "context-switch-cost"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/8_MainMemory.html",
   "title": "UIC CS 385 Course Notes: Main Memory",
   "kind": "doc",
   "units": [
    8
   ],
   "describes": [
    "logical-address",
    "physical-address",
    "address-binding",
    "mmu",
    "base-limit-register",
    "contiguous-allocation",
    "first-fit",
    "best-fit",
    "worst-fit",
    "external-fragmentation",
    "internal-fragmentation",
    "compaction",
    "paging",
    "page-table",
    "page-table-entry",
    "tlb",
    "effective-access-time",
    "multilevel-page-table",
    "segmentation"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf",
   "title": "OSTEP Ch.13 The Abstraction: Address Spaces",
   "kind": "book",
   "units": [
    9
   ],
   "describes": [
    "virtual-memory"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf",
   "title": "OSTEP Ch.21 Beyond Physical Memory: Mechanisms",
   "kind": "book",
   "units": [
    9
   ],
   "describes": [
    "virtual-memory",
    "swap-space",
    "present-bit",
    "page-fault",
    "page-replacement"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf",
   "title": "OSTEP Ch.22 Beyond Physical Memory: Policies",
   "kind": "book",
   "units": [
    9
   ],
   "describes": [
    "page-replacement",
    "optimal-page-replacement",
    "fifo-page-replacement",
    "lru",
    "clock-algorithm",
    "dirty-bit",
    "beladys-anomaly",
    "stack-algorithm",
    "locality-of-reference",
    "demand-paging",
    "thrashing",
    "working-set"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-complete.pdf",
   "title": "OSTEP Ch.23 Complete Virtual Memory Systems",
   "kind": "book",
   "units": [
    9
   ],
   "describes": [
    "copy-on-write",
    "memory-mapped-file",
    "demand-paging",
    "page-replacement"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/9_VirtualMemory.html",
   "title": "UIC CS 385 Course Notes: Virtual Memory",
   "kind": "doc",
   "units": [
    9
   ],
   "describes": [
    "virtual-memory",
    "demand-paging",
    "page-fault",
    "copy-on-write",
    "page-replacement",
    "fifo-page-replacement",
    "optimal-page-replacement",
    "lru",
    "clock-algorithm",
    "dirty-bit",
    "beladys-anomaly",
    "stack-algorithm",
    "frame-allocation",
    "thrashing",
    "locality-of-reference",
    "working-set",
    "page-fault-frequency",
    "memory-mapped-file"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/mmap.2.html",
   "title": "mmap(2) - Linux manual page",
   "kind": "doc",
   "units": [
    9
   ],
   "describes": [
    "memory-mapped-file",
    "copy-on-write"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Cylinder-head-sector",
   "title": "Cylinder-head-sector - Wikipedia",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "disk-geometry",
    "hdd"
   ]
  },
  {
   "url": "https://docs.kernel.org/block/deadline-iosched.html",
   "title": "Deadline IO scheduler tunables - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "linux-io-scheduler",
    "starvation"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Elevator_algorithm",
   "title": "Elevator algorithm - Wikipedia",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "scan-scheduling",
    "c-scan",
    "look-scheduling",
    "disk-scheduling"
   ]
  },
  {
   "url": "https://docs.kernel.org/block/blk-mq.html",
   "title": "Multi-Queue Block IO Queueing Mechanism (blk-mq) - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "linux-io-scheduler",
    "ssd"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Nested_RAID_levels",
   "title": "Nested RAID levels - Wikipedia",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "raid"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-disks.pdf",
   "title": "OSTEP Ch.37 Hard Disk Drives",
   "kind": "book",
   "units": [
    10
   ],
   "describes": [
    "hdd",
    "disk-geometry",
    "seek-time",
    "rotational-latency",
    "disk-access-time",
    "disk-scheduling",
    "sstf",
    "scan-scheduling",
    "c-scan",
    "starvation"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-raid.pdf",
   "title": "OSTEP Ch.38 Redundant Arrays of Inexpensive Disks (RAIDs)",
   "kind": "book",
   "units": [
    10
   ],
   "describes": [
    "raid",
    "raid-parity"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-ssd.pdf",
   "title": "OSTEP Ch.44 Flash-based SSDs",
   "kind": "book",
   "units": [
    10
   ],
   "describes": [
    "ssd",
    "nand-flash",
    "ftl",
    "ssd-garbage-collection",
    "write-amplification",
    "wear-leveling",
    "trim"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Standard_RAID_levels",
   "title": "Standard RAID levels - Wikipedia",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "raid",
    "raid-parity"
   ]
  },
  {
   "url": "https://docs.kernel.org/block/switching-sched.html",
   "title": "Switching Scheduler - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "linux-io-scheduler"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/10_MassStorage.html",
   "title": "UIC CS 385 Course Notes: Mass-Storage Structure",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "disk-geometry",
    "rotational-latency",
    "disk-scheduling",
    "sstf",
    "scan-scheduling",
    "c-scan",
    "look-scheduling",
    "raid",
    "raid-parity"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man8/fstrim.8.html",
   "title": "fstrim(8) - Linux manual page",
   "kind": "doc",
   "units": [
    10
   ],
   "describes": [
    "trim"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/File_Allocation_Table",
   "title": "File Allocation Table - Wikipedia",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "linked-allocation",
    "file-allocation",
    "directory"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf",
   "title": "OSTEP Ch.39 Interlude: Files and Directories",
   "kind": "book",
   "units": [
    11
   ],
   "describes": [
    "file",
    "directory",
    "file-descriptor",
    "open-file-table",
    "inode",
    "hard-link",
    "symbolic-link",
    "fork",
    "page-cache"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf",
   "title": "OSTEP Ch.40 File System Implementation",
   "kind": "book",
   "units": [
    11
   ],
   "describes": [
    "inode",
    "directory",
    "path-resolution",
    "indirect-block",
    "indexed-allocation",
    "linked-allocation",
    "contiguous-file-allocation",
    "free-space-bitmap",
    "page-cache",
    "file-descriptor",
    "open-file-table"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf",
   "title": "OSTEP Ch.42 Crash Consistency: FSCK and Journaling",
   "kind": "book",
   "units": [
    11
   ],
   "describes": [
    "crash-consistency",
    "fsck",
    "journaling",
    "metadata-journaling",
    "page-cache",
    "hdd"
   ]
  },
  {
   "url": "https://docs.kernel.org/filesystems/vfs.html",
   "title": "Overview of the Linux Virtual File System - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "vfs",
    "inode",
    "path-resolution",
    "open-file-table",
    "file-descriptor",
    "hard-link"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/12_FileSystemImplementation.html",
   "title": "UIC CS 385 Course Notes: File-System Implementation",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "file-allocation",
    "contiguous-file-allocation",
    "linked-allocation",
    "indexed-allocation",
    "indirect-block",
    "free-space-bitmap",
    "open-file-table",
    "file-descriptor",
    "vfs",
    "page-cache",
    "directory",
    "device-driver"
   ]
  },
  {
   "url": "https://docs.kernel.org/admin-guide/ext4.html",
   "title": "ext4 General Information - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "metadata-journaling",
    "journaling"
   ]
  },
  {
   "url": "https://docs.kernel.org/filesystems/ext4/inodes.html",
   "title": "ext4: Index Nodes - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "inode",
    "hard-link",
    "directory"
   ]
  },
  {
   "url": "https://docs.kernel.org/filesystems/ext4/journal.html",
   "title": "ext4: Journal (jbd2) - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "journaling",
    "metadata-journaling"
   ]
  },
  {
   "url": "https://docs.kernel.org/filesystems/ext4/ifork.html",
   "title": "ext4: The Contents of inode.i_block - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    11
   ],
   "describes": [
    "indirect-block",
    "symbolic-link",
    "inode"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/open.2.html",
   "title": "open(2) - Linux manual page",
   "kind": "doc",
   "units": [
    11,
    12
   ],
   "describes": [
    "file-descriptor",
    "open-file-table",
    "fork",
    "non-blocking-io"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/path_resolution.7.html",
   "title": "path_resolution(7) - Linux manual page",
   "kind": "doc",
   "units": [
    11,
    13
   ],
   "describes": [
    "path-resolution",
    "symbolic-link",
    "directory",
    "unix-file-permission",
    "superuser",
    "linux-capabilities"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Direct_memory_access",
   "title": "Direct memory access - Wikipedia",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "dma"
   ]
  },
  {
   "url": "https://docs.kernel.org/core-api/dma-api-howto.html",
   "title": "Dynamic DMA mapping Guide - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "dma",
    "physical-address",
    "memory-mapped-io"
   ]
  },
  {
   "url": "https://static.lwn.net/images/pdf/LDD3/ch01.pdf",
   "title": "Linux Device Drivers, 3rd ed., Ch.1 An Introduction to Device Drivers",
   "kind": "book",
   "units": [
    12
   ],
   "describes": [
    "device-driver",
    "block-device",
    "character-device",
    "network-device",
    "loadable-kernel-module"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Memory-mapped_I/O_and_port-mapped_I/O",
   "title": "Memory-mapped I/O and port-mapped I/O - Wikipedia",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "memory-mapped-io",
    "port-mapped-io"
   ]
  },
  {
   "url": "https://docs.kernel.org/networking/napi.html",
   "title": "NAPI - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "napi",
    "interrupt-coalescing",
    "polling"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf",
   "title": "OSTEP Ch.36 I/O Devices",
   "kind": "book",
   "units": [
    12
   ],
   "describes": [
    "device-controller",
    "port-mapped-io",
    "memory-mapped-io",
    "polling",
    "programmed-io",
    "interrupt-driven-io",
    "interrupt-coalescing",
    "dma",
    "device-driver"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html",
   "title": "UIC CS 385 Course Notes: I/O Systems",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "device-controller",
    "port-mapped-io",
    "memory-mapped-io",
    "polling",
    "interrupt-driven-io",
    "dma",
    "device-driver",
    "io-subsystem",
    "block-device",
    "character-device",
    "network-device",
    "buffering",
    "spooling",
    "blocking-io",
    "non-blocking-io",
    "asynchronous-io"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/epoll.7.html",
   "title": "epoll(7) - Linux manual page",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "io-multiplexing",
    "non-blocking-io"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/epoll_ctl.2.html",
   "title": "epoll_ctl(2) - Linux manual page",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "io-multiplexing"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/io_uring.7.html",
   "title": "io_uring(7) - Linux manual page",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "asynchronous-io"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/read.2.html",
   "title": "read(2) - Linux manual page",
   "kind": "doc",
   "units": [
    12
   ],
   "describes": [
    "blocking-io",
    "non-blocking-io"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Address_space_layout_randomization",
   "title": "Address space layout randomization - Wikipedia",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "aslr"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Buffer_overflow_protection",
   "title": "Buffer overflow protection - Wikipedia",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "stack-canary",
    "buffer-overflow"
   ]
  },
  {
   "url": "https://docs.kernel.org/admin-guide/sysctl/kernel.html",
   "title": "Documentation for /proc/sys/kernel/ - The Linux Kernel documentation",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "aslr"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/Executable-space_protection",
   "title": "Executable-space protection - Wikipedia",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "nx-bit",
    "buffer-overflow"
   ]
  },
  {
   "url": "https://en.wikipedia.org/wiki/NX_bit",
   "title": "NX bit - Wikipedia",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "nx-bit",
    "page-table-entry"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/security-intro.pdf",
   "title": "OSTEP Ch.53 Introduction to Operating System Security",
   "kind": "book",
   "units": [
    13
   ],
   "describes": [
    "security",
    "protection",
    "security-design-principles",
    "least-privilege",
    "system-call"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/security-authentication.pdf",
   "title": "OSTEP Ch.54 Authentication",
   "kind": "book",
   "units": [
    13
   ],
   "describes": [
    "authentication",
    "password-salt"
   ]
  },
  {
   "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/security-access.pdf",
   "title": "OSTEP Ch.55 Access Control",
   "kind": "book",
   "units": [
    13
   ],
   "describes": [
    "access-control-list",
    "capability",
    "unix-file-permission",
    "setuid",
    "superuser",
    "privilege-escalation",
    "least-privilege"
   ]
  },
  {
   "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
   "title": "OWASP Password Storage Cheat Sheet",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "password-salt",
    "authentication"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/14_Protection.html",
   "title": "UIC CS 385 Course Notes: Protection",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "protection",
    "protection-domain",
    "access-matrix",
    "access-control-list",
    "capability",
    "least-privilege",
    "setuid",
    "protection-ring"
   ]
  },
  {
   "url": "https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/15_Security.html",
   "title": "UIC CS 385 Course Notes: Security",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "security",
    "buffer-overflow",
    "password-salt",
    "nx-bit"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/capabilities.7.html",
   "title": "capabilities(7) - Linux manual page",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "linux-capabilities",
    "superuser",
    "setuid"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/credentials.7.html",
   "title": "credentials(7) - Linux manual page",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "setuid",
    "unix-file-permission"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/inode.7.html",
   "title": "inode(7) - Linux manual page",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "unix-file-permission",
    "setuid",
    "inode"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man7/namespaces.7.html",
   "title": "namespaces(7) - Linux manual page",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "sandbox"
   ]
  },
  {
   "url": "https://man7.org/linux/man-pages/man2/seccomp.2.html",
   "title": "seccomp(2) - Linux manual page",
   "kind": "doc",
   "units": [
    13
   ],
   "describes": [
    "sandbox",
    "system-call"
   ]
  }
 ],
 "visuals": [
  {
   "path": "../../posts/assets/os-overview/os-layers.png",
   "type": "diagram",
   "caption": "사용자 프로그램 → 시스템 콜 → 커널의 가상화 → 하드웨어 계층",
   "unit": 1,
   "depicts": [
    "operating-system",
    "kernel",
    "virtualization",
    "user-mode",
    "kernel-mode"
   ]
  },
  {
   "path": "../../posts/assets/os-overview/dual-mode.png",
   "type": "diagram",
   "caption": "사용자 모드와 커널 모드 사이의 진입(트랩·예외·인터럽트)과 복귀, 거부되는 특권 명령어",
   "unit": 1,
   "depicts": [
    "dual-mode",
    "trap",
    "exception",
    "hardware-interrupt",
    "return-from-trap",
    "privileged-instruction",
    "trap-table",
    "protection-ring"
   ]
  },
  {
   "path": "../../posts/assets/os-overview/interrupt-flow.png",
   "type": "diagram",
   "caption": "타이머 인터럽트 처리 흐름: 하드웨어 저장 → 트랩 테이블 → 핸들러 → return-from-trap",
   "unit": 1,
   "depicts": [
    "interrupt",
    "timer-interrupt",
    "interrupt-handler",
    "trap-table",
    "return-from-trap"
   ]
  },
  {
   "path": "../../posts/assets/os-structure/syscall-flow.png",
   "type": "diagram",
   "caption": "write 시스템 콜의 흐름: libc 래퍼가 번호·인자를 레지스터에 넣고 syscall로 트랩 → 시스템 콜 테이블 조회 → sys_write 실행 → sysret으로 복귀",
   "unit": 2,
   "depicts": [
    "system-call",
    "syscall-wrapper",
    "system-call-number",
    "system-call-table",
    "system-call-parameter-passing",
    "trap",
    "kernel-mode",
    "user-mode"
   ]
  },
  {
   "path": "../../posts/assets/os-structure/kernel-structures.png",
   "type": "diagram",
   "caption": "모놀리식(+모듈)·계층형·마이크로커널·하이브리드 커널에서 운영체제 서비스가 커널 공간과 사용자 공간 중 어디에 놓이는지 비교",
   "unit": 2,
   "depicts": [
    "kernel-architecture",
    "monolithic-kernel",
    "loadable-kernel-module",
    "layered-kernel",
    "microkernel",
    "hybrid-kernel"
   ]
  },
  {
   "path": "../../posts/assets/os-structure/boot-sequence.png",
   "type": "diagram",
   "caption": "리눅스 부팅 순서: 펌웨어(BIOS/UEFI) → 부트로더 → 커널 초기화 → initramfs → init(PID 1)",
   "unit": 2,
   "depicts": [
    "boot-process",
    "bios",
    "uefi",
    "bootloader",
    "initramfs",
    "init-process"
   ]
  },
  {
   "path": "../../posts/assets/process/process-memory.png",
   "type": "diagram",
   "caption": "디스크의 프로그램(코드·데이터)이 적재되어 코드·데이터·힙·스택 주소 공간과 레지스터·열린 파일을 가진 프로세스가 되는 모습",
   "unit": 3,
   "depicts": [
    "program",
    "process",
    "process-memory-layout"
   ]
  },
  {
   "path": "../../posts/assets/process/process-states.png",
   "type": "diagram",
   "caption": "생성·준비·실행·대기·종료 상태 전이도와 종료 후 좀비가 부모의 wait()로 회수되는 흐름",
   "unit": 3,
   "depicts": [
    "process-state",
    "ready-queue",
    "zombie-process",
    "wait",
    "exit"
   ]
  },
  {
   "path": "../../posts/assets/process/context-switch.png",
   "type": "diagram",
   "caption": "타이머 인터럽트 → 하드웨어의 커널 스택 저장 → switch()의 PCB 저장·복원 → return-from-trap으로 A에서 B로 바뀌는 문맥 교환",
   "unit": 3,
   "depicts": [
    "context-switch",
    "pcb",
    "context-switch-cost",
    "timer-interrupt",
    "return-from-trap"
   ]
  },
  {
   "path": "../../posts/assets/process/fork-exec-wait.png",
   "type": "diagram",
   "caption": "셸(부모)이 fork()로 자식을 만들고 wait()로 기다리는 동안 자식이 exec로 wc가 되어 exit하고 좀비를 거쳐 회수되는 타임라인",
   "unit": 3,
   "depicts": [
    "fork",
    "exec",
    "wait",
    "exit",
    "zombie-process",
    "pid"
   ]
  },
  {
   "path": "../../posts/assets/thread/thread-vs-process.png",
   "type": "diagram",
   "caption": "단일 스레드와 멀티스레드 프로세스: 공유하는 주소 공간(코드·데이터·힙·파일)과 스레드마다 따로인 레지스터·PC·스택·TCB",
   "unit": 4,
   "depicts": [
    "thread",
    "tcb",
    "thread-stack",
    "multithreading",
    "process"
   ]
  },
  {
   "path": "../../posts/assets/thread/concurrency-parallelism.png",
   "type": "diagram",
   "caption": "코어 1개에서 T1·T2를 번갈아 실행하는 동시성과 코어 2개에서 동시에 실행하는 병렬성의 시간 흐름",
   "unit": 4,
   "depicts": [
    "concurrency-vs-parallelism",
    "multicore",
    "multithreading"
   ]
  },
  {
   "path": "../../posts/assets/thread/amdahl.png",
   "type": "chart",
   "caption": "암달의 법칙: 병렬 비율 50·75·90·95%일 때 코어 1~64개의 속도 향상과 상한",
   "unit": 4,
   "depicts": [
    "amdahls-law",
    "multicore"
   ]
  },
  {
   "path": "../../posts/assets/thread/threading-models.png",
   "type": "diagram",
   "caption": "멀티스레딩 모델 N:1, 1:1, M:N에서 사용자 스레드 → 커널 스레드 → CPU 코어 대응",
   "unit": 4,
   "depicts": [
    "multithreading-model",
    "many-to-one-model",
    "one-to-one-model",
    "many-to-many-model",
    "user-thread",
    "kernel-thread"
   ]
  },
  {
   "path": "../../posts/assets/cpu-scheduling/scheduler-dispatcher.png",
   "type": "diagram",
   "caption": "준비 큐 → CPU 스케줄러(선택) → 디스패처(문맥 교환·모드 전환·점프) → 실행, 그리고 스케줄링 결정이 일어나는 네 지점(선점형만 개입하는 곳 / 모든 스케줄러가 개입하는 곳)",
   "unit": 5,
   "depicts": [
    "cpu-scheduler",
    "dispatcher",
    "preemptive-scheduling",
    "non-preemptive-scheduling",
    "context-switch",
    "timer-interrupt",
    "process-state"
   ]
  },
  {
   "path": "../../posts/assets/cpu-scheduling/gantt-compare.png",
   "type": "chart",
   "caption": "같은 작업 4개(A 0/6, B 2/4, C 3/1, D 4/2)를 FCFS·SJF·SRTF·RR(q=2)로 돌린 간트 차트와 평균 반환·대기·응답 시간",
   "unit": 5,
   "depicts": [
    "fcfs",
    "convoy-effect",
    "sjf",
    "srtf",
    "round-robin",
    "time-quantum",
    "turnaround-time",
    "waiting-time",
    "response-time"
   ]
  },
  {
   "path": "../../posts/assets/cpu-scheduling/priority-aging.png",
   "type": "chart",
   "caption": "우선순위 3인 작업이 계속 도착할 때 우선순위 8인 작업 L: 에이징이 없으면 기아, 2단위 대기마다 우선순위를 1 올리면 10에 실행",
   "unit": 5,
   "depicts": [
    "priority-scheduling",
    "starvation",
    "aging"
   ]
  },
  {
   "path": "../../posts/assets/cpu-scheduling/mlfq-trace.png",
   "type": "diagram",
   "caption": "3단 MLFQ(q=10ms)에서 긴 작업 A·D의 강등, 50ms에 도착한 짧은 작업 B, 100ms 부스트, 그리고 규칙 1~5",
   "unit": 5,
   "depicts": [
    "mlfq",
    "priority-boost",
    "round-robin",
    "time-quantum"
   ]
  },
  {
   "path": "../../posts/assets/synchronization/race-interleaving.png",
   "type": "diagram",
   "caption": "counter=50에서 두 스레드의 load·add·store가 타이머 인터럽트로 섞여 결과가 52가 아닌 51이 되는 과정",
   "unit": 6,
   "depicts": [
    "race-condition",
    "critical-section"
   ]
  },
  {
   "path": "../../posts/assets/synchronization/critical-section.png",
   "type": "diagram",
   "caption": "진입·임계·퇴출·나머지 구역의 반복 구조와 임계 구역 문제의 세 조건(상호 배제, 진행, 한정 대기)",
   "unit": 6,
   "depicts": [
    "critical-section",
    "critical-section-problem",
    "mutual-exclusion"
   ]
  },
  {
   "path": "../../posts/assets/synchronization/sync-layers.png",
   "type": "diagram",
   "caption": "하드웨어(인터럽트 끄기, test-and-set, compare-and-swap, fetch-and-add) 위의 스핀락·뮤텍스·세마포어, 그 위의 모니터와 조건 변수",
   "unit": 6,
   "depicts": [
    "interrupt-disabling",
    "atomic-instruction",
    "test-and-set",
    "compare-and-swap",
    "spinlock",
    "mutex",
    "futex",
    "semaphore",
    "monitor",
    "condition-variable"
   ]
  },
  {
   "path": "../../posts/assets/synchronization/bounded-buffer.png",
   "type": "diagram",
   "caption": "세마포어 empty=7, full=3, mutex=1로 푼 칸 10개 유한 버퍼와 생산자·소비자의 다섯 단계",
   "unit": 6,
   "depicts": [
    "bounded-buffer-problem",
    "semaphore",
    "binary-semaphore"
   ]
  },
  {
   "path": "../../posts/assets/deadlock/two-lock-deadlock.png",
   "type": "diagram",
   "caption": "두 스레드가 L1·L2를 반대 순서로 잡으면 보유·요청이 사이클을 이뤄 영원히 멈추고, 같은 순서(L1→L2)로 잡으면 T2가 잠깐 기다린 뒤 둘 다 끝나는 단계별 비교",
   "unit": 7,
   "depicts": [
    "deadlock",
    "circular-wait",
    "hold-and-wait",
    "lock-ordering",
    "mutex",
    "thread"
   ]
  },
  {
   "path": "../../posts/assets/deadlock/rag-cycle.png",
   "type": "diagram",
   "caption": "자원 할당 그래프: 인스턴스가 하나씩인 왼쪽은 사이클 P1→R2→P2→R1→P1이 곧 교착, 인스턴스가 둘인 오른쪽은 사이클이 있어도 요청 없는 P2·P4가 반납하면 풀려 교착이 아님",
   "unit": 7,
   "depicts": [
    "resource-allocation-graph",
    "circular-wait",
    "deadlock"
   ]
  },
  {
   "path": "../../posts/assets/deadlock/conditions-prevention.png",
   "type": "diagram",
   "caption": "네 가지 필요 조건과 각 조건을 깨는 예방 기법(락 없는 자료 구조, 한꺼번에 획득, trylock 후 반납, 락 순서 고정), 그리고 각각의 대가",
   "unit": 7,
   "depicts": [
    "deadlock-conditions",
    "hold-and-wait",
    "no-preemption",
    "circular-wait",
    "deadlock-prevention",
    "lock-ordering",
    "livelock"
   ]
  },
  {
   "path": "../../posts/assets/deadlock/bankers-safe-sequence.png",
   "type": "chart",
   "caption": "은행원 알고리즘 예제(전체 A8 B5 C6, 가용 3 2 2): 안전 순서 P1→P2→P0→P3로 work가 8 5 6까지 늘어 안전, P0의 B 1개 요청은 가정 상태에서 P3 뒤 work 4 1 3으로 막혀 불안전하므로 보류",
   "unit": 7,
   "depicts": [
    "bankers-algorithm",
    "safe-state",
    "deadlock-avoidance"
   ]
  },
  {
   "path": "../../posts/assets/memory-management/base-limit.png",
   "type": "diagram",
   "caption": "CPU의 논리 주소 2500을 MMU가 한계 8192와 비교하고 베이스 40960을 더해 물리 주소 43460으로 바꾸고, 한계를 넘는 9000은 예외로 커널에 넘기는 베이스·한계 레지스터 방식",
   "unit": 8,
   "depicts": [
    "logical-address",
    "physical-address",
    "mmu",
    "base-limit-register",
    "exception"
   ]
  },
  {
   "path": "../../posts/assets/memory-management/fit-fragmentation.png",
   "type": "diagram",
   "caption": "빈 칸 10K·4K·20K·8K에 7K를 요청했을 때 최초·최적·최악 적합의 선택, 15K가 비어도 12K를 못 받는 외부 단편화와 압축, 13K 프로세스를 4K 페이지 4개에 담아 3K가 남는 내부 단편화",
   "unit": 8,
   "depicts": [
    "contiguous-allocation",
    "first-fit",
    "best-fit",
    "worst-fit",
    "external-fragmentation",
    "compaction",
    "internal-fragmentation"
   ]
  },
  {
   "path": "../../posts/assets/memory-management/address-translation.png",
   "type": "diagram",
   "caption": "32비트 가상 주소 0x00403A7C를 페이지 번호 0x00403과 오프셋 0xA7C로 나누고 페이지 테이블 0x403번 항목의 프레임 번호 0x1F2에 오프셋을 붙여 물리 주소 0x001F2A7C를 만드는 과정과 x86 32비트 PTE 비트 배치",
   "unit": 8,
   "depicts": [
    "paging",
    "page-table",
    "page-table-entry",
    "logical-address",
    "physical-address"
   ]
  },
  {
   "path": "../../posts/assets/memory-management/tlb-walk.png",
   "type": "diagram",
   "caption": "x86-64 48비트 주소를 인덱스 254·232·225·180과 오프셋으로 나누고, TLB 히트면 바로 메모리에 접근하며 미스면 CR3부터 PGD·PUD·PMD·PTE 4단계 페이지 워크 후 TLB를 채우고 재시도하거나 페이지 폴트를 내는 흐름",
   "unit": 8,
   "depicts": [
    "tlb",
    "multilevel-page-table",
    "page-table-entry",
    "effective-access-time",
    "page-fault"
   ]
  },
  {
   "path": "../../posts/assets/virtual-memory/page-fault-flow.png",
   "type": "diagram",
   "caption": "명령어 실행 → MMU가 present=0을 보고 페이지 폴트 트랩 → 커널의 주소 검사(잘못되면 SIGSEGV) → 빈 프레임 확보(없으면 교체) → 스왑 공간에서 읽기(그동안 대기) → 페이지 테이블 갱신 → 명령어 재실행",
   "unit": 9,
   "depicts": [
    "page-fault",
    "present-bit",
    "demand-paging",
    "swap-space",
    "page-replacement",
    "dirty-bit",
    "page-table",
    "mmu",
    "tlb",
    "return-from-trap"
   ]
  },
  {
   "path": "../../posts/assets/virtual-memory/replacement-compare.png",
   "type": "chart",
   "caption": "참조열 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1을 프레임 3개로 돌린 FIFO·OPT·LRU·클럭의 프레임 상태와 폴트 위치. 폴트 수 15·9·12·14",
   "unit": 9,
   "depicts": [
    "page-replacement",
    "fifo-page-replacement",
    "optimal-page-replacement",
    "lru",
    "clock-algorithm"
   ]
  },
  {
   "path": "../../posts/assets/virtual-memory/beladys-anomaly.png",
   "type": "chart",
   "caption": "참조열 1 2 3 4 1 2 5 1 2 3 4 5에서 FIFO가 프레임 3개일 때 9번, 4개일 때 10번 폴트를 내는 모습과 프레임 수 1~6에 따른 FIFO·LRU 폴트 수 그래프",
   "unit": 9,
   "depicts": [
    "beladys-anomaly",
    "fifo-page-replacement",
    "lru",
    "stack-algorithm"
   ]
  },
  {
   "path": "../../posts/assets/virtual-memory/thrashing-working-set.png",
   "type": "chart",
   "caption": "다중 프로그래밍 정도에 따른 CPU 이용률 곡선과 스래싱 구간, 이용률 저하 → 프로세스 추가 → 폴트 증가의 악순환, 창 크기 5인 작업 집합과 작업 집합 크기의 변화",
   "unit": 9,
   "depicts": [
    "thrashing",
    "working-set",
    "locality-of-reference",
    "frame-allocation"
   ]
  },
  {
   "path": "../../posts/assets/storage/hdd-anatomy.png",
   "type": "diagram",
   "caption": "HDD 윗면(플래터·트랙·섹터·헤드·암)과 옆면(실린더), 4KB 무작위 읽기의 탐색·회전·전송 시간 분해(Cheetah 15K.5 ≈ 6.0ms, Barracuda ≈ 13.2ms)",
   "unit": 10,
   "depicts": [
    "hdd",
    "disk-geometry",
    "seek-time",
    "rotational-latency",
    "disk-access-time"
   ]
  },
  {
   "path": "../../posts/assets/storage/ssd-ftl.png",
   "type": "diagram",
   "caption": "로그 구조 FTL: 첫 쓰기 → 덮어쓰기로 쓰레기 페이지 발생 → 블록 0 가비지 컬렉션 후의 매핑 테이블과 페이지 상태",
   "unit": 10,
   "depicts": [
    "ssd",
    "nand-flash",
    "ftl",
    "ssd-garbage-collection",
    "write-amplification"
   ]
  },
  {
   "path": "../../posts/assets/storage/disk-scheduling.png",
   "type": "chart",
   "caption": "같은 요청 큐(헤드 53)에서 FCFS 640, SSTF 236, SCAN 236, C-SCAN 386, LOOK 208 실린더의 헤드 이동 경로와 총 이동 거리",
   "unit": 10,
   "depicts": [
    "disk-scheduling",
    "sstf",
    "scan-scheduling",
    "c-scan",
    "look-scheduling"
   ]
  },
  {
   "path": "../../posts/assets/storage/raid-levels.png",
   "type": "diagram",
   "caption": "RAID 0·1·10·5·6의 블록 배치와 용량·장애 허용 수, XOR 패리티로 잃은 블록을 복구하는 예",
   "unit": 10,
   "depicts": [
    "raid",
    "raid-parity"
   ]
  },
  {
   "path": "../../posts/assets/file-system/fd-chain.png",
   "type": "diagram",
   "caption": "프로세스 A와 fork로 만든 자식 B의 fd 3이 같은 열린 파일 항목 [10](오프셋 10, 참조 수 2)을, 따로 연 프로세스 C의 fd 3이 항목 [11](오프셋 0)을 가리키고, 두 항목과 디렉터리의 두 이름 file.txt·copy.txt가 모두 링크 수 2인 inode 1000으로 이어지는 세 단계 구조",
   "unit": 11,
   "depicts": [
    "file-descriptor",
    "open-file-table",
    "inode",
    "directory",
    "hard-link",
    "fork",
    "pcb"
   ]
  },
  {
   "path": "../../posts/assets/file-system/allocation-methods.png",
   "type": "diagram",
   "caption": "16블록 디스크에 3블록 파일을 연속 할당(시작 4·길이 3, 빈 블록 다섯 개가 흩어진 외부 단편화), 연결 할당(FAT 체인 9→2→14→EOF), 색인 할당(색인 블록 11에 1·6·13)으로 놓은 모습과 각 방식의 장단점",
   "unit": 11,
   "depicts": [
    "file-allocation",
    "contiguous-file-allocation",
    "linked-allocation",
    "indexed-allocation",
    "external-fragmentation"
   ]
  },
  {
   "path": "../../posts/assets/file-system/inode-pointers.png",
   "type": "diagram",
   "caption": "ext2·ext3 inode의 i_block 15칸 중 직접 12개는 데이터 12블록(48 KiB), 단일·이중·삼중 간접은 1024·1024²·1024³ 블록(4 MiB·4 GiB·4 TiB)을 가리키고 단계마다 디스크 읽기가 하나씩 늘며, 합계 (12 + 1024 + 1024² + 1024³) × 4 KiB ≈ 4.004 TiB가 되는 계산",
   "unit": 11,
   "depicts": [
    "inode",
    "indirect-block",
    "indexed-allocation"
   ]
  },
  {
   "path": "../../posts/assets/file-system/journaling-crash.png",
   "type": "diagram",
   "caption": "ext4 ordered 모드에서 데이터 Db를 제자리에 쓰고 저널에 TxB·I·B를 쓴 뒤 완료를 기다려 TxE로 커밋하고, 체크포인트로 I·B를 제자리에 쓴 다음 저널을 해제하는 순서. 커밋 전 크래시는 트랜잭션을 버려 쓰기 전 상태, 커밋 후 크래시는 재생해 쓰기 후 상태가 되며, 아래에 data=journal·ordered·writeback 모드 비교",
   "unit": 11,
   "depicts": [
    "journaling",
    "metadata-journaling",
    "crash-consistency"
   ]
  },
  {
   "path": "../../posts/assets/io-system/io-hardware.png",
   "type": "diagram",
   "caption": "버스로 이어진 CPU·메모리·장치 컨트롤러(상태·명령·데이터 레지스터, IRQ)와 포트 입출력·메모리 맵 입출력의 주소 공간 비교",
   "unit": 12,
   "depicts": [
    "device-controller",
    "port-mapped-io",
    "memory-mapped-io",
    "privileged-instruction",
    "hardware-interrupt"
   ]
  },
  {
   "path": "../../posts/assets/io-system/polling-interrupt-dma.png",
   "type": "chart",
   "caption": "같은 디스크 요청을 폴링·인터럽트·PIO·DMA로 처리할 때 CPU·DMA·디스크의 시간 흐름과 완료 인터럽트",
   "unit": 12,
   "depicts": [
    "polling",
    "interrupt-driven-io",
    "programmed-io",
    "dma"
   ]
  },
  {
   "path": "../../posts/assets/io-system/io-stack.png",
   "type": "diagram",
   "caption": "사용자 프로세스 → 시스템 콜 → 입출력 서브시스템 → 파일 시스템·tty·네트워크 스택 → 블록·문자·네트워크 장치 → 드라이버 → 컨트롤러, 완료는 IRQ로",
   "unit": 12,
   "depicts": [
    "io-subsystem",
    "device-driver",
    "block-device",
    "character-device",
    "network-device",
    "buffering",
    "spooling",
    "system-call"
   ]
  },
  {
   "path": "../../posts/assets/io-system/io-models.png",
   "type": "chart",
   "caption": "블로킹 read, O_NONBLOCK 논블로킹(EAGAIN), epoll_wait 다중화, io_uring 비동기(SQE·CQE)의 앱·커널 시간 흐름 비교",
   "unit": 12,
   "depicts": [
    "blocking-io",
    "non-blocking-io",
    "io-multiplexing",
    "asynchronous-io"
   ]
  },
  {
   "path": "../../posts/assets/protection-security/access-matrix.png",
   "type": "diagram",
   "caption": "도메인×객체 접근 행렬을 열로 자르면 ACL, 행으로 자르면 권한 목록. 리눅스는 open() 때 ACL을 보고 이후 fd로 접근",
   "unit": 13,
   "depicts": [
    "protection-domain",
    "access-matrix",
    "access-control-list",
    "capability"
   ]
  },
  {
   "path": "../../posts/assets/protection-security/unix-permission-bits.png",
   "type": "diagram",
   "caption": "ls -l 권한 문자열, setuid·setgid·sticky와 rwx×3의 12비트 모드(4755), 소유자→그룹→기타 검사 순서와 root 우회",
   "unit": 13,
   "depicts": [
    "unix-file-permission",
    "setuid",
    "superuser"
   ]
  },
  {
   "path": "../../posts/assets/protection-security/stack-smashing.png",
   "type": "diagram",
   "caption": "정상 스택 프레임과 넘친 스택 프레임: 복귀 주소 덮어쓰기와 이를 막는 스택 카나리·NX·ASLR",
   "unit": 13,
   "depicts": [
    "buffer-overflow",
    "stack-canary",
    "nx-bit",
    "aslr",
    "process-memory-layout"
   ]
  },
  {
   "path": "../../posts/assets/protection-security/sandbox-checks.png",
   "type": "diagram",
   "caption": "root를 쪼갠 capabilities와, 시스템 콜이 seccomp → 네임스페이스 → 권한 검사를 거쳐 객체에 닿는 샌드박스 경로",
   "unit": 13,
   "depicts": [
    "linux-capabilities",
    "sandbox",
    "least-privilege",
    "superuser",
    "system-call"
   ]
  }
 ],
 "questions": [
  {
   "id": "2026-11-23-01-q1",
   "text": "사용자 모드에서 특권 명령어를 실행하면 어떻게 되는가?",
   "answered": true,
   "answer": "하드웨어가 실행을 막고 예외를 일으킨다. 커널의 예외 핸들러가 실행되고, 보통 그 프로세스를 종료한다(x86 리눅스라면 general protection fault → SIGSEGV).",
   "unit": 1,
   "about": [
    "privileged-instruction",
    "exception"
   ]
  },
  {
   "id": "2026-11-23-01-q2",
   "text": "트랩과 예외(폴트)는 처리 후 돌아가는 위치가 왜 다른가?",
   "answered": true,
   "answer": "트랩은 일부러 부른 것이라 일을 끝내면 다음 명령어로 간다. 폴트는 원인(예: 페이지가 메모리에 없음)을 고친 뒤 같은 명령어를 다시 실행해야 하므로 원인 명령어로 돌아간다.",
   "unit": 1,
   "about": [
    "trap",
    "exception"
   ]
  },
  {
   "id": "2026-11-23-01-q3",
   "text": "협력적 방식에서 프로세스가 무한 루프에 빠지면 운영체제는 어떻게 제어권을 되찾는가?",
   "answered": true,
   "answer": "협력적 방식에서는 되찾을 방법이 없어 재부팅해야 한다. 그래서 부팅 때 타이머를 켜 두고, 타이머 인터럽트로 강제로 제어권을 가져온다.",
   "unit": 1,
   "about": [
    "cooperative-multitasking",
    "timer-interrupt"
   ]
  },
  {
   "id": "2026-11-23-01-q4",
   "text": "x86-64에서 syscall 명령어로 커널에 들어갈 때 레지스터는 정확히 어디에, 누가(하드웨어/커널) 저장하는가?",
   "answered": false,
   "answer": null,
   "unit": 1,
   "about": [
    "trap",
    "return-from-trap"
   ]
  },
  {
   "id": "2026-11-23-01-q5",
   "text": "x86의 링 1과 링 2는 왜 대부분의 운영체제에서 쓰이지 않는가?",
   "answered": false,
   "answer": null,
   "unit": 1,
   "about": [
    "protection-ring"
   ]
  },
  {
   "id": "2026-11-23-02-q1",
   "text": "libc의 write()를 부르는 것과 write 시스템 콜이 실행되는 것은 같은 순간인가?",
   "answered": true,
   "answer": "아니다. write() 호출은 평범한 함수 호출이고, 래퍼가 번호(rax=1)와 인자를 레지스터에 넣은 뒤 syscall 명령어를 실행할 때 비로소 커널 모드로 들어간다.",
   "unit": 2,
   "about": [
    "syscall-wrapper",
    "system-call",
    "api"
   ]
  },
  {
   "id": "2026-11-23-02-q2",
   "text": "시스템 콜 인자가 레지스터 수보다 많으면 어떻게 넘기는가?",
   "answered": true,
   "answer": "리눅스 커널 문서는 인자가 많으면 크기 필드를 둔 구조체에 모아 그 포인터를 넘기라고 권한다(메모리 블록 방식). MIPS o32처럼 5~8번째 인자를 사용자 스택으로 넘기는 아키텍처도 있다.",
   "unit": 2,
   "about": [
    "system-call-parameter-passing"
   ]
  },
  {
   "id": "2026-11-23-02-q3",
   "text": "Windows NT는 왜 마이크로커널이 아니라 하이브리드 커널로 분류되는가?",
   "answered": true,
   "answer": "csrss.exe 같은 환경 서브시스템은 사용자 모드 서버로 돌지만, 대부분의 구성 요소가 커널 주소 공간을 공유한다. NT 4.0부터는 창 관리자와 그래픽도 커널 모드로 옮겼다.",
   "unit": 2,
   "about": [
    "hybrid-kernel",
    "microkernel"
   ]
  },
  {
   "id": "2026-11-23-02-q4",
   "text": "커널이 있는데 왜 initramfs라는 임시 루트가 따로 필요한가?",
   "answered": true,
   "answer": "진짜 루트 파일 시스템이 있는 저장 장치를 읽으려면 그 장치의 드라이버가 필요하다. initramfs가 그 드라이버를 적재하고 진짜 루트를 찾은 뒤 pivot_root로 루트를 바꾼다.",
   "unit": 2,
   "about": [
    "initramfs",
    "boot-process"
   ]
  },
  {
   "id": "2026-11-23-02-q5",
   "text": "같은 리눅스인데 시스템 콜 번호표가 x86-64와 arm64에서 왜 다르게 만들어졌나?",
   "answered": false,
   "answer": null,
   "unit": 2,
   "about": [
    "system-call-number",
    "system-call-table"
   ]
  },
  {
   "id": "2026-11-23-02-q6",
   "text": "마이크로커널의 IPC 비용은 실제로 얼마나 크며, L4 이후 모놀리식 커널과의 성능 차이는 어느 정도까지 줄었나?",
   "answered": false,
   "answer": null,
   "unit": 2,
   "about": [
    "microkernel",
    "monolithic-kernel"
   ]
  },
  {
   "id": "2026-11-23-03-q1",
   "text": "fork()는 한 번 불렀는데 왜 두 번 돌아오며, 반환값은 어떻게 다른가?",
   "answered": true,
   "answer": "fork가 호출한 프로세스를 복제하므로 부모와 자식 두 프로세스가 모두 fork에서 돌아온다. 부모에게는 자식의 PID, 자식에게는 0을 돌려줘 코드에서 둘을 구분할 수 있다. 누가 먼저 실행될지는 스케줄러가 정한다.",
   "unit": 3,
   "about": [
    "fork",
    "pid"
   ]
  },
  {
   "id": "2026-11-23-03-q2",
   "text": "문맥 교환 때 레지스터는 누가, 어디에 저장하는가?",
   "answered": true,
   "answer": "두 번 저장된다. 타이머 인터럽트가 오면 하드웨어가 사용자 레지스터를 그 프로세스의 커널 스택에 저장하고, 운영체제가 교체를 결정하면 switch 루틴이 커널 레지스터를 그 프로세스의 PCB(프로세스 구조체)에 저장한 뒤 새 프로세스의 PCB에서 복원하고 커널 스택을 바꾼다.",
   "unit": 3,
   "about": [
    "context-switch",
    "pcb"
   ]
  },
  {
   "id": "2026-11-23-03-q3",
   "text": "유닉스는 왜 프로세스 생성을 fork와 exec 두 단계로 나눴는가?",
   "answered": true,
   "answer": "셸이 fork와 exec 사이에 코드를 넣을 수 있게 하려는 것이다. 예를 들어 자식이 exec 전에 표준 출력을 닫고 파일을 열면 실행할 프로그램을 고치지 않고도 출력 리다이렉션이 된다. 파이프도 같은 방식으로 만든다.",
   "unit": 3,
   "about": [
    "fork",
    "exec"
   ]
  },
  {
   "id": "2026-11-23-03-q4",
   "text": "좀비 프로세스는 왜 생기고 어떻게 사라지는가?",
   "answered": true,
   "answer": "자식이 끝난 뒤 부모가 종료 상태를 읽을 수 있도록 커널이 PID·종료 상태·자원 사용량을 프로세스 표에 남겨 두기 때문이다. 부모가 wait하면 회수되고, 부모가 먼저 끝나면 init(또는 subreaper)이 입양해 자동으로 wait한다.",
   "unit": 3,
   "about": [
    "zombie-process",
    "wait"
   ]
  },
  {
   "id": "2026-11-23-03-q5",
   "text": "TLB에 ASID/PCID 태그가 있는 현대 CPU에서 리눅스는 프로세스 문맥 교환 때 TLB를 정말 비우는가, 아니면 태그로 비우기를 피하는가?",
   "answered": false,
   "answer": null,
   "unit": 3,
   "about": [
    "context-switch-cost"
   ]
  },
  {
   "id": "2026-11-23-03-q6",
   "text": "동기화 비용까지 포함하면 어느 정도 데이터 크기·빈도에서 공유 메모리와 메시지 전달의 속도가 뒤집히는가?",
   "answered": false,
   "answer": null,
   "unit": 3,
   "about": [
    "shared-memory",
    "message-passing"
   ]
  },
  {
   "id": "2026-11-23-04-q1",
   "text": "같은 프로세스의 스레드끼리 공유하는 것과 각자 가지는 것은 무엇인가?",
   "answered": true,
   "answer": "코드·전역 데이터·힙(주소 공간 전체), 열린 파일 디스크립터, 시그널 처리 방식, 현재 디렉터리 등은 공유한다. 레지스터와 PC, 스택, 스레드 ID, 시그널 마스크, errno는 스레드마다 따로 가지며 상태는 TCB에 저장한다.",
   "unit": 4,
   "about": [
    "thread",
    "tcb",
    "thread-stack"
   ]
  },
  {
   "id": "2026-11-23-04-q2",
   "text": "N:1 모델에서 한 사용자 스레드가 블로킹 시스템 콜을 하면 어떻게 되는가?",
   "answered": true,
   "answer": "커널이 아는 실행 단위가 하나뿐이므로 그 커널 스레드가 막히면 프로세스의 모든 사용자 스레드가 함께 멈춘다. 같은 이유로 N:1은 멀티코어도 활용하지 못한다.",
   "unit": 4,
   "about": [
    "many-to-one-model",
    "user-thread"
   ]
  },
  {
   "id": "2026-11-23-04-q3",
   "text": "95%가 병렬화된 프로그램은 코어를 늘리면 최대 몇 배 빨라지는가?",
   "answered": true,
   "answer": "암달의 법칙으로 S(N)=1/(0.05+0.95/N). 8코어에서 약 5.9배, 64코어에서 약 15.4배이고, 코어를 무한히 늘려도 1/0.05=20배가 상한이다.",
   "unit": 4,
   "about": [
    "amdahls-law",
    "multicore"
   ]
  },
  {
   "id": "2026-11-23-04-q4",
   "text": "리눅스에서 한 프로세스의 스레드들은 왜 getpid() 값이 같은가?",
   "answered": true,
   "answer": "NPTL은 스레드를 CLONE_THREAD로 같은 스레드 그룹에 넣는다. getpid()는 그룹이 공유하는 TGID를 돌려주므로 모두 같고, 스레드마다 다른 값은 gettid()의 TID다.",
   "unit": 4,
   "about": [
    "thread-group",
    "clone",
    "nptl"
   ]
  },
  {
   "id": "2026-11-23-04-q5",
   "text": "Go의 고루틴처럼 언어 런타임이 M:N 방식으로 스레드를 돌릴 때, 블로킹 시스템 콜 때문에 다른 고루틴이 멈추는 문제를 어떻게 피하는가?",
   "answered": false,
   "answer": null,
   "unit": 4,
   "about": [
    "many-to-many-model",
    "user-thread"
   ]
  },
  {
   "id": "2026-11-23-04-q6",
   "text": "리눅스에서 pthread_create로 만든 스레드의 기본 스택 크기는 무엇으로 정해지는가?",
   "answered": false,
   "answer": null,
   "unit": 4,
   "about": [
    "thread-stack",
    "pthread-create"
   ]
  },
  {
   "id": "2026-11-23-05-q1",
   "text": "같은 작업 집합에서 SRTF는 평균 반환 시간을, RR은 평균 응답 시간을 가장 줄이는 이유는 무엇인가?",
   "answered": true,
   "answer": "SRTF는 남은 시간이 짧은 작업을 먼저 끝내므로 완료 시각의 합이 작아진다. RR은 모든 작업을 조금씩 번갈아 실행하므로 첫 실행이 빨리 오지만, 각 작업의 완료는 늦춰져 반환 시간은 FCFS와 같거나 더 나빠진다(예제: A0/6, B2/4, C3/1, D4/2에서 SRTF 반환 5.75, RR(q=2) 응답 1.5, RR 반환 7.75 = FCFS).",
   "unit": 5,
   "about": [
    "srtf",
    "round-robin",
    "turnaround-time",
    "response-time"
   ]
  },
  {
   "id": "2026-11-23-05-q2",
   "text": "타임 퀀텀은 얼마나 길게 잡아야 하는가?",
   "answered": true,
   "answer": "짧을수록 응답 시간은 좋아지지만 문맥 교환 비용이 커진다(퀀텀 10ms에 교환 1ms면 약 10%가 낭비). 너무 길면 FCFS처럼 동작한다. 경험 법칙으로 CPU 버스트의 약 80%가 퀀텀보다 짧도록 잡고, 현대 시스템은 대략 10~100ms를 쓴다. 퀀텀은 타이머 인터럽트 주기의 배수여야 한다.",
   "unit": 5,
   "about": [
    "time-quantum",
    "round-robin"
   ]
  },
  {
   "id": "2026-11-23-05-q3",
   "text": "MLFQ는 작업 길이를 모르면서 어떻게 SJF를 흉내 내는가?",
   "answered": true,
   "answer": "새 작업을 일단 짧은 작업이라 가정해 맨 위 큐에 넣는다(규칙 3). 정말 짧으면 위쪽 큐에서 금방 끝나고, 길면 할당량을 다 쓸 때마다 한 단계씩 내려가(규칙 4) 긴 작업임이 드러난다.",
   "unit": 5,
   "about": [
    "mlfq"
   ]
  },
  {
   "id": "2026-11-23-05-q4",
   "text": "MLFQ에서 스케줄러를 속이는(gaming) 방법은 무엇이고 어떤 규칙으로 막는가?",
   "answered": true,
   "answer": "할당량이 끝나기 직전(예: 99%)에 I/O를 일으켜 CPU를 내놓으면, '할당량 전에 CPU를 내놓으면 같은 큐에 남는다'는 옛 규칙 때문에 높은 큐에 머물며 CPU를 독차지할 수 있다. 큐마다 쓴 시간을 누적해서 세고, 몇 번 나눠 썼든 할당량을 다 쓰면 강등하는 규칙 4로 막는다.",
   "unit": 5,
   "about": [
    "mlfq",
    "priority-boost"
   ]
  },
  {
   "id": "2026-11-23-05-q5",
   "text": "리눅스 6.6 이후 EEVDF에서 nice 값과 sched_setattr()로 요청한 time slice는 실제 선택 순서에 어떻게 함께 반영되는가?",
   "answered": false,
   "answer": null,
   "unit": 5,
   "about": [
    "cfs"
   ]
  },
  {
   "id": "2026-11-23-05-q6",
   "text": "SJF의 다음 CPU 버스트 예측(지수 평균)은 오늘날 실제 운영체제 스케줄러에서도 쓰이는가?",
   "answered": false,
   "answer": null,
   "unit": 5,
   "about": [
    "sjf",
    "srtf"
   ]
  },
  {
   "id": "2026-11-23-06-q1",
   "text": "counter = counter + 1은 한 줄인데 왜 두 스레드가 실행하면 갱신이 사라지는가?",
   "answered": true,
   "answer": "CPU에게는 읽기(load)·더하기(add)·쓰기(store)로 나뉜 동작이다. 한 스레드가 읽고 더한 뒤 쓰기 전에 문맥 교환이 일어나면 다른 스레드도 같은 옛 값에서 출발해 한쪽 갱신이 덮인다. x86에서 add [mem], 1 한 명령어로 컴파일돼도 lock 접두사가 없으면 멀티코어에서 같은 일이 생긴다. 6코어 WSL 실험에서 2000만 번 중 약 40%가 사라졌다.",
   "unit": 6,
   "about": [
    "race-condition",
    "atomic-instruction"
   ]
  },
  {
   "id": "2026-11-23-06-q2",
   "text": "피터슨 알고리즘은 세 조건을 모두 만족한다는데 왜 현대 컴퓨터에서는 실패하는가?",
   "answered": true,
   "answer": "증명은 읽기·쓰기가 코드 순서대로 일어난다고 가정하지만, 현대 컴파일러와 CPU는 메모리 접근 순서를 바꾼다. x86-64에서 그대로 돌리면 1000만 번 중 수백 번 상호 배제가 깨졌고, turn을 쓴 뒤 전체 메모리 배리어(atomic_thread_fence seq_cst, 실제로는 lock or 명령어)를 넣자 정확해졌다.",
   "unit": 6,
   "about": [
    "petersons-algorithm",
    "mutual-exclusion"
   ]
  },
  {
   "id": "2026-11-23-06-q3",
   "text": "조건 변수를 기다릴 때 왜 if가 아니라 while로 조건을 검사하는가?",
   "answered": true,
   "answer": "거의 모든 시스템이 Mesa 의미론을 쓰기 때문이다. signal은 상태가 바뀌었다는 힌트일 뿐이고, 깨어난 스레드가 실행되기 전에 다른 스레드가 상태를 다시 바꿀 수 있다. 가짜 깨어남(spurious wakeup)도 있으므로 깨어나면 조건을 다시 확인해야 한다.",
   "unit": 6,
   "about": [
    "condition-variable",
    "monitor"
   ]
  },
  {
   "id": "2026-11-23-06-q4",
   "text": "세마포어의 값은 음수가 될 수 있는가?",
   "answered": true,
   "answer": "구현에 따라 다르다. OSTEP과 Silberschatz식 구현은 먼저 값을 줄이고 검사하므로 음수가 될 수 있고, 그 절댓값이 기다리는 스레드 수다. 리눅스 sem_overview(7)은 POSIX 세마포어를 0 아래로 내려가지 않는 정수로 정의하고 값이 0이면 sem_wait이 막힌다.",
   "unit": 6,
   "about": [
    "semaphore"
   ]
  },
  {
   "id": "2026-11-23-06-q5",
   "text": "리눅스 glibc의 pthread_mutex_lock은 futex로 잠들기 전에 얼마나 스핀하며, 2단계 락의 첫 단계 길이는 어떻게 정하는가?",
   "answered": false,
   "answer": null,
   "unit": 6,
   "about": [
    "mutex",
    "futex",
    "spinlock"
   ]
  },
  {
   "id": "2026-11-23-06-q6",
   "text": "리눅스 커널 안의 스핀락은 락을 쥔 동안 선점과 인터럽트를 어떻게 다루며, spin_lock과 spin_lock_irqsave는 언제 나눠 쓰는가?",
   "answered": false,
   "answer": null,
   "unit": 6,
   "about": [
    "spinlock",
    "interrupt-disabling"
   ]
  },
  {
   "id": "2026-11-23-07-q1",
   "text": "자원 할당 그래프에 사이클이 있으면 항상 교착 상태인가?",
   "answered": true,
   "answer": "자원 유형마다 인스턴스가 하나뿐이면 그렇다. 인스턴스가 여럿이면 사이클은 교착의 필요조건일 뿐이다. 사이클 밖에서 요청 없이 인스턴스를 쥔 프로세스가 끝나 반납하면 사이클 안의 요청이 채워져 풀린다. 사이클이 없으면 교착도 없다.",
   "unit": 7,
   "about": [
    "resource-allocation-graph",
    "circular-wait",
    "deadlock"
   ]
  },
  {
   "id": "2026-11-23-07-q2",
   "text": "불안전 상태는 곧 교착 상태인가?",
   "answered": true,
   "answer": "아니다. 불안전 상태는 모든 프로세스가 최대 요구를 실제로 요청한다고 가정했을 때 끝낼 순서를 보장하지 못하는 상태다. 프로세스가 최대치보다 적게 요청하거나 일찍 반납하면 교착 없이 끝날 수 있다. 은행원 알고리즘은 그 가능성까지 막으려고 불안전해지는 요청을 보류한다(예제: P0의 B 1개 요청은 B가 2개 남아 있어도 보류).",
   "unit": 7,
   "about": [
    "safe-state",
    "bankers-algorithm",
    "deadlock"
   ]
  },
  {
   "id": "2026-11-23-07-q3",
   "text": "은행원 알고리즘은 왜 범용 운영체제에서 거의 쓰이지 않는가?",
   "answered": true,
   "answer": "각 프로세스의 최대 요구를 미리 알아야 하고, 프로세스 수가 고정이라고 가정하며, 반납이 '언젠가'만 보장되면 되는데 실제로 몇 시간씩 기다리는 것은 받아들일 수 없다. 또 안전을 위해 동시 실행을 보수적으로 제한해 성능을 잃는다. OSTEP은 작업과 락을 모두 아는 임베디드 시스템 같은 제한된 환경에서만 유용하다고 본다.",
   "unit": 7,
   "about": [
    "bankers-algorithm",
    "deadlock-avoidance"
   ]
  },
  {
   "id": "2026-11-23-07-q4",
   "text": "trylock으로 교착을 피하면 생기는 라이브락은 어떻게 줄이는가?",
   "answered": true,
   "answer": "두 스레드가 L1을 잡고 L2 trylock에 실패해 L1을 놓는 과정을 똑같은 박자로 되풀이하면 둘 다 실행 중인데 진행이 없다. 다시 시도하기 전에 무작위 지연을 두면 박자가 어긋나 반복 충돌 확률이 줄어든다. 탐지·회복에서도 여러 프로세스가 동시에 행동하면 라이브락이 생길 수 있어, 한 프로세스만 행동하게 하는 방법이 제안된다.",
   "unit": 7,
   "about": [
    "livelock",
    "no-preemption",
    "deadlock-prevention"
   ]
  },
  {
   "id": "2026-11-23-07-q5",
   "text": "lockdep은 개발 중 커널 락 순서를 검사한다. 운영 중인 리눅스 커널이 교착에 빠진 태스크를 찾아 알리는 장치(예: hung task 감지)는 어떤 기준으로 동작하는가?",
   "answered": false,
   "answer": null,
   "unit": 7,
   "about": [
    "deadlock-detection",
    "lock-ordering"
   ]
  },
  {
   "id": "2026-11-23-07-q6",
   "text": "실제 데이터베이스 시스템은 교착 탐지를 얼마나 자주, 어떤 기준으로 돌리고, 희생자 트랜잭션은 어떻게 고르는가?",
   "answered": false,
   "answer": null,
   "unit": 7,
   "about": [
    "deadlock-detection",
    "deadlock-recovery"
   ]
  },
  {
   "id": "2026-11-23-08-q1",
   "text": "32비트 주소, 4KB 페이지에서 가상 주소 0x00403A7C의 페이지 번호가 0x403에 매핑된 프레임 번호가 0x1F2이면 물리 주소는?",
   "answered": true,
   "answer": "아래 12비트가 오프셋(0xA7C), 위 20비트가 페이지 번호(0x00403 = 1027)다. 페이지 테이블 1027번 항목의 프레임 번호 0x1F2를 12비트 왼쪽으로 밀고 오프셋을 그대로 붙이면 0x001F2A7C(10진수 2042492)다.",
   "unit": 8,
   "about": [
    "paging",
    "page-table",
    "logical-address",
    "physical-address"
   ]
  },
  {
   "id": "2026-11-23-08-q2",
   "text": "메모리 접근 100ns, TLB 검색 20ns일 때 히트율 80%와 98%의 유효 접근 시간은?",
   "answered": true,
   "answer": "히트는 20+100 = 120ns, 미스는 20+100(페이지 테이블)+100(데이터) = 220ns다. 80%면 0.8×120 + 0.2×220 = 140ns, 98%면 0.98×120 + 0.02×220 = 122ns다. 미스 때 4단계 표를 읽는다면 미스 비용이 커져 히트율이 낮을수록 차이가 벌어진다.",
   "unit": 8,
   "about": [
    "effective-access-time",
    "tlb"
   ]
  },
  {
   "id": "2026-11-23-08-q3",
   "text": "압축은 왜 실행 시간 바인딩에서만 가능한가?",
   "answered": true,
   "answer": "컴파일·적재 시간 바인딩에서는 물리 주소가 코드에 박혀 있어 옮기면 주소가 틀어진다. 실행 시간 바인딩이면 프로그램은 논리 주소만 쓰므로 메모리를 복사한 뒤 베이스(재배치) 레지스터 값만 고치면 된다.",
   "unit": 8,
   "about": [
    "compaction",
    "address-binding",
    "base-limit-register"
   ]
  },
  {
   "id": "2026-11-23-08-q4",
   "text": "다단계 페이지 테이블은 왜 선형 페이지 테이블보다 메모리를 덜 쓰고, 대가는 무엇인가?",
   "answered": true,
   "answer": "페이지 테이블을 페이지 크기 조각으로 나눠 모든 항목이 invalid인 조각은 아예 만들지 않으므로 표 크기가 실제 쓰는 주소 공간에 비례한다. 대신 TLB 미스 때 단계 수만큼 메모리를 더 읽어야 한다(시간-공간 맞교환). TLB 히트일 때 성능은 같다.",
   "unit": 8,
   "about": [
    "multilevel-page-table",
    "page-table"
   ]
  },
  {
   "id": "2026-11-23-08-q5",
   "text": "최초 적합에서 할당 블록 N개당 약 0.5N개가 단편화로 사라진다는 통계 결과는 어떤 분석에서 나왔고 어떤 가정에서 성립하는가?",
   "answered": false,
   "answer": null,
   "unit": 8,
   "about": [
    "first-fit",
    "external-fragmentation"
   ]
  },
  {
   "id": "2026-11-23-08-q6",
   "text": "페이지 워크 캐시가 있는 실제 x86-64 CPU에서 TLB 미스 한 번은 평균 몇 번의 메모리(또는 캐시) 접근으로 끝나는가?",
   "answered": false,
   "answer": null,
   "unit": 8,
   "about": [
    "multilevel-page-table",
    "tlb",
    "effective-access-time"
   ]
  },
  {
   "id": "2026-11-23-09-q1",
   "text": "페이지 폴트가 나면 하드웨어와 운영체제가 어떤 순서로 무엇을 하는가?",
   "answered": true,
   "answer": "MMU가 PTE의 present 비트가 0인 것을 보고 페이지 폴트 예외를 일으켜 커널로 들어간다. 커널은 주소가 유효한지 검사해 잘못된 주소면 프로세스를 끝내고, 유효하면 빈 프레임을 찾는다(없으면 교체 정책으로 victim을 고르고 dirty면 디스크에 쓴다). 디스크에서 페이지를 읽는 동안 프로세스는 대기하고 다른 프로세스가 실행된다. 읽기가 끝나면 PTE에 present=1과 PFN을 기록하고 폴트를 낸 명령어를 처음부터 다시 실행한다.",
   "unit": 9,
   "about": [
    "page-fault",
    "present-bit",
    "demand-paging"
   ]
  },
  {
   "id": "2026-11-23-09-q2",
   "text": "프레임을 늘렸는데 페이지 폴트가 늘어날 수 있는가?",
   "answered": true,
   "answer": "FIFO에서는 그렇다(벨레이디의 이상 현상). 참조열 1 2 3 4 1 2 5 1 2 3 4 5에서 프레임 3개면 9번, 4개면 10번 폴트가 난다. LRU와 OPT는 프레임 N개일 때 메모리 내용이 N+1개일 때의 부분집합이 되는 스택 알고리즘이라 프레임을 늘려도 폴트가 늘지 않는다.",
   "unit": 9,
   "about": [
    "beladys-anomaly",
    "fifo-page-replacement",
    "stack-algorithm"
   ]
  },
  {
   "id": "2026-11-23-09-q3",
   "text": "큰 프로세스를 fork해도 왜 빠른가?",
   "answered": true,
   "answer": "쓰기 시 복사 덕분이다. fork는 부모의 페이지를 복사하지 않고 자식 주소 공간에 같은 페이지를 읽기 전용으로 매핑한다. 어느 쪽이든 쓰려고 하면 폴트가 나고 그때 그 페이지만 복사한다. 자식이 곧바로 exec하면 대부분의 페이지는 끝내 복사되지 않는다. 리눅스도 fork에서 이렇게 게으른 복사를 한다.",
   "unit": 9,
   "about": [
    "copy-on-write",
    "fork"
   ]
  },
  {
   "id": "2026-11-23-09-q4",
   "text": "스래싱은 왜 생기고 어떻게 막는가?",
   "answered": true,
   "answer": "실행 중인 프로세스들의 작업 집합 크기 합이 물리 프레임 수를 넘으면 곧 다시 쓸 페이지를 계속 내보내게 된다. 이때 CPU 이용률이 떨어지는데, 이용률만 보고 프로세스를 더 넣는 스케줄러는 상황을 악화시킨다. 작업 집합 모델로 합이 프레임 수를 넘지 않게 일부 프로세스를 멈추거나(승인 제어), 페이지 폴트 빈도로 프레임을 조절해 막는다. 일부 리눅스는 메모리가 넘치면 OOM killer로 프로세스를 죽인다.",
   "unit": 9,
   "about": [
    "thrashing",
    "working-set",
    "page-fault-frequency"
   ]
  },
  {
   "id": "2026-11-23-09-q5",
   "text": "지금의 리눅스 커널은 페이지 교체에 정확히 어떤 알고리즘을 기본으로 쓰는가? OSTEP이 설명한 active/inactive 두 리스트(2Q 변형)가 여전히 기본인가, 다른 방식으로 바뀌었는가?",
   "answered": false,
   "answer": null,
   "unit": 9,
   "about": [
    "page-replacement",
    "clock-algorithm",
    "lru"
   ]
  },
  {
   "id": "2026-11-23-09-q6",
   "text": "x86의 rep movs처럼 한 명령어가 페이지 경계를 넘나들며 많은 데이터를 옮기다가 중간에 페이지 폴트가 나면, 명령어 재실행이 올바르게 되도록 하드웨어와 커널은 무엇을 보장하는가?",
   "answered": false,
   "answer": null,
   "unit": 9,
   "about": [
    "page-fault"
   ]
  },
  {
   "id": "2026-11-23-10-q1",
   "text": "7,200 RPM, 평균 탐색 9ms, 최대 전송률 105MB/s인 Barracuda에서 4KB 무작위 읽기 한 번은 얼마나 걸리고, 처리율은 얼마인가?",
   "answered": true,
   "answer": "한 바퀴는 60,000/7,200 = 8.33ms라 평균 회전 지연은 반 바퀴 4.17ms다. 전송은 4KB ÷ 105MB/s ≈ 0.04ms다. T ≈ 9 + 4.17 + 0.04 = 13.2ms이고 처리율은 4KB/13.2ms ≈ 0.30MB/s다. 같은 디스크로 100MB를 순차로 읽으면 약 965ms(≈104MB/s)라 300배 넘게 차이 난다.",
   "unit": 10,
   "about": [
    "disk-access-time",
    "seek-time",
    "rotational-latency"
   ]
  },
  {
   "id": "2026-11-23-10-q2",
   "text": "실린더 0~199, 헤드 53(0 쪽으로 이동 중), 요청 큐 98, 183, 37, 122, 14, 124, 65, 67에서 각 알고리즘의 총 헤드 이동 거리는?",
   "answered": true,
   "answer": "FCFS 640, SSTF 236(53→65→67→37→14→98→122→124→183), SCAN 236(0까지 갔다가 반전), LOOK 208(14에서 반전), C-SCAN 386(복귀 199 포함, 빼면 187), C-LOOK 326(14→183 점프 169 포함, 빼면 157). 파이썬으로 다시 계산해 확인했고 FCFS 640, SSTF 236은 UIC 강의 노트 값과 같다.",
   "unit": 10,
   "about": [
    "disk-scheduling",
    "sstf",
    "scan-scheduling",
    "c-scan",
    "look-scheduling"
   ]
  },
  {
   "id": "2026-11-23-10-q3",
   "text": "블록당 4페이지인 SSD에 논리 블록 100, 101, 2000, 2001을 쓰고 100, 101을 덮어쓴 뒤 블록 0을 GC하면 쓰기 증폭은 얼마인가?",
   "answered": true,
   "answer": "호스트는 6페이지를 썼다. 플래시는 첫 쓰기 4페이지, 덮어쓰기 2페이지, GC가 살아 있는 2000·2001을 옮기며 2페이지를 프로그램해 8페이지를 썼다. 쓰기 증폭은 8/6 ≈ 1.33이고, 그 사이 블록 지우기가 2번(블록 1, 블록 0) 일어났다.",
   "unit": 10,
   "about": [
    "write-amplification",
    "ssd-garbage-collection",
    "ftl"
   ]
  },
  {
   "id": "2026-11-23-10-q4",
   "text": "RAID 5에서 디스크 하나가 고장 나면 어떻게 복구하고, 작은 쓰기 한 번에 왜 I/O가 4번 드는가?",
   "answered": true,
   "answer": "같은 스트라이프의 남은 데이터 블록과 패리티 블록을 모두 XOR하면 잃은 블록이 나온다(예: 0110 ⊕ 1011 ⊕ 0001 = 1100). 작은 쓰기는 P_new = (D_old ⊕ D_new) ⊕ P_old 로 패리티를 고치므로 옛 데이터·옛 패리티 읽기 2번과 새 데이터·새 패리티 쓰기 2번이 필요하다.",
   "unit": 10,
   "about": [
    "raid-parity",
    "raid"
   ]
  },
  {
   "id": "2026-11-23-10-q5",
   "text": "리눅스는 장치마다 기본 I/O 스케줄러(mq-deadline, none 등)를 어떤 기준으로 정하는가? NVMe SSD와 SATA HDD의 기본값은 각각 무엇인가?",
   "answered": false,
   "answer": null,
   "unit": 10,
   "about": [
    "linux-io-scheduler",
    "ssd"
   ]
  },
  {
   "id": "2026-11-23-10-q6",
   "text": "용량이 큰 HDD로 만든 RAID 5에서 디스크 하나를 재구축하는 동안 다른 디스크의 읽기 오류(URE) 때문에 재구축이 실패할 위험은 실제로 얼마나 큰가?",
   "answered": false,
   "answer": null,
   "unit": 10,
   "about": [
    "raid",
    "raid-parity"
   ]
  },
  {
   "id": "2026-11-23-11-q1",
   "text": "블록 4KiB, 포인터 4바이트, 직접 포인터 12개와 단일·이중·삼중 간접 포인터 하나씩인 inode가 가리킬 수 있는 최대 파일 크기는?",
   "answered": true,
   "answer": "블록당 포인터는 4096 ÷ 4 = 1024개다. 데이터 블록은 직접 12 + 단일 1024 + 이중 1024² + 삼중 1024³ = 1,074,791,436개이고, 4KiB를 곱하면 4,402,345,721,856바이트, 약 4.004 TiB다. 단계별로는 48 KiB, 4 MiB, 4 GiB, 4 TiB이며 블록 1KiB면 약 16.06 GiB다.",
   "unit": 11,
   "about": [
    "indirect-block",
    "inode"
   ]
  },
  {
   "id": "2026-11-23-11-q2",
   "text": "부모가 파일을 연 뒤 fork()하고, 자식이 lseek(fd, 10, SEEK_SET)을 하고 끝나면 부모가 lseek(fd, 0, SEEK_CUR)로 읽는 오프셋은? 같은 파일을 두 번 open()한 경우와 무엇이 다른가?",
   "answered": true,
   "answer": "10이다. fork()한 자식의 fd는 부모와 같은 열린 파일 항목을 가리키고(참조 수 2) 오프셋은 그 항목에 있기 때문이다. 같은 파일을 두 번 open()하면 열린 파일 항목이 두 개 생겨 오프셋이 따로 움직인다.",
   "unit": 11,
   "about": [
    "open-file-table",
    "file-descriptor",
    "fork"
   ]
  },
  {
   "id": "2026-11-23-11-q3",
   "text": "캐시가 비어 있을 때 open(\"/foo/bar\")은 디스크를 몇 번 읽고, read() 한 번은 어떤 I/O를 일으키나?",
   "answered": true,
   "answer": "OSTEP의 vsfs 예에서 open은 루트 inode(2번), 루트 디렉터리 데이터, foo inode, foo 데이터, bar inode를 읽어 5번이다. 경로가 한 단계 길어질 때마다 최소 2번씩 는다. read()는 inode로 블록 위치를 찾아 데이터 블록을 읽고 접근 시간을 갱신하려고 inode를 쓴다. 비트맵은 읽지 않는다.",
   "unit": 11,
   "about": [
    "path-resolution",
    "inode",
    "directory"
   ]
  },
  {
   "id": "2026-11-23-11-q4",
   "text": "ext4 ordered 모드에서 데이터 블록은 제자리에 썼지만 커밋 블록(TxE)을 쓰기 전에 크래시가 나면 재부팅 뒤 어떻게 되나?",
   "answered": true,
   "answer": "저널에 커밋 기록이 없으므로 복구는 그 트랜잭션을 버린다. inode와 비트맵은 옛 상태로 남아 새 데이터 블록을 아무도 가리키지 않는다. 파일 시스템은 일관되고, 쓰기는 일어나지 않은 것과 같다(사용자는 그 데이터를 잃는다).",
   "unit": 11,
   "about": [
    "metadata-journaling",
    "journaling",
    "crash-consistency"
   ]
  },
  {
   "id": "2026-11-23-11-q5",
   "text": "ext3에서 4KiB 블록일 때 실제 최대 파일 크기는 정확히 얼마이고, 포인터 트리 계산(약 4TiB)보다 작아지는 이유는 i_blocks의 512바이트 단위 32비트 카운터뿐인가?",
   "answered": false,
   "answer": null,
   "unit": 11,
   "about": [
    "indirect-block",
    "inode"
   ]
  },
  {
   "id": "2026-11-23-11-q6",
   "text": "리눅스 커널 문서는 ext4 data=journal을 폐기 예정(2028년 1월 제거)으로 적고 있다. 왜 없애기로 했고, 데이터까지 원자적으로 기록하던 용도는 무엇으로 대신하나?",
   "answered": false,
   "answer": null,
   "unit": 11,
   "about": [
    "metadata-journaling",
    "journaling"
   ]
  },
  {
   "id": "2026-11-23-12-q1",
   "text": "인터럽트가 있는데도 폴링이 더 나은 경우는 언제인가?",
   "answered": true,
   "answer": "장치가 아주 빨라 첫 확인에서 대개 끝나 있을 때다. 문맥 교환과 인터럽트 처리 비용이 기다리는 시간보다 크기 때문이다. 패킷이 쏟아지는 네트워크처럼 인터럽트가 폭주해 라이브락에 빠질 수 있을 때도 폴링을 섞는 편이 낫다. 속도를 모르면 잠깐 폴링한 뒤 인터럽트로 바꾸는 2단계 방식을 쓴다(OSTEP 36장). 리눅스 NAPI가 이런 혼합 방식이다.",
   "unit": 12,
   "about": [
    "polling",
    "interrupt-driven-io",
    "napi"
   ]
  },
  {
   "id": "2026-11-23-12-q2",
   "text": "DMA를 시킬 때 드라이버가 버퍼의 가상 주소를 장치에 그대로 넘기면 안 되는 이유는?",
   "answered": true,
   "answer": "장치는 CPU의 가상 메모리 시스템(MMU)을 거치지 않고 버스(DMA) 주소를 쓴다. IOMMU나 호스트 브리지 때문에 DMA 주소가 물리 주소와도 다를 수 있다. 그래서 리눅스 드라이버는 dma_map_single() 같은 DMA API로 버퍼를 매핑하고 돌려받은 DMA 주소를 장치에 준다. vmalloc 메모리나 스택은 DMA에 쓸 수 없다(커널 Dynamic DMA mapping Guide).",
   "unit": 12,
   "about": [
    "dma",
    "mmu",
    "physical-address"
   ]
  },
  {
   "id": "2026-11-23-12-q3",
   "text": "디스크의 일반 파일을 O_NONBLOCK이나 epoll로 기다리지 않고 읽을 수 있나?",
   "answered": true,
   "answer": "아니다. open(2)에 따르면 O_NONBLOCK은 일반 파일과 블록 장치에 효과가 없어 read()가 디스크를 기다릴 수 있다. epoll_ctl(2)은 일반 파일이나 디렉터리를 넣으면 EPERM으로 거부한다. 파일 읽기를 기다리지 않으려면 io_uring 같은 비동기 입출력으로 요청을 넣고 완료 통지를 받아야 한다.",
   "unit": 12,
   "about": [
    "non-blocking-io",
    "io-multiplexing",
    "asynchronous-io"
   ]
  },
  {
   "id": "2026-11-23-12-q4",
   "text": "NVMe 같은 빠른 SSD에서는 폴링이 인터럽트보다 언제부터 유리하며, 리눅스 블록 계층은 장치마다 폴링과 인터럽트를 어떤 기준으로 고르는가?",
   "answered": false,
   "answer": null,
   "unit": 12,
   "about": [
    "polling",
    "interrupt-driven-io",
    "ssd"
   ]
  },
  {
   "id": "2026-11-23-12-q5",
   "text": "인터럽트 병합에서 기다리는 시간과 묶는 개수의 기본값은 장치·드라이버마다 어떻게 정해지고, 지연과 처리량 사이를 자동으로 조정하는 방식이 있는가?",
   "answered": false,
   "answer": null,
   "unit": 12,
   "about": [
    "interrupt-coalescing",
    "napi"
   ]
  },
  {
   "id": "2026-11-23-12-q6",
   "text": "IOMMU는 DMA 주소를 어떤 표로 변환하며, 악의적이거나 고장 난 장치가 아무 메모리에나 DMA로 쓰는 것을 어떻게 막는가?",
   "answered": false,
   "answer": null,
   "unit": 12,
   "about": [
    "dma",
    "mmu"
   ]
  },
  {
   "id": "2026-11-23-13-q1",
   "text": "ACL과 capability 중 권한을 회수하기 쉬운 쪽은 어디이고 왜 그런가?",
   "answered": true,
   "answer": "ACL이다. 권한 정보가 객체 옆 한곳에 있어 목록에서 지우면 끝난다. capability는 주체에게 흩어져 있고 복사될 수 있어서, 커널이 독점 보관하지 않으면 사본을 모두 찾아야 한다.",
   "unit": 13,
   "about": [
    "access-control-list",
    "capability"
   ]
  },
  {
   "id": "2026-11-23-13-q2",
   "text": "파일을 연 뒤 chmod 0으로 권한을 모두 빼앗으면 이미 받은 파일 디스크립터로 계속 읽을 수 있는가?",
   "answered": true,
   "answer": "읽을 수 있다. 리눅스는 open() 때만 권한(ACL)을 검사하고, 이후 read·write는 PCB에 달린 capability 같은 구조(파일 디스크립터)만 확인한다. 새로 open()하면 그때 거부된다. WSL Ubuntu 24.04에서 확인했다.",
   "unit": 13,
   "about": [
    "access-control-list",
    "capability",
    "unix-file-permission"
   ]
  },
  {
   "id": "2026-11-23-13-q3",
   "text": "솔트는 비밀이 아닌데도 왜 비밀번호 파일 유출 피해를 줄이는가?",
   "answered": true,
   "answer": "비밀번호마다 솔트가 다르므로 공격자가 사전을 미리 한 번 해시해 두는 방법(사전 계산·레인보 테이블)을 쓸 수 없다. 32비트 솔트면 단어마다 2^32개 변환이 필요하다. 대신 항목마다 추측을 새로 해시해야 하므로 비용이 커진다. 약한 비밀번호 자체를 막지는 못한다.",
   "unit": 13,
   "about": [
    "password-salt",
    "authentication"
   ]
  },
  {
   "id": "2026-11-23-13-q4",
   "text": "포트 80만 열면 되는 웹 서버를 root로 실행하지 않으려면 어떻게 하는가?",
   "answered": true,
   "answer": "1024 미만 포트 바인딩은 CAP_NET_BIND_SERVICE 하나로 허용된다. 실행 파일에 setcap cap_net_bind_service=+ep로 파일 capability를 주거나 그 capability만 가진 채 실행하면, root의 나머지 특권 없이 포트를 열 수 있다(최소 권한).",
   "unit": 13,
   "about": [
    "linux-capabilities",
    "least-privilege",
    "superuser"
   ]
  },
  {
   "id": "2026-11-23-13-q5",
   "text": "Ubuntu 24.04의 PAM은 yescrypt, login.defs는 SHA512로 설정돼 있는데 passwd로 바꾼 비밀번호는 실제로 어느 방식으로 저장되며, yescrypt는 OWASP 권장 알고리즘과 비교해 어떤 위치인가?",
   "answered": false,
   "answer": null,
   "unit": 13,
   "about": [
    "password-salt"
   ]
  },
  {
   "id": "2026-11-23-13-q6",
   "text": "64비트 리눅스에서 randomize_va_space=2일 때 스택·mmap·PIE 위치는 기본적으로 몇 비트씩 무작위이고, 주소 유출이 없으면 무차별 대입에 얼마나 걸리는가?",
   "answered": false,
   "answer": null,
   "unit": 13,
   "about": [
    "aslr"
   ]
  }
 ],
 "examples": [
  {
   "id": "dual-mode-ex1",
   "concept": "dual-mode",
   "kind": "analogy",
   "body": "은행: 고객(사용자 모드)은 금고에 직접 들어갈 수 없고 창구(시스템 콜)에 요청한다. 금고 열쇠를 가진 직원(커널)만 금고(하드웨어)에 들어간다."
  },
  {
   "id": "timer-interrupt-ex1",
   "concept": "timer-interrupt",
   "kind": "analogy",
   "body": "시험 감독: 학생이 스스로 답안을 내길 기다리면(협력적 방식) 끝날 수 없다. 그래서 종을 울려 시간이 되면 강제로 걷는다(타이머 인터럽트)."
  },
  {
   "id": "privileged-instruction-ex1",
   "concept": "privileged-instruction",
   "kind": "code",
   "body": "// x86-64 리눅스, 사용자 프로그램\nint main(void) {\n    __asm__ volatile(\"cli\");  // 인터럽트 끄기 = 특권 명령어\n    return 0;\n}\n// 실행 결과: general protection fault → Segmentation fault"
  },
  {
   "id": "trap-ex1",
   "concept": "trap",
   "kind": "code",
   "body": "#include <unistd.h>\nint main(void) {\n    write(1, \"hi\\n\", 3);  // libc가 syscall 명령어(트랩)로 커널에 진입\n    return 0;\n}"
  },
  {
   "id": "syscall-wrapper-ex1",
   "concept": "syscall-wrapper",
   "kind": "code",
   "body": "#define _GNU_SOURCE\n#include <stdio.h>\n#include <sys/syscall.h>   // SYS_getpid, SYS_gettid 같은 번호 상수\n#include <unistd.h>\n\nint main(void) {\n    pid_t a = getpid();             // libc 래퍼\n    long  b = syscall(SYS_getpid);  // 번호로 직접 호출 (x86-64에서 39번)\n    long  t = syscall(SYS_gettid);  // 번호로 직접 호출\n    printf(\"%d %ld %ld\\n\", a, b, t);   // a와 b는 같은 값\n    return 0;\n}"
  },
  {
   "id": "system-call-parameter-passing-ex1",
   "concept": "system-call-parameter-passing",
   "kind": "code",
   "body": "#include <stddef.h>\n\nlong my_write(int fd, const void *buf, size_t n) {\n    long ret;\n    __asm__ volatile (\"syscall\"\n        : \"=a\"(ret)                    // 반환값: rax\n        : \"a\"(1L),                     // 번호: rax = 1 (write)\n          \"D\"(fd), \"S\"(buf), \"d\"(n)    // 인자: rdi, rsi, rdx\n        : \"rcx\", \"r11\", \"memory\");     // 표에 없는 레지스터도 바뀔 수 있다\n    return ret;\n}"
  },
  {
   "id": "system-call-ex1",
   "concept": "system-call",
   "kind": "analogy",
   "body": "관공서 민원 창구: 민원인(프로그램)은 서류 번호(시스템 콜 번호)와 첨부 서류(인자)를 내고 기다린다. 창구 직원(커널)은 번호를 보고 담당 부서(커널 함수)로 넘기고 처리 결과(반환값)를 돌려준다."
  },
  {
   "id": "microkernel-ex1",
   "concept": "microkernel",
   "kind": "analogy",
   "body": "모놀리식 커널은 한 층에 모든 부서가 모인 회사라 말로 바로 부탁하니 빠르지만 불이 나면 층 전체가 위험하다. 마이크로커널은 본사(커널)에 우편실만 두고 부서를 다른 건물(사용자 공간 서버)에 둔 회사라, 한 건물에 불이 나도 본사는 멀쩡하지만 모든 부탁이 우편(IPC)으로 오가서 느리다."
  },
  {
   "id": "boot-process-ex1",
   "concept": "boot-process",
   "kind": "analogy",
   "body": "릴레이 경주: 펌웨어가 첫 주자로 바통(제어권)을 부트로더에 넘기고, 부트로더는 커널에, 커널은 init에 넘긴다. 앞 주자는 다음 주자를 트랙(메모리)에 세워 놓고 바통을 건넨다."
  },
  {
   "id": "process-ex1",
   "concept": "process",
   "kind": "analogy",
   "body": "레시피와 요리: 프로그램은 책장에 꽂힌 레시피고, 프로세스는 그 레시피로 지금 요리하는 중인 상황이다. 같은 레시피로 두 사람이 동시에 요리할 수 있듯 한 프로그램으로 여러 프로세스를 만들 수 있다."
  },
  {
   "id": "context-switch-ex1",
   "concept": "context-switch",
   "kind": "analogy",
   "body": "책갈피: 여러 책을 번갈아 읽는 사람은 책을 덮기 전에 책갈피(PCB)를 끼워 두고, 다음 책은 그 책의 책갈피 위치부터 읽는다."
  },
  {
   "id": "fork-ex1",
   "concept": "fork",
   "kind": "code",
   "body": "int rc = fork();\nif (rc < 0) {\n    exit(1);                       // 실패\n} else if (rc == 0) {              // 자식\n    char *args[] = {\"wc\", \"p3.c\", NULL};\n    execvp(args[0], args);         // 성공하면 돌아오지 않는다\n} else {                           // 부모: rc == 자식 PID\n    int done = wait(NULL);         // 자식이 끝날 때까지 대기\n    printf(\"child %d finished\\n\", done);\n}"
  },
  {
   "id": "zombie-process-ex1",
   "concept": "zombie-process",
   "kind": "code",
   "body": "#include <stdlib.h>\n#include <unistd.h>\nint main(void) {\n    if (fork() == 0)\n        exit(0);       // 자식 종료 → 좀비\n    sleep(30);         // 이 30초 동안 자식은 좀비로 남는다\n    return 0;          // 부모가 끝나면 init이 좀비를 회수\n}"
  },
  {
   "id": "pipe-ex1",
   "concept": "pipe",
   "kind": "code",
   "body": "int fd[2];\npipe(fd);                         // fd[0] 읽기, fd[1] 쓰기\nif (fork() == 0) {                // 자식\n    close(fd[1]);\n    char buf[32] = {0};\n    read(fd[0], buf, sizeof buf - 1);\n    printf(\"child got: %s\\n\", buf);\n    return 0;\n}\nclose(fd[0]);                     // 부모\nwrite(fd[1], \"hello\", 5);\nclose(fd[1]);\nwait(NULL);"
  },
  {
   "id": "thread-ex1",
   "concept": "thread",
   "kind": "analogy",
   "body": "주방: 한 주방(주소 공간)을 여러 요리사(스레드)가 함께 쓴다. 냉장고와 재료(힙·전역 데이터)는 같이 쓰지만, 레시피를 어디까지 했는지(PC)와 자기 도마(스택)는 각자 있다."
  },
  {
   "id": "concurrency-vs-parallelism-ex1",
   "concept": "concurrency-vs-parallelism",
   "kind": "analogy",
   "body": "요리사 한 명이 국을 끓이다 잠깐 찌개를 젓고 다시 국으로 돌아오면 동시성, 요리사 두 명이 국과 찌개를 하나씩 맡으면 병렬성이다."
  },
  {
   "id": "pthread-create-ex1",
   "concept": "pthread-create",
   "kind": "code",
   "body": "#include <pthread.h>\n#include <stdio.h>\n\nvoid *worker(void *arg) {\n    printf(\"%s\\n\", (char *) arg);\n    return NULL;\n}\n\nint main(void) {\n    pthread_t t1, t2;\n    printf(\"main: begin\\n\");\n    pthread_create(&t1, NULL, worker, \"A\");\n    pthread_create(&t2, NULL, worker, \"B\");\n    pthread_join(t1, NULL);   // A, B 출력 순서는 실행마다 다를 수 있다\n    pthread_join(t2, NULL);\n    printf(\"main: end\\n\");   // join 두 번 뒤라 항상 마지막\n    return 0;\n}\n// gcc -Wall -pthread -o t0 t0.c"
  },
  {
   "id": "clone-ex1",
   "concept": "clone",
   "kind": "code",
   "body": "#define _GNU_SOURCE\n#include <sched.h>\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/syscall.h>\n\nstatic int counter = 0;\nstatic long child_pid, child_tid;\n\nstatic int child_fn(void *arg) {\n    counter++;                          // CLONE_VM: 부모와 같은 메모리\n    child_pid = syscall(SYS_getpid);    // TGID\n    child_tid = syscall(SYS_gettid);    // TID\n    return 0;\n}\n\nint main(void) {\n    const size_t SZ = 1024 * 1024;\n    char *stack = malloc(SZ);\n    int flags = CLONE_VM | CLONE_FS | CLONE_FILES | CLONE_SIGHAND | CLONE_THREAD;\n    clone(child_fn, stack + SZ, flags, NULL);   // 스택은 아래로 자라므로 끝 주소\n    sleep(1);                           // CLONE_THREAD는 wait()로 기다릴 수 없다\n    printf(\"child : pid=%ld tid=%ld\\n\", child_pid, child_tid);\n    printf(\"parent: pid=%ld tid=%ld counter=%d\\n\",\n           (long) syscall(SYS_getpid), (long) syscall(SYS_gettid), counter);\n    return 0;\n}\n// 예상: 두 줄의 pid는 같고 tid만 다르며 counter=1"
  },
  {
   "id": "amdahls-law-ex1",
   "concept": "amdahls-law",
   "kind": "code",
   "body": "S(N) = 1 / ((1 - p) + p / N)\np = 0.95, N = 8  ->  1 / (0.05 + 0.11875) = 1 / 0.16875 ≈ 5.9배\np = 0.95, N → ∞  ->  1 / 0.05 = 20배 (상한)"
  },
  {
   "id": "convoy-effect-ex1",
   "concept": "convoy-effect",
   "kind": "analogy",
   "body": "마트 계산대: 우유 하나만 든 손님 셋이 카트 세 대를 가득 채운 손님 뒤에 서면, 셋 다 한참 기다린다. 짧은 작업을 먼저 보내는 '소량 계산대'가 SJF의 발상이다."
  },
  {
   "id": "round-robin-ex1",
   "concept": "round-robin",
   "kind": "code",
   "body": "#include <stdio.h>\n\n#define N 4\n#define Q 2   /* 타임 퀀텀 */\n\nint main(void) {\n    const char name[N] = {'A', 'B', 'C', 'D'};\n    int arrive[N] = {0, 2, 3, 4};\n    int burst[N]  = {6, 4, 1, 2};\n    int left[N], first[N], done[N];\n    int queue[64], head = 0, tail = 0, next = 0, t = 0;\n\n    for (int i = 0; i < N; i++) { left[i] = burst[i]; first[i] = -1; }\n    while (next < N && arrive[next] <= t) queue[tail++] = next++;\n\n    while (head < tail || next < N) {\n        if (head == tail) { t = arrive[next]; queue[tail++] = next++; continue; }\n        int p = queue[head++];\n        if (first[p] < 0) first[p] = t;\n        int run = left[p] < Q ? left[p] : Q;\n        t += run;\n        left[p] -= run;\n        /* 이번 퀀텀 동안 도착한 작업을 먼저 넣고, 쫓겨난 작업은 그 뒤에 */\n        while (next < N && arrive[next] <= t) queue[tail++] = next++;\n        if (left[p] > 0) queue[tail++] = p;\n        else done[p] = t;\n    }\n    for (int i = 0; i < N; i++)\n        printf(\"%c 반환 %2d  대기 %2d  응답 %d\\n\", name[i],\n               done[i] - arrive[i], done[i] - arrive[i] - burst[i],\n               first[i] - arrive[i]);\n    return 0;\n}\n// 출력: A 반환 13 대기 7 응답 0 / B 9 5 0 / C 4 3 3 / D 5 3 3"
  },
  {
   "id": "time-quantum-ex1",
   "concept": "time-quantum",
   "kind": "analogy",
   "body": "토론 사회자: 한 사람당 발언 시간을 너무 짧게 주면 마이크를 넘기는 데 드는 시간이 더 많아지고, 너무 길게 주면 한 사람이 말을 마칠 때까지 다른 사람은 입을 열지 못한다."
  },
  {
   "id": "aging-ex1",
   "concept": "aging",
   "kind": "analogy",
   "body": "응급실: 위급한 환자(높은 우선순위)가 계속 들어오면 가벼운 환자는 끝없이 밀린다(기아). 기다린 시간만큼 순번을 올려 주면 결국 진료를 받는다(에이징)."
  },
  {
   "id": "race-condition-ex1",
   "concept": "race-condition",
   "kind": "code",
   "body": "#include <pthread.h>\n#include <stdio.h>\n\n#define N 10000000\nstatic volatile int counter = 0;\n\nstatic void *worker(void *arg) {\n    for (int i = 0; i < N; i++)\n        counter = counter + 1;   /* 보호 없는 임계 구역 */\n    return NULL;\n}\n\nint main(void) {\n    pthread_t a, b;\n    pthread_create(&a, NULL, worker, NULL);\n    pthread_create(&b, NULL, worker, NULL);\n    pthread_join(a, NULL);\n    pthread_join(b, NULL);\n    printf(\"counter = %d (expected %d)\\n\", counter, 2 * N);\n    return 0;\n}\n// 6코어 WSL 실행 결과: 11952084, 12173106, 12214238 (기대값 20000000)"
  },
  {
   "id": "petersons-algorithm-ex1",
   "concept": "petersons-algorithm",
   "kind": "code",
   "body": "int flag[2] = {0, 0};\nint turn;\n\nvoid lock(int self) {\n    flag[self] = 1;          /* 나도 들어가고 싶다 */\n    turn = 1 - self;         /* 상대에게 먼저 양보 */\n    /* 현대 CPU에서는 여기에 atomic_thread_fence(memory_order_seq_cst) 필요 */\n    while (flag[1 - self] && turn == 1 - self)\n        ;                    /* 바쁜 대기 */\n}\n\nvoid unlock(int self) { flag[self] = 0; }\n// x86-64, 1000만 번: 배리어 없음 9999694 · 9999850 · 9999949 / 배리어 있음 10000000 x3"
  },
  {
   "id": "spinlock-ex1",
   "concept": "spinlock",
   "kind": "code",
   "body": "#include <stdatomic.h>\n\natomic_flag lock = ATOMIC_FLAG_INIT;\n\nvoid acquire(void) {\n    while (atomic_flag_test_and_set(&lock))   /* x86-64: xchg */\n        ;                                      /* spin */\n}\n\nvoid release(void) {\n    atomic_flag_clear(&lock);\n}"
  },
  {
   "id": "mutex-ex1",
   "concept": "mutex",
   "kind": "analogy",
   "body": "열쇠가 하나뿐인 화장실: 열쇠를 가진 사람만 들어가고(상호 배제), 나올 때 열쇠를 다음 사람에게 넘긴다. 기다리는 사람이 문을 계속 두드리면 스핀락, 의자에 앉아 졸다가 불려 가면 뮤텍스다."
  },
  {
   "id": "semaphore-ex1",
   "concept": "semaphore",
   "kind": "analogy",
   "body": "주차장 입구의 '빈자리 7' 전광판: 차가 들어갈 때마다 하나 줄고(wait), 0이면 입구에서 기다린다. 차가 나가면 하나 늘고(signal) 기다리던 차 하나가 들어간다. 유한 버퍼의 empty 세마포어가 이 전광판이다."
  },
  {
   "id": "deadlock-ex1",
   "concept": "deadlock",
   "kind": "code",
   "body": "#include <pthread.h>\n#include <stdio.h>\n#include <unistd.h>\n\npthread_mutex_t L1 = PTHREAD_MUTEX_INITIALIZER;\npthread_mutex_t L2 = PTHREAD_MUTEX_INITIALIZER;\n\nvoid *t1(void *arg) {\n    pthread_mutex_lock(&L1);\n    usleep(100000);              /* 여기서 문맥 교환이 일어났다고 치자 */\n    pthread_mutex_lock(&L2);     /* T2가 L2를 쥐고 있어 영원히 대기 */\n    puts(\"T1 done\");\n    pthread_mutex_unlock(&L2);\n    pthread_mutex_unlock(&L1);\n    return NULL;\n}\n\nvoid *t2(void *arg) {\n    pthread_mutex_lock(&L2);     /* T1과 반대 순서 */\n    usleep(100000);\n    pthread_mutex_lock(&L1);     /* T1이 L1을 쥐고 있어 영원히 대기 */\n    puts(\"T2 done\");\n    pthread_mutex_unlock(&L1);\n    pthread_mutex_unlock(&L2);\n    return NULL;\n}\n\nint main(void) {\n    pthread_t a, b;\n    pthread_create(&a, NULL, t1, NULL);\n    pthread_create(&b, NULL, t2, NULL);\n    pthread_join(a, NULL);       /* 돌아오지 않는다 */\n    pthread_join(b, NULL);\n    return 0;\n}"
  },
  {
   "id": "deadlock-ex2",
   "concept": "deadlock",
   "kind": "analogy",
   "body": "네거리 꼬리물기: 네 방향 차가 모두 교차로 안으로 머리를 들이밀면, 각 차는 앞차가 빠져야 움직일 수 있고 그 앞차는 또 다음 차를 기다린다. 도로 한 칸(상호 배제)을 차지한 채(점유 대기) 누구도 후진시킬 수 없으니(비선점) 원을 이룬 줄(순환 대기)이 영원히 멈춘다."
  },
  {
   "id": "lock-ordering-ex1",
   "concept": "lock-ordering",
   "kind": "code",
   "body": "/* 인자 순서와 상관없이 항상 주소가 큰 락부터 잡는다 (m1 != m2 가정) */\nvoid lock_both(pthread_mutex_t *m1, pthread_mutex_t *m2) {\n    if (m1 > m2) {\n        pthread_mutex_lock(m1);\n        pthread_mutex_lock(m2);\n    } else {\n        pthread_mutex_lock(m2);\n        pthread_mutex_lock(m1);\n    }\n}\n/* lock_both(&A, &B)와 lock_both(&B, &A)가 동시에 불려도 같은 순서로 잡는다 */"
  },
  {
   "id": "livelock-ex1",
   "concept": "livelock",
   "kind": "analogy",
   "body": "좁은 복도에서 마주친 두 사람: 둘 다 비켜 주려고 같은 쪽으로 옮기고, 다시 동시에 반대쪽으로 옮기기를 되풀이한다. 둘 다 계속 움직이지만 아무도 지나가지 못한다. 한 사람이 잠깐 멈춰 기다리면(무작위 지연) 풀린다."
  },
  {
   "id": "bankers-algorithm-ex1",
   "concept": "bankers-algorithm",
   "kind": "analogy",
   "body": "신용 한도를 정해 둔 은행: 고객마다 최대로 빌릴 한도(Max)가 있고, 은행은 금고의 현금(Available)으로 누군가 한 명은 한도까지 채워 사업을 끝내고 갚을 수 있는 순서가 남아 있을 때만 새 대출을 내준다. 현금이 남아 있어도 그 순서가 사라지는 대출은 미룬다."
  },
  {
   "id": "paging-ex1",
   "concept": "paging",
   "kind": "code",
   "body": "#define OFFSET_BITS 12                      /* 4KB 페이지 */\n#define OFFSET_MASK ((1u << OFFSET_BITS) - 1)\n\nuint32_t translate(uint32_t va, const pte_t *page_table) {\n    uint32_t vpn    = va >> OFFSET_BITS;     /* 0x00403A7C → 0x403 */\n    uint32_t offset = va &  OFFSET_MASK;     /*            → 0xA7C */\n    pte_t pte = page_table[vpn];\n    if (!pte.valid)\n        raise_exception(SEGMENTATION_FAULT);\n    return (pte.pfn << OFFSET_BITS) | offset;   /* PFN 0x1F2 → 0x001F2A7C */\n}"
  },
  {
   "id": "base-limit-register-ex1",
   "concept": "base-limit-register",
   "kind": "code",
   "body": "unsigned translate(unsigned logical, unsigned base, unsigned limit) {\n    if (logical >= limit)\n        raise_exception(OUT_OF_BOUNDS);   /* 커널로 트랩 */\n    return logical + base;\n}\n/* translate(2500, 40960, 8192) == 43460\n   translate(9000, 40960, 8192) → 예외 */"
  },
  {
   "id": "multilevel-page-table-ex1",
   "concept": "multilevel-page-table",
   "kind": "code",
   "body": "uint64_t va = 0x7F3A1C2B4A7CULL;           /* x86-64, 4KB 페이지 */\nprintf(\"PGD %llu, PUD %llu, PMD %llu, PTE %llu, offset 0x%llX\\n\",\n       (va >> 39) & 0x1FF, (va >> 30) & 0x1FF,\n       (va >> 21) & 0x1FF, (va >> 12) & 0x1FF, va & 0xFFF);\n/* PGD 254, PUD 232, PMD 225, PTE 180, offset 0xA7C */"
  },
  {
   "id": "tlb-ex1",
   "concept": "tlb",
   "kind": "analogy",
   "body": "포스트잇과 전화번호부: 자주 거는 번호는 포스트잇(TLB)에 적어 두고 바로 건다(히트). 없으면 두꺼운 전화번호부(페이지 테이블)를 뒤진 뒤 포스트잇에 옮겨 적는다(미스)."
  },
  {
   "id": "external-fragmentation-ex1",
   "concept": "external-fragmentation",
   "kind": "analogy",
   "body": "주차장: 빈칸이 군데군데 합쳐서 여러 칸 있어도 버스 한 대를 댈 연속된 자리가 없으면 버스는 못 들어간다. 차들을 한쪽으로 다시 세우는 것이 압축이다."
  },
  {
   "id": "copy-on-write-ex1",
   "concept": "copy-on-write",
   "kind": "code",
   "body": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <sys/wait.h>\n#include <unistd.h>\nint main(void) {\n    size_t n = 256UL << 20;          // 256MB\n    char *buf = malloc(n);\n    memset(buf, 'A', n);             // 부모가 페이지를 실제로 채운다\n    if (fork() == 0) {               // 페이지는 복사되지 않고 읽기 전용으로 공유\n        buf[0] = 'B';                // 쓰기 → 폴트 → 이 페이지 하나만 복사\n        printf(\"child:  %c\\n\", buf[0]);   // B\n        _exit(0);\n    }\n    wait(NULL);\n    printf(\"parent: %c\\n\", buf[0]);       // A, 부모 쪽은 그대로\n    return 0;\n}"
  },
  {
   "id": "memory-mapped-file-ex1",
   "concept": "memory-mapped-file",
   "kind": "code",
   "body": "#include <fcntl.h>\n#include <stdio.h>\n#include <sys/mman.h>\n#include <sys/stat.h>\n#include <unistd.h>\nint main(int argc, char *argv[]) {\n    int fd = open(argv[1], O_RDONLY);\n    struct stat st;\n    fstat(fd, &st);\n    char *p = mmap(NULL, st.st_size, PROT_READ, MAP_PRIVATE, fd, 0);\n    // 여기까지는 파일 내용을 하나도 읽지 않았다\n    long lines = 0;\n    for (off_t i = 0; i < st.st_size; i++)  // 처음 닿는 페이지마다 페이지 폴트 → 요구 페이징\n        if (p[i] == '\\n') lines++;\n    printf(\"%ld lines\\n\", lines);\n    munmap(p, st.st_size);\n    close(fd);\n    return 0;\n}"
  },
  {
   "id": "lru-ex1",
   "concept": "lru",
   "kind": "analogy",
   "body": "책상과 책장: 책상(물리 메모리)에는 책을 세 권만 펼 수 있다. 새 책이 필요하면 가장 오랫동안 손대지 않은 책을 책장(디스크)에 꽂는다. FIFO라면 책상에 가장 먼저 올린 책을 치우는데, 그 책이 지금도 계속 보는 사전이어도 치운다."
  },
  {
   "id": "thrashing-ex1",
   "concept": "thrashing",
   "kind": "analogy",
   "body": "좁은 책상에서 과목 다섯 개를 동시에 공부하는 학생: 과목마다 책 세 권이 필요한데 책상에는 여섯 권만 놓인다. 한 과목을 펴면 다른 과목 책을 치워야 하고, 곧 그 과목으로 돌아와 다시 꺼낸다. 결국 공부(실행)보다 책을 넣고 빼는 일(페이징)에 시간을 다 쓴다. 과목을 두 개로 줄이면(승인 제어) 오히려 더 많이 끝낸다."
  },
  {
   "id": "disk-access-time-ex1",
   "concept": "disk-access-time",
   "kind": "code",
   "body": "# 4KB 무작위 읽기 접근 시간 (OSTEP의 Barracuda 사양)\nrpm, seek_ms, mb_per_s = 7200, 9.0, 105\nrot_ms = 60_000 / rpm / 2           # 평균 반 바퀴 = 4.17ms\nxfer_ms = 4 / 1024 / mb_per_s * 1000  # 4KB 전송 = 0.037ms\nt = seek_ms + rot_ms + xfer_ms\nprint(f\"T = {t:.1f} ms, {4/1024/(t/1000):.2f} MB/s\")  # T = 13.2 ms, 0.30 MB/s"
  },
  {
   "id": "scan-scheduling-ex1",
   "concept": "scan-scheduling",
   "kind": "analogy",
   "body": "엘리베이터: 10층에서 1층으로 내려가는 중에 3층에서 탄 사람이 4층을 눌러도, 엘리베이터는 '더 가깝다'고 4층으로 올라가지 않는다. 1층까지 내려간 뒤에야 방향을 바꾼다. 그래서 아무도 무한정 기다리지 않는다."
  },
  {
   "id": "ftl-ex1",
   "concept": "ftl",
   "kind": "analogy",
   "body": "칸마다 한 번만 쓸 수 있는 공책: 내용을 고치려면 몇 쪽 묶음(블록)을 통째로 지워야 한다. 그래서 고친 내용은 빈 칸에 새로 쓰고 앞쪽 목차(매핑 테이블)의 쪽 번호만 바꾼다. 옛 칸은 나중에 묶음째 정리(가비지 컬렉션)한다."
  },
  {
   "id": "raid-parity-ex1",
   "concept": "raid-parity",
   "kind": "code",
   "body": "#include <stdio.h>\n#include <stddef.h>\n\n/* 패리티 = 모든 데이터 블록의 XOR. 잃은 블록 = 나머지 블록과 패리티의 XOR */\nvoid xor_into(unsigned char *dst, const unsigned char *src, size_t n) {\n    for (size_t i = 0; i < n; i++) dst[i] ^= src[i];\n}\n\nint main(void) {\n    unsigned char d0[1] = {0x6}, d1[1] = {0xC}, d2[1] = {0xB}; /* 0110 1100 1011 */\n    unsigned char p[1] = {0};\n    xor_into(p, d0, 1); xor_into(p, d1, 1); xor_into(p, d2, 1);  /* p = 0001 */\n    unsigned char rec[1] = {0};                                    /* d1을 잃었다고 가정 */\n    xor_into(rec, d0, 1); xor_into(rec, d2, 1); xor_into(rec, p, 1);\n    printf(\"parity=%X recovered=%X\\n\", p[0], rec[0]);              /* parity=1 recovered=C */\n    return 0;\n}"
  },
  {
   "id": "linux-io-scheduler-ex1",
   "concept": "linux-io-scheduler",
   "kind": "code",
   "body": "# 현재 스케줄러는 대괄호로 표시된다 (docs.kernel.org 예시)\n$ cat /sys/block/sda/queue/scheduler\n[mq-deadline] kyber bfq none\n# 실행 중에 none으로 바꾸기 (root)\n# echo none > /sys/block/sda/queue/scheduler\n# cat /sys/block/sda/queue/scheduler\n[none] mq-deadline kyber bfq"
  },
  {
   "id": "open-file-table-ex1",
   "concept": "open-file-table",
   "kind": "code",
   "body": "int fd = open(\"file.txt\", O_RDONLY);\nif (fork() == 0) {                 /* 자식 */\n    lseek(fd, 10, SEEK_SET);\n    return 0;\n}\nwait(NULL);                        /* 부모 */\nprintf(\"%ld\\n\", (long)lseek(fd, 0, SEEK_CUR));   /* 10: 열린 파일 항목을 공유 */"
  },
  {
   "id": "hard-link-ex1",
   "concept": "hard-link",
   "kind": "code",
   "body": "$ echo hello > file\n$ ln file file2          # 하드 링크: 링크 수 1 → 2\n$ ln -s file file3       # 심볼릭 링크: 링크 수 그대로\n$ stat -c '%i %h %n' file file2 file3\n67158084 2 file\n67158084 2 file2\n67158090 1 file3\n$ rm file                # unlink: 링크 수 2 → 1\n$ cat file2              # hello\n$ cat file3              # No such file or directory (끊어진 링크)"
  },
  {
   "id": "indirect-block-ex1",
   "concept": "indirect-block",
   "kind": "code",
   "body": "unsigned long long max_file_size(unsigned long long B) {\n    unsigned long long p = B / 4;                   /* 블록당 포인터 수 */\n    unsigned long long blocks = 12 + p + p*p + p*p*p;\n    return blocks * B;\n}\n/* max_file_size(4096) == 4402345721856  (약 4.004 TiB)\n   max_file_size(1024) == 17247252480    (약 16.06 GiB) */"
  },
  {
   "id": "journaling-ex1",
   "concept": "journaling",
   "kind": "analogy",
   "body": "이삿짐센터: 짐을 옮기기 전에 '무엇을 어디로' 목록을 쓰고 마지막에 서명(커밋)한다. 서명 전에 정전이 나면 목록을 버리고, 서명 뒤라면 목록을 보고 덜 옮긴 짐을 마저 옮긴다(redo). 집 전체를 뒤질(fsck) 필요가 없다."
  },
  {
   "id": "linked-allocation-ex1",
   "concept": "linked-allocation",
   "kind": "analogy",
   "body": "보물찾기: 쪽지마다 다음 쪽지 위치가 적혀 있어 다섯 번째 장소에 가려면 앞 쪽지 넷을 차례로 찾아야 한다. FAT는 모든 쪽지의 '다음 위치'를 한 장의 지도(표)에 모아 들고 다니는 방식이다."
  },
  {
   "id": "polling-ex1",
   "concept": "polling",
   "kind": "code",
   "body": "/* xv6 IDE 드라이버의 폴링 루프 (커널 코드) */\nstatic int ide_wait_ready(void) {\n    int r;\n    while (((r = inb(0x1F7)) & IDE_BSY) || !(r & IDE_DRDY))\n        ;   /* 상태 레지스터(0x1F7)를 계속 읽는다 = 폴링 */\n    return 0;\n}"
  },
  {
   "id": "interrupt-driven-io-ex1",
   "concept": "interrupt-driven-io",
   "kind": "analogy",
   "body": "택배를 기다리며 1분마다 현관문을 열어 보는 것이 폴링이고, 초인종(인터럽트)이 울릴 때까지 다른 일을 하는 것이 인터럽트 구동 입출력이다."
  },
  {
   "id": "dma-ex1",
   "concept": "dma",
   "kind": "analogy",
   "body": "PIO는 이삿짐을 내가 하나씩 나르는 것이다. DMA는 이삿짐센터(DMA 엔진)에 주소와 물량만 알려 주고 내 일을 하다가, 끝났다는 전화(완료 인터럽트)를 받는 것이다."
  },
  {
   "id": "non-blocking-io-ex1",
   "concept": "non-blocking-io",
   "kind": "code",
   "body": "#include <errno.h>\n#include <fcntl.h>\n#include <unistd.h>\n\nint fd = open(\"/dev/ttyS0\", O_RDONLY | O_NONBLOCK);\nchar buf[256];\nssize_t n = read(fd, buf, sizeof buf);\nif (n < 0 && (errno == EAGAIN || errno == EWOULDBLOCK)) {\n    /* 아직 데이터 없음: 다른 일을 하고 나중에 다시 read */\n}"
  },
  {
   "id": "io-multiplexing-ex1",
   "concept": "io-multiplexing",
   "kind": "code",
   "body": "#include <sys/epoll.h>\n\nint ep = epoll_create1(0);\nstruct epoll_event ev = { .events = EPOLLIN, .data.fd = sock };\nepoll_ctl(ep, EPOLL_CTL_ADD, sock, &ev);          /* 관심 목록에 추가 */\n\nstruct epoll_event ready[16];\nfor (;;) {\n    int n = epoll_wait(ep, ready, 16, -1);        /* 하나라도 준비될 때까지 잠든다 */\n    for (int i = 0; i < n; i++)\n        handle(ready[i].data.fd);                 /* 준비된 fd만 read */\n}"
  },
  {
   "id": "access-control-list-ex1",
   "concept": "access-control-list",
   "kind": "analogy",
   "body": "클럽 문지기: 손님이 신원을 밝히면 문지기가 명단(ACL)에서 찾아 들여보낸다. 명단에서 지우기만 하면 바로 출입 금지가 된다."
  },
  {
   "id": "capability-ex1",
   "concept": "capability",
   "kind": "analogy",
   "body": "열쇠 꾸러미: 회원은 방마다 다른 열쇠(capability)를 들고 다니고, 열쇠가 있으면 문을 연다. 영화표나 지하철 승차권도 같다. 이미 나눠 준 열쇠는 되찾기 어렵다."
  },
  {
   "id": "unix-file-permission-ex1",
   "concept": "unix-file-permission",
   "kind": "code",
   "body": "$ stat -c \"%a %A %U %n\" /usr/bin/passwd /tmp\n4755 -rwsr-xr-x root /usr/bin/passwd   # setuid + rwxr-xr-x\n1777 drwxrwxrwt root /tmp              # sticky + rwxrwxrwx\n$ chmod 077 f && cat f\ncat: f: Permission denied               # 소유자 비트만 보므로 주인이 못 읽는다"
  },
  {
   "id": "buffer-overflow-ex1",
   "concept": "buffer-overflow",
   "kind": "code",
   "body": "void greet(const char *name) {\n    char buf[16];\n    strcpy(buf, name);                     /* 길이 검사 없음 → 넘치면 복귀 주소까지 덮는다 */\n}\nvoid greet_safe(const char *name) {\n    char buf[16];\n    snprintf(buf, sizeof buf, \"%s\", name); /* 버퍼 크기 안에서만 쓴다 */\n}"
  },
  {
   "id": "password-salt-ex1",
   "concept": "password-salt",
   "kind": "code",
   "body": "import hashlib, os\nsalt = os.urandom(16)                       # 비밀번호마다 새 솔트\nh = hashlib.scrypt(b\"hunter2\", salt=salt, n=2**14, r=8, p=1)\n# (salt, h)를 함께 저장. 같은 비밀번호도 솔트가 다르면 h가 달라진다"
  }
 ],
 "totals": {
  "units": 13,
  "concepts": 249,
  "prerequisites": 416,
  "crossUnitPrerequisites": 114,
  "confusedPairs": 64,
  "sources": 113,
  "visuals": 50,
  "questions": 77,
  "openQuestions": 27,
  "examples": 62,
  "describes": 553,
  "depicts": 251,
  "explains": 259
 }
};
