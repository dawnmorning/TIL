import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";
// prop으로 onCreate를 전달 받음,
const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  //함수들
  const handleChangeState = (e) => {
    // console.log(e.tartget.name)
    // console.log(e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    // console.log(state)
    if (state.author.length < 1) {
      // alert('작성자를 1글자 이상 입력해주세요')
      //focus
      // 현재 작성되는 input 태그를 포커스 하게 함
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert('내용을 최소 5글자 이상 입력해주세요')
      //focus
      contentInput.current.focus();
      return;
    }
    // 제출하면 데이터 전달
    onCreate(state.author, state.content, state.emotion);
    alert("저장 완료");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };
  // const [author, setAuthor] = useState("김종혁")
  // const [content,setContent] = useState("")
  // setAuthor는 상태변화 함수
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          // value={author}
          value={state.authorInput}
          onChange={handleChangeState}
          // onChange={(e) => {
          // 	console.log(e.target.value)
          // 	setAuthor(e.target.value)
          // 	setState({
          // 		author: e.target.value, // author만 바꾸고 content는 바꾸지 않을 것
          // 		// ...state, 사용 가능 (여러 값들이 있을 때 바꿀 값만 두고 나머지는 생략 가능, 순서 지켜야 함)
          // 		content: state.content
          // 	})
          // }}
        />
      </div>
      <div>
        <textarea
          // value={content}
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
          // onChange= {(e) => {
          // 	setContent(e.target.value)
          // 	setState({
          // 		// author: state.author,  //author와 반대 논리
          // 		content : e.target.value
          // 	})
          // }}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default React.memo(DiaryEditor);
