const SET_USERS = 'SET_USERS'
const SET_USER = 'SET_USER'
const FETCH_ERROR = 'FETCH_ERROR'
const FETCH_START = 'FETCH_START'
const INITIAL_STATE = {
  users: [],
  user: {},
  loading: false,
  error: null,
}
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }
    case FETCH_ERROR:
      return { ...state, loading: false, error: true }
    case SET_USERS:
      return {
        ...state,
        error: false,
        loading: false,
        users: [...action.payload],
      }
    case SET_USER:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload,
      }
    default:
      return state
  }
}
export const setUsersAction = (payload) => ({ type: SET_USERS, payload })
export const setUserAction = (payload) => ({ type: SET_USER, payload })
export default usersReducer
