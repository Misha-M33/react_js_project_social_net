import React from 'react'
import profileReducer, { actions } from "./profile-reducer"


// 1. test data
let state = { 
   messageData: [
   {id: 1, message: 'Hi, how are your', likeCount: 15 },
   {id: 2, message: 'It\'s my first post', likeCount: 20 },
   {id: 3, message: 'It\'s my seckond post', likeCount: 2 }
],
profile: null,
status: ''}

it ('length of post should be incremented', () => {
let action=actions.addPostActionCreator ('it-kamasutra.com')
// 2. action
let newState=profileReducer(state, action)
// 3. expectation
expect(newState.messageData.length).toBe(4)
})

it ('length of post should be correct', () => {
   let action=actions.addPostActionCreator ('it-kamasutra.com')
   // 2. action
   let newState=profileReducer(state, action)
   // 3. expectation
   expect(newState.messageData[4])
   })

   it ('after deleting length of post should be decremented', () => {
      let action=actions.deletePost (1)
      // 2. action
      let newState=profileReducer(state, action)
      // 3. expectation
      expect(newState.messageData.length).toBe(2)
      })

   it ("after deleting length of post shouldn't be decremented if id incorrect", () => {
      let action=actions.deletePost (1000)
         // 2. action
      let newState=profileReducer(state, action)
         // 3. expectation
      expect(newState.messageData.length).toBe(3)
         })