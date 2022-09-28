def dfs(start):
    stack = []
    visited[start] = 1
    print(start, end = ' ')
    while True:
        for node in adjlist[start]:
            if not visited[node]:
                stack.append(start)

                start = node
                visited[start] = 1
                print(node, end = ' ')
                break
        else:
            if stack:
                start = stack.pop()
            else:
                break

v, e = map(int, input().split())
li = list(map(int, input().split()))
adjlist = [[] for _ in range(v+1)]
visited = [0] * (v+1)
for i in range(len(li)//2):
    a = li[2 * i]
    b = li[2 * i + 1]
    adjlist[a].append(b)
    adjlist[b].append(a)
dfs(1)


