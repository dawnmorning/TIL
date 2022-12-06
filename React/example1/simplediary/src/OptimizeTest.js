import React, { useState, useEffect } from "react";

//React.memo가 전체를 감싸게됨
// const TextView = React.memo(({text}) =>{
//     useEffect(() =>{
//         console.log(`Update :: Text: ${text}`)
//     })
//     return <div>{text}</div>
// })
// const CountView = React.memo(({count}) => {
//     useEffect(() => {
//         console.log(`Update :: Count : ${count}`)
//     })
//     return <div>{count}</div>
// })

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};
const areEqual = (prevProps, nextProps) => {
  // return prevProps.obj.count === nextProps.obj.count
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
  // return true // 이전 props 현재 props 같다 => reRendering X
  // return fasle -> 이전과 현재가 다르다 -> reRendering을 하라
};
const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({ count: 1 });
  //     const [count, setCount] = useState(1)
  //     const [text, setText] = useState('')

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>

      {/* <div>
            <h2>count</h2>
            <CountView count = {count}/>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
        <div>
            <h2>text</h2>
            <TextView text = {text}/>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div> */}
    </div>
  );
};

export default OptimizeTest;
