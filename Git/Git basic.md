# 깃허브 사용법 정리
> ## git은 무엇인가?
> ---
>
1. 분산 버전관리하는 프로그램이다.

 2. 이전 버전의 변경사항들만 가지고 있고, 최종본만 가지고 있으면 용량 축소가 가능하다.
   
 3. 코드의 히스토리(버전)을 관리하거나 개발되어온 과정 파악, 이전 버전과의 변경 사항 비교 및 분석이 가능하다.
   
 4. 중앙 집중식과 분산 버전관리가 있으며 깃랩, 깃허브 bitbucket이 이에 속한다.
 ---
> ## git 용어

- touch : 파일을 생성하는 명령어 touch a.txt (폴더를 만들 수는 없음)

- mkdir : 새 폴더를 생성하는 명령어 makedirectory

- ls : 현재 디렉토리에(폴더에) 있는 파일목록 알려줌 / 폴더는 뒤에 슬러시가 붙어서 보임

- cd : 현재 작업중인 디렉토리를 변경하는 명령어  ex) 나 어디 폴더로 이동할겨 cd ..은 빠져 나가는 것

- start,open : 폴더/파일을 여는 명령어(윈도우는 start 맥은 open) vs로 열기 → vs 파일명

- rm : 파일을 삭제하는 명렁어  -r 옵션을 주면 폴더 삭제 가능 rm -rf 폴더명(영구삭제됨)
---

> ## 절대경로 vs 상대경로

- 절대경로 : 루트 디렉토리로부터 목적 지점까지 거치는 모든 경로를 전부 작성한 것

    “절대” / 시작점 명시됐을 때 절대경로로 생각

- 상대경로 : 현재 작업하고 있는 디렉토리를 기준으로 계산된 상대적 위치를 작성한 것

    “나의 기준”

- ./ : 현재 작업하고 있는 폴더 
- ../ : 현재 작업하고 있는 폴더의 부모 폴더(상위 폴더)
---

> ## mark down(.md)
> vs code에서 md 프리뷰 보는법은 md생성, 파일 클릭 후 마우스 우클릭

1. 텍스트 기반의 가벼운 마크업(markup)언어

2. 문서의 구조와 내용을 같이 쉽고 빠르게 적고자 탄생

3. 마크업 : 태크를 이용하여 문서의 구조를 나타내는 것
---

> ## markdown tip

(#) 개발자로 성장하기 
- 대체 어디서부터 ~

- py~

(백스페이스) 들여쓰기 탭, 내어쓰기 shift 탭

 ~==사람==

(>) 인용문을 작성할 수 있는 블럭

(>) 그 안에 또 인용문 가능

     1. 순서가 있는 리스트 엔터치면 자연스럽게 다음 번호로

(-) 띄우고 [] 하면 체크리스트 생김

- `(esc밑에 있는거, 백틱) 세번 치고 py입력시 파이썬 입력 할수 있는 코드블럭 소환가능

- 한 줄 표현시에 문장 좌우에 백틱(`) 넣으면 바뀜

- 표만들기 마우스 우클릭 표 or 컨트롤 t

- 가로줄 만들기 (-) 세개이상

- 링크달기 [링크 이름을 여기에 적기] (주소를 적으면 됨)

- 이미지는 그대로 드래그 해서 넣으면 됨

- typora cheatsheet 검색하면 [https://support.typora.io/Markdown-Reference/](https://support.typora.io/Markdown-Reference/) 여러 정보들 나와있음 

- 글자에 색깔입히고 싶을 시 html 문법 사용 가능
---

> ## 깃허브에서 [readme.md] 의 뜻
> 내가 만든 코드의 사용설명서
 
- 파일을 통해 오픈 소스의 공식문서 작성 - 내가 쓰는거구나

- 개인 프로젝트의 소개 문서 작성

- 매일 학습한 내용 정리

- 마크다운을 이용한 블로그 운영

- 대문자로 README.md 작성

> ## repository(통칭 레포)

- 특정 디렉토리를 버전 관리하는 저장소

- git init 명령어로 로컬 저장소를 생성
- .git 디렉토리에 버전관리에 필요한 모든 것이 들어있음

- ls -a 깃허브에서 검색시 모든 것을 보여줌

> ## 깃은 세가지 영역으로 구분된다(가상으로)

- working directory / staging area / repository

- 내가 작업하고 있는 실제 디렉토리

- 커밋으로 남기고 싶은, 특정 버전으로 관리하고 싶은 파일이 있는 곳(중간 확인 하는 공간)

- 커밋들이 저장되는 곳

- git add 명령어를  통해 워킹디렉토리에서 스테이징 area로 이동 이후 

- git commit 통해 레포에 저장됨 

> ## git 단축키 필수

1. git status (깃의 현재 상태를 확인하기 위한 명령어)

2. git add . (현재 폴더 모든 파일 올리는 것)

3. git commit
   - 처음 실행하게 되면 git config --user.email ""과  git config --user.name "" 넣으면 됨!

4. git config --global --list 설정 이메일 확인 가능

### **VIM에 두가지 모드가 있음**

1. command 모드 → i누르면 message 추가 이후 어떻게 저장하고 나가는가?
2. editor 모드

- esc누르기 → :wq 치면 됨 메시지 추가하고 가야 커밋 가능

- 이미 커밋에 등록된 파일인데 이것을 수정하게 되면 untracked가 아닌 modified로 뜨게 됩니다

- git commit -m (VIm 없이) 상단의 “커밋 메세지”

- git push origin master

# git 순서
---
- **git init → git add → git commit -m “”**
---

- git log : git의 comit history볼수있음

- git diff :  두 commit 차이볼수있음  git diff 해시코드6자리 두개
---

> # 깃허브 연결방법

1. 우상단 플러스 혹은 왼쪽 creat repository



2. git remote add 레포별명(origin) 레포주소(컨털 c 이후 깃배쉬에는 우클릭 패이스트 or 시프트insert)

3. git remote -v

4. git push origin master 깃배쉬에서 깃허브 주소 찾아주기

5. git push 레포별명 브랜치명 하면 깃허브 창 뜸

> ## 깃허브 파일 내려받기
    
- git clone

- 폴더자체가 git으로 관리 항상 될수 있게 확인 cd “git 있는 폴더”

- 기준버전은 git hub!!!!

- 내려받는건 git pull 올리는건 git push

- git pull origin master

- 다른 공간에서 git 활용법 
- 1. pull 
- 2. add 
- 3. commit 
- 4. push

> # 번외
> git clone  과 git push의 차이점

- local로 복제할때 .git이 같이 복제됨. .git은 git설정이 있는 폴더

- 즉 remote 주소도 같이 복제됨 git init 할 필요가 없음, git remote add 등록할 필요도 X

- pull은 이미 .git이 존재하고 있어야 하고,  repo에 있는 버전과 동일한 버전으로 다운받는 것 (단순히 내려받는 것에 불과하므로 remote정보가 필요)

- clone은 최초 한번만 하고, 그러면 .git까지 같이 생기니, 그 이후는  push pull만 왔다 갔다 하면 됨

- 깃허브 레포 삭제하는 법

- 레포 들어가서 세팅 클릭 맨아래로 danger zone - delete this repository

- README.md 수정하고  push하기
  
- git clone {주소} 
  - remote repo를 local로 복사
- git push origin master 
    - local repo의 최신 커밋을remote repo로push

![enthusiasm](./img/%EC%97%B4%EC%A0%951.jpg)
![enthusiasm capture](./img/열정2.png)