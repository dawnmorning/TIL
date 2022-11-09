## UX & UI
- UX(User Experience)
    - 유저와 가장 가까이에 있는 분야, 데이터를 기반으로 유저를 조사하고 분석해서 개발자, 디자이너가 이해할 수 있게 소통
    - 유저가 느끼는 느낌, 태도 그리고 행동을 디자인
- UI(User Interface)
    - 유저에게 보여지는 화면을 디자인
    - UX를 고려한 디자인을 반영, 이 과정에서 기능 개선 혹은 추가가 필요한 경우 FE 개발자와 가장 많이 소통
    
```
Can't Unsee
```

## Prototyping
- 앱의 프로토타입을 만드는 것
- 개발 중인 소프트웨어 프로그램의 완성되기 전 버전을 만드는 것
- 한 번에 완성 버전이 나올 수 없기에 중간마다 현재 상태를 체크하는 과정

## Figma 
- 인터페이스 디자인을 위한 협업 웹 애플리케이션
- 협업에 중점을 두면서 UI/UX 설계에 초점을 맞춤


# 프로젝트 시작전
- 개발부터 시작하지 말고 충분한 기획을 거치기
- 우리가 완성하고자 하는 대략적인 모습을 그려보는 과정이 필요(프로토타입)
- 이러한 과정을 통해 기획에서 빠진 화면이나 API등을 확인할 수 있음
- 설계와 기획이 끝난 후 개발을 시작해야 체계적 진행 가능

---

# Vue Router

## Routing
- 네트워크에서 경로를 선택하는 프로세스
- 웹 서비스에서의 라우팅
  - 유저가 방문한 URL에 대해 적절한 결과를 응답하는 것
    
- 예시
    - `/article/index/`에 접근하면 articles의 index에 대한 결과를 보내줌
- Routing in SSR
    - Server가 모든 라우팅을 통제
    - URL로 요청이 들어오면 응다븡로 완성된 HTML 제공
    - Routing에 대한 결정권을 서버가 가짐
- Routing in SPA / CSR
    - 서버는 하나의 HTML(index.html)만을 제공
    - 이후에 모든 동작은 하나의 HTML문서 위에서 JavaScript 코드를 활용
        - DOM을 그리는데 필요한 추가적인 데이터가 있다면 axios와 같은 AJAX요청을 보낼 수 있는 도구를 사용하여 데이터를 가져오고 처리
    - 즉 하나의 URL만 가질 수 있음
    - Routing이 없다면
        - 유저가 URL을 통한 페이지의 변화 감지 불가
        - 페이지가 무엇을 렌더링 중인지에 대한 상태를 알 수 없음
        - 브라우저의 뒤로 가기 기능 사용 불가
    
## Vue Router
- Vue의 공식 라우터
- SPA상에서 라우팅을 쉽게 개발할 수 있는 기능을 제공
- 라우트(routes)에 컴포넌트를 매핑한 후 어떤 URL에서 렌더링 할지 알려줌
    - 즉 SPA를 MPA(Multi Page Application, 여러 개의 페이지로 구성된 앱, SSR방식으로 렌더링)처럼 URL을 이도앟면서 사용 가능
    - SPA의 단점 중 하나인 'URL이 변경되지 않는다'를 해결
    
## Vue Router 시작하기
```vue create vue-router-app```
``` cd vue-router-app```
```vue add router```
## History mode
- 브라우저의 History API를 활용한 방식
    - 새로고침 없이 URL이동 기록 남길 수 있음
- 우리에게 익숙한 URL구조로 사용 가능
- History mode를 사용하지 않으면 Default값인 hash mode로 설정됨
    -예) http://localhost:8080#index
  
## router-link
- a 태그와 비슷한 기능 -> URL을 이동시킴
    - routes에 등록된 컴포넌트와 매핑됨
    - 히스토리 모드에서 router-link는 클릭 이벤트를 차단하여 a 태그와 달리 브라우저가 페이지를 다시 로드하지 않도록 함
    
- 목표 경로는 'to'속성으로 지정됨
- 기능에 맞게 HTML에서 a태그로 rendering 되지만, 필요에 따라 다른 태그로 바꿀 수 있음

## router-view
- 주어진 URL에 대해 일치하는 컴포넌트를 렌더링 하는 컴포넌트
- 실제 component가 DOM에 부착되어 보이는 자리를 의미
- router-link를 클릭하면 routes에 매핑된 컴포넌트를 렌더링

- Djaong에서의 block tag와 비슷함
    - App.vue는 base.html의 역할
    - router-view는 blokc태그로 감싼 부분
    
## `src/router/index.js`
- 라우터에 관련된 정보 및 설정이 작성 되는 곳
- Django에서의 urls.py에 대항
- routes에 URL과 컴포넌트를 매핑

