```jsx
<template>
  <div>
    <h1>Recommendation</h1>
        <button @click='showRandom'>랜덤으로 골라볼까?</button><br>

    <section class='please'>
        <div 
        v-if='movies'
        class="container"
        >
            <div v-for='(movie,idx) in movies' 
                :key='idx'
                >
                <div><img :src="movie.poster_path"></div>
                <!-- {{ movie.title }} -->
                
                <!-- {{ movie.overview}} -->
                
                <!-- {{ movie.vote_average}} -->
                
                <!-- {{ movie.poster_path}} -->
                
            </div>
            
        </div>
    </section>
  </div>
</template>
```

먹여야할 태그 바로 위에서 class를 만들어야 적용이 가능하다. 엄청 헤맸다..

## 뷰 부트스트랩 적용 순서

`npm install vue bootstrap-vue bootstrap`

```jsx
# main.js

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
```

## 구글 폰트 적용법

```
style 태그에서

@font-face{
  font-family: 'Jua-Regular';
  src:url('/font/Jua-Regular.ttf')
}
.center-content{
  font-family: 'Jua-Regular';
}
```

```jsx
npm install animate.css --save
https://gongmeda.tistory.com/9
# css애니메이션 관련 정보
```

```jsx
# a태그 세부  url넘겨주기

<a class='nav-link' :href="`/profile/${username}`">내 프로필</a>

바인딩을 잘 하자
```

## profile 수정 - 백에서 작성된 데이터는 함수를 호출 할 때 정의해서 보내주는 것

```jsx
<template>
  <div>
    <h2>프로필 수정</h2>
    <form @submit.prevent='editProfile'>
      <div>
        <label for="nickname">닉네임</label>
        <input type="text" id='nickname' v-model='nickname'>
      </div>
      <br>
      <div>
        <label for="interested">관심장르</label>
        <input type="text" id='interested' v-model='interested'>
      </div>
      <!-- <div>
        <label for="upload">이미지 수정</label>
        <input multiple type="file" name='upload[]' ref='profileImg' @change='editProfile' accept="image/*">
      </div> -->
      <button @click='editProfile'>수정</button>
  </form>
  </div>
</template>

<script>
const DJANGO_URL='http://127.0.0.1:8000'
import axios from 'axios'
export default {
    name: 'EditProfile',
    data(){
      return{
        nickname : '',
        interested: '',
        // img: '',
      }
    },

    methods:{
      editProfile(){

        const nickname = this.nickname
        const interested = this.interested
        // console.log(this.$store.state.token)
        // this.edit.profile_image = this.$refs.profileImg.files
        const payload={
          nickname, interested
        }
          // console.log('하하')
          axios({
            method: 'put',
            url: `${DJANGO_URL}/api/v1/profile/${this.$store.state.username}/`,
            headers:{
              Authorization : `Token ${this.$store.state.token}`
            },
            data: payload
          })
            .then( (res) =>{
              console.log(res)
              // this.$router.push({name: 'MyProfile'})
            })
            .catch(err =>{
              console.error(err)
            })
        }
      
    },
```