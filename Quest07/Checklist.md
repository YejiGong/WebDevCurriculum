#### 1. node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?
node.js는 크롬 v8 js 엔진으로 빌드된 js 런타임이다. REPL(Read, Eval, Print, Loop)을 통해서 런타임을 제공한다.
node는 확장성 있는 네트워크 어플리케이션을 만들 수 있도록 설계되었다.

---
#### 2. npm이 무엇인가요? package.json 파일은 어떤 필드들로 구성되어 있나요?
npm은 node.js로 만들어진 패키지(모듈)을 관리해주는 툴으로, js 라이브러리를 설치하고 관리하는 패키지 매니저.
package.json으로 프로젝트의 정보와 패키지들의 의존성을 관리한다.
package.json의 필드로 name, version, description, keywords, homepage, author, contributors, 
repository, scripts, config, depecdencies, devDependencies, license가 있다.

---
#### 3. npx는 어떤 명령인가요? npm 패키지를 -g 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?
npm 5.2.0부터 새로 추가된 도구로, 일회성으로 원하는 패키지를 npm 레지스트리에 접근해서 실행시키고 설치하는 도구.
노드 패키지 실행 담당으로, -g 옵션을 사용하지 않으면 node_modules 폴더가 만들어지면서 정의된 모든 패키지가 다운로드된다.
-g 옵션을 사용하면 Node.js 설치 경로에 전역으로 패키지가 다운로드된다.

---
#### 4. 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요?
#### CommnJS 대신 ES Modules가 등장한 이유는 무엇일까요?
최초에는 간단한 모듈 시스템만 제공함. <script src="~"\> 방식. -> 모듈간 스코프가 구분되지 않는 문제가 있어, js 모듈 표준화를 위해
CommonJS, AMD가 등장하였다.
CommonJS는 js, 브라우저, 서버 사이드 어플리케이션 등 범용적 용도로 사용하기 위한 모듈 시스템 방법이다. 동기적으로 모듈을 호출한다.
AMD는 비동기적으로 모듈을 호출한다. 브라우저와 서버 사이드에서 모두 호환되는 방식이다.
CommonJS와 AMD의 호환성 문제를 해결하기 위해 UMD가 등장했다.
이후 언어 자체에서 모듈 시스템 지원을 위해 ES6이 등장했다. import ~ from ~, export default ~ 방식이다.
  
---
#### 5. ES Modules는 기존의 require()와 동작상에 어떤 차이가 있을까요?
#### CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?
require()은 CommonJS를 사용하는 node.js문이나, import()는 ES6에서만 사용된다.
require()은 프로그램의 어느 지점에서나 호출할 수 있지만, import()는 파일의 시작 부분에서만 실행할 수 있다.
ES6은 구형 브라우저에서 제대로 동작하지 않아, 트랜스파일러가 등장했다.
이는 한 번 컴파일하면 구형 브라우저에서도 동작하는 js 코드가 나오게 만드는 도구로, 바벨 등이 있다.
  
---
#### 6. node.js에서 ES Modules를 사용하려면 어떻게 해야할까요?
#### ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야할까요? 그 반대는 어떻게 될까요?
트랜스파일러의 동작처럼 두 모듈 방식을 하나로 통일시켜서 두 모듈을 지원하는 코드로 바꿀 수 있다.
