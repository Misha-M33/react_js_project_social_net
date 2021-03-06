import  { follow, actions, unfollow } from "./users-reducer"
import { usersAPI } from '../api/users-api'
import { resultCodeEnum, APIResponseType } from "../api/api"
jest.mock('../api/users-api')

const usersAPIMock = usersAPI as jest.Mocked< typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(()=> {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  usersAPIMock.follow.mockClear()
  usersAPIMock.unfollow.mockClear()
})

const result: APIResponseType= {
  resultCode: resultCodeEnum.Success,
  messages: [],
  data: {}
}

usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

test("Success follow thunk", async ()=> { 
const thunk= follow(1)

await thunk(dispatchMock, getStateMock, {} )

expect(dispatchMock).toBeCalledTimes(3)
expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 1))
expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess( 1))
expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 1))
})

test("Success unfollow thunk", async ()=> { 
  const thunk=unfollow(1)
   
  await thunk(dispatchMock, getStateMock, {} )
  
  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess( 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 1))
  })