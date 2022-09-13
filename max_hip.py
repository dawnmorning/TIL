def enq(n):
    global last
    last += 1
    heap[last] = n # 마지막 정점에 key 값 추가
    # (부모 없거나 부모> 자식조건 만족시까지)
    c = last
    p = c // 2
    while p > 0 and heap[p] < heap[c]: # 부모보다 자식이 클 경우 자리 교환
        heap[p], heap[c] = heap[c], heap[p]
        c = p
        p = c // 2

def deq():
    global last
    tmp = heap[1]   # 루트 백업
    # 삭제할 노드의 키를 루트에 복사
    heap[1] = heap[last]   
    last -= 1   # 마지막 노드 삭제
    p = 1
    c = p * 2
    while c <= last:    # 자식이 하나라도 있으면 
        if c+1 <= last and heap[c] < heap[c+1]:
            c += 1
        if heap[p] < heap[c]:  # 자식이 더 큰 경우
            heap[p], heap[c] = heap[c], heap[p]
            p = c  # 자식을 새로운 부모로
            c = p * 2   # 왼쪽 자식 번호를 계산
        else:       # 부모가 더 크면
            break   # 비교 중단
    return tmp

heap = [0] * 100
last = 0

enq(2)
enq(5)
enq(7)
enq(3)
enq(4)
enq(6)

while last:
    print(deq())

