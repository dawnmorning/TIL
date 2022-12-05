import {useState} from "react"

const DiaryEditor = () =>{
	const [state, setState] = useState(
		{
			author : "",
			content : "",
		}
	)
		

    // const [author, setAuthor] = useState("김종혁")
		// const [content,setContent] = useState("")
    // setAuthor는 상태변화 함수
    return(
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
								// value={author}
								value = {state.author} 
								onChange={(e) => {
									// console.log(e.target.value)
									// setAuthor(e.target.value)
									setState({
										author: e.target.value, // author만 바꾸고 content는 바꾸지 않을 것
										// ...state, 사용 가능 (여러 값들이 있을 때 바꿀 값만 두고 나머지는 생략 가능, 순서 지켜야 함)
										content: state.content
									})
								}}/>
            </div>
						<div>
							<textarea 
							// value={content} 
							value = {state.content}
							onChange= {(e) => {
								// setContent(e.target.value)
								setState({
									author: state.author,  //author와 반대 논리
									content : e.target.value
								})
							}}/>
						</div>
        </div>
    )
}
export default DiaryEditor