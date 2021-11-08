import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type PropsType={
    id: number
    name: string
}

const DialogsItem: React.FC<PropsType> = (props) => {
    let path='/dialogs/'+ props.id
    return (
        <div className={s.dialog +' '+ s.active}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTq94Hwk9ZHN8CCst6yxkTB5zWNrOBrOGylw&usqp=CAU' alt='' />
            <NavLink to={path}>{ props.name} </NavLink>  
        </div>
    )
}
    
export default DialogsItem