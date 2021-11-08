import React  from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { appStateType } from '../../redux/redux-store'

let mapStateToPropsForRedirect = (state: appStateType) => ({
        isAuth: state.auth.isAuth
    } as MapPropsType) 

type MapPropsType ={
    isAuth: boolean
}

export function withAuthRedirect <WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapPropsType> = (props)=> {  
        let {isAuth, ...restProps} = props     
            if (!props.isAuth) return <Redirect to='/Login' />
            return <WrappedComponent {...restProps as WCP} />
        
    }
    
let ConnectAuthRedirectComponent=connect <MapPropsType, {}, WCP, appStateType>(
    mapStateToPropsForRedirect)(RedirectComponent)

return ConnectAuthRedirectComponent
}