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

로젝트를 진행하던 중, 공유목록을 공유중이 아닌 것만을 보여줄 기능이 필요했다.

처음에는 radio나 checkbox식으로 하려다가, 예쁘지 않을 것 같아서 button방식으로 구현하고자 했다.

그런데 막상 하려고 하니 button을 활용한 onClcik 로직을 어떻게 짜야할지 떠오르지 않았다.

고민끝에 검색하여 알아낸 방법 중에 하나는 filter를 활용하는 것이었다.

---

우리는 공유 중인 것에 대한 state를 1로 넘겨주어 이에 대한 정보를 활용하는 것이었는데, 코드는 다음과 같다

```null
useEffect(() => {
    const type = pathname.includes("share") ? 2 : 1;

    type === 1
      ? getAskArticleList(category, 0, 200, 0, "").then((res) => {
          const data = res;
          setOriginalArticle(data[0]);
          setArticles(data[0]);
          console.log(data[0]);
          setList("물품 요청 목록");
        })
      : getShareArticleList(category, 0, 200, 0, "").then((res) => {
          const data = res;
          // console.log(res);
          setOriginalArticle(data);
          setArticles(data);
          setList("물품 공유 목록");
          // console.log(data[0].askDto.list[0]);
        });
  }, [category]);
  // 공유가능 목록 보기위해 작성한 useEffect
  useEffect(() => {
    if (isAll) {
      setArticles(originalArticle);
      console.log(getArticle);
    } else {
      const tempArticle = getArticle.filter((article) => article.shareListDto.state === 1);
      setArticles(tempArticle);
    }
  }, [isAll]);
  // props에서 받아온 값이 newCategory에 들어감
  // setCategory에 넘어온 값을 입력
  function receiveCategory(newCategory) {
    setCategory(newCategory);
  }
  function onClickSeePossible() {
    setIsAll(!isAll);
    // console.log(isAll);
    // setArticles(getArticle.filter((article) => article.shareListDto.state === 1));
  }
```

공유를 하겠다고 올린 글은 2, 공유를 해달라고 올리는 글은 1로 type을 주고, 이에 대한 type에 따라 api를 각각 요청해 진행하는 방식이다.

get을 받아오면, 이에따른 리스트를 dom에서 `map`으로 객체들을 반환하여 렌더링 하는방식이다.

두번째 `useEffect`를 보면 지금은 더 좋은 방식은 생각 나지 않지만, 고민끝에 다른 `useState`를 생성해 같은 데이터를 받아오고, 버튼을 두번 클릭 시 원래 목록이 보이도록 했다.

같은 useState에서 진행을 하니, 이미 받아오는 객체가 바껴있는 상태에서 또 useState를 활용하면 바뀌어진 객체가 데이터로 담겨와서 만든 해결방법이다.

```javascript
Uncaught TypeError: Cannot read properties of undefined (reading 'title')
해결법
```

인증된 유저의 위도와 경도를 저장해서, 해당 유저가 있는 위치 근처의 게시물만 보여줘야 했다.

1. user의 Id를 어떻게 받아올 것인가?

```null
const userId = localStorage.getItem("id");
```

2. 받아온 userId의 토대로, 위도와 경도를 받아오자.

```null
# api/user

async function getUserDetail(userId) {
  try {
    const { data } = await jsonAxios.get(`/users/detail/${userId}`);

    if (data.flag === "success") return data.data;
    else console.log("일치하는 게시글이 없습니다.");
  } catch (error) {
    console.log(error);
  }
}
```

3. 위도와 경도를 초기화 값으로 recoil에 저장하자.

```null
const locationState = atom({
  key: "locationState",
  default: { areaLat: 0, areaLng: 0 },
});
```

4. 이를 바탕으로 useEffect로 값을 받아오자.

