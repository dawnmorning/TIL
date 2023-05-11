### 비동기 통신이란?
> 현재 처리중인 프로세서의 완료를 기다리지 않고 동시에 다른 작업을 처리하는 방식

`JavaScript`는 싱글 스레드로 작동하는 프로그래밍 언어이다.
그래서 동시에 두 개의 함수가 실행될 수 없다. 따라서 작업의 효율을 높이기 위해 비동기처리가 필요.
(언제 하나 돌리고 기다리고 있어 우리는 성질급한 개발자들이다)

---
`JavaScript` 함수로 호출한 브라우저의 Web API는 '이벤트 루프'라는 매커니즘을 통해 `JavaScript` 코드를 비동기적으로 실행할 수 있게 한다.

브라우저 환경의 비동기 동작은
```
1. JavaScript Engine의 Call Stack
2. Web API
3. Task Queue
4. Event Loop
```
크게 위와 같은 요소로 구성된다.

> 모든 작업은 Call Stack(LIFO)으로 들어간 후 처리
오래 걸리는 작업이 Call Stack으로 들어오면 Web API로 보내서 처리
Web API에서 처리가 끝난 작업들은 Task Queue(FIFO)에 순서대로 들어간다.
Event Loop가 Call Stack이 비어 있는 것을 체크하고, Task Queue에서 가장 오래된 작업을 Call Stack으로 보낸다.

> 브라우저의 콜 스택에는 호출된 함수들이 스택 구조로 쌓이는데, 이때 비동기 함수는 콜 스택에서 대기하는게 아니라, 콜백 큐로 들어간다.
이벤트 루프는 주기적으로 콜 스택을 확인하고 콜 스택이 완전히 비었을 때 콜백 큐에서 대기하던 태스크(비동기 함수)를 콜 스택으로 이동시키고 처리한다.
이러한 원리로 콜 스택은 비동기 함수가 처리되는 동안 정체되지 않고 다음 태스크를 수행할 수 있다.

### 비동기 로직의 역사

### 1. 콜백 함수
> 다른 함수의 인자로 전달되는 함수를 콜백 함수라고 한다.
그래서 JavaScript ES6에서는 비동기 함수의 성공과 실패 여부를 
then과 catch라는 별도의 블록으로 구분해서 받을 수 있는 Promise 패턴이 등장한다.
콜백 지옥에 빠질 수 있다.

![](https://velog.velcdn.com/images/dawn0814/post/dd566ef6-5d8e-464e-b3a6-b037be56fa5d/image.png)

### 2. Promise - 면접단골질문
> Callback Hell 문제를 해결하기 위해 등장한 비동기 처리를 위한 "객체" 
"작업이 끝나면 실행 시켜줄게"라는 약속
비동기 작업의 완료 또는 실패를 나타내는 객체

### 3. async/await
만약, 반드시 여러 개의 비동기 함수 호출이 모두 완료된 후 수행해야 할 태스크가 있다면, 이 부분은 동기적으로 수행되어야 하는 상황으로 볼 수 있다. 이런 상황을 위해 JavaScript ES8에서는 async/await 구문이 도입되었다.

async 예약어를 붙여서 선언한 함수는 리턴 타입이 Promise 객체이다.
따라서 Promise 객체의 최종 결과값을 받기 위해서는 then-catch 블록으로 받거나, await 예약어를 붙여서 호출하면 된다.
### async 함수에 then-catch 사용
```


const axios = require('axios');

async function fetchUserData(username) {
  return axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      const userData = response.data;
      console.log(`Name: ${userData.name}`);
      console.log(`Location: ${userData.location}`);
    })
    .catch(error => {
      console.log(error);
    });
}

fetchUserData('octocat');
```

### async/await 사용
```

const axios = require('axios');

async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userData = response.data;
    console.log(`Name: ${userData.name}`);
    console.log(`Location: ${userData.location}`);
  } catch (error) {
    console.log(error);
  }
}
fetchUserData('octocat');
```

> await으로 호출한 비동기 함수는 동기 함수처럼 동작하여, 
해당 코드 라인이 완료되어 콜백 함수의 결과값이 받아진 이후에 다음 코드 라인이 실행된다.

>즉, async/await은 비동기적인 처리를 보다 동기적으로 작성할 수 있도록 해주는 문법이다.
만약, 반드시 여러 개의 비동기 함수 호출이 모두 완료된 후 수행해야 할 태스크가 있다면, 
이 부분은 동기적으로 수행되어야 하는 상황으로 볼 수 있다. 
이런 상황을 위해 JavaScript ES8에서는 async/await 구문이 도입되었다.

>async 예약어를 붙여서 선언한 함수는 리턴 타입이 Promise 객체이다.
따라서 Promise 객체의 최종 결과값을 받기 위해서는 then-catch 블록으로 받거나, await 예약어를 붙여서 호출하면 된다.