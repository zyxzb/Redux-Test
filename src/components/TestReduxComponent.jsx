import React from 'react';
import { useSelector } from 'react-redux';

const TestReduxComponent = () => {

    const {value} = useSelector((state) => state.counter);

    return (
        <div className='reduxInfo'>
            REDUX INFO: {value}
        </div>
    );
}

export default TestReduxComponent;
