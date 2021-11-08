import React, { useEffect } from 'react'
import Paginator from '../common/Preloader/Paginator/Paginator'
import User from './User'
import { filterType, requestUsers } from '../../redux/users-reducer'
import { UsersSearchForm } from './UsersSearchForm'
import { useSelector, useDispatch } from 'react-redux'
import { getTotalUsersCount, getCurrentPage, getPageSize, getUsersFilter, 
    gettUsers, getFollowingInProgress } from '../../redux/users-select'
import { useHistory } from 'react-router-dom'
import * as queryString from 'querystring'
type propsType={}
type  QueryParamsType ={ term?: string; page?: string; friend?: string}

export const Users: React.FC<propsType> = (props)=> {

const users= useSelector(gettUsers)    
const totalUsersCount= useSelector(getTotalUsersCount)
const currentPage= useSelector(getCurrentPage)
const pageSize= useSelector(getPageSize)
const filter= useSelector(getUsersFilter)
const followingInProgress= useSelector(getFollowingInProgress)
const dispatch = useDispatch()
const history = useHistory()

useEffect(() => {
    const parsed   = queryString.parse(history.location.search.substr(1)) as QueryParamsType
let actualPage = currentPage
let actualFilter = filter
if (!!parsed.page) actualPage = Number(parsed.page)
if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
//if (!!parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === "null" ? null: parsed.friend === "true" ? true: "false"}
switch(parsed.friend) {
    case "null":
        actualFilter = {...actualFilter, friend: null}
        break
    case "true":
        actualFilter = {...actualFilter, friend: true}
        break
    case "false":
        actualFilter = {...actualFilter, friend: false}
        break
}
    dispatch(requestUsers(actualPage, pageSize, filter) )
}, [])
useEffect(() => {
const query: QueryParamsType = {}
if (!!filter.term) query.term = filter.term
if (filter.friend !== null) query.friend = String(filter.friend)
if (currentPage !== 1) query.page = String(currentPage)

    history.push({
        pathname:'/developers',
        search: queryString.stringify(query)       //`?term=${filter.term}&friend=${filter.friend}&page=${currentPage} `
    })
}, [filter, currentPage ])

const onPageChanged= (pageNumber: number)=> {
    dispatch(requestUsers(pageNumber,pageSize, filter) ) 
}
const onFilterChanged = (filter: filterType) => {
    dispatch(requestUsers(1, pageSize, filter))
}
const follow= (userId: number)=> {
    dispatch(follow(userId))
}
const unfollow= (userId: number)=> {
    dispatch(unfollow(userId))
}

return <div>
    <UsersSearchForm onFilterChanged={onFilterChanged} />
            < Paginator currentPage={currentPage} totalItemsCount={totalUsersCount}
            pageSize={pageSize} onPageChanged={onPageChanged} portionSize={10} />
        <div>
        {
users.map(u => < User user={u} 
                    followingInProgress={followingInProgress}
                    key={u.id}
                    unfollow={unfollow}
                    follow={follow}
                        /> 
                        )
        } 
        </div>
        </div>
    }
