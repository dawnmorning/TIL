```const
const numberB = "2";

console.log(numberA + parseInt(numberB));
```

```markdown
const country = "ko";

// if (country === "ko") {
//   console.log("한국");
// } else if (country === "cn") {
//   console.log("중국");
// } else if (country === "jp") {
//   console.log("일본");
// } else {
//   console.log("미 분류");
// }

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미분류");
    break;
}
```

```
function getArea(width, height) {
  const area = width * height;
  console.log(area);
}
getArea(100, 200);
console.log("함수 실행");
```

```
console.log(helloB()); //호이스팅 : 함수 선언식으로 이루어진 것은 최상단에서도 호출 가능

const helloA = function () {
  return "안녕하세요 여러분";
}; // 함수  표현식

function helloB() {
  return "안녕하세요 여러분";
} // 함수 선언식
```

## 콜백

```
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}
function cry() {
  console.log("ACITON :: CRY");
}
function sing() {
  console.log("ACIOTN :: SING");
}
function dance() {
  console.log("ACTION :: DANCE");
}
checkMood("sad", sing, cry);
```

## object

```
const person = {
  name: "김종혁",
  age: 25
};
console.log(person["name"]);
console.log(person.age);
---

const person = {
  name: "김종혁",
  age: 25
};
console.log(getPropertyValue("name"));

function getPropertyValue(key) {
  return person[key];
}

const person = {
  name: "김종혁",
  age: 25,
  say: function () {
    console.log(`안녕 나는 ${this.name}`);
  }
};
// 추가
person.location = "한국";
person["gender"] = "남";
person.name = "김종혁혁";
person["age"] = 28;
delete person.location; //메모리를 남겨놓음
person.name = null; //남기지 않음
person.name = "김종혁";
person.say();
person["say"]();
console.log(person);
console.log(`name: ${"name" in person}`);
console.log(`age : ${"age" in person}`);
console.log(`gender : ${"carouse" in person}`);
```

## 배열

```markdown
const arr = [1, 2, 3, 4, null, true, undefined, {}, []];
console.log(arr);

const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
arr.push("6");
console.log(arr.length);
```

## 반복문

```markdown
const arr = [1, 2, 3, 4];
// arr.forEach((elm) => console.log(elm));

const newArr = arr.map((elm) => {
  return elm * 2;
});
console.log(newArr);
```

```markdown
const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" }
];
// console.log(arr.slice(0, 2));
const arr1 = [
  { num: 4, color: "green" },
  { num: 5, color: "yellow" }
];
console.log(arr.concat(arr1));
```

## 비교 정렬

```markdown
const chars = ["나", "다", "가"];
// console.log(chars.sort());
const numbers = [1, 5, 6, 23, 2, 3];
const compares = (a, b) => {
  // 1. 같다
  if (a > b) {
    return 1;
  }
  // 2. 크다
  if (a < b) {
    return -1;
  }
  // 3. 작다
  return 0;
};
console.log(numbers.sort(compares));
```

```markdown
const arr = ["김종혁", "안녕하세요", "안녕히가세요"];
console.log(arr.join(" "));
```

## Truthy / Falsy
```markdown
const a = "";
if (a) {
  console.log("True");
} else {
  console.log("False");
}

//null,undefined,0,NaN,"" -> false로
```

