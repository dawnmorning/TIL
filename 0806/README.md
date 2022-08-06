- 보통 input()으로 문자열 값을 입력받지만, 반복문으로 여러 줄을 입력받아야 할 때는

- 시간초과(런타임 에러)가 발생할 수 있다. 따라서 이럴 경우에는 import sys로 모듈을 불러오고 input()대신에 sys.stdin.readline()을 사용하는 것이 좋다고 한다.

```python
import sys

n: int(input('입력: ')
sum = 0
for i in range(n):
    a = int(sys.stdin.readline()
    sum += a
print(sum)
```

- 유의할 점은 str형으로 받아지므로 정수로 사용할 때 형변환에 유의!



- collection 모듈의 Counter 클래스

```python
from collection import Counter
def find_max(word):
    counter = Counter(word)
    max_count=-1
    for letter in counter:
        if counter[letter] > max_count:
            max_count = counter[letter]
            max_letter = letter
    return max_letter, max_count
```

```python
import sys
from collections import Counter
n_list = []
n = int(sys.stdin.readline()) 
for i in range(n):
    num = int(sys.stdin.readline())
    n_list.append(num)
s = sorted(n_list)
num_s = Counter(s).most_common()
print(round(sum(n_list)/n))
print(s[n//2])
 #(대상숫자, 나온 횟수)
if len(num_s)>1: #두개 이상일 때
    if num_s[0][1] == num_s[1][1]: #서로가 같으면
        print(num_s[1][0]) # 두번째를 출력
    else: 
        print(num_s[0][0])
else:
    print(num_s[0][0])

print(sorted(n_list)[-1] - sorted(n_list)[0])배
```

백준 2108 답
