#### 1. HTTP의 GET과 POST 메소드는 어떻게 다른가요?
GET은 리소스를 조회, 전달할 데이터는 쿼리를 통해서 전달. POST는 요청 데이터를 처리(주로 등록), 전달할 데이터는 메세지 body를 통해서 전달.

#### 1-1. 다른 HTTP 메소드에는 무엇이 있나요?
- PUT: 리소스를 대체, 해당 리소스가 없으면 생성
- PATCH: 리소스를 일부만 변경
- DELETE: 리소스 삭제
- HEAD: GET과 동일하나 메시지 부분을 제외하고 상태줄, 헤더만 변경
- CONNECT: 대상 자원으로 식별되는 서버에 대한 터널을 설정
- OPTIONS: 대상 리소스에 대한 통신 가능 옵션 설명 (CORS에서 주로 사용)
- TRACE: 대상 리소스에 대한 경로를 따라 메시지 루프백 테스트 수행
- ...
- 메소드 속성에는 Safe Methods(안전), Idempotent Methods(멱등- 계속 호출해도 결과 같음), Cacheable Methods(캐시가능)이 있다.

---

#### 2. HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?
GET은 쿼리를 통해, POST는 req body에 JSON 형태로 데이터를 작성해서 보낸다.

#### 2-1. HTTP 요청의 Content-Type 헤더는 무엇인가요?
클라이언트에게 반환된 컨텐츠의 컨텐츠 유형이 실제로 무엇인지 알려준다.

#### 2-2. Postman에서 POST 요청을 보내는 여러가지 방법(form-data. x-www-form-urlencoded-raw,binary) 각각은 어떤 용도를 가지고 있나요?
- form-data: form 형태의 데이터를 key-value 쌍으로 작성하여 요청하는 방법. ASCII 문자값+ 바이너리 데이터(이미지, 영상..) 함께 전송시 사용.
- x-www-form-urlencoded: ASCII 문자값만 보낼때 사용.
- raw: 날것의 텍스트를 보냄. html, js, json, xml 등 형식 지원.
- binary: 텍스트 없이 바이너리 데이터를 보낼때 사용.

---

#### 3. node.js의 http 모듈을 통해 HTTP 요청을 처리할 때, req와 res 객체에는 어떤 정보가 담겨있을까요?
https://developer.mozilla.org/ko/docs/Web/HTTP/Messages
(헤더, 바디에 각 정보)

#### 3-2. GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?
GET은 헤더에, POST는 본문에 요청 정보를 넣어서 전달.
GET이 리소스를 읽기 위함이면, POST는 리소스를 기반으로 업데이트한 정보를 생성하기 위함이기 떄문.
GET은 멱동성의 특징, POST는 그렇지 않기 때문에 그러한 부분을 고려할 수 있음.
즉, 둘의 목적이 다르기 때문.

---

#### 4. 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 Content-Type 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?
middleware에서 parsing하는 부분을 더 효율적으로. 혹은 content-type을 지원하는 dat 형식 확인.

#### 4-1. 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?
res에 server 응답 정보를 parsing하여, client가 어떠한 가공된 정보를 받아야하는지 결정하고 구현.
