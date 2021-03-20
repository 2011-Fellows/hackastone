import axios from 'axios'

//Action Constant
const SET_USERS: string = 'SET_USERS'

//Action Creator
export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

//Thunk Creators
export const fetchUsers = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get('/api/users')
    dispatch(setUsers(data))
  } catch (err) {
    console.log(err)
  }
}

//Intial State
const initialState = []

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users
    default:
      return state
  }
}

export default userReducer
