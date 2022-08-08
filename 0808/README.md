# 리스트 알고리즘

1. 정렬의 방법에 대해 배웠다.
   
   1. 버블정렬
   
   2. 카운터정렬
   
   3. 그리디..정렬

2. gravity 문제, 오늘 풀었던 문제들을 곧 다시 정리하겠다.



3. queue문제 해설

```python
import sys
input = sys.stdin.readline
n = int(input())
li = []
for i in range(n):
    value = input().split()
    if value[0] == "push":
        li.append(value[1])
    elif value[0] == "pop":
        if li: print(li.pop())
        else: print(-1)
    elif value[0] == "size":
        print(len(li))
    elif value[0] == "empty":
        if len(li) == 0: print(1)
        else: print(0)
    elif value[0] == "front":
        if len(li) == 0: print(-1)
        else: print(li[0])
    elif value[0] == "back":
        if len(li) == 0: print(-1)
        else: print(li[-1])
```

- split으로 나누어 진 것은 인덱스 값으로 받을 수 있다는 것은 새롭게 알게된 사실이다.

- que는 fi fo 선입 선출!! 빈 리스트를 잘 활용하여 하는 것이 자료구조의 기본인 것 같다. 

- 정렬문제도 list를 통해 전개해 나가는 것이 기본인 것 같으니 이번 주에 잘 숙지해두도록 하자.