```null
const [location, setLocation] = useRecoilState(locationState);
  useEffect(() => {
    getUserDetail(userId).then((res) => {
      const userData = res;
      console.log(userData[0]);
      setLocation({ lat: userData[0].areaLat, lng: userData[0].areaLng });
      console.log(location.lng);
    });
  }, []);
```

배운점 : `console.log`를 잘 활용하자. 첫 단계부터 차근차근히 생각하여 진행하자. userId를 어떻게 받아오지?부터 헤맸다. 또한 메서드 안에 쓰이는 변수는 최상단 변수에 지정된 값으로 가져오면 된다.

## 0208

## 이슈

recoil로 내 위도 경도 좌표를 받아온 상태에서 

카카오 맵 API를 활용할 일이 있었다.

```
function makeRectangle() {
    console.log(located.areaLat, located.areaLng);
    var sw = new kakao.maps.LatLng(located.areaLat - 0.03, located.areaLng - 0.03), // 사각형 영역의 남서쪽 좌표
      ne = new kakao.maps.LatLng(parseFloat(located.areaLat) + 0.03, parseFloat(located.areaLng) + 0.03); // 사각형 영역의 북동쪽 좌표
```

`located.areaLng + 0.03 `에서 + 이면 값이 안 들어오고, -는 인식하는데에서 무슨 문제가 있는지 계속 고민했다. 남서쪽과 북동쪽의 좌표를 받아 사각형을 만들어주는 함수였는데, +값만 넣어주면 사각형이 사라졌던 것이다.

결국 문제는 타입이었다. (타입스크립트 꼭 써야지..)

typeof(locate.areaLat) 을 찍어보니 string이 담겨 오는 것이었다.

parseFloat를 통해 소수형으로 바꾸어서 출력하니 값이 나오게 되었다.

## 0209 이슈

```
useEffect(() => {
    if (isAll) {
      setArticles(originalArticle);
    } else {
      if (urlId === 2) {
        const modifyShareArticle = originalArticle.filter(
          (article) => article.shareListDto && article.shareListDto.state === 1
        );
        setArticles(modifyShareArticle);
      } else {
        const modifyAskArticle = originalArticle.filter((article) => article.askDto && article.askDto.state === 1);
        setArticles(modifyAskArticle);
      }
    }
  }, [isAll, originalArticle, cnt]);
```

렌더링되면서 setArticles([])값을 넣어주고 있었는데, filter를 쓰게 되면 null값이 먼저 오게 되어 state에 대한 인식을 하지 못하게 되었다.

그럴 경우에 알게 된 방법이 위의 코드와 같이 해당 값이 있다면, 그리고 filter될 값이 어떤 것이라면 이라고 적어주면 렌더링 이후에 받아올 수 있게 된다. 

# 팀원들과 소통을 하면 답이 나온다!

## 0209

```null
useEffect(() => {
    if (isAll) {
      if (urlId === 1) {
        getAskArticleList(location.areaLat, location.areaLng, categoryToUse, cnt, 15, 0, userId, search).then((res) => {
          const data = res;
          setAskArticles([...askArticles, ...data[0]]);
          setList("물품 요청 목록");
        });
      } else {
        getShareArticleList(location.areaLat, location.areaLng, categoryToUse, cnt, 15, 0, userId, search).then(
          (res) => {
            console.log(res);
            const data = res;
            setArticles([...getArticle, ...data]);
            setList("물품 공유 목록");
          }
        );
      }
    } else {
      if (urlId === 1) {
        getAskArticleList(location.areaLat, location.areaLng, categoryToUse, cnt, 15, 0, userId, search).then((res) => {
          const data = res.filter((article) => article.askDto && article.askDto.state === 0);
          setAskArticles([...askArticles, ...data[0]]);
          setList("물품 요청 목록");
        });
      } else {
        getShareArticleList(location.areaLat, location.areaLng, categoryToUse, cnt, 15, 0, userId, search).then(
          (res) => {
            console.log(res);
            const data = res.filter((article) => article.shareListDto && article.shareListDto.state === 0);
            setArticles([...getArticle, ...data]);
            setList("물품 공유 목록");
          }
        );
      }
    }
  }, [urlId, isAll, cnt, categoryToUse]);
```

