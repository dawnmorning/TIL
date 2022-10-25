- 문자열 필드 -> ''으로 빈 값을 허용하기 때문에 , NULL 사용하지 않음
  - 그렇기 때문에 문자열 기반 필드에는 null 옵션사용을 피하자.
  - blank = True 
- 다른필드 -> NULL

# STATIC FILES

- 파일 자체가 고정 되어 있고, 서비스 중에도 추가되거나 변경되지 않고 고정되어 있음

- ```extend```밑에 ```load 태그 사용해야```
  
- 이후 img태그 이용해서 아래와 같이 작성
```
{% extends 'base.html' %}
{% load static %}

{% block content %}

<img src="{% static 'articles/images.jpeg' %}" alt="sampleimg">
```

### Static files관련 Core Settings
#### 서버 끄고 다시 켜야 됨

1. STATIC_ROOT
   - 개발과정에서 settings.py의 debug값이 True로 설정되어 있으면 해당 값은 작용되지 않음
    

2. STATICFILES_DIRS
    - ```settings.py에서 STATICFILES_DIRS = [BASE_DIR / 'static'],```
    - 추가 파일 디렉토리에 대한 전체 경로를 포함하는 문자열 목록으로 작성되어야 함
    

3. STATIC_URL
      - Default = None
      - STATIC_ROOT에 있는 정적 파일을 참조할 때 사용할 URL
      - 실제 파일이나 디렉토리가 아니며, URL로만 존재
      - 비어있지 않은 값으로 설정 한다면 반드시 slash(/)로 끝나야 함

### static file 가져오기

- 가져오는 2가지 방법

1. 기본 경로에 있는 static file가져오기
   - 폴더 최상단에 static/articles 생성
2. 추가 경로에 있는 static file가져오기
  -  ```settings.py에서 STATICFILES_DIRS = [BASE_DIR / 'static'],```
  ```
# detail.html

{% extends 'base.html' %}

{% block content %}
  {% if article.image %}
  <img src="{{article.image.url}} " alt="{{ article.image }}">
  {% endif %}
```
### ImageField()
- 이 필드의 인스턴스는 최대 길이가 100자인 문자열로 DB에 생성됨

### MEDIA_ROOT
- 사용자가 업로드 한 파일들을 보관할 디렉토리의 절대경로
- Django는 성능을 위해 업로드 파일은 데이터베이스에 저장하지 않음
    - 저장되는 것은 파일 경로
    
- MEDIA_ROOT와 STATIC_ROOT는 반드시 다른 경로로 지정해야 함
### MEDIA_ROOT
- MEDIA_ROT에서 제공되는 미디어 파일을 처리하는 url
- 업로드 된 파일의 주소를 만들어 주는 역할
- 비어있지 않은 값으로 설정한다면 SLASH로 끝나야 함
- MEDIA_URL 은 STATIC_URL과 반드시 다른 경로로 지정

- ImageField를 사용하려면 반드시 Pillow 라이브러리가 필요
    - Pillow 설치 없이는 makemigrations 실행 불가
    - ```pip install Pillow -> python mange.py makemigrations -> migrate -> pip freeze > requirements.txt```
    
- 파일 or image 업로드시에는 form 태그에 enctype = "multipart/form-data"로 변경
- reuest.FILES

-수정(update)도 마찬가지

### Image Resizing

- django-imagekit
- 2가지 방식으로 썸네일 만들기를 진행
1. 원본 이미지 저장 X
   ```
   image = ProcessedImageField(
   blank = True,
   upload_to = 'thumbnails/',
   processors = [Thumbanil(200,300)],
   format = 'JPEG',
   options = {'quality': 80},
   )
   ```
2. 원본 이미지 저장 O


### CRUD - QuerysetAPI
- 전체 인원 수 조회
1.User.objects.count()
  
2. len(User.objects.all())

- 나이가 어린 순으로 조회하기
```python
User.objects.order_by('age').values('first_name','age')
```
-  order_by()
1. 기본적으로 오름차순 정렬
2. 하이픈을 붙이면 내림차순으로 정렬
- values()
1. 모델 인스턴스가 아닌 딕셔너리 요소들을 가진 QuerySet을 반환

- 이름과 나이를 나이가 많은 순서대로 조회하기
```python
User.objects.order_by('-age').values('last_name', 'age')
```
- 이름, 나이, 계좌잔고를 나이가 어린 순으로, 만약 같은 나이라면 계좌 잔고가 많은 순으로 정렬해서 조회하기
```python
User.objects.order_by('age','-balance').values('last_name','age','balance')
```
### 중복없이 모든 지역 조회하기
```python
User.objects.distinct().values('country')
```
- 지역 순으로 오름차순 정렬하여 중복없이 모든 지역 조회하기
```python
User.objects.distinct().values('country').order_by('country')
```
- 나이가 30인 사람들의 이름 조회
```python
User.objects.filter(age = 30).values('first_name')
```
- 나이가 30 이상인 사람들의 이름과 나이 조회
```python
User.objects.filter(age__gte = 30, balance__gt=500000).values('first_name', 'age')
```
- 이름에 '호'가 포함되는 사람들의 이름과 성 조회
```python
User.objects.filter(first_name__contains = '호').values('first_name','last_name')
```
- 핸드폰 번호가 011로 시작하는 사람들의 이름과 핸드폰 번호 조회
```python
User.objects.filter(phone__startswith = '011-').values('first_name','phone')
```
### SQL에서의 '%'와일드 카드와 같음