# 클라이언트
- 웹 브라우조, 서비스를 요청하는 주체
# 서버
- 앱을 저장하는 컴퓨터
- 요청에대해 서비스를 응답하는 주체
# 웹 브라우저
- 웹에서 페이지를 찾아 보여주고, 사용자가 하이퍼링크르 통해 다른 페이지로 이동할 수 있도록 하는 프로그램
- 정적/ 동적 웹페이지
# 렌더링
# 웹페이지의 내용을 바꿔주는 주체 = 서버

# MTV Design Pattern
- model template, view
- MVC 디자인 패턴을 기반으로 조금 변형된 패턴
- MVC : Model - View - Controller
Model : 데이터와 관련된 로직 처리 == Model
View : 레이아웃과 화면을 처리 == template
Controller : 명령을 model과 view부분으로 연결 == view
- 처리를 분기하는 역할
# LTS : Long term support
# Project 이름에는 python 이나 Django에서 사용중인 키워드 및 - 사용불가
# python manage.py startapp articles
# INSTALLED_APPS

- request : 응답을 생성하는데 사용되는 요청 객체
- template_name : 템플릿의 전체 이름 또느 템플릿 이름의 경로
- context : 템플릿에서 사용할 데이터(딕셔너리 타입)

# Django Template

# DTL(Django Template Language)
- 장고 템플릿에서 사용하는 built-in template system
- 파이썬 코드로 실행되는 것이 아니다.
## DTL syntax
- Variable : 밑줄로 시작 할 수 없음, 공백 구두점 문자 불가 .사용하여 변수 속성 접근 X
- Filters : 
- tags
- comments 

# Template inheritance
- 재사용성에 초점
- extends, block
# HTTP Methods 예시
- get, post, put, delete
- get : 데이터를 가져올 때만 사용해야 함 / 대소문자 차이 X
# Variable Routing
 - URL주소를 변수로 사용

# Model  : 구조화 / 조작
- URL namespace
- template namespace

# Models.py
- 모델 클래스를 작성하는 것은 데이터베이스 테이블의 스키마를 정의하는 것
- 모델 클래스 = 테이블 스키마

# Migrations, migrate, ORM(중간 해석)
- ORM : Object - Relational - Mapping
- 장점 : SQL잘 알지 못해도 객체지향 언어로 DB조작 가능
- 객체 지향적 접근으로 인한 높은 생산성
- 단점 : ORM만으로 완전한 서비스를 구현하기 어려운 경우가 있음
- "생산성"
- models.py 변경사항 발생시 -> makemigrations -> migrate
- DateTimeField()
    - auto_now_add: 최초생성일
    - auto_now  : 최종 수정 일자

# QuerySet API
- Database API 구문
    - Article.objects.all()

# HTTP response status code
- informational responses
- successful responses
- REdirection
- Client
- server

# csrf token
- 없으면 403 forbidden

# Variable Routing
- 
# python manage.py createsuperuser

# Django Form
- 유효성 검증
- 단순화 / 자동화 기능 제공
# ModelForm Class
- Model을 통해 Form Class를 만들 수 있는 helper Class

# Allowed HTTP methods
- require_http_methods()
- require_POST()
- require_safe()
- 405 method not allowed

# Hyper Text Transfer protocol

# 쿠키 사용 목적
- 세션관리 / 개인화 / 트래킹
- Session cookie, persistent cookies
- form.as_p
# 로그인
- form django.contrib.auth import login as auth_login
- form = AuthenticationForm(request, request.POST)

# USER context 없이?
- context processors 때문

# UserCreationForm 커스텀
- get_user_model()

# 탈퇴
- 탈퇴후 로그아웃 순서
- 먼저 로그아웃 해버리면 해당 요청 객체정보가 없어지기 때문에 탈퇴에 필요한 정보도 없어짐


# CustomUserChangeForm
- request.POST, instance = request.user 필요

# update_session_auth_hash(request, user)
