import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, withRouter, BrowserRouter, Switch, Redirect, NavLink, Link} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import 'antd/dist/antd.css'

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import {initializeApp} from './redux/app-reducer'
import { withSuspense } from './components/hoc/withSuspense';
import store, { appStateType } from './redux/redux-store';
import { UsersPage } from './components/Users/UsersContainer';
import { LoginPage } from './components/Login/LoginPage';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Header } from './components/Header/Header';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;


const DialogsContainer=React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer=React.lazy(() => import('./components/Profile/ProfileContainer'))
const ChatPage=React.lazy(() => import('./pages/Chat/ChatPage'))

type MapPropsType= ReturnType < typeof mapStateToProps>
type DispatchPropsType= {
  initializeApp: ()=> void
}

const SuspendedDialogs =withSuspense( DialogsContainer)
const SuspendedProfile =withSuspense( ProfileContainer)
const SuspendedChatPage =withSuspense( ChatPage)

class App extends Component <MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors= (e: PromiseRejectionEvent)=> {
alert('Some error occured')
    }
  componentDidMount () {    
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount () {    
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  render () {
    if (!this.props.initialized) {
      return <Preloader />
    }
  return (  
    
    <Layout>
      < Header/>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
           /* defaultSelectedKeys={['7']}**/
           /* defaultOpenKeys={['sub1']}*/
            style={{ height: '100%' }}
          >
            
            <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
              <Menu.Item key="1"><Link to='/profile' >Profile</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/dialogs'  >Messages</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/news' >News</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/chat' >Chat</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developer">
              <Menu.Item key="5"><Link to='/developers' >Developers</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/music' >Music</Link></Menu.Item>
              <Menu.Item key="7"><Link to='/settings' >Settings</Link></Menu.Item>
              <Menu.Item key="8"><Link to='/friends' ><h2>Friends</h2></Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Switch>
    <Route exact path='/' render={ ()=> <Redirect to={'/profile'}/> }/>
        <Route path='/dialogs' render={()=> < SuspendedDialogs/>}  />
        <Route path='/profile/:userId?' render={()=> <SuspendedProfile/> } />
        <Route path='/developers' render={ () => < UsersPage pageTitle={'Самурай'} /> }/>
        <Route path='/login' render={ () => < LoginPage /> }/>
        <Route path='/chat' render={ () => <SuspendedChatPage />}/>
        <Route path='/news' render={ () => <News />}/>
        <Route path='/music' render={ () => <Music />}/>
        <Route path='/settings' render={ () => <Settings />}/>
        <Route path='/friends' render={ () => <Friends />}/>
        <Route path='*' render={ () => <div>404 NOT FOUND  </div> }/>
        </Switch>
          </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design © 6 jun 2021 Created by Michail Mishchenko</Footer>
  </Layout>
      /* <div className='app-wrapper'>
      <HeaderContainer />
      <NavBar />
      <div className='app-wrapper-content'>
      
    <Switch>
    <Route exact path='/' render={ ()=> <Redirect to={'/profile'}/> }/>
        <Route path='/dialogs' render={()=> < SuspendedDialogs/>}  />
        <Route path='/profile/:userId?' render={()=> <SuspendedProfile/> } 
                //  <React.Suspense fallback={<div>Loading...</div>}>
                //    <ProfileContainer />
                 // </React.Suspense>
                />
        <Route path='/users' render={ () => < UsersPage pageTitle={'Самурай'} /> }/>
        <Route path='/login' render={ () => < LoginPage /> }/>
        <Route path='/news' render={ () => <News />}/>
        <Route path='/music' render={ () => <Music />}/>
        <Route path='/settings' render={ () => <Settings />}/>
        <Route path='/friends' render={ () => <Friends />}/>
        <Route path='*' render={ () => <div>404 NOT FOUND
          <Button type={'primary'} >Ok mih</Button>
        </div> }/>
        </Switch>
      </div>
    </div> */
    
    );
}
}
const mapStateToProps = (state: appStateType) => ({
  initialized: state.app.initialized
  })
const AppContainer = compose<React.ComponentType>(
  withRouter, 
  connect (mapStateToProps, {initializeApp})) (App)

  const SamuraiJSApp: React.FC=()=>{
    return <BrowserRouter>
            <Provider store={store} >
                <AppContainer />
            </Provider>
          </BrowserRouter>
  }
  export default SamuraiJSApp