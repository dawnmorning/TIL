## Server

- 클라이언트에게 정보와 서비스를 제공하는 컴퓨터 시스템
- 서비스 전체를 제공=Django Web Service
- 정보를 제공 = DRF API Service

## Client
- Server가 제공하는 서비스에 적절한 요청을 통해 Server로부터 반환 받은 응답을 사용자에게 표현하는 기능을 가진 프로그램 혹은 시스템
- Server로부터 반환 받은 응답을 사용자에게 표현

- Server는 정보와 서비스를 제공
    - DB와 통신하며 데이터를 생성, 조회, 수정, 삭제를 담당
    - 요청을 보낸 Client에게 정상적인 요청이었다면 처리한 결과를 응답
    
- Client는 사용자의 정보 요청을 처리, server에게 응답 받은 정보를 표현
    - Server에게 정보를 요청
    - 응답 받은 정보를 가공하여 화면에 표현
    
## CORS
- Cross-Origin Resource Sharing
    - 브라우저가 요청을 보내고 서버의 응답이 브라우저에 도착
    - Server의 log는 200(정상)
    - Server는 정상적으로 응답했지만 브라우저가 막은 것
    - 보안상의 이유로 브라우저는 동일 출처 정책(SOP)에 의해 다른 출처의 리소스와 상호작용 하는 것을 제한 함
    
## SOP(Same -Origin Policy)
- 동일 출처 정책
- 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호 작용 하는 것을 제한하는 보안 방식
- 잠재적으로 해로울 수 있는 문서를 분리함으로써 공격받을 수 있는 경로를 줄임

## Origin - 출처
- URL의 Protocol, Host, Port를 모두 포함하여 출처라고 부름
- Same Origin 예시
    - 아래 세 영역이 일치하는 경우에만 동일 출처로 인정
    
```
Scheme/Protocol    Host      Port    Path
http://           localhost  :3000/   posts/3
```

## CORS-교차 출처 리소스 공유

- 추가 HTTP Header를 사용하여, 특정 출처에서 실행 중인 웹 어플리케이션이 다른 출처의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제
    - 어떤 출처에서 자신의 컨텐츠를 불러갈 수 있는지 서버에 지정할 수 있는 방법
    
- 리소스가 자신의 출처와 다를 때 교차 출처 HTTP 요청을 실행
    - 만약 다른 출처의 리소스를 가져오기 위해서는 이를 제공하는 서버가 브라우저에게 다른 출처지만 접근해도 된다는 사실을 알려야 함
    - `교차 출처 리소스 공유 정책(CORS policy)`
    
## CORS policy
- 다른 출처에서 온 리소스를 공유하는 것에 대한 정책
- CORS policy에 위배되는 경우 브라우저에서 해당 응답 결과를 사용하지 않음
    - Server에서 응답을 주더라도 브라우저에서 거절
    
- 다른 출처에서 리소를 불러오려면 그 출처에서 올바른 CORS header를 포함한 응답을 반환해야 함

## How to set CORS
- CORS 표준에 의해 추가된 HTTP Response Header를 통해 이를 통제 가능
- HTTP Response Header 예시
    - Access-Control-Allow-Origin
    - 단일 출처를 지정하여 브라우저가 해당 출처가 리소스에 접근하도록 허용
    
## `django-cors-header library`
- django-cors-header github에서 내용 확인
- 응답에 CORS header를 추가해주는 라이브러리
-  다른 출처에서 Django 애플리케이션에 대한 브라우저 내 요청을 허용함
- ` pip install django-cors-headers`, `pip freeze > requirements.txt`
- App 추가 및 MIDDLEWARE
- `CORS_ALLOWED_ORIGINS`에 교차 출처 자원 공유를 허용할 Domain 등록
- `CORS_ALLOWED_ORIGNINS =[ ''http: 어쩌고']`
- 모든 Origin 허용하고자 한다면 `= True`

## Authentication
- 자신이라고 주장하는 사용자가 누구인지 확인하는 행위
- 모든 보안 프로세스의 첫 번째 단계
- 즉, 내가 누구인지를 확인하는 과정
- 401 Unauthorized
    - 비인증
    