## 삼항연산자
```markdown
const a = 3;
a >= 0 ? console.log("양수") : console.log("음수");

? true값 : false 값

const a = [];
a.length === 0 ? console.log("빈 배열") : console.log("아님");

const a = [1, 23];
const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let a = [];
const result = a ? true : false;
console.log(result);

let a = 80;
a >= 90 ? console.log("a+") : a >= 50 ? console.log("B") : console.log("F");
```
## 단락 회로 평가(단축평가)
```markdown
console.log(true && true)
console.log(true || false)
console.log(!true)

// const getName = (person) =>{
//   if(!person){
//     return "객체가 아님"
//   }
//   return person.name
// }
// let person
// const name = getName(person)
// console.log(name)

const getName = (person) => {
  const name = person && person.name;
  return name || "객체가 아닙니다";
};
let person;
const name = getName(person);
console.log(name);
```
## 조건문 응용
```markdown
// function isKoreanFood(food){
//   if(food === "불고기" || food === "비빔밥" || food==="떡볶이"){
//     return true
//   }
//   return false
// }
// const food1 = isKoreanFood("불고기")
// const food2 = isKoreanFood("파스타")
// console.log(food1)
// console.log(food2)

function isKoreanFood(food) {
  if(["불고기", "떡볶이", "비빔밥"].includes(food)){
    return true
  }
  return false
}

// const getMeal = (mealType)=>{
//   if(mealType ==='한식')return "불고기"
//   if(mealType === '중식') return '파스타'
//   if(mealType === '일식') return '초밥'
//   return '굶기'
// }
// console.log(getMeal('한식'))
// console.log(getMeal('중식'))
// console.log(getMeal('일식'))

const meal = {
  한식: "불고기",
  일식: "초밥",
  중식: "멘보샤",
  양식: "스테이크",
  인도식: "카레"
};
const getMeal = (mealType) => {
  return meal[mealType] || "굶기";
};
console.log(getMeal("중식"));
```
## 비구조화 할당 (구조분해 할당)
```markdown

let [one, two, three] =["one", "two", "three"];
console.log(one, two, three);


let object = { one: "one", two: "two", three: "three" };
let { one, two, three } = object;
console.log(one, two, three);

다른 변수 사용하고 싶다

let object = { one: "one", two: "two", three: "three", name:"김종혁" };
let {name: myName, one, two, three } = object;
console.log(one, two, three, myName);
```
## spread 연산
```markdown
const cookie = {
  base: "cookie",
  madeIn: "korea"
};
const chocochipCookie = {
  ...cookie,
  toping: "chokochip"
};
const blueberryCookie = {
  ...cookie,
  toping: "blueberry"
};
const strawberryCookie = {
  ...cookie,
  toping: "strawberry"
};
console.log(chocochipCookie);
```
## 동기 / 비동기
```markdown
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res)
  }, 3000);
}
function taskB(a,cb){
  setTimeout(() =>{
    const res = a * 2
    cb(res)
  }, 1000)
}
function taskC(a, cb){
  setTimeout(() => {
    const res = a * -1
    cb(res)
  })
}
taskC(7, (res)=>{
  console.log("C task result:", res)
})

taskB(7, (res) =>{
  console.log("B Task REsult:", res)
})

taskA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});
console.log("코드 끝");
```

## 콜백지옥 탈출
```markdown
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      //실패 => reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}
isPositive(
  [],
  (res) => {
    console.log("성공", res);
  },
  (err) => {
    console.log("실패", err);
  }
);

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 2000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 1000);
  });
}
// taskA(5, 1).then((a_res) => {
//   console.log(a_res);
//   taskB(a_res).then((b_res) => {
//     console.log(b_res);
//     taskC(b_res).then((c_res) => {
//       console.log(c_res);
//     });
//   });
// });

taskA(5, 1)
  .then((a_res) => {
    console.log(a_res);
    return taskB(a_res);
  })
  // 이까지 B 프로미스
  .then((b_res) => {
    console.log(b_res);
    return taskC(b_res);
  })
  // 이까지 C 프로미스
  .then((c_res) => {
    console.log(c_res);
  });

// taskA(3, 4, (a_res) => {
//   console.log("task A:", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("task B:", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C:", c_res);
//     });
//   });
// });
```

## Async
```markdown
function hello() {
  return "hello";
}
async function helloAsync() {
  return "hello Async";
}

helloAsync().then((res) => {
  console.log(res);
});
```

## API호출
```markdown
const API_URL = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res =>{
  console.log(res)
})

async function getData() {
  const API_url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonResponse = await API_url.json();
  console.log(jsonResponse);
}
getData();
```

##node.js
```markdown

```