### 위의 코드는 `useEffect` 를 사용하여 `공유가능한 물품`만을 볼 수 있는 `isAll`을 기준으로 urlId가 1이면 공유 요청글, 2이면 공유하겠다는 글로 나눈 뒤, 해당하는 유저의 위치에 있는 글들에 대한 리스트를 받아오는 api를 구성한 것이다.

---

```null
// 카테고리 변경 후 스크롤을 내렸다가 ,다른 카테고리를 선택했을 때 이전 카테고리 데이터가 쌓여 나옴
  // 네비게이션 바에서 공유 -> 요청 혹은 요청 -> 공유로 갔을 때 setCnt가 작동해야하는데, 하지 않아서
  // 또 다른 변수가 변할 때 setCnt(0)으로 작동하게 하였음.
  useEffect(() => {
    setCnt(0);
    window.scrollTo(0, 0);
  }, [currentTab]);
  useEffect(() => {
    if (currentTab !== urlId) {
      setCurrentTab(urlId);
      setArticles([]);
      setAskArticles([]);
      setCnt(0);
      setIsAll(!false);
    }
  }, [urlId, search]);

  useEffect(() => {
    urlId === 1
      ? // 요청
        getAskArticleList(location.areaLat, location.areaLng, categoryToUse, cnt, 15, 0, userId, search).then((res) => {
          const data = res;
          console.log(data[0]);
          setOriginalArticle([...originalArticle, ...data[0]]);
          setAskArticles([...askArticles, ...data[0]]);

          setList("물품 요청 목록");
        })
      : // 공유
        getShareArticleList(location.areaLat, location.areaLng, categoryToUse, cnt, 15, 0, userId, search).then(
          (res) => {
            const data = res;
            // console.log(data[1].shareListDto.state);
            setOriginalArticle([...originalArticle, ...data]);
            setArticles([...getArticle, ...data]);
            console.log(getArticle);
            // console.log(originalArticle[1].shareListDto);
            setList("물품 공유 목록");
          }
        );
  }, [urlId, isAll, cnt, categoryToUse]);

  function onClickSeePossible() {
    setIsAll(!isAll);
    setCnt(0);
    setArticles([]);
    setAskArticles([]);
    setOriginalArticle([]);
  }

  // 공유가능 목록 보기위해 작성한 useEffect 0일때 공유가능, 1일때 공유 중
  useEffect(() => {
    if (isAll) {
      setArticles(originalArticle);
    } else {
      if (urlId === 2) {
        const modifyShareArticle = originalArticle.filter(
          (article) => article.shareListDto && article.shareListDto.state === 1
        );
        setArticles(modifyShareArticle);
      } else {
        const modifyAskArticle = originalArticle.filter((article) => article.askDto && article.askDto.state === 1);
        setArticles(modifyAskArticle);
      }
    }
  }, [isAll, originalArticle, cnt]);
```

### 위의 코드는 수정 전의 코드이다. 위 두 개의 코드를 작성해본 소감은 다음과 같다.

### 1. useEFfect를 남발하지 말자는 것이다.

```null
- 처음 제대로 된 React 사용을 하다보니, useEffect와 사랑에 빠진 것만 같았다. useEffect안에 API를 불러오는 것이 아니라 함수를 넣을 수 있다는 것도 비교적 최근에 알게된 사실이니, 제대로 배우고 배운 것을 조금씩 적용해봐야하는 연습이 정말 중요함을 깨달았다. 
- Effect들을 겹쳐서 사용해서 그런지는 아직 잘 모르겠지만, `무려 1주일`을 이 코드를 고민한 결과, 처음 `isAll`에 따른 필터링 결과 State를 따로 두고, `OriginalArticle`이라는 변수를 새로 지정하여 이 변수는 공유 글이든, 요청 글이든 필터링 되지 않은 원본을 가지고 있는 것으로 정의하였다. 그러다 보니 문제가 발생했다.
```

