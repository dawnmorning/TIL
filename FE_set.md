1. axios 요청시 400 Bad Request

```html
actions: {
    signUp(context, payload) {
      console.log(context, payload)
      axios({
        method: 'post',
        url: `${DJANGO_URL}/accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        }
      })
        .then((res) => {
          console.log(res)
          // context.commit('SAVE_TOKEN', res.data.key)
        })
    },
  },
```

Django 변수명에 맞는 요청을 보내주어야 하는데 그렇지 못하고  password1을 password로 작성하여 오류가 있었고, 

이를 찾는 법은 개발자도구→ Network → Preview에서 빨간색 부분으로 된 곳을 클릭하면 어떤 문제가 발생해서 나타나는 문제인지를 보여준다.



## [Vue] mapState, mapGetters, mapMutations, mapActions 정리

### mapState

- Vuex에 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```
// App.vue
import { mapState } from 'vuex'

computed() { 
  ...mapState(['num'])
  // num() { return this.$store.state.num; }
}

// store.js
state: {
  num: 10
}

------ .vue ------

<!-- <p>{{ this.$store.state.num }}</p> -->
<p>{{ this.num }}</p>
```

### mapGetters

- Vuex에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결 해주는 헬퍼

```
// App.vue
import { mapGetters } from 'vuex'

computed() { ...mapGetters(['reverseMessage'])}

// store.js
getters: {
  reverseMessage(state) {
    return state.msg.split('').reverse().join('');
  }
}

-------- .vue --------


<!-- <p>{{ this.$store.getters.reverseMessage }}</p> -->
<p>{{ this.reverseMessage }}</p>
```

### mapMutations

- Vuex에 선언한 mutations 속성을 뷰 컴포넌트에 더 쉽게 연결 해주는 헬퍼

```
// App.vue
import { mapMutations } from 'vuex'

methods: {
  ...mapMutations(['clickBtn']),
  authLogin() {},
  displayTable() {}
}

// store.js
mutations: {
  clickBtn(state) {
    alert(state.msg);
  }
}

--------- .vue ----------

<button @click="clickBtn"> popup message </button>
```

### mapActions

- Vuex에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결 해주는 헬퍼

```
// App.vue
import { mapActions } from 'vuex'

methods: {
  ...mapActions(['delayClickBtn']),
}

// store.js
actions: {
  delayClickBtn(context) {
    setTimeout(() => context.commit('clickBtn'), 2000);
  }
}

--------- .vue ----------

<button @click="delayClickBtn"> delay popup message </button>
```