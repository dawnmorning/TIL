# 복수조건문

### 복수조건문

if 조건:

    #Code blcok

elif 조건:

    #Code

elif 조건:

    #Code

else:

    #code

- 조건문에 "그리고"라는 단어 존재시에 if 조건 and 조건 으로 쓰면 됨

- 중첩조건문과 복수조건문의 차이는 elif를 안 적어도 된다 뿐인건지?

### 조건표현식

- true인 경우 값 if 조건 else false인 경우 값

- print("") if  조건 else print("")

### 반복문

- while문
  
  - 종료 조건에 해당하는 코드를 통해 반복문 종료    

- for문
  
  - 반복가능한 개체 모두 소모하면 종료
  
  - 순회할 수 있는 객체(string, list, dict, tuple, range, set) / 순회형 함수(range, enumerate)

- 반복 제어
  
  - break, continue, for-else

a = 0

while a < 3 :

    print(a)

    a += 1

print('끝)

> ### 스트링 순회

chars = input()

for i in chars: **chars에 있는 요소들 하나씩 i에 대입**

    print(i) **그 값을 출력**  

h

a

p

p

y

> ### 딕셔너리 순회

- 딕셔너리는 기본적으로 key를 순회하며, key를 통해 값을 활용

a = {'john' : 80, 'eric' :  90}

for student in a:

    print(student)

john, eric

a = {'john' : 80, 'eric' : 90}

for student in a:

    print(student, a[student])

    print(a.keys()) -> dict_keys {['john', 'eric']}

    print(a.value()) -> dict_values{[80, 90]}

    print(a.items()) -> dict_values{[(['john', 80), ('eric', 90)]}

for student, grade in a:

print(student, grade)



john 80

eric 90



> ## 반복문 제어
> 
> - break 종료시키기 위함
> 
> - continue 해당하는건 수행 x 아닌것 출력



> ### 함수

- 내장함수 ex) print(), int(), input(), len(), float(), format()

- 외장함수

- 사용자 정의 함수
  
  ### print vs return
  
  - print 사용하면 호출될 때 마다 값이 출력 (주로 테스트를 위해)
  
  - 데이터 처리를 위해서는 return 사용

**두 개 이상의 값을 반환하는 방법은 튜플 사용**

return x - y, x * y

# parameter와 argument



def a(아무거나 넣어!!!):

    이 함수 발동시 어떻게 할건지.

a()



하면 함수조건에 맞는거 출력


