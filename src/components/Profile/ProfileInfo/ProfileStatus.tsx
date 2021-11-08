import React, { ChangeEvent } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { type } from 'os';

type propsType={
  editMode: boolean
  status: string
  updateStatus: (newStatus: string)=> void
}
type stateType={
  editMode: boolean
  status: string
}

class  ProfileStatus extends React.Component<propsType, stateType> {
  //statusInputRef = React.createRef()
  state={
    editMode: false,
    status: this.props.status,
      }
  activateEditMode = () => {
    //console.log('this:', this )
    this.setState ({
      editMode: true
    })
  }
deactivateEditMode = () => {
    this.setState ({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: e.currentTarget.value})  
    }
    
componentDidUpdate (prevState: stateType, prevProps: propsType) {
  if ( prevProps.status !== this.props.status) {
    this.setState({ status: this.props.status})
  }
  }

  render () { //console.log('render')
  
  return (
    <div>
      { ! this.state.editMode &&
        <div>
            <span  onDoubleClick={this.activateEditMode } >
              {this.props.status || '------' }</span>
        </div>
  }
      { this.state.editMode &&
        <div>
            <input onChange={this.onStatusChange} autoFocus={true}
            onBlur={this.deactivateEditMode} 
            value={this.state.status} />
        </div>
  }
    </div>
  )
  }
}

export default ProfileStatus;