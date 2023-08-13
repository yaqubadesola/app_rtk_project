import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset, increementByValue} from "../counterSlice"
function Counter() {
  const [countRate, setCountRate] = useState(0)
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Count</h1>
        <h1>{count}</h1>
        <div style={{display:"flex", flexDirection:"row"}}>
            <button onClick={()=>dispatch(increment())}>Increase</button>
            <button onClick={()=>dispatch(reset())}>Rest</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>
        </div>
        <div style={{display:"flex", flexDirection:"row"}}>
            <input type='text' onChange={e => setCountRate(e.target.value)} value={parseInt(countRate)}/>
            <button onClick={()=>dispatch(increementByValue(parseInt(countRate)))}>Increment By Value</button>
        </div>
        
    </div>
  )
}

export default Counter