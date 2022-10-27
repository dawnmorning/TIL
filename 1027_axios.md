axios를 이용해서 url,method 설정,요청
-> 동작X (403 forbidden)
{%csrf token%}생성된 값 추출
속성 선택자 ```[name = csrfmiddletoken]``` 추출
1. 내가 누른 좋아요 버튼 DOM 조작 해보기
    1. script 부분이 html에 필요하므로, base.html의 extend 안에서 이루어지기 때문에 base html에서 block script를 추가한다.
    2. index.html에서 block script를 추가하고, script 탭을 만든다
    3. 버튼 하나를 선택하는 건 하드코딩,,, 전체를 읽기 위해서는 formList를 정의하고, form태그의 클래스든, id를 받아온다.
    4. ```const formList = document.querySelectAll('.클래스명)```
    5. list들을 하나씩 받아주어야 하므로 forEach 함ㄷ뤱ㄱ녚ㅈ툐수

2. axios 요청하기 -> views.py 응답 수정
3. 응답으로 수정하기