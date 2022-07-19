#### 1. 컨테이너는 어떻게 동작하나요? 다른 배포판을 사용할 수 있게 하는 원리가 무엇일까요?
도커에서 동작할 프로그램을 이미지화하면, OS Kernel을 추상화한 분리된 프로세스에서 해당 프로그램을 동작함.
컨테이너 런타임 환경을 제공하는 OS가 있다면, 어떤 장치에서든 도커 및 해당 추상화된 프로그램을 실행할 수 있음.
호스트 OS에 연결하는 것이 아니라, 해당 시스템의 프로세스를 분리하고 이 환경에서 실행되므로 OS와 상관없이 실행 가능.

---

#### 2. 도커 컨테이너에 호스트의 파일시스템이나 네트워크 포트를 연결하려면 어떻게 해야할까요?
    docker run -i -t docker_image_name //컨테이너 생성
    docker run -d -p OS_port:container_server_port //host 연결

---

#### 3. 도커 컨테이너에서 런타임에 환경변수를 주입하려면 어떻게 해야할까요?
컨테이너 생성시 환경변수를 넣어주거나, 별도의 파일을 담아 설정해줄 수 있다.

     docker run -e env_variable=value_variable // -e:runtime시 환경변수 직접 지정. --env-file:환경변수 담겨져있는 파일로 환경변수 등록

---

#### 4. 도커 컨테이너의 stdout 로그를 보려면 어떻게 해야할까요?
     docker logs --follow container //스트리밍 감지
     docker logs --tail {the_number_of_stdout_lines} container //tail

---

#### 5. 실행중인 도커 컨테이너에 들어가 bash 등의 쉘을 실행하고 로그 등을 보려면 어떻게 해야할까요?
     docker attach container_ID //root 프로세스에 콘솔 접근
     docker exec -it container_ID /bin/bash(script_environment) //특정 환경을 통한 접속
