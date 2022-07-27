# 들여쓰기는 기본

> ## 변수 할당

- 같은 값을 x와 y에 동시에 할당
  
  - x  =  y  = 1004  

- 두 개의 변수 x, y에 값 1, 2를 동시에 할당
  
  - x, y = 1. 2

- x, y  =  1 **(can't unpack non-iterable int object)**

> ## 식별자

- import keyword 
  
  - print(keyword.kwlist)
    
    - Flase, True, and, if, global, ...

> ## input

name = input('이름을 입력 해 주세요. : ')
print('>> ', name)

---

이름을 입력 해 주세요. : ed

ed

- 반환값은 항상 문자열의 형태로 반환됨

> ## 자료형(Data Type)

- ### 자료형 분류
  
  - 불린형
  
  - 수치형
    
    - int(정수)
    
    - float(실수, 부동소수점)
  
  - 문자열(string)
  
  - None

## 1. 불린형

0, 0.0, (), [], {}, '', None은 False로 변환됨!!!

**' '는 값이 존재**

## 2. 수치형

int, float

## 3. 문자열

''나 , ""을 활용하여 표현가능

print('철수 \'안녕\'')  철수 '안녕' 출력

greeting = 'hi'
name = 'kim'

print(greeting, type(greeting))
print(name, type(name))

## ** 문자열 변경 불가능!!!!!!!**

## 4. Escape sequence

\n, \t, \r(캐리지 리턴), \0(null), \\\, \', \"

## 5. f-strings

print(f'{name}은 오늘 {sports}를 했다.')

print(f'오늘은 {today:%Y}년 {today:%m}월 {today:%d}일 {today:%A}')

## 6. 컨테이너

- 여러 개의 값을 저장할 수 있는 것을 의미. 서로 다른 자료형을 저장 가능

- 순서가 있는 시퀀스형, 순서가 없는 non시퀀스형

- 시퀀스형에는 리스트/튜플/레인지

- non에는 세트와 딕셔너리

- 리스트는 a = []형태 or b =  list()로 가능

- 튜플은 리스트와 유사하지만 ()로 묶어서 표현, (1, 3)

- 튜플은 수정불가능! b = (3, )형태처럼 괄호와 콤마가 필요 단일 항목의 경우

- 복수항목의 경우는 상관 X

- range(n) = 0부터 n-1까지 값을 가짐

- 딕셔너리 {}를 통해 만들거나, dict()로 만들 수 있음. 순서 보장X  value : key 중 key는 변경 불가능한 데이터만 가능

ex) 

x = {}

y = dict()

-  중복된 key는 존재할 수 없음    

> ## 형변환

- 사용자가 의도하지 않았지만 파이썬 내부적으로 자동으로 변환하는 암시적,

- int() : string, float를 int로 변환

- float() : string, int를 float으로 변환

- str() : int, float, list, tuple, dictionary를 문자열로 변환

- string list tuple range set dictionary 전부 range와 dictionary로 변환 불가

- 딕셔너리와 레인지에서는 변화 가능
