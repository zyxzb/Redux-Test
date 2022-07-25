// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, textValue, textReset } from '../redux/counter';



const Main = () => {
    
    const {value} = useSelector((state) => state.counter);
    const {text} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        value >=1 && dispatch(decrement())
    }

    const handleReset = () => {
        dispatch(reset());
        dispatch(textReset());
        
    }
    const handleOnChange = (e) => {
        
        dispatch(textReset());  
        dispatch(textValue(e.target.value));   
    
    }

    return (
        <div className='main'>
            <div className="reduxInfo">
                   <span>REDUX INFO:</span> 
                   <span style={{color:'red'}} > {text}</span> 
                </div>
            <div className='counter'>
                <label className='counterDisplay'>WYNIK: {value}</label>
                <div className='counterButtons'>
                    <button className='counterButton' onClick={() => dispatch(increment())}>+</button>
                    <button className='counterButton' onClick={handleDecrement}>-</button>
                </div>
                <button onClick={handleReset} className='resetButton'>RESET</button>
                <input type="text"  placeholder='Type something...' onChange={handleOnChange} value={text}/>
            </div>
        </div>
    );
}

export default Main;
