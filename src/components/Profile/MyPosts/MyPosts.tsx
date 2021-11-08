import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm, { AddPostFormValuesType } from './AddPostForm/AddPostForm';
import { messageDataType } from '../../../type/type';

export type MapPropsType={
  messageData: Array<messageDataType>
}
export type DispatchPropsType ={
  addPost: (newPostText: string)=>void
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType>=(props => {
let messageElems=
[...props.messageData]
.reverse()
.map(p =>  <Post key={p.id} message={p.message} like={p.likeCount} />)

//let newmessageElems=React.createRef()

let onAddPost = (values: AddPostFormValuesType) => {
      props.addPost(values.newPostText); 
}
  return (
  <div className={s.postsBlock}>
      <h3>My posts</h3> 
      < AddPostForm onSubmit={onAddPost} />
      <div className={s.posts}>
                    {messageElems}
      </div>
    </div>
  )
})

const MyPostsMemorized=React.memo(MyPosts)

export default MyPostsMemorized;