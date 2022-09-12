# def dfs(i, j, n):
#     global answer
#     if maze[i][j] == 3:
#         answer += 1
#         return
#     else:
#         visited[i][j] = 1
#         for di, dj in [[0,1],[1,0],[0,-1],[-1,0]]:
#             ni, nj = i + di, j + dj
#             if maze[ni][nj] != 1 and visited[ni][nj] == 0: #벽으로 둘러쌓인 미로이기 때문에 범위검사 X
#                 dfs(ni, nj, n)
#         visited[i][j] = 0  #다른데 거쳐서 들어오는건 허용가능하게
#         return
def dfs(i, j, n):
    if maze[i][j] == 3:
        return
    else:
        visited[i][j] = 1  # 방문표시
        for di, dj in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
            ni, nj = i+di, j+dj
            if maze[ni][nj] != 1 and visited[ni][nj] == 0:
                dfs(ni, nj , n)


t = int(input())
for tc in range(1, t+1):
    n = int(input())
    maze = [list(map(int, input()))for _ in range(n)]
    sti = -1
    stj = -1
    for i in range(n):
        for j in range(n):
            if maze[i][j] == 2: # '2'
                sti, stj = i, j
                break  #for j를 빠져나오는 break
        if sti != -1:
            break
    answer = 0
    visited = [[0]*n for _ in range(n)]
    dfs(sti, stj, n)