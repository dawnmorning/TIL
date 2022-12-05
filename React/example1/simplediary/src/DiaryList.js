import DiaryItem from "./DiaryItem"
const DiaryList = ({onRemove, diaryList}) =>{ //  App.js에서 prop받기
	// console.log(diaryList)
	return (
			<div className="DiaryList">
				<h2>일기 리스트 </h2>
				<h4>{diaryList.length}개의 일기가 있습니다.</h4>
				<div>
					{diaryList.map((it) => (
						// 고유 key값 필요 it.idx가능
							<DiaryItem  key={it.id} {...it} onRemove={onRemove}/> 
					))}
				</div>
			</div>
	)
}
// undefined 시 버그 뜨지 않게 하는 법
DiaryList.defaultProps = {
	diaryList:[],
}

export default DiaryList