### 2. 공유글 -> 요청글, 요청글 -> 공유글을 네비게이션 바를 통해 이동할 때, 기존의 데이터가 그대로 쌓여서 다른 종류의 글이 렌더링 될 때 같이 넘어갔다.

```null
- share에서 ask로 이동하는데, api 호출도 share글을 하는 api에서 ask를 요청하는 api로 넘어가게 된다.
- 그런데 기술적으로 렌더링 되는 시점에 share글이 남아있는 채로 ask api에 들어가게 되니 내용은 나타나지 않은채로 쌓여서 렌더잉이 되었고 그 반대의 경우에도 그러했다.
- 이를 해결하기 위해 useEffect에 의존성 배열을 떡칠을 했다. 그래도 해결되지 않아서 코드를 아예 뜯어 고쳐야겠다고 마음먹고 만든 코드가 1번 코드이다.
```

### 3. 정말 방법이 안 떠오를 때는 이 로직이 맞나?에 대해 고민하고 팀원에게 말만이라도 던져보자. 그러면서 해결되기도 한다.

```null
- 머리나 글로만으로는 정리가 안 되어서 플젝 옆 팀원에게 설명하다가 아~ 하면서 혼자 작성한 경험이 있다.
- 또한, 될 것같은 코드로 했는데 안 된다? 문제는 나에게 있다. 귀찮더라도 더 좋은 코드를 생각해보고, 일단 끄적이면서 시작해보자.
```



## 0211

서로 예약으로 얽혀있는 유저 2명이 아니라면, 강제로 채팅 페이지에 들어와서 볼 수 있는 경우를 막기 위한 방법이 필요했다. 

처음 팀원이 짠 코드도 접근을 막아줄 수 있었지만, 해당 컴포넌트의 버튼이 렌더링 상태로 alert가 떠서, 아예 흰 페이지를 보여주기 위한 로직이 필요했다.

```
useEffect(() => {
    // boardId 얻기
    getBoardIdByRoomId(roomId)
      .then((res) => {
        res = res[0];

        setBoardId(res.boardId);
        setBoardType(res.type);
        if (res.state == -1) {
          console.log("대화가 종료된 채팅방입니다.");
          setRoomState(res.state);
        }

        // 로그인유저가 공유자면
        if (loginUserId == res.shareUserId) {
          setOtherUserId(res.notShareUserId);
          setShareUserId(loginUserId);
          setNotShareUserId(parseInt(res.notShareUserId));
        }
        // 로그인유저가 피공유자면
        else if (loginUserId == res.notShareUserId) {
          setOtherUserId(res.shareUserId);
          setShareUserId(res.shareUserId);
          setNotShareUserId(parseInt(loginUserId));
        } else {
          alert("채팅방에 입장할 수 없습니다.");
          navigate(`/`);
          return null;
        }

        // 해당 부분
        if (loginUserId == res.shareUserId || loginUserId == res.notShareUserId) {
          setIsAuthorized(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
```

`해당부분`윗 부분이 원래 있던 로직이었는데, 처음에는 useState를 true를 기본값으로 주다보니, 렌더링이 되어서 뜬 것이다. false조건을 준 상태여야 애초에 `boolean`판단에 따라 전체가 렌더링 되지 않았다.

`const [isAuthorized, setAuthorized] = useState(false)`로 정의한뒤,

```
 <div css={wrapper}>
      {isAuthorized ? (
```

를 통해 true가 된다면 출력하고, false이면 null을 보여주게 했다.

당황하지 않고 다시 한 번 로직을 점검해야 한다는 것을 배울 수 있었다.





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
