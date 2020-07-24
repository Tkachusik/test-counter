import React, { useContext }from 'react';
import { CounterContext } from './counterContext'


const Counter = () => {
    const [count, setCount] = useContext(CounterContext);

    const increment = () => {
        setCount(count + 1)
    }; 

    return (
        <div>
        <button onClick={increment}>
        Count: 
        </button>
    </div>
)

}
export default Counter;