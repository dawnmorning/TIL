import {useRef, useState} from "react"
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

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

function App() {
  // 일기 데이터를 저장할 것이기 때문에, 빈 배열로
  const [data, setData] = useState([])
  const dataId = useRef(0) // Id가 필요 
  // 데이터들을 받아올 함수
  const onCreate= (author,content,emotion) =>{
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1 // 다음은 +1번이 와야하므로
    setData([newItem, ...data, ])
  }
  const onRemove = (targetId) =>{
    console.log(`${targetId}번째 글이 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId)
    // console.log(newDiaryList)
    setData(newDiaryList)
  }
  return (
    <div className="App">
      {/* prop으로 내려줌 */}
      <DiaryEditor onCreate={onCreate} />  
      <DiaryList onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;
