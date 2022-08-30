# 클라이언트-서버 구조

- 대부분의 웹서비스, 클라이언트- 서버 구조를 기반으로동작
- 클라이언트와 서버 역시 하나의 컴퓨터

# 클라이언트

- 웹사용자의 인터넷에 연결된 장치

- chrome whale과 같은 웹 브라우저

- 서비스를 요청하는 주체
  
  # 서버

- 웹 페이지, 사이트 또는 앱을 저장하는 컴퓨터

- 클라이언트가 웹 페이지에 접근하려고 할 때 서버에서 클라이언트 컴퓨터로 웹 페이지 데이터를 응답해 사용자의 웹 브라우저에 표시됨

- 요청에 대해 서비스를 응답하는 주체

- django는 서버를 구현하는 웹 프레임워크
  
  # 웹 브라우저

- 웹에서 페이지를 찾아 보여주고, 사용자가 하이퍼링크를 통해 다른 페이지로 이동할 수 있도록 하는 프로그램

- 웹 페이지 파일을 우리가 보는 화면으로 바꿔주는(렌더링) 프로그램

- 웹페이지는 우리가 보는 화면 각각 한 장이 웹 페이지

- 종류
  
  - 정적 웹 페이지
  
  - 동적 웹 페이지
    
    ## 정적 웹 페이지

- static web page

- 있는 그대로(serve as-is)제공하는 것을 의미

- 모든 사용자에게 동일한 모습으로 전달되는 것
  
  ## 동적 웹 페이지

- dynamic web page

- 사용자의 요청에 따라 웹 페이지에 추가적인 수정이 되어 클라이언트에게 전달되는 웹 페이지

- 웹 페이지 내용을 바꿔주는 주체 == 서버
  
  - 서버에서 동작하고 있는 프로그램이 웹 페이지를 변경해줌. 이를 도와주는 프레임워크가 django 등

- 다양항 서버 사이드 프로그래밍 언어(python, java, c++)사용 가능

- 이 중에서 python을 이용해서 개발할 수 있는 프레임 워크인 Django를 학습하는 것
  
  ## Design Pattern

- 각기 다른 기능을 가진 다양한 응용 소프트웨어를 개발할 때 공통적인 설계 문제가 존재하며, 이를 처리하는 해결책 사이에도 공통점이 있다는 것을 발견

- 이러한 유사점을 패턴이라고 함

- 목적
  
  - 특정 문맥에서 공통적으로 발생하는 문제에 대해 재사용 가능한 해결책을 제시

- 장점
  
  - 디자인 패턴을 알고 있다면 서로 복합한 커뮤니케이션이 매우 간단해짐
    
    ## Django에서의 디자인 패턴

- MTV패턴 // MVC 디자인 패턴을 기반으로 조금 변형된 패턴

- MVC란??
  
  - Mode-View-Controller
  - 데이터 및 논리 제어를 구현하는데 널리 사용되는 소프트웨어 디자인 패턴
  - 하나의 큰 프로그램을 세가지 역할로 구분한 개발 방법론

- Model
  
  - 데이터와 관련된 로직을 관리

- View
  
  - 레이아웃과 화면을 처리

- Controller
  
  - 명령을 model과 view부분으로 연결

- MVC 소프트웨어 디자인 패턴의 목적
  
  - 관심사 분리
  - 더 나은 업무의 분리와 향상된 관리 제공
  - 각 부분을 독립적으로 개발할 수 있어, 하나를 수정하고 싶을 때 모두 건들지 않아도 됨
  - -> 개발 효율성 및 유지보수가 쉬워짐
  - -> 다수의 멤버로 개발하기 용이

- Django에서는 model을 model로, 

- view는 template (html파일)

- controller는 view라고 부름

- "MTV패턴"
  
  ## Model

- MVC 패턴에서 Model의 역할

- 데이터와 관련된 로직을 관리

- 응용프로그램의 데이터 구조를 정의하고 데이터베이스의 기록을 관리
  
  ## Template

- 레이아웃과 화면을 처리

- 화면상의 사용자 인터페이스 구조와 레이이아웃을 정의

- MVC 패턴에서 View의 역할에 해당
  
  ## View

- Model & Template 관련한 로직을 처리해서 응답을 반환

- 클라이언트의 요청에 대해 처리를 분기하는 역할

- 동작예시
  
  - 데이터가 필요하다면 mode에 접근해서 데이터를 가져오고 가져온 데이터를 template로 보내 화면을 구성하고 구성된 화면을 응답으로 만들어 클라이언트에게 반환

- MVC패턴에서 Controller의 역할에 해당
  
  # 정리

- Django는 MTV디자인 패턴을 가지고 있다

- Model : 데이터 관련

- Template : 화면 관련

- View : Model & Temaplate 중간 처리 및 응답 반환

# django 초기설정

## 터미널에서

mkdir django_intro 엔터

python -m venv venv 엔터

source v 탭 s탭 a탭 엔터

(venv)가 보인다면 가상환경인 상태

pip install django==3.2 엔터

