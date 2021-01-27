import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img src= {'https://bipbap.ru/wp-content/uploads/2017/08/0-70.jpg'}/>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>
}

export default DialogItem;