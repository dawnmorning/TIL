설정 => formatter -> prettier - code formatter로 변경
forma on save 체크

placeholder 관련 설정할 때 `<input type="text" placeholder="물품을 검색해보세요" css={[navInput, navInputPlaceHolder]} />`

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
   
   1. function ChatModal() {
      
        const [isOpen, setIsOpen] = useState(false);
      
        const onClickOpenChat = () => {
      
          setIsOpen(!isOpen);
      
        };
      
        if (!isOpen) {
      
          return ( 
      ...
      
      채팅목록
- useContext 공부
  
  - https://ko.reactjs.org/docs/hooks-reference.html

- axios 사용
  
  ```javascript
    const jsonAxios = formdataInstance();
  
    const onClickCanvas = async () => {
  
      const canvas = canvasRef.current.getTrimmedCanvas().toDataURL("image/png");
  
      console.log(canvas);
  
      // const dataURL = canvas.toDataURL();
  
      const user = {
  
        userId: 52,
  
        boardId: 1,
  
        img: canvas,
  
      };
  
      try {
  
        const { data } = await jsonAxios.post("/signs", user);
  
        if (data.flag === "success") {
  
          alert("서명이 완료되었습니다.");
  
          return data.data;
  
        }
  
        const result = await data.json();
  
        console.log(result);
  
      } catch (error) {
  
        console.log(error);
  
      }
  
    }; 
  ```

- 컴포넌트간 Props 전달하기

```javascript
<div>{isQuit ? <QuitChattingReal close={setIsQuit} /> : null}</div>
 <div>{isOath ? <Oath close={setIsOath} openLastConfirm={setIsComplete} /> : null} </div>
 <div>{isComplete ? <ShareComplete /> : null}</div>
```

- ```javascript
  const ProductChatting = () => {
    const { state } = useLocation(); // detail로부터 받은 정보들
    const [isConfirm, setIsConfirm] = useState(false);
    const [isOath, setIsOath] = useState(false);
    // 채팅 나가기 관련
    const [isQuit, setIsQuit] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    function onClickQuit() {
      setIsQuit(true);
      console.log(isQuit);
    }
  ```

- (Parent 컴포넌트에서 Child컴포넌트와 주고 받을 변수 명) = { Parent에서 사용할 값}

- 모달이 여러 개 열리는 상황에서 하나가 닫히고, 하나가 열리게 하기 위해서는 Parent 컴포넌트에서 `Boolean`값을 조정하여 각 컴포넌트가 열리게 할 지를 정하면 된다.

- Props로 공통 컴포넌트 사용시 css 바꿔야 할 때

```javascript
const LargeWideButton = ({ text, outline, onClick }) => {
  return (
    <button css={outline ? outlinedButton : basicButton} onClick={onClick}>
      {text}
    </button>
  );
};
```

- ```javascript
  const ProductList = () => {
    const [category, setCategory] = useState("");
    function receiveCategory() {
      setCategory(category);
    }
    return (
      <div css={topWrap}>
        <h2>물품 공유 목록</h2>
        <div css={filterWrap}>
          <div css={filterLeftWrap}>
            <ProductCategory isborder={false} sendCategory={receiveCategory} />
          </div>
          <div css={filterRighWrap}>
            <div css={searchWrap}>
              <InputBox type="text" placeholder="필요한 물품을 검색해보세요." />
            </div>
            <div css={arrayWrap}>최신순</div>
          </div>
        </div>
  ```

- https://velog.io/@nemo/useLocation

- https://velog.io/@sjoleee_/React-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4https://velog.io/@sjoleee_/React-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4

---

# CSS 관련

- Relative Absolute 관계
  
  - Absolute로 가져갈 태그는 상위에 어떤 태그를 부모로 기준으로 할 것인지. 어떤 태크를 Relative로 가져갈지 정해야 함.

- nav 고정
  
  - `css={css position: sticky top: 0px; z-index: 100;}`

- 이미지 비율 맞게 들어가게 하기(object-fit : cover)
  
  - [[CSS] 이미지 사이즈 맞추기 (object-fit, absolute, background) :: nana_log](https://nykim.work/86)

- 박스너비를 넘어갈 때 스크롤 생성하는 방법
  
  - overflow : auto;

[CSS float 속성 - ofcourse](https://ofcourse.kr/css-course/float-%EC%86%8D%EC%84%B1)

[Morioh](https://morioh.com/p/ca71458fa07d)

[레진 기술 블로그 - CSS { position: sticky }](https://tech.lezhin.com/2019/03/20/css-sticky)

[CSS / box-shadow / 박스에 그림자 효과 만드는 속성 – CODING FACTORY](https://www.codingfactory.net/10628)

- textarea

https://velog.io/@hojin9622/scroll-behavior-smooth%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99-%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0

- a태그 지정해서 텔레포트 부드럽게

- [React 에서 애니메이션, 인터렉션 구축하기 (emotion / tweenmax)](https://wazacs.tistory.com/38)

- positon absolute 모달에 관하여
  
  - 최상위 div에 absolute를 주고, 다음과 같이 지정하면 된다.
    
    ```css
    const topWrap = css` position: absolute;
     top: 0px;
     left: 0px;
     display: flex;
     justify-content: center;
     align-items: center;
     z-index: 1000;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, 0.4); `;
    
    const ModalWrap = css`
     font-size: 20px;
     margin: auto;
     margin-bottom: 100px;
     width: 600px;
     height: 450px;
     box-shadow: 1px 1px 5px;
     border-radius: 10px;
     text-align: center;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: white;
    
    > div {
    > padding: 10px;
    > }
    > `;
    ```

const buttonWrap = css`width: 10%; position: relative; margin-top: 15px; margin-bottom: 15px; cursor: pointer; display: block; height: 35px; border: none; border-radius: 5px; font-size: 14px; background-color: #66dd9c; color: white;`;

```
- div태그 안 button 길이, 배치 조정 법
```

- [검색창 만들기](https://ts2ree.tistory.com/122)

- [이번에야말로 CSS Grid를 익혀보자 – 1분코딩](https://studiomeal.com/archives/533)
