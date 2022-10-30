# 1.
if int(num1) > 0 and int(num2) > 0:
    print('두 입력값 모두 양수입니다.')


# 2.
month = int(month)
if 3 <= month <=5:
    print(month, '월은 봄입니다.')
elif 6 <= month <= 8:
    print(month, "월은 여름입니다.")
elif 9 <= month <= 11:
    print(month, "월은 가을입니다.")
elif month == 12 or 1 <= month <=2 :
    print(month, "월은 겨울입니다.")

# 3.

a = float(input("첫번째 숫자를 입력하시오: "))
b = float(input("두번째 숫자를 입력하시오: "))
y = 0
if a > 0 :
    y = y + 5
else:
    print("안녕")
    print(str(-1.0 * a))
print(y)

# 4.

for i in range(-5, 5):
    x = int(input())
    if x == 0 :
        print('Zero')
    elif x % 3 == 0:
        print(x, "는 3의 배수입니다.")
    else:
        print(x, '는 3의 배수가 아닙니다.')

# 5.
s = 1
for i in range(3,100,2):
    s += i
print(s)

# 6.
for i in range(5,0,-1):
    i = str(i)
    print((i + ' ') * int(i))
