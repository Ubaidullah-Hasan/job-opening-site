import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/all"}>Home</Link></li>
            <li><Link to={"/home"}>Home</Link></li>
        </ul>
    </>
    return (
        <div>
            
        </div>
    );
};

export default Navbar;