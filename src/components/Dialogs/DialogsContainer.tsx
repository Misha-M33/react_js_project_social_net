import React from 'react';
import { actions } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { appStateType } from '../../redux/redux-store';

let mapStateToProps = (state: appStateType) => {
    return {
        dialPage: state.dialPage,
        isAuth: state.auth.isAuth
        }
}
//let mapDispatchToProps = (dispatch) => {
//    return { sendMess: (newMessText) => {
//        dispatch(actions.sendMess(newMessText))
//        }    }  }

export default  compose<React.ComponentType>(connect (mapStateToProps, {...actions}),
//withAuthRedirect
)(Dialogs)

//const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent) 
//export default DialogsContainer