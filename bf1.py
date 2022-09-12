def bfs(v,n) : # 시작정점, 마지막 정점
    # visited 생성
    visited = [0] * (n+1)
                # 큐 생성
    q = []
    q.append(v)     #시작점 인 큐
    visited[v] = 1  #시작점 처리 표시
    while q:        # 큐가 비어있지 않으면
        v = q.pop(0)   # deque
        print(v)        # visit(v)
        for w in adjlist[v]:          #인접하고 미방문 정점 w가 있으면
            if visited[w] == 0:
                visited[w] = visited[v] + 1
v, e= map(int, input().split())
n = v + 1   # n은 정점 수
adjlist = [[]for _ in range(n)]
for _ in range(e):
    a,b = map(int,input().split())
    adjlist[a].append(b)
    adjlist[b].append(a)
bfs(0,v)