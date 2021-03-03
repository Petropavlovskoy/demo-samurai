import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfMDwCaLk1bLZw6udAFzlNU88Sf4rwTY3iA&usqp=CAU' />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button className={s.buttonLogin} onClick={props.logout}>Log out</button> </div>
       : <NavLink to={'/login'}>Login</NavLink>}
            </div>
    </header>
}

export default Header;