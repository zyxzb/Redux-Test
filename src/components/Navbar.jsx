import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {value} = useSelector((state) => state.counter);

    return (
        <div className='navbar'>
            <div className="logo">LOGO</div>
            <div className="info"><label className='reduxInfo'>REDUX INFO: {value} </label></div>
        </div>
    );
}

export default Navbar;
