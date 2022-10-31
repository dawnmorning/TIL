> # Git 작업 되돌리기
> 
> ## 1. Undoing
> 
> 1. working Directory 작업단계
> - ```git restore```
>   - Working Directory에서 수정한 파일을 수정 전으로 되돌리기
>   - 이미 버전 관리가 되고 있는 파일만 되돌리기 가능
>   - ```git restore```를 통해 되돌리면 해당 내용을 복원할 수 없으니 주의
>   - ```git restore {파일 이름}```
>   - ```echo Hello > test.md ```
>   - ```echo World! >> test.md``` => 아랫 줄에 추가됨
>   - ```git stash / git stash apply``` => 임시 휴지통 -> 복원

> 2. Staging Area 작업 단계
>    - git add 를 잘못한 경우
>    - working directory로 되돌리기
>    - root-commit 여부에 따라 두 가지 명령어로 나뉨
>      1. root - commit 이 없는 경우 : ```git rm --cached```
>         - commit이 없는 경우(한 번도 커밋을 안 한 경우)
>         - ```git rm --cached {파일이름}```
>         - git 관리되는 파일 중 더 이상 관리하지 않을 파일 삭제할 때도 사용
>      2. root -commit 이 있는 경우 : ```git restore --staged```
>         - 최근 커밋 된 곳으로 되돌릴 때
>         - ```git restore --staged {파일이름}}```

> 3. Repository 작업 단계 (commit 한 경우)
>    - ```git commit --amend```
>    - 커밋을 완료한 파일을 Staging Area로 되돌리기
>    - 상황별로
>      1. Staging Area에 새로 올라온 내용이 없다면, 직전 커밋의 메시지만 수정
>      2. 있다면, 직전 커밋을 덮어쓰기
>    - **이전 커밋을 완전히 고쳐서 새커밋으로 변경하므로, 이전 커밋은 일어나지 않은 일이 되며 히스토리에도 남지 않음을 주의**
>    - Vim
>      - 입력모드(i): 문서 편집 가능
>      - 명령모드:
>        - : wq!(저장 및 종료) 
>        - : q!(강제 종료)
>    - 팀 작업시 자제하는 것을 권고 (Hash 가 나뉠 수 있음)

> # Git reset & revert
> 
> - 기록하지 않음 / 기록 함
>   ##```git reset```
> - 프로젝트를 특정 커밋상태로 되돌림
> - 특정 커밋으로 되돌아 갔을 때, 해당 커밋 이후로 쌓았던 커밋들은 전부 사라짐
> - ```git reset [옵션] {커밋 ID}```
>   - 옵션은 soft, mixed, hard 중 하나
>     1. ```soft {커밋 ID}```
>        - 해당 커밋으로 되돌아가고
>        - 되돌아간 커밋 이후의 파일들은 Staging Area로 돌려놓음
>     2. ```--mixed {커밋 ID}```
>        - 해당 커밋으로 되돌아가고
>        - 되돌아간 커밋 이후의 파일들은 Working Directory로 돌려놓음
>        - git reset 옵션의 기본값
>     3. ```--hard {커밋 ID}```
>        - 해당 커밋으로 되돌아가고
>        - 되돌아간 커밋 이후의 파일들은 모두 Working Directory에서 삭제
>          - ```reflog```통해 복구 가능
>        - 기존의 Untracked 파일은 사라지지 않고 Untracked로 남아있음

> - ID는 되돌아가고 싶은 시점의 커밋ID를 작성
> - ```git log --oneline```
>   
>   ## ```git revert```
>   - 과거를 없었던 일로 만드는 행위로, 이전 커밋을 취소한다는 새로운 커밋을 생성
>   - ```git revert {커밋 ID}```
> - 커밋 ID는 취소하고 싶은 커밋 ID를 작성
>   - ```reset```은 커밋 내역을 삭제하는 반면, revert는 새로운 커밋을 생성함
>   - ```revert```는 커밋 내역의 차이로 인한 충돌 방지 가능
>   - 문법적 차이
> - ```git reset ID``` 라고 작성하면 ID라는 커밋으로 되돌림
> - ```revert```는 ID 한 개를 취소한다는 뜻 (ID가 취소되었다는 새 커밋이 생성됨)

