import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

//const ADD_POST='ADD-POST'
//const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
//const UPDATE_NEW_MESS_TEXT='UPDATE-NEW-MESS-TEXT'
//const ADD_MESS='ADD-MESS'
let store = {
    _state: {
        dialPage: {
        dialData: [
            {id: 1, name: 'Dimych' },
            {id: 2, name: 'Andrey' },
            {id: 3, name: 'Sveta' },
            {id: 4, name: 'Sasha' },
            {id: 5, name: 'Viktor' },
            {id: 6, name: 'Valera' }
        ], 
        mesData: [
            {id: 1, message: 'Hi' },
            {id: 2, message: 'How is your it-kamasytra' },
            {id: 3, message: 'Yo-Yo' },
            {id: 4, message: 'Yo-Yo' },
            {id: 5, message: 'Yo-Yo' } 
        ],
        newMessText: ''},

        profPage: {
     messageData: [
            {id: 1, message: 'Hi, how are your', likeCount: 15 },
            {id: 2, message: 'It\'s my first post', likeCount: 20 },
            {id: 3, message: 'It\'s my seckond post', likeCount: 2 }
        ],
        newPostText: 'it-kamasytra.com'},
        sidebar: {}     
    },
    _callSubscribe () { },
    
    getState () { return this._state},
    subscribe (observer) {
        this._callSubscribe=observer
    },
    
    dispatch(action) { 
        this._state.profPage=profileReducer(this._state.profPage, action) 
        this._state.dialPage=dialogsReducer(this._state.dialPage, action)
        this._state.sidebar=sidebarReducer(this._state.sidebar, action)
        this._callSubscribe(this._state)
                    }    
}
      //  if (action.type===ADD_POST) {
      //      let newPost= { id: 4, message: this._state.profPage.newPostText, likeCount: 454 }
      //      this._state.profPage.messageData.push(newPost)
       //     this._state.profPage.newPostText=''
      //      this._callSubscribe(this._state) }
      //  else  if  (action.type===APDATE_NEW_POST_TEXT) {
      //      this._state.profPage.newPostText=action.newText
       //     this._callSubscribe(this._state) }
      //      else  if  (action.type===APDATE_NEW_MESS_TEXT) {
      //          this._state.dialPage.newMessText=action.nText
      //          this._callSubscribe(this._state)  }
      //      else  if  (action.type===ADD_MESS) {
       //         let newMess= { id: 6, message: this._state.dialPage.newMessText }
      //          this._state.dialPage.mesData.push(newMess)
       //         this._state.dialPage.newMessText=''
       //         this._callSubscribe(this._state)}
        
    
  //  addMess ()  {
  //      let newMess= { id: 6, message: this._state.dialPage.newMessText }
  //      this._state.dialPage.mesData.push(newMess)
  //      this._state.dialPage.newMessText=""
  //      this._callSubscribe(this._state)
  //  },
  //  updateNewMessText (nText) {
  //      this._state.dialPage.newMessText=nText
  //      this._callSubscribe(this._state)
   // }


//export const addPostActionCreator =()=> ( { type: ADD_POST  })
//export const updateNewPostTextActionCreator =(text)=> (
//   { type: APDATE_NEW_POST_TEXT, newText:text  })
//export const addMessActionCreator =()=> ( { type: ADD_MESS  })
//export const updateNewMessTextActionCreator =(text)=> (
//   { type: APDATE_NEW_MESS_TEXT, nText:text  })

   // window.store=store
    export default store