def bfs(v,n,t):
    visited = [0] * (n+1)  #n을 마지막 정점으로 했기 때문, 100개가 들어와야!!
    q = []
    q.append(v)
    visited[v] = 1   #시작정점 1찍고 시작
    while q:
        v = q.pop(0)
        if v == t:        # visit(v) 찾는 애인지 확인
            return visited[99] # 99인덱스까지 몇번 거쳐서 오니? # return 1       #목표 발견시 1
        for w in adjlist[v]: # v에 인접하고 방문안한 w enque 표시
            if visited[w] == 0:
                q.append(w)
                visited[w] = visited[v] + 1
    return 0  #없으면 0
t = 10
for _ in range(t):
    tc, e = map(int,input().split())
    arr = list(map(int,input().split()))

    adjlist = [[] for _ in range(100)]
    for i in range(e):
        a, b = arr[i*2], arr[i*2 + 1]
        adjlist[a].append(b)  #단 방향
    bfs(0, 99, 99)   #시작 에서 마지막 정점, 찾고자 하는 번호
    print(f'#{tc} {bfs(0,99,99)}')
