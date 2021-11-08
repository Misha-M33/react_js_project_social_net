import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import DialogsForm from './Message/AddMessageForm'
import { initialStateType } from '../../redux/dialogs-reducer';

type OwnPropsType={
    dialPage: initialStateType
    sendMess: (newMessText: string)=> void
}
export type NewMessageFormValuesType={
    newMessText: string
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
    let state=props.dialPage
let dialogsElemets= state.dialData.map( d => {
    return <DialogsItem name={d.name} key={d.id} id={d.id} />} )
let messageElement=state.mesData.map( m => {
    return <Message message={m.message} key={m.id} />})
//let newMessText=state.newMessText 
let addNewMess = (values: {newMessText: string}) => { 
props.sendMess(values.newMessText) }
return  (
<div className={s.dialogs}>
<div className={s.dialogsItem}> {dialogsElemets}  </div>
<div className={s.messages}>
        <div>{messageElement} </div> 
    
    </div>
< DialogsForm onSubmit={addNewMess}/> 
</div> 
  )
}
export default Dialogs