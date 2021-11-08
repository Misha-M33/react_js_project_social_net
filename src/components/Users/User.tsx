//@typescript-eslint/no-redeclare
import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { photosType, userType } from '../../type/type'

type propsType={
    user: userType    
    followingInProgress: Array<number>
    unfollow: (userId: number)=> void
    follow: (userId: number)=> void
}

let User: React.FC<propsType> = ({user, followingInProgress, unfollow, follow}) => {
return <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id} > 
                        <img src={user.photos.small != null ? user.photos.small: userPhoto} alt='' 
                        className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed 
                        ? <button disabled={followingInProgress.some(id=>id===user.id)} onClick ={ () => { 
                            unfollow(user.id)
                        } }>Unfollow</button> 
                        : <button disabled={followingInProgress.some(id=>id===user.id)} onClick ={ () => {
                            follow(user.id)
                        } } >Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>Мое имя = {user.name}</div>
                    <div>Статус = {user.status}</div>
                    <div>User_id = {user.id}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>
    }
export default User
