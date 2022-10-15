> ### DDL (data definition), 데이터 정의 언어
- CREATE TABLE table_name
- id 컬럼은 정의 하지 않으면 rowid라는 컬럼 생성
- Data Types
    1. Null
    2. INTEGER
    3. REAL(실수)
    4. TEXT(문자)
    5. BLOB(멀티미디어 파일)
    
- SQLite Datatypes은 동적 타입시스텝 사용
- 컬럼에 저장된 값에 따라 데이터 타입이 결정
- 컬럼에 대해 특정 데이터 타입을 선언하지 않아도 됨
- Type Affinity (타입 선호도) 존재 이유 : 다른 데이터 베이스 엔진 간의 호환성을 최대화
#### 제약조건 / 데이터 무결성
- Constraints 종류
1. NOT NULL
2. UNIQUE
3. PRIMARY KEY (암시적으로 NOT NULl 제약 조건 포함)
4. AUTOINCREMENT
5. AND SO ON

### rowid 특징

- 값은 1에서 시작

> ALTER TABLE
> - ```ALTER TABLE table_name RENAME TO new_table_name;```
> - 컬럼명 변경
>   -  ```ALTER TABLE new_contacts RENAME COLUMN name TO last_name;```
> - 새 컬럼 추가
>   - ```ALTER TABLe new_contacts ADD COLUMN address TEXT NOT NULL;```
> - DEFAULT
> - DROP TABLE 특징
>   - 한 번에 한 테이블만 삭제 가능
>   - 여러 테이블을 제거하려면 여러 문을 실행해야
>   - 실행 취소하거나 복구 불가능

> ### DML 
> - simple query
>   - ```SELECT column1 FROM table_name;```
> 1. ORDER BY(정렬)
> 2. DISTINCT (중복 행 제거)
> 3. WHERE
> 4. LIMIT
> 5. LIKE
> 6. GROUP BY
> - 이름과 나이 조회하기
>   - ```SELECT first_name, age FROM users;```
> - 전체 데이터 조회하기
>   - ```SELECT * FROM users;```
> > ORDER BY
> > - ASC : 오름차순, DESC: 내림차순
> > - 이름과 나이를 나이가 어린 순서대로 조회하기
> >     - ```SELECT first_name, age FROM users ORDER BY age ASC;```
> 
> > SELECT DISTINCT
> > - 모든 지역 조회하기
> >     - ```SELECT country FROM users;```
> > - ```SELECT DISTINCT country FROM users;```
> 
> LIKE operator
> > - 와일드카드 (% , _)
> > - 영 % : 영으로 시작하는 모든 문자열
> > - %도 : 도로 끝나는 모든 문자열
> > - %강원% : 강원을 포함하는 모든 문자열
> > - 영_ : 영으로 시작하고 총2자리 문자열
> > - _도 : 도로 끝나고 총 2자리 문자열
> 
> Grouping data
> > - Aggregate function
> - 전체 행 수
> > - ```SELECT COUNT(*) FROM users;```
> 
> INSERT
> - ```INSERT INOT classmates VALUES('홍길동',23,'서울);```
> 
> 
> N:1
> 