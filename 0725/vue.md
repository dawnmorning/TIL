### Web App
- 웹 브라우저에서 실행되는 어플리케이션 소프트웨어
- 웹 페이지가 그대로 보이는 것이 아닌 디바이스에 설치된 App처럼 보이는 것
### SPA(Single Page Application)
- Web App과 함께 자주 등장할 용어
- 이전까지는 사용자의 요청에 적절한 페이지 별 template을 반환
- SPA는 서버에서 최초 1장의 HTML만 전달받아 모든 요청에 대응하는 방식을 의미
    - 어떻게 한 페이지로 모든 요청에 대응할 수 있을까?
    - CSR(Client Side Rendering)방식으로 요청을 처리하기 때문
    - SSR(Server Side Rendering) => 기존의 요청 처리방식
        - Server가 사용자의 요청에 적합한 HTML을 렌더링하여 제공하는 방식
        - 전달 받은 새 문서를 보여주기 위해 브라우저는 새로고침을 진행
    
### CSR
- 최초 한 장의 HTML을 받아오는 것은 동일, 단 server로부터 최초로 받아오는 문서는 빈 html문서
- 각 요청에 대한 대응을 JavaScript를 사용하여 필요한 부분만 다시 렌더링
- 새로운 페이지를 서버에 AJAX로 요청
- 서버는 화면을 그리기 위해 필요한 데이터를 JSON방식으로 전달
- JSON데이터를 JavaScript로 처리, DOM트리에 반영(렌더링)

### 왜 CSR?
1. 모든 HTML페이지를 서버로부터 받는 것이 아니기 때문
    - 클라이언트 - 서버간 트래픽이 감소
    - 트래픽 감소 = 응답속도가 빨라짐
2. 매번 새 문서를 받아 새로고침 하는 것이 아니라 필요한 부분만 고쳐 나가므로 각 요청이 끊김없이 진행
    - SNS에서 추천을 누를 때 마다 첫 페이지로 돌아간다 = 에바쎄바
    - 요청이 자연스럽게 진행이 된다.
3. BE와 FE의 작업 영역을 명확히 분리할 수 있음
    - 각자 맡은 역할을 명확히 분리 = 협업 용이
    
- 여러가지 FE Framework 
    - FE Framework = HTML + CSS + JS를 더 편하게 작업하기 위한 툴 
        - React, Angular, Svelte, Vue ..
    
# Vue
1. Vue CDN 필요
2. MVVM Pattern

### MVVM Pattern
- 소프트웨어 아키텍처 패턴의 일종
- 마크업 언어로 구현하는 그래픽 사용자 인터페이스의 개발을 Back-end로부터 분리시켜 view가 어느 특정한 모델 플랫폼에 종속되지 않도록 함
- View
    - 우리 눈에 보이는 부분 = DOM
    
- Model
    - 실제 데이터 = JSON
    
- View Model(Vue)
    - View를 위한 Model
    - View와 연결(binding)되어 Action을 주고 받음
    - Model이 변경되면 View Model 도 변경되고 바인딩된 View도 변경됨
    - View에서 사용자가 데이터를 변경하면 View Model의 데이터가 변경되고 바인딩된 다른 View도 변경됨
    
- el(element)
    - Vue instance와 DOM을 mount(연결)하는 옵션
        - View와 Model 을 연결하는 역할
        - HTML id 혹은 class와 마운트 가능
    - Vue instance와 연결되지 않은 DOM외부는 Vue의 영향을 받지 않음
        - Vue속성 및 메서드 사용 불가
    
- data
    - Vue instance의 데이터 객체 혹은 인스턴스 송성
    - 데이터 객체는 반드시 기본 객체 `{}` 여야함
    - 객체 내부의 아이템들은 value로 모든 타입의 객체를 가질 수 있음
    - 정의된 속성은 `interpolation {{}}`을 통해 view에 렌더링 가능
    
- method
    - Vue instance의 method들을 정의하는 곳
    - 객체 내 print method 정의
    - print method 실행 시 Vue instance의 data내 message 출력
    -  콘솔창에서 `app.print()`실행
    - method를 호출하여 data 변경 가능
    -**주의**
        - 메서드를 정의할 때 Arrow Fucntion을 사용하면 안 됨
        - Arrow Function의 this는 함수가 선언될 때 상위 스코프를 가리킴
        - 즉 this가 상위 객체 window를 가리킴
        - 호출은 문제없이 가능하나 this로 Vue data를 변경하지 못 함
    
### Syntax
- Vue2 guide > template syntax 참고
- 렌더링 된 DOM을 기본 Vue instance의 data에 선언적으로 바인딩 할 수 있는 HTML 기반 template syntax를 사용
### Directives
- v-접두사가 있는 특수 속성에 값을 할당할 수 있음
    - 값에는 JS 표현식을 작성할 수 있음
    
- Directive의 역할은 표현식의 값이 변경될 때 반응적으로 DOM에 적용하는 것
- v-html
    - RAW HTML을 표현할 수 있는 방법
    - 단 사용자가 입력하거나 제공하는 컨텐츠에는 절대 사용 금지
    
- v-show
    - 표현식에 작성된 값에 따라 element를 보여줄 것인지 결정
        - boolean값이 변경될 때 마다 반응
    - 대상 element의 display속성을 기본 속성과 none으로 toggle
    - 요소 자체는 항상 DOM에 렌더링 됨
    
- v-if
    - v-show와 사용 방법은 동일
    - isActive의 값이 변경될 때 반응
    - 단 값이 false인 경우 DOM에서 사라짐
    - `v-if`, `v-else-if`, `v-else`형태로 사용
    
- `v-show` VS `v-if`
    - v-show
        - 표현식 결과와 관계없이 렌더링 되므로 초기 렌더링에 필요한 비용은 v-if 보다 높을 수 있음
        - display 속성 변경으로 표현여부를 판단하므로 렌더링 후 toggle비용은 적음
    - v-if
        - 표현식 결과가 false인 경우 렌더링조차 되지 않으므로 초기 렌더링 비용은 v-show보다 낮을 수 있음
        - 단, 표현식 값이 자주 변경되는 경우 잦은 재 렌더링으로 비용이 증가할 수 있음
    
- v-for
    