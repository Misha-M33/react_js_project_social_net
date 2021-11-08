import React from 'react';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return <nav className={ s.nav}>
    <div className={ s.item}>
      <NavLink to='/profile' activeClassName={s.activeLink} ><h3>Profile</h3> </NavLink></div>
    <div className= {`${s.item} ${s.active}`} >
      <NavLink to='/dialogs' activeClassName={s.activeLink} >Messages</NavLink></div>
      <div className={ s.item}>
      <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>
    <div className={ s.item}>
      <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
    <div className={ s.item}>
      <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
    <div className={ s.item}>
      <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
      <div className={s.friend}>
                     
      <div className={ s.item}>
      <NavLink to='/friends' activeClassName={s.activeLink}><h2>Friends</h2></NavLink></div>
      </div>
  </nav>
}
export default NavBar