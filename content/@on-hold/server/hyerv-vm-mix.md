# Hyper-v 와 vm혼용?

Microsoft가 Dynamics NAV 및 Business Central을 도커 이미지로 제공하기 시작했을 때도 랩톱에서 Docker를 직접 사용하는 대신 Docker가 설치된 Hyper-V VM 을 사용했습니다.

Windows 용 Docker Desktop은 Windows 10 시스템에서 Hyper-V를 활성화해야하지만 Docker Engine – Enterprise (현재는 Docker EE라고 함)는 그렇지 않습니다. Windows 10에 Docker EE를 설치하는 것이 가능


Docker는 Windows 10 (버전 1809부터 시작)에서 프로세스 격리를 지원하므로 Hyper-V 설정에 작별 인사를하고 Windows 10에서 컨테이너를 직접 실행하도록 전환해야 할 때가되었습니다. 더 이상 Hyper-V가 필요하지 않았기 때문에 완전히 제거하기로 결정

Hyper-V 기반 컨테이너를 사용하지 않더라도 Hyper-V를 설치해야합니다. 그렇지 않으면 설치 후 Docker Desktop이 실행되지 않습니다. Linux 컨테이너 때문이라고 들었습니다. Hyper-V 기반 컨테이너 내에서만 실행할 수 있습니다. Docker Desktop은 Windows와 Linux 컨테이너 간 전환을 지원하기 때문에 무엇이든 Hyper-V를 설치하기 만하면됩니다.

---

하드웨어 가상화 가능 과os 레벨 가상화제품을  동시에 쓸 수 없어요
그래서  hyper v 기능 올렸는데  안드로이드 가상화나, vmware workstaion , 버츄얼 박스 쓸때는 hyperv 타입 off

 cmd 열고 bcdedit  /set hypervisorlaunchtype off
재부팅 하고 쓰면 되고
hyperv 쓰고 싶을땐 
bcdedit /set hypervisorlaunchtype auto

