설정 => formatter -> prettier - code formatter로 변경
forma on save 체크

placeholder 관련 설정할 때
`<input type="text" placeholder="물품을 검색해보세요" css={[navInput, navInputPlaceHolder]} /> `

```
const navInput = css
  border: 1px solid #e1e2e3;
  fontsize: 18px;
  height: 35px;
  border-radius: 30px;
  padding: 5px 15px;
  margin-right: 10px;
const navInputPlaceHolder = css
  ::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    text-align: center;
    text-indent: 0;
  }
;
```

[[React] api key 숨기기, React 환경에서 Kakao Map API 사용 시 api key를 관리하는 방법](https://yam-cha.tistory.com/174)

```const
import BodyImage1 from "../../assets/images/BodyImage1.png";
const BodyWrap = css`
  width: 100%;
  height: 700px;
  background-image: url(${BodyImage1});
  background-size: cover;
`;
```

## flex 속성은 바로 밑의 자식에게만 적용되는 속성이므로,

## 이미 본인이 자식인 상태라면, 그 안에서 적용될 태그들에게 또 display:flex; 값을 주어야 하고, row로 쌓이는 것이 기본, justify-content, align-items 잘 생각해서 하기

1. access token 만료 혹은 조작 -> refresh token 날려줘야함 -> access token 재발급 url 새로 날려주기 -> 

## 팀원 누군가가 merge 했다면,

## 내 feat에서 commit 후 , git pull origin develop, public branch, push , 레포와서 request!!

## map사용시 Link 팁

[React | react-router-dom을 이용한 sidebar](https://gaemi606.tistory.com/entry/React-react-router-dom%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-sidebar)

[react에서 map을 활용해 list 만들어주기! :: 코딩 대장](https://codingzzangmimi.tistory.com/38)

### true false값에 따라 렌더링여부를 정할 때는

1. 삼항 연산자를 쓰는방법과

2. If문을 통해 쓰는 방법이 있다.
   
   1. ``` ```
      function ChatModal() {
      
        const [isOpen, setIsOpen] = useState(false);
      
        const onClickOpenChat = () => {
      
          setIsOpen(!isOpen);
      
        };
      
        if (!isOpen) {
      
          return ( 
      ...
      
      <div css={chatWrap}>
              <div css={ChatTitleWrap}>
                채팅목록
                <img
                  css={css`
      ```

# CSS 관련

- Relative Absolute 관계
  
  - Absolute로 가져갈 태그는 상위에 어떤 태그를 부모로 기준으로 할 것인지. 어떤 태크를 Relative로 가져갈지 정해야 함.

- nav 고정
  
  - `css={css position: sticky top: 0px; z-index: 100;}`
  
  ```<div>
  
  ```

- 이미지 비율 맞게 들어가게 하기(object-fit : cover)
  
  - [[CSS] 이미지 사이즈 맞추기 (object-fit, absolute, background) :: nana_log](https://nykim.work/86)

- 박스너비를 넘어갈 때 스크롤 생성하는 방법
  
  - overflow : auto;

[CSS float 속성 - ofcourse](https://ofcourse.kr/css-course/float-%EC%86%8D%EC%84%B1)

[Morioh](https://morioh.com/p/ca71458fa07d)

[레진 기술 블로그 - CSS { position: sticky }](https://tech.lezhin.com/2019/03/20/css-sticky)

[[HTML/CSS] 문자열 입력 폼 만들기 &lt;input&gt; 태그 종류와 속성 알아보기](https://jhnyang.tistory.com/487)

[[css3] :nth-of-type() 가상 클래스](https://aboooks.tistory.com/317)

- 
