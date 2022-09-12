```python
n= 3
q = [0] * n
front =-1
rear = -1
q[rear] = 10
rear+= 1
q[rear] = 20
rear += 1
q[rear] = 30

front += 1
print(q[front])
```

```python
n= 3
q = [0] * n
front = 0 
rear =  0
rear = (rear + 1) % n
q[rear] = 10
rear = (rear + 1) % n
q[rear] = 20
rear = (rear + 1) % n
q[rear] = 30

front = (front + 1) % n
print(q[front])
```

# 버퍼
- 데이터를 한 곳에서 다른 한 곳으로 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리의 영역

- 버퍼링 : 버퍼를 활용하는 방식 또는 버퍼를 채우는 동작을 의미

- 버퍼의 자료구조 
    - 일반적으로 입출력 및 네트워크와 관련된 기능에서 이용된다.
    - 순서대로 입력/출력/전달되어야 하므로 fifo방식 queue가 활용됨
    
```python
p = 1 #처음 줄 설 사람 번호
q = []
n = 20 #초기 갯수
m = 0
while m < n:
    q.append((p,1,0))
    v,c,my = q.pop(0) #맨앞에 줄선사람 나오세영
    print(f'큐에 있는 사람 수 {len(q) + 1}, 받아갈 초콜렛 수 {c},나눠준 초콜렉 수 {m}')
    m += c
    q.append((v,c+1,my+c))
    p += 1
print(f'마지막 받은 사람 : {v}')
```

```python
from collection import deque
p = 1 #처음 줄 설 사람 번호
q = deque()
n = 1000000 #초기 갯수
m = 0
while m < n:
    q.append((p,1,0))
    v,c,my = q.pop(0) #맨앞에 줄선사람 나오세영
    print(f'큐에 있는 사람 수 {len(q) + 1}, 받아갈 초콜렛 수 {c},나눠준 초콜렉 수 {m}')
    m += c
    q.append((v,c+1,my+c))
    p += 1
print(f'마지막 받은 사람 : {v}')
```

###  A  -> B 경로가 있는가?
- dfs bfs 둘 다 가능
### A -> B 경로의 개수는?
- dfs
### A -> B 최단 경로의 길이는??
- dfs ,bfs가능 bfs선호

```python
def BFS(g,v):  #그래프 g, 시작점 v
    visited = [0] * (n+1)  #n : 정점의 개수
    queue = []             # 큐 생성
    queue.append(v)         # 시작점 v를 큐에 삽입
    while queue :           # 큐가 비어있지 않다면
        t = queue.pop()     # 큐 첫번째 반환
        visited[t] = True   # 방문안한 곳이라면 방문한 곳으로 표시
        print(t)            # 정점 t에서는
        for i in g[t]:      # t와 연결된 모든 정점에 대해
            if not g[t]:    # 방문되지 않은 곳이라면
                queue.append(i) 
        
```

pop(0)보다 popleft가 bigO가 빠름

- 빠짐없이, 중복없이 
  - dfs, bfs
  
- 최단거리
  - dfs, bfs
  
- 경로의 수
  - dfs
  
- 확산(출발 여러곳)
  - bfs