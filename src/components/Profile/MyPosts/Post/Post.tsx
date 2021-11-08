import React from 'react';
import s from './Post.module.css';

type PropsType ={
  message: string
  like: number
}

const Post: React.FC<PropsType> = (props) => {
    return <div className={s.item}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAvzQNElfnLQooVa1qoC0PtaLYkY6msdzDiQ&usqp=CAU' 
              alt='' />
          {props.message}
          <div className=" like">
            <span>like {props.like}</span>
          </div>
        </div>     
}

export default Post;