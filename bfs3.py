def bfs(n):
    visited = [[0]* n for _ in range(n)]
    q = []
    for i in range(n):
        for j in range(n):
            if maze[i][j] == 2:
                q.append((i,j))
                visited[i][j] = 1
    while q:
        i, j = q.pop(0)
        for di, dj in [[0,1],[1,0],[0,-1],[-1,0]]:
            ni, nj = i + di, j + dj
            if 0 <= ni < n and 0 <= nj < n and maze[ni][nj] != 1 and visited[ni][nj] == 0: #벽이아니고 안 갔으면
                q.append((ni,nj))
                visited[ni][nj] = visited[i][j] + 1
    return


t = int(input())
for tc in range(1, t+1):
    n = int(input())
    maze = [list(map(int, input()))for _ in range(n)]
    print(f'#{tc} {bfs(n}')