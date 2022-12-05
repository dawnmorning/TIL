import {useState} from 'react'

const DiaryItem = ({onRemove, id, author, content, emotion, created_date,} ) =>{ // prop 받아오기
	const handleRemove = () =>{
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`))
      {
        onRemove(id)
      }
    }
    const [isEdit, setIsEdit] = useState(false)
    const toggleIsEdit = () => setIsEdit(!isEdit)


  return (
    
			<div className = "DiaryItem">
				<div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button 
        onClick={handleRemove}>
        삭제하기
        </button>
        <button onClick={toggleIsEdit}>수정하기</button>
			</div>
	)
}
export default DiaryItem