## Authorization
- 사용자에게 특정 리소스 또는 기능에 대한 액세스 권한을 부여하는 과정
- 보안 환경에서 권한 부여는 항상 인증이 먼저 필요함
- 사용자는 조직에 대한 액세스 권한을 부여 받기 전에 먼저 자신의 ID가 진짜인지 먼저 확인해야 함
- 서류의 등급, 웹 페이지에서 글을 조회 & 삭제 & 수정 할 수 있는 방법, 제한 구역
    - 인증이 되었어도 모든 권한을 부여 받는 것은 아님
    
-  403 Forbidden
    - 401과 다른 점은 서버는 클라이언트가 누구인지 알고 있음
    
## Authentication and authorization work together
- 회원 가입 후, 로그인 시 서비스를 이용할 수 있는 권한 생성
- 인증 이후에 권한이 따라오는 경우가 많음
- 단, 모든 인증을 거쳐도 권한이 동일하게 부여되는 것은 아님
- Django에서 로그인을 했더라도 다른 사람의 글까지 수정/ 삭제가 가능하진 않음

## 인증 여부 확인 방법
- `https://www.django-rest-frameworkd.org/api-guide/authentication/`
- settings.py 에 작성해야 할 설정
    - 기본적인 인증 절차를 어떠한 방식으로 둘 것이냐를 설정하는 것
    - 예시의 2가지 방법 외에도 각 framework마다 다양한 인증방식이 있음
    
- 우리가 사용할 방법은 DRF가 기본으로 제공해주는 인증 방식 중 하나인
    `TokenAuthentication`
  
- 모든 상황에 대한 인증 방식을 정의하는 것이므로, 각 요청에 따라 다른 인증 방식을 거치고자 한다면 다른 방식이 필요

- `BasicAuthentication`
    - 가장 기본적인 수준의 인증 방식
    - 테스트에 적합
    
- `SessionAuthentication`
    - Django에서 사용하였던 seesion 기반의 인증 시스템
    - DRF와 Django의 session 인증 방식은 보안적 측면을 구성하는 방법에 차이가 있음
    
- `RemoteUserAuthentication`
    - Django의 Remote user방식을 사용할 때 활용하는 인증 방식
    
- `TokenAuthentiacation`
    - 매우 간단하게 구현 가능
    - 기본적인 보안 기능 제공
    - 다양한 외부 패키지가 있음
    - settings.py에서 `DEFAULT_AUTHENTICATION_CLASSES`를 정의
        - TokenAuthentication 인증방식을 사용할 것임을 명시
    
## TokenAuthentication 사용 방법
1. `INSTALLED_APPS`에 `rest_framework.authtoken` 등록
2. 생성한 Token을 각 User에게 발급
    - User는 발급 받은 Token을 요청과 함께 전송
    - Token을 통해 User 인증 및 권한 확인
    
3. User는 발급 받은 token을 headers에 담아 요청과 함께 전송
    - 단 반드시 Token 문자열 함께 삽입
    - 삽입해야할 문자열은 각 인증 방식마다 다름
    - **Token 문자열과 발급받은 실제 token 사이를 ' '(공백)으로 구분**
    
4. 기본 제공 방식에서 고려해야 할 사항들
    1. Token 생성 시점
    2. 생성한 Token 관리 방법
    3. User와 관련된 각종 기능 관리 방법
        - 회원 가입
        - 로그인
        - 회원 정보 수정
        - 비밀 번호 변경
    
## Dj-Rest-Auth
- 회원가입, 인증(소셜 미디어 인증 포함), 비밀번호 재설정, 사용자 세부 정보 검색, 회원 정보 수정 등을 위한 REST API end point 제공
- **주의, django-rest-auth는 더 이상 업데이트를 지원하지 않음 `dj-rest-auth`사용 **

## dj-rest-auth 사용법
1. 패키지설치
   - auth.User를 accounts.User로 변경
    - `pip install dj-rest-auth`
    - # Auth
    - 'rest_framework.authtoken',
    - 'dj_rest_auth'
    - migration, migrate
    - # urls.py
    - path('accounts/', include('dj_rest_auth.urls')),
    - dj-rest-auth 공식문서( Registraion 확인)
2. App 등록
   - `pip install 'dj-rest-auth[with_social]'`
    - installed apps에 
    - 'django.contrib.sites', 'allauth', 'allauth.account', 'allauth.socialaccount', 'dj_rest_auth.registration'
    - urls.py에
    - path('accounts/singup/', include('dj-rest_auth.registration.urls))
    - migrate
    - token 기억
3. url 등록

## Permission setting