import React from 'react';
import { connect} from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { profileType} from '../../type/type';
import { appStateType } from '../../redux/redux-store';

type MapPropsType= ReturnType<typeof mapStateToProps>
type DispatchPropsType={
  getUserProfile: (userId: number)=> void 
  getStatus: (userId: number)=> void
  updateStatus: (status: string)=> void
  savePhoto: (file: File)=> void
  saveProfile: (profile: profileType)=> Promise<any>
}
type PathParamsType={
  userId: string
}
type PropsType= MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

//export const ProfileFC: React.FC= () => {
//const isOwner = useSelector(state => match.params.userId)
//  <Profile {...this.props} 
//    isOwner={!this.props.match.params.userId}
//    profile={this.props.profile} 
 //   status={this.props.status}
 //   updateStatus={this.props.updateStatus}
//    savePhoto={this.props.savePhoto}/>
//}


class ProfileContainer extends React.Component<PropsType> {
  refreshProfile () {
let userId: number | null = +this.props.match.params.userId
  if (!userId) { userId = this.props.authorizedUserId 
    //todo: hush Redirect
    if (!userId) { this.props.history.push("/login") }}

    if(!userId) { 
      console.error("ID should exists in URL params or in state ('authorizedUserId')")
    } else {
  this.props.getUserProfile(userId)
  this.props.getStatus(userId)
  }
}

componentDidMount () {
  this.refreshProfile()
  }

  componentDidUpdate (prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }    
  }

  render () { 
      return (   
    <Profile {...this.props} 
    isOwner={!this.props.match.params.userId}
    profile={this.props.profile} 
    status={this.props.status}
    updateStatus={this.props.updateStatus}
    savePhoto={this.props.savePhoto}/>
      )
  }  
} 

let mapStateToProps = (state: appStateType) => ({
  profile: state.profPage.profile, 
  status: state.profPage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
}) 

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)