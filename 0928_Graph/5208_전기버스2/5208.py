import sys
sys.stdin = open('input.txt')

def dfs(now, gas, cnt):
    global result

    # 현재 위치가 도착지를 벗어난다면(충분히 도착가능한 경우)
    if now >= len(station) - 1:
        if cnt < result:
            result = cnt
    else:
        # 배터리가 남아있으면 충전하지 않고 다음 정류장으로 가보기
        if gas > 0:
            dfs(now+1, gas-1, cnt)

        # 가지치기 : 아직 충전 횟수가 더 작다면 배터리 충전
        if cnt < result:
            dfs(now+1, station[now]-1, cnt+1)


T = int(input())
for tc in range(1, T+1):
    # 0 번째: 정류장 수 / 1 ~ N-1 : 정류장별 충전지
    arr = list(map(int, input().split()))

    station = arr[1:] + [0]   # N 번 반복을 위해
    result = arr[0]        # 초기 값은 정류장 마다 배터리를 교체하는 경우

    dfs(1, station[0]-1, 0)  # 현재 정류장 위치, 남은배터리 , 배터리교체횟수

    print(f'#{tc} {result}')