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