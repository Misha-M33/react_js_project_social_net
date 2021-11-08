import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
//import { profileType, photosType } from '../../type/type';
//import { propsProfileType } from './ProfileContainer';
import { profileType } from '../../type/type';
//import { useSelector, useDispatch } from 'react-redux';
//import { appStateType } from '../../redux/redux-store';

type PropsType = {
  profile: profileType | null
  status: string
  updateStatus: (status: string)=> void
  isOwner: boolean
  savePhoto: (file: File)=> void  
  saveProfile: ( profile: profileType)=> Promise<any>  
}
//const profile =useSelector( (state: appStateType) => state.profPage.profile)
//const isOwner = useSelector((state: appStateType) => state.auth.isAuth)
//const status = useSelector((state: appStateType)=>  state.profPage.status)
//const dispatch = useDispatch()

const Profile: React.FC<PropsType> = (props) => {
  return <div>
      <ProfileInfo 
      savePhoto={props.savePhoto} 
      isOwner={props.isOwner} 
      profile={props.profile} 
      status={props.status}
      saveProfile={props.saveProfile}
      updateStatus={props.updateStatus} />
      <MyPostsContainer />  
  </div>
}             

export default Profile;