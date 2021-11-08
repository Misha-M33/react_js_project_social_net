import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import {Button, Row, Col, Menu, Avatar, Layout} from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuth, selectCurrentUserLogin } from '../../redux/auth-select';
import { logout } from '../../redux/auth-reducer';

export type MapPropsType={}

export const Header: React.FC<MapPropsType > = (props) => {
  
  const isAuth= useSelector(selectIsAuth)
  const login= useSelector(selectCurrentUserLogin)
  const dispatch= useDispatch()

  const logoutCallback = ()=> {
    dispatch(logout())
  }

  const {Header} = Layout

    return  <Header className="header">
    
    <Row>
      <Col span={18}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1"><Link to='/developers' >Developer</Link></Menu.Item>       
    </Menu>
      </Col>
      
      { isAuth 
      ? <><Col span={1}>
        <Avatar alt={login || ''} style={{backgroundColor: '#87d068', }} icon={<UserOutlined/>}/>         
        </Col>
        <Col span={5}>
        <Button onClick={logoutCallback}> Log out</Button>
        </Col>
        </> 
      : <Col span={6}>
        <Button>
          <Link to={'/login'} >Login</Link> 
        </Button>
      
        </Col>
        }
    </Row>      
  </Header> 
    
    /*<header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn-qDyY-WAKn01oK4J6GpTIbXwkBoICZnAdg&usqp=CAU' alt='' />

    <div className= {s.loginBlock} >
      
      { props.isAuth ?
      <div>{props.login} - <button onClick={props.logout}> Logout</button></div> 
      : <NavLink to={'/login'} >Login</NavLink>}
    </div>

  </header>*/
}
