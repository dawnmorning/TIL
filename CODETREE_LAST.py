import sys
si = sys.stdin.readline
n,m = map(int, si().split()) # N: 바나나 수, m: 간선 수
edges = []
graph = [[0 for _ in range(n+1)] for _ in range(n+1)] # 인접 행렬 graph[i][j] = 1 라면 i와 j사이에 간선이 존재한다.
for _ in range(m):
    u, v = map(int, si().split()) # u번과 v번 사이에 간선이 있다.
    edges.append((u,v)) # u번과 v번 사이의 간선을 저장한다.
    graph[u][v] = 1
    graph[v][u] = 1

ans = 0 # ans : = 탐지된 삼각형의 갯수
for i in range(1, n+1): # i번 정점을 선택
    for p,q in edges:   # p < - > 사이의 변을 선택했다.
        if graph[i][p] == 1 and graph[i][q]==1: # 나머지 두 변이 있는지 확인
            ans += 1
ans //= 3 # 중복된 셈을 제거
if ans >= 2:
    print("YES")
else:
    print("NO")



