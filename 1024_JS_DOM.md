# DOM

- 웹 브라우저에 내장된 API, 현재 컴퓨터 환경에 관한 데이터를 제공하거나 여러가지 유용하고 복잡한 일을 수행
  
- 문서 객체 모델로서 문서의 구조화된 표현을 제공
  
- 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공
  
  - 문서 구조, 스타일, 내용 등을 변경할 수 있게 도움
  - HTML / CSS를 조작할 수 있음
- 문서가 구조화되어 있으며 각 요소는 객체로 취급
  
- 단순한 속성 접근, 메서드 활용 뿐만 아니라 프로그래밍 언어적 특성을 활용한 조작 가능
  
- 문서가 구조화 되어 있으며 각 요소는 객체로 취급
  
- 단순한 속성 접근, 메서드 활용 뿐만 아니라 프로그래밍 언어적 특성을 활용한 조작 가능
  
- DOM은 문서를 논리 트리로 표현한다.
  
- DOM 매서드를 사용하면 프로그래밍적 트리에 접근할 수 있고 이를 통해 문서의 구조, 스타일, 컨텐츠를 변경할 수 있음
  
- DOM의 주요 객체
  

1. window
2. document
3. navigator / location / history / screen 등

# Window object

- DOM을 표현하는 창
- 가장 최상위 객체
- 탭 기능이 이 있는 브라우저에서는 각각의 탭을 각각의 window객체로 나타냄

# document object

- 브라우저가 불러온 웹페이지

# Dom 조작

- Document가 제공하는 기능을 사용해 웹 페이지 문서 조작하기
  
- 조작순서
  
  1. 선택(Select)
  2. 조작(Manipulation)
    - 생성, 추가, 삭제 등
- 선택 관련 메서드
  
  - ```document.querySelector(selector)```
    - 제공한 선택자와 일치하는 element 한 개 선택
    - 제공한 CSS selector 만족하는 첫 번째 element 객체를 반환(없다면 null 반환)
  - ```documnet.querySelectorAll(selector)```
    - 제공한 선택자와 일치하는 여러 element를 선택
    - 매칭 할 하나 이상의 셀렉터를 포함하는 유효한 CSS selector를 인자로 받음
    - 제공한 CSS selector를 만족하는 NodeList를 반환
- 조작 관련 메서드(생성)
  
  - ```document.createElement(tagName)```
    - 작성한 tagName의 HTML 요소를 생성하여 반환
- 조작 관련 메서드(입력)
  
  - ```Node.innerText```
    - Node 객체와 그 자손의 텍스트 컨텐츠(DOMString)를 표현
    - 사람이 읽을 수 있는 요소만 남김
    - 즉, 줄 바꿈을 인식하고 숨겨진 내용을 무시하는 등 최종적으로 스타일링이 적용된 모습으로 표현
- 조작 관련 메서드(추가)
  
  - ```Node.appendChild()```
    - 한 Node를 특정 부모 Node의 자식 NodeList중 마지막 자식으로 삽입
    - 한 번에 오직 하나의 Node만 추가할 수 있음
    - 추가된 Node 객체를 반환
    - 만약 주어진 Node가 이미 문서에 존재하는 다른 Node를 참조한다면, 현재 위치에서 새로운 위치로 이동
- 조작 관련 메서드(삭제)
  
  - ```Node.removeChild()```
    - DOM에서 자식 Node를 제거
    - 제거된 Node를 반환
- 조각 관련 메서드(속성 조회 및 설정)
  
  - ```Element.getAttribute(attributeName)```
    - 해당 요소의 지정된 값(문자열)을 반환
    - 인자(attributesName)는 값을 얻고자 하는 속성의 이름
  - ```Element.setAttribute(name, value)```
    - 지정된 요소의 값을 설정
    - 속성이 이미 존재하면 값을 갱신, 존재하지 않으면 지정된 이름과 값으로 새 속성을 추가

# Event

- 프로그래밍 하고 있는 시스템에서 일어나는 사건 혹은 발생인데, 우리가 원한다면
- 그것들에 어떠한 방식으로 응답할 수 있도록 시스템이 말해주는 것

# Event object

- 네트워크 활동이나 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체
  
- Event 발생
  
  - 마우스를 클릭하거나 키보드를 누르는 등 사용자 행동으로 발생할 수도 있고
    
  - 특정 메서드를 호출하여 프로그래밍적으로도 만들어 낼 수 있음
    
  - DOM요소는 Event를 받고('수신')
    
  - 받은 Event를 '처리'할 수 ㅣㅇㅆ음
    
    - Event 처리는 addEventListener()라는 Event 처리기(Event handler)를 사용해 다양항 html요소에 '부착'하게 됨
      -```addEventListner()```
      - 대상에 특정 event가 발생하면, 할 일을 등록하자
  - ```EventTarget.addEventListener(type, listener[, options])```
    
    - 지정한 Event가 대상에 전달될 때 마다 호출할 함수를 설정
    - Event를 지원하는 모든 객체(Element, Documnet, Window 등)를 대상(EventTarget)으로 지정 가능
    - type:
      - 반응 할 Event 유형을 나타내는 대소문자 구분 문자열
      - 대표 이벤트
        - input, click, submit
    - listener
      - 지정된 타입의 Event를 수신할 객체
      - JavaScript function객체(콜백 함수)여야함
      - 콜백 함수는 발생한 Event의 데이터를 가진 Event기반 객체를 유일한 매개변수로 받음
- Event 취소
  
  - ```event.preventDefault()```
    - 현재 Event의 기본 동작을 중단
    - HTML 요소의 기본 동작을 작동하지 않게 막음
    - HTML 요소의 기본 동작 예시
      - a태그 : 클릭 시 특정 주소로 이동
      - form 태그 : form 데이터 전송

# this

- 어떠한 object를 가리키는 키워드
  
  - java에서 this와 python에서의 self는 인스턴스 자기자신을 가리킴
- JavaScript의 함수는 호출될 때 this를 암묵적으로 전달 받음
  
- JavaScript에서의 this는 일반적인 프로그래밍 언어에서의 this와 조금 다르게 동작
  
- JavaScript는 해당 함수 호출 방식에 따라 this에 바인딩 되는 객체가 달라짐
  
- 즉 함수를 선언할 때 this에 객체가 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출 되었는지에 따라 동적으로 결정됨
  

## this INDEX

1. 전역 문맥에서의 this
  - 브라우저의 전역 객체인 window를 가리킴
    - 전역 객체는 모든 객체의 유일한 최상위 객체를 의미
2. 함수 문맥에서의 this
  - 단순 호출
    - 전역 객체를 가리킴
    - 전역은 브라우저에서는 window, node.js는 global을 의미함
  - Method(객체의 메서드로서)
    - 메서드로 선언하고 호출한다면, 객체의 메서드이므로 해당 객체가 바인딩
  - Nested
    - forEach의 콜백 함수에서의 this가 메서드의 객체를 가리키지 못하고 전역 객체 window를 가리킴
    - 단순 호출 방식으로 사용되었기 때문
    - 이를 해결하기 위해 등장한 함수 표현식이 화살표 함수
    - 화살표 함수에서 this는 자신을 감싼 정적 범위
    - 자동으로 한 단계 상위의 scope의 context를 바인딩

#### this가 호출되는 순간에 결정되는 것 장점/단점

```
- 함수를 하나만 만들어서 여러 객체에서 재사용할 수 있다.
- 이런 유연함이 실수로 이어질 수 있다는 것은 단점
- 나쁜지 좋은지 판단 X
```