## ``src/Views`
- router-view에 들어갈 component 작성
- 기존에 컴포넌트를 작성하던 곳은 components 폴더 뿐이었지만 이제 두 폴더로 나뉘어짐
- 각 폴더 안의 .vue 파일들이 기능적으로 다른 것은 아님
---
- views/
    - routes에 매핑되는 컴포넌트, 즉 router-view의 위치에 렌더링 되는 컴포넌트를 모아두는 폴더
    - 다른 컴포넌트와 구분하기 위해 View로 끝나도록 만드는 것을 권장
    
- components/
    - routes에 매핑된 컴포넌트의 하위 컴포넌트를 모아두는 폴더
    - Ex) HomeView 컴포넌트 내부의 HelloWorld 컴포넌트
    
## 주소를 이동하는 2가지 방법
1. 선언적 방식 네비게이션
   - router-link의 'to'속성으로 주소 전달
    - routes에 등록된 주소와 매핑된 컴포넌트로 이동
    - named Routes: 이름을 가지는 routes, Django에서 path함수의 name인자의 활용과 같은 방식
    - 동적인 값을 사용하기 때문에 v-bind를 사용해야 정상적으로 작동
2. 프로그래밍 방식 네비게이션
    - Vue 인스턴스 내부에서 라우터 인스턴스에 `$router`로 접근할 수 있음
    - 다른 URL로 이동하려면 `this.$router.push`를 사용
    - history stack에 이동할 URL을 넣는 방식
    - history stack에 기록이 남기 때문에 사용자가 브라우저의 뒤로 가기 버튼을 클릭하면 이전 URL로 이동할 수 있음
    - 결국 `<router-link :to= '...' `를 클릭하는 것과 `$router.push(...)`를 호출하는 것과 같은 동작
    
## lazy-loading
- 모든 파일을 한 번에 로드하려고 하면 모든 것을 다 읽는 시간이 매우 오래 걸림
- 미리 로드를 하지 않고 특정 라우트에 방문할 때 매핑된 컴포너트의 코드를 로드하는 방식을 활용할 수 있음
    - 모든 파일을 한 번에 로드하지 않아도 되기 때문에 최초에 로드하는 시간이 빨라짐
    - 당장 사용하지 않을 컴포넌트는 먼저 로드하지 않는 것이 핵심
    
## 네비게이션 가드
- Vue router를 통해 특정 URL에 접근할 때 다른 url로 redirect를 하거나 해당 URL로의 접근을 막는 방법
    - ex) 사용자의 인증 정보가 없으면 특정 페이지에 접근하지 못하게 함
    
- 전역가드
    - 애플리케이션 전역에서 동작
    - 다른 url 주소로 이동할 때 항상 실행
    - `router/index.js`에 `router.beforeEach()`를 사용하여 설정
    - 콜백함수의 값으로 다음과 같이 3개의 인자를 받음
        - `to` : 이동할 URL정보가 담긴 Route 객체
        - `from` : 현재 URL정보가 담긴 Route 객체
        - `next`: 지정한 URL로 이동하기 위해 호출하는 함수
            - 콜백 함수 내부에서 반드시 한 번만 호출되어야 함
            - 기본적으로 to에 해당하는 URL로 이동
    
- 라우터 가드
    - 특정 URL에서만 동작
    - beforeEnter()
        - route에 진입했을 때 실행됨
        - 라우터를 등록한 위치에 추가
        - 단 매개변수, 쿼리, 해시 값이 변경될때는 실행되지 않고 다른 경로에서 탐색할 때만 실행됨
        - 콜백함수는 to, from, next인자로 받음
- 컴포넌트 가드
    - 라우터 컴포넌트 안에 정의
    - beforeRouteUpdate()
        - 해당 컴포넌트를 렌더링하는 경로가 변경될 때 실행
        - **params가 변화하지 않는 이유**
            - 컴포넌트가 재사용되었기 때문
            - 기존 컴포넌트를 지우고 새로 만드는 것보다 효율적
            - 단, lifecycle hook이 호출되지 않음
            - 따라서 $route.params에 있는 데이터를 새로 가져오지 않음
    
## Global Before Guard
- URL이 변경되어 화면이 전환되기 전 router.beforeEach()가 호출됨
    - 화면이 전환되지 않고 대기 상태가 됨
    
- 변경된 URL로 라우팅하기 위해서는 next()를 호출해줘야 함
    - next()가 호출되기 전까지 화면이 전환되지 않음
    

## 404 Not Found
- 사용자가 요청한 리소스가 존재하지 않을 때 응답

#Optional Chaining
- `?.` 앞의 평가 대상이 undefined나 null 이면 에러가 발생하지 않고 undefined를 반환

    
