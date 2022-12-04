import { getUser, getUsers } from '../../api'
import { setUsersAction, setUserAction } from './usersReducer'

export const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const user = await getUser(id)
    dispatch(setUserAction(user))
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', payload: err.message })
  }
}

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' })
  try {
    const users = await getUsers()
    dispatch(setUsersAction(users))
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', payload: err.message })
  }
}