> #Branch
> 
> - 장점
>   
>   1. 브랜치는 독립 공간을 형성하기 때문에 master가 안전
>   2. 하나의 작업은 하나의 브랜치로 나누어 진행되므로 체계적인 개발이 가능
>   3. Git은 브랜치를 만드는 속도가 굉장히 빠르고, 적은 용량을 소모함
> 
> - 조회
>   
>   - ```git branch``` 
>     - 로컬 저장소의 브랜치 목록 확인
>   - ```git branch -r```
>     - 원격 저장소의 브랜치 목록 확인
> 
> - 생성
>   
>   - ```git branch {브랜치 이름}```
>     - 새로운 브랜치 생성
>   - ```git branch {브랜치 이름} {커밋 ID}```
>     - 특정 커밋 기준으로 브랜치 생성
> 
> - 삭제
>   
>   - ```git branch -d {브랜치 이름}```
>     - 병합된 브랜치만 삭제
>   - ```git branch -D```
>     - 강제 삭제
> 
> - git switch
>   
>   - 현재 브랜치에서 다른 브랜치로 이동하는 명령어
>   - ```git switch {브랜치 이름}```
>     - 다른 브랜치로 이동
>   - ```git switch -c {브랜치 이름}```
>     - 브랜치를 새로 생성 및 이동
>   - ```git switch -c {브랜치 이름} {커밋 ID}```
>   - `switch`하기 전에, 해당 브랜치의 변경 사항을 반드시 `커밋` 해야함을 주의할 것
>     - 다른 브랜치에서 파일을 만들고 커밋하지 않은 상태에서 `swtich`를 하면 브랜치를 이동했음에도 불구하고 해당파일이 그대로 남아있게 됨
>   - `git log` 혹은 `cat.git/HEAD` 를 ㅌ오해서 현재 HEAD가 어떤 브랜치를 가리키는지 알 수 있음
>     `git log --oneline --all` `git log --oneline --all --graph`

> #Git Merge
> 
> - 분기된 브랜치들을 하나로 합치는 명령어
> - 주로 master에 합병
> - `git merge {합칠 브랜드 이름}`
>   - 병합하기 전에 브랜치를 합치려고 하는, 메인 브랜치로 `switch`해야함
>   - 병합에는 세 종류
>     1. Fast-Forward
>        - 마치 빨리감기 처럼 브랜치가 가리키는 것만을 `commit`
>        - `git merge {branch}`
>     2. 3-way Merge
>        - 각 브랜치의 커밋 두 개와 공통조상 하나를 사용하여 병합하는 방법
>     3. Merge Conflict
>        - 두 브랜치에서 같은 부분을 수정한 경우,  git이 어느 브랜치의 내용으로 작성해야 하는지 판단하지 못하여 충돌이 발생했을 때 이를 해결하며 병합하는 방법
>        - 보통 **같은 파일의 같은 부분을 수정했을 때** 자주 발생함

> # Git workflow
> 
> - Brach와 원격 저장소를 이용해 협업을 하는 두 가지 방법
>   
>   - 원격 저장소 소유권이 있는 경우 -> Shared repository model
>     - 원격 저장소가 자신의 소유이거나 Collaborator로 등록되어 있는 경우
>     - master 브랜치에 직접 개발하는 것이 아니라, 기능별로 브랜치를 따로 만들어 개발
>     - `Pull Request`를 사용하여 팀원간 변경내용에 대한 소통 진행
>   0. 소유권이 있는 원격 저장소를 `clone`받음
>   1. 브랜치에서 작업
>   2. 본인 브랜치에 push
>   3. 각 원격 저장소에 반영됨
>   4. `Pull Request`를 통해 브랜치를 `master`에 반영해달라는 요청을 보냄
>   5. 병합이 완료된 브랜치는 불필요하므로 원격저장소에서 삭제
>   6. 병합이 완료되면 사용자는 로컬에서 `matser` 브랜치로 `switch`
>   7. 병합으로 인해 변경된 원격 저장소의 `master` 내용을 로컬에 `pull`
>   8. 원격 저장소 `master`의 내용을 받았으므로, 기존 로컬 브랜치 삭제
> 
> - 없는 경우 -> Fork & Pull model
>   
>   - 오픈 소스프로젝트와 같이 자신의 소유가 아닌 원격 저장소인 경우
>   - 원본 원격 저장소를 그대로 내 원격 저장소에 복제(a.k.a Fork)
>   - 기능 완성 후 복제한 내 원격 저장소에 `Push`
>   - 이후 `Pull Request`를 통해 원본 원격 저장소에 반영될 수 있도록 요청함