노란색으로 warning뜨는 부분은 업그레이드 안내문, 무시해도 무방

pip freeze > requirements.txt 엔터

venv는 깃에 올리면 안 됨!

django_intro 폴더에서

.gitignore생성

gitignore.io 사이트가서 

python, visualstudiocode, django 세개 넣고 생성

다 긁어서 gitignore에 넣기

해당 폴더에서 django-admin startproject 프로젝트폴더명 .(현재폴더)

python manage.py runserver

python manage.py startapp polls

최상위 폴더 = 전체폴더

(플젝폴더명) = 프로젝트폴더

---

- asgi.py, wsgi.py 는 배포할 때 씀

- 실질적으로 건드리는것은 settings.py, urls.py !!

- manage.py 는 수정할 일 없음 // 호출!!

## django 만으로는 할 수 없음!!

- application이 필요
  
  - python mange.py startapp articles(어플이름, 복수형으로 만드는 것을 추천)
  
  - 역할별로 생성

- admin.py 
  
  - 관리자용 페이지를 설정하는 곳

- apps.py
  
  - 앱의 정보가 작성된 곳
  
  - 별도 추가 작성 x

- models.py
  
  - 애플리케이션 사용하는 Model 정의하는 곳
  
  - MTV 패턴의 M에 해당

- tests.py
  
  - 프로젝트의 테스트 코드를 작성하는 곳

- views.py
  
  - view 함수들이 정의되는 곳
  
  - MTV패턴의 V에 해당

## 어플리케이션 등록

- 프로젝트에서 앱을 사용하기 위해서는 반드시 INSTALLED_APPS리스트에 추가해야 함
  
  - INSTALLED_APPS (settings.py에 있음)
  
  - Django installation에 활성화 된 모든 앱을 지정하는 문자열 목록

# 먼저 등록하고 코딩 !!!!

- 항상 코드 수정은 url부터! 없을경우 요청한 url주소가 존재하지 않음

- 무조건 어플리케이션 바로밑에

## DTL(django template language)

- django builtin template

- 조건, 반복, 변수 치환, 필터 등의 기능을 제공
  
  - python처럼 일부 프로그래밍 구조(if, for 등)을 사용할 수 있지만,
  
  - 이것은 python 코드로 실행되는 것이 아님
  
  - Django 템플릿 시스템은 단순히 python이 html에 포함된 것이 아니니 주의

- 프로그래밍적 로직이 아니라 프레젠테이션을 표현하기 위한 것임을 명심

## variable

- 변수명은 영어, 숫자와 밑줄의 조합으로 구성될 수 있으나 밑줄로는 시작 할 수 없음

- dot(.)을 사용하여 변수 속성에 접근할 수 있음

- render()의 세번째 인자로 {'key':value}와 같이 딕셔너리 형태로 넘겨주며,

- 여기서 정의한 key에 해당하는 문자열이 template에서 사용 가능한 변수명이 됨

## Filters

- 표시할 편수를 수정할 때 사용
  
  - 예시) name 변수를 모두 소문자로 출력
  
  - ```python
    {{ name|lower}
    ```
  
  - 60개의 built-in template filters를 제공
  
  - chained가 가능하며 일부 필터는 인자를 받기도 함 
  
  - ```python
    {{ name|truncatewords : 30}
    ```

- html 에서 하는 것보다는 python - view에서 딕셔너리로 하는 것을 추천

## Tags

- 출력 텍스트를 만들거나, 반복 또는 논리를 수행하여 제어 흐름을 만드는 등 변수보다 복잡한 일을 수행

- 일부 태그는 시작과 종료 태그가 필요

- 약 24개의 built-in template tags를 제공
  
  - {{ }}, {% tag %} {% if %}{% endif %} {% endfor %}    

## Comments(주석)

- Django template에서 라인의 주석을 표현하기 위해 사용

- 한 라인 은 {# #}

- 여러줄 주석은

- {% comment %}

- 여러 줄 주석

- {% endcomment %}

## Template inheritance

- base.html은 최상단 폴더에 폴더 만들어서 거기에 넣기

- config의 settings에서 templates에서 DIRS를  templates 경로 설정 

- BASE_DIR / 'templates'로

## sending and Retrieving form data

- 데이터를 보내고 가져오기

- HTML form element를 통해 사용자와 애플리케이션 간의 상호작용 이해하기

## HTML form's attritubes

- action
  
  - 입력 데이터가 전송될 url을 지정
  
  - 데이터를 어디로 보낼 것인지 지정하는 것이며 이 값은 반드시 유효한 url이어야 함
  
  - 만약 이 속성을 지정하지 않으면 데이터는 현재 form이 있는 페이지의 url로 보내짐

- method
  
  - 데이터를 어떻게 보낼 것인지 정의
  
  - 입력 데이터의 http request methods를 지정
  
  - html form데이터는 오직 2가지 방법으로만 전송할 수 있는데, 바로 get방식과 post방식

- 사용자 data를 입력하려면, 입력 page가 필요한데, 
