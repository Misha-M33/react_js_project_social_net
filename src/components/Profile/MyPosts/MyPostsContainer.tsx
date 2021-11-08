import React from 'react';
import { actions} from '../../../redux/profile-reducer'
import MyPosts, { MapPropsType, DispatchPropsType } from './MyPosts';
import { connect } from 'react-redux';
//import {  } from '../../../redux/profile-reducer';
import { appStateType } from '../../../redux/redux-store';

const mapStateToProps = (state: appStateType) => {
    return {
        messageData: state.profPage.messageData
        }
}
const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, appStateType> (mapStateToProps, 
    {addPost: actions.addPostActionCreator}) (MyPosts) 
export default MyPostsContainer;