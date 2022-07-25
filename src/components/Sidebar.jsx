import React from 'react';
import { useSelector } from 'react-redux';


const Sidebar = () => {
    const {text} = useSelector((state) => state.counter);

    return (
        <div className='sidebar'>
            <div>
                <span>Sidebar</span>
            </div>
            <div className='inputInfo'>
                <span>Input redux info:</span>
                <label>{text}</label>
            </div>
        </div>
    );
}

export default Sidebar;
