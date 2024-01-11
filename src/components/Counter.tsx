import { decrement, increment, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';


const Counter = () =>{
    const count = useSelector((state: RootState)=>state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    const[asyncAmount, setAsyncAmount] = useState(0);
    const[amount, setAmount] = useState(0); 
    function handle() {
        dispatch(incrementByAmount(amount));
      }

    return (
    <div>
        <h2>Count: {count} </h2>
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
        <div>
            <input type="number" value={asyncAmount} onChange={(e) => {setAsyncAmount(e.target.valueAsNumber)}}/>
            <button onClick={()=> dispatch(incrementAsync(asyncAmount))}>increment By {asyncAmount} Async</button>
        </div>
        <div>
            <input type="number" value={amount} onChange={(e) => {setAmount(e.target.valueAsNumber)}}/>
            <button onClick={handle}>increment By {amount} </button>
        </div>
    </div>
    )
};
export default Counter;