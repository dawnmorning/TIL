def f1(i,k,t):
    global cnt
    cnt += 1
    if i == k:
        s =0
        for j in range(10):
            if bit[j]:
                s += a[j]

a = [i for i in range(1,11)]
bit = [0] * 10
cnt = 0
f1(0,10,5)
f2(0,10,5,0)
print(cnt)