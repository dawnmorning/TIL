def dij(n,x,adj,d):
    for i in range(n+1):
        d[i] = adj[x][i]
    u = [x]
    for _ in range(n-1): # n개의 정점 중 출발을 제외한 정점 선택
        w = 0
        for i in range(1, n+1):
            if (i not in u) and d[i] < d[w]:  # 남은 노드 중 비용이 최소인 w
                w = i
            u.append(w)
            for v in range(1, n+1): # 정점 v가
                if 0 < adj[w][v] < 100000: # w에 인접이면
                    d[v] = min(d[v], d[w] + adj[w][v])

t = int(input())
for tc in range(1, t+1):
    n,m,x = map(int, input().split())
    adj1 = [[100000] * (n+1) for _ in range(n+1)]
    for i in range(n+1):
        adj1[i][i] = 0
    for _ in range(m):
        x,y,c = map(int, input().split())
        adj1[x][y] = c
    dout = [0] * (n+1)
    dij(n,x,adj1,dout)
    print(dout)