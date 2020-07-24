import React, { useContext } from 'react';
import { CounterContext } from './counterContext';

const Text = () => {
    const [count] = useContext(CounterContext);
    
    return (
        <div>
           count : {count}
        </div>
    )
}
export default Text;