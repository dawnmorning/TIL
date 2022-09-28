def prim1(r, v):
    mst = [0] * (v+1)   # mst포함여부
    key = [10000] * (v+1)   # 가중치의 최대값 이상으로 초기화. key[v]는 v가 mst에 속한 정점과 연결될
    key[r] = 0              # 시작 정점의 key
    for _ in range(v):      # v+1개의 정점 중 v개를 선택
        # mst에 포함되지 않은 정점 중 (mst[u] == 0) key가 최소인 u찾기
        u = 0
        minV = 10000
        for i in range(v+1):
            if mst[i] == 0 and key[i] < minV:
                u = i
                minV = key[i]
            mst[u] = 1


v,e = map(int, input().split())
adjM = [[0] * v+1 for _ in range(v+1)]
# adjL = [[] for _ in range(v+1)]
for _ in range(e):
    u,v,w = map(int, input().split())
    adjM[u][v] = w
    adjM[v][i] = w
    # adjL[u].append((u,w))
    # adjL[u].append((v,u))