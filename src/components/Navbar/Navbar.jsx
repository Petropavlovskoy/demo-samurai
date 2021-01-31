import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Navbar"activeClassName={s.activeLink}>News</NavLink>

            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Navbar"activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Navbar"activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={`${s.item} ${s.active} ${s.navimg}`}>
                <NavLink to="/Navbar"activeClassName={s.activeLink}>Post1</NavLink>
                <NavLink to="/Navbar"activeClassName={s.activeLink}>Post2</NavLink>
                <NavLink to="/Navbar"activeClassName={s.activeLink}>Post3</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;