```const numberA = 12;
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