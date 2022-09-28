v,e = map(int, input().split())
adjM = [[0] * v+1 for _ in range(v+1)]
adjL = [[] for _ in range(v+1)]
for _ in range(e):
    u,v,w = map(int, input().split())
    adjM[u][v] = w
    adjM[v][i] = w
    adjL[u].append((u,w))
    adjL[u].append((v,u))