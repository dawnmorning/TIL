# def f(i,k,r):
#     if i == r:
#         print(p)
#     else:
#         for j in range(k):
#             if used[j] == 0: # a[j]가 아직 사용되지 않았다면,
#                 used[j] = 1 # a[j] 사용됨 표시
#                 p[i] = a[j] # p[i]는 a[j]로 결정
#                 f(i+1,k, r) # p[i+1] 값을 결정하러 이동
#                 used[j] = 0 # a[j]를 다른 자리에서 쓸 수 있도록 해제
#
#
#
# n = 3
# r = 3
# a = [i for i in range(1,n+1)]
# # a = [1,2,4,7,8,3]
# used = [0] * n
#
# p = [0] * r
# f(0,n,r)


# 1 고정
def f(i,k,r):
    if i == r:
        print(p)
    else:
        for j in range(k):
            if used[j] == 0: # a[j]가 아직 사용되지 않았다면,
                used[j] = 1 # a[j] 사용됨 표시
                p[i] = a[j] # p[i]는 a[j]로 결정
                f(i+1,k, r) # p[i+1] 값을 결정하러 이동
                used[j] = 0 # a[j]를 다른 자리에서 쓸 수 있도록 해제



n = 3
r = 3
a = [i for i in range(1,n+1)]
# a = [1,2,4,7,8,3]
used = [0] * n

p = [0] * r
p[0] = 2
used[1] = 1
f(1,n,r)