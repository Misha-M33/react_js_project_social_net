import React, { useEffect, ChangeEvent } from 'react';
//import Preloader from '../../common/Preloader/Preloader';
import { useState } from 'react';

type PropsType ={
  status: string
  updateStatus: (status: string)=> void
}

const  ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  
  let [editMode, setEditMode]=useState(false)
  let [status, setStatus]=useState(props.status)

  useEffect(() => {
    setStatus(props.status)
      }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

 const deactivateEditMode = () => {
  setEditMode(false)
     props.updateStatus(status)
    }
  const  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)  
      }
  return (
    <div>
      { !editMode &&
        <div>
            <span  onDoubleClick={activateEditMode } >  {props.status || '------' } </span>
        </div>
  }
      { editMode &&
        <div>
            <input  autoFocus={true} onChange={onStatusChange}
            onBlur={deactivateEditMode} 
            value={status} />
        </div>
  }
    </div>
  )
  }


export default ProfileStatusWithHooks