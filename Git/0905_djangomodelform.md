# 원하는 데이터 형식이 맞는지에 대한 유효성 검증이 필요

- Django Form은 이 과정에서 작업과 반복 코드를 줄여줌으로써 훨씬 쉽게 유효성 검증을 진행할 수 있도록 만들어줌
-  단순화하고 자동화 할 수 있는 기능

# Django는 Form에 관련된 작업의 세 부분을 처리

1. 렌더링을 위한 데이터 준비 및 재구성
2. 데이터에 대한 HTML forms 생성
3. 클라이언트로부터 받은 데이터 수신 및 처리

```python
# articles/forms.py  생성 후
from django import forms  # 장고에서 forms를 활용
class ArticleForm(forms.Form):
    title = forms.CharField(max_length = 10)
    conent = forms.CharField()
```

```python
#  articles/views.py

def new(request):
    form = ArticleForm()  # 인스턴스 할당
    context = {
        'form' : form
    }
    return render(request, 'articels/new.html', context)
```
```python
#articles/new.html 수정

```

# Widget

- 단순히 html 렌더링을 처리하는 것이며 유효성 검증과 아무런 관계가 없음
    - 웹 페이지에서 input element의 단순 raw한 렌더링만을 처리하는 것


# Model Form

- Model.py와 forms.py가 중복됨
- ModelForm을 활용
- Model을 통해 Form Class를 만들 수 있는 helper class
- Form과 똑같은 방식으로 view함수에서 사용

```python
# articles/forms.py
from django import forms
from .models import Article

class ArticleForm(fomrs.ModelForm):
    class Meta:
        model = Article
        fields = '__all__'
```

