import React, {
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useReducer,
} from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
// import OptimizeTest from "./OptimizeTest";
// import Lifecycle from "./Lifecycle";

// const dummyList = [
//   {
//     id: 1,
//     author : "김종혁",
//     content : "test1",
//     emotion: 5,
//     created_date: new Date().getTime() //현재 시간
//   },
//   {
//     id: 2,
//     author : "김종혁1",
//     content: "test2",
//     emotion: 3,
//     created_date: new Date().getTime() //현재 시간
//   },
//   {
//     id: 3,
//     author: "김종혁2",
//     content: "test3",
//     emotion: 1,
//     created_date: new Date().getTime() //현재 시간
//   }
// ]

// https://jsonplaceholder.typicode.com/comments
const reducer = (state, action) => {
  switch (action.type) {
    //  dispatch 호출하면 reducer실행되고, reducer가 return 하는 것이 data의 값

    // 받아올 때
    case "INIT": {
      return action.data;
    }
    //생성할 때
    case "CREATE": {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    //삭제할때
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    //수정할때
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetIt ? { ...it, content: action.newContent } : it
      );
    }
    // 그대로 둘 때
    default:
      return state;
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0); // Id가 필요
  // 일기 데이터를 저장할 것이기 때문에, 빈 배열로
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    // console.log(res)
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    // INIT 할거고, 전달할 데이터
    dispatch({ type: "INIT", data: initData });
    //setData 에서 dispatch 사용으로
    // setData(initData);
  };
  useEffect(() => {
    // mount 되는 시점에 실행됨 빈배열일 경우
    getData();
  }, []);
  // const [data, setData] = useState([]);
  // 컴포넌트 밖으로 분리하기 위해 useState대신 useReducer

  // 데이터들을 받아올 함수
  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current,
    // };
    dataId.current += 1; // 다음은 +1번이 와야하므로
    //함수형 업데이트
    // setData((data) => [newItem, ...data]);
  }, []);
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
    // console.log(`${targetId}번째 글이 삭제되었습니다.`)
    // const newDiaryList = data.filter((it) => it.id !== targetId)
    // console.log(newDiaryList)
    // setData((data) => data.filter((it) => it.id !== targetId));
  });
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
    // setData((data) =>
    //   data.map((it) =>
    //     it.id === targetId ? { ...it, content: newContent } : it
    //   )
    // );
  }, []);
  const memoizedDispatches = useMemo(() => {
    return {onCreate, onRemove, onEdit}
  }, [])
  // 재생성되지 않게, 빈 배열


  const getDiaryAnalysis = useMemo(() => {
    // console.log("일기 분석 시작")

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value = {memoizedDispatches}>
        <div className="App">
          {/* <OptimizeTest/> */}
          {/* prop으로 내려줌 */}
          {/* <Lifecycle/> */}
          <DiaryEditor onCreate={onCreate} />
          <div>전체 일기: {data.length}</div>
          <div>기분 좋은 일기 개수: {goodCount}</div>
          <div>기분 나쁜 일기 개수: {badCount}</div>
          <div>기분 좋은 일기 비율: {goodRatio}</div>
          <DiaryList onEdit={onEdit} onRemove={onRemove} />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
