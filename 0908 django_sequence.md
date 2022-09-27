# Auth 사용법
1. python -m venv venv
2. source/v/s/a
3. python manage.py makemigrations 확인
4. python mange.py migrate
5. python manage.py startapp accounts
6. settings에서 install app 추가
7. 프로젝트 url에서 연결(include)
8. accounts.urls에서 기본 틀 작성
9. accounts.models에서 AbstractUser
10. settings에서 AUTH_USER_MODEL = 'accounts.User'
11. 원래는 auth.User인데 이것도 내 입맛대로 하기 위해 바꾼 것
12. admin은 재량
13. 있던 sql 삭제하고 migrations 다시
14. migrate
15. accounts_user 생성 확인
16. urls.py - views.py - html생성 반복 진행
17. templates/앱명

```python
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login  (login 함수 재귀가 되어버림)

```
AttributeError at /accounts/signup/
Manager isn't available; 'auth.User' has been swapped for 'accounts.User'

accounts에 forms.py 만들어서 옮겨줘야 됨

html하나로 합치기

form.html