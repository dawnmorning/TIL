def bfs(v,n):
    visited = [0] * n
    stack = [0] * n
    top = -1
    print(v)

    visited[v] = 1
    while True:
        for w in adjlist[v]:
            if visited[w] == 0:
                top += 1
                stack[top] = v
                v = w
                visited[w] = 1
                print(v)
                break
        else:
            if top != -1:
                v = stack[top]
                top -= 1
            else:
                break