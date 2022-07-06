#### 1. 관심사의 분리 원칙이란 무엇인가요? 웹에서는 이러한 원칙이 어떻게 적용되나요?
SoC (Separation of Concerns). 관심사, 책임, 기능을 한가지씩 담당하는 개별적인 객체로 분리해야한다는 설계원칙.
웹에서는 HTML, CSS, JS를 각각 분리하는 방식, inline 스타일을 사용하지 않는 등을 통해 적용할 수 있다.

---
#### 2. 객체지향의 SOLID 원칙이란 무엇인가요? 이 원칙을 구체적인 예를 들어 설명할 수 있나요?
**S** : The Single-Responsibility Principle(SRP)
- A class should have one, and only one, reason to change. "Responsibility"-reason to change.

**O** : The Open-Closed Principle(OCP)
- SW entities(classes, modules, functions, etc...) should be open for extension but closed for modification.
- you should be able to extend a class's behavior, without modifying it. 새로이 확장은 해도 기존 코드 수정은 하지 않는다 => Abstraction is key!


**L** : The Liskov Substitution Principle(LSP)
- Subtypes must be substitutable for their base types. Derived classes must be substitutable for their base classes.
- subtyping: IS-A. 다형적인 협력 위해 인터페이스 공유. known as interface inheritance(인터페이스 상속). 
- implementation inheritance(구현 상속): reuse implementation. 의미적 관계가 아니고 변경에 취햑한 코드를 낳게될 확률이 높음. -> 인터페이스 재사용이 바람직.
- most OOP langauges(java, c++, c#...) inheritance keyword such as "extends" does the both subtyping and implementation inheritance. (둘 사이 따로 구분 안함)
- 즉, 자료형 a가 자료형 A의 하위형이라면 속성의 변경 없이 A의 객체를 a의 객체로 교체할 수 있어야 한다.
- 부모에게서 물려받은 메서드명은 일치시키고 내용은 다르게 작성한다. (리스코프 치환)

**I** : The Interface Segregation Principle(ISP)
- client should not be forced to depend on methods they do not use. make fine grained interfaces that are client specified.
- interface 중심으로 잘개 쪼개기

**D** : The Dependency Inversion Principle(DIP)
- High-level modules should not depend on low-level modules. both should depend on abstractions.
- abstractions should not depend on details. details should depend on abstractions.
- why inversion: DIP attempts to "invert" the dependencies that result from a structured analysis and design approach.
- it is not just an inversion of dependency, DIP also inverts ownership. clients would own the interface.
- 불가피한 의존관계를 형성할 때는 거의 변화하지 않는 객체, 변하기 어려운 객체에 의존하도록 설정한다.
- abstract class high level resources. concrete class low level resources. 즉, 객체는 인터페이스에 의존하도록.
- 구체화가 아닌 추상화에 의존해야 한다.

SOLID 원칙은 설계 원칙의 한 종류이며, 무조건적으로 미리 다 따를 필요가 없다. 해당되는 상황이 발생하면 그때그때 원칙을 적용하는 것이다.
많은 설계패턴을 적용한다고 무조건 좋은 설계는 아니다.

---
#### 3. 로컬 스토리지란 무엇인가요? 로컬 스토리지의 내용을 개발자 도구를 이용해 확인하려면 어떻게 해야 할까요?
로컬 스토리지란 웹사이트의 쿠키, 세션과 같은 정보들을 개인 pc의 라이브러리 등 특정 공간에 저장하면서 사용자 맞춤적인 사이트 구동에 참조하는 저장소이다.
해당 정보들이 저장되어 있는 공간에서 웹사이트가 참조하여, 사용자가 방문했던 이력 및 관심사 등을 파악하고 이를 이후 동작에서 활용한다.
웹 상에서는 개발자 도구의 응용프로그램 탭에서 확인할 수 있고 로컬pc 라이브러리와 어떤 정보를 주고받았는지 파악할 수 있다.
- cookie(쿠키) : 사용자 pc(클라이언트) local에 저장되어있는 token(key, value) 파일. 유효시간 범위내에서는 정보가 저장되어 사용자 인증 유지에 활용할 수 있다.
- response header에 cookie를 설정하여 생성할 수 있고, request 정보에 유저 정보가 담긴 cookie를 보낸다면 server가 이를 파악하는 원리로 진행한다.
- 기본적으로 HTTP request/response는 일회성으로, client와 server간 요청-응답이 종료되면 연결이 끊어진다. 따라서 쿠키 정보는 지속적 데이터 교환을 위해 서버로 계속 전송된다.
- 이러한 client server간의 끊임없는 데이터(쿠키) 교환으로 인한 불필요한 데이터 전송, 용량 낭비 등을 줄이고자 만든 client 저장소가 세션/로컬 스토리지.
- 이와 더불어 cookie에 식별자를 추가하여 보안성을 강화한 것이 session이다.
- session(세션): 쿠키와 마찬가지로 사용자 정보 저장 및 인증을 위해 저장하는 key&value로 이루어진 문자열 데이터.
- cookie에 식별자(session id)를 넣어 보안성을 강화하고 이를 해당 server/DB에 저장한다.
- 로컬: 서버로 자동 전송되지 않음. 간단한 정보(서버에게 지속 전달될 필요가 없고 보안이 중요하지 않음)들을 저장하는 정소이다.
- 세션과 달리 데이터가 지우지 않는한 영구적으로 보전됨(자동 로그인 등에 활용할 수 있다.)
