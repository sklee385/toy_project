import React from 'react';
import { NavLink  } from "react-router-dom";


const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };
    return (
        <div>
            <ul>
                <li><NavLink  to="/">홈</NavLink ></li>
                <li><NavLink  to="/about">about</NavLink ></li>
                <li><NavLink  to="/about/foo?detail=true">about</NavLink ></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu; 