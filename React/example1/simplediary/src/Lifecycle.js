// import React, {useEffect,useState} from 'react'

// const UnMountTest = () => {
// 	useEffect(()=> {
// 		console.log("Mount!")

// 		return () =>{
// 			console.log("UnMount!")
// 		}
// 	},[])
// 	return (
// 		<div>Unmount Testing Component</div>
// 	)
// }
// const Lifecycle = ()=>{
//     const [isVisible, setIsVisible] = useState(false)
// 		const toggle = () => setIsVisible(!isVisible)
//     return(
//     <div style={{ padding: 20}}>
// 			<button onClick = {toggle}>ON/OFF</button>
// 			{/* 단축평가, isVisible의 여부에 따라 결정 */}
// 			{isVisible && <UnMountTest/>}
//     </div>

//     )
// }
// export default Lifecycle
