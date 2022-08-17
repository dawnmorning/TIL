# 2차원 배열을 만드는 방법

# 입력받을 n개의 행
n = int(input())  
# 입력받을 값들이 띄워져있으면 split, 아니라면 input()에서 마무리, n번 입력 받는다!
value = [list(map(int, input().split()))for _ in range(n)] 
# i행 j열 좌표 만들기
# 행(가로)
for i in ragne(n):
# 열(세로)
    for j in range(n):
        arr[i][j]
0 0 0 0 0 (i행)
1
1
1
1
(j열)