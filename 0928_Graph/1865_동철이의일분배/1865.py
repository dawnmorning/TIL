import sys
sys.stdin = open('input.txt')

def search(worker, value):
    global result

    if value <= result:   # 현재 저장된 효율보다 계산된 효율이 더 낮다면 다음 일을 줘도 효율이 낮을 것임
        return            # 가지치기

    if worker == N:
        result = value
        return
    else:
        for i in range(N):
            if visited[i] == 0:  # 현재 일하고 있지 않다면
                visited[i] = 1
                search(worker+1, value * arr[worker][i])
                visited[i] = 0


T = int(input())
for tc in range(1, T+1):
    N = int(input())

    arr = [list(map(int, input().split())) for _ in range(N)]  # N번 사람들의 효율을 2차원 리스트로 받기

    # 정수를 퍼센트로 변경하는데 소수형태로 나타낼 것
    for i in range(N):
        for j in range(N):
            arr[i][j] = arr[i][j] / 100


    # dfs 준비
    visited = [0] * N
    result = 0
    search(0, 1)

    print(f'#{tc} {result*100:6f}')