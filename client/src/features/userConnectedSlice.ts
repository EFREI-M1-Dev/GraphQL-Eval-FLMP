import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/* interfaces */
import UserInterface from '../interfaces/UserInterface'

const initialState = {
  id: '',
  mail: '',
  password: '',
  firstName: '',
  lastName: '',
  img: '',
  token: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.token = action.payload.token
      state.img = action.payload.user.avatar
      state.firstName = action.payload.user.username
    },
    setUpdateUser: (state, action) => {
      state.mail = action.payload.data.userUpdated.email
      state.firstName = action.payload.data.userUpdated.firstname
      state.lastName = action.payload.data.userUpdated.lastname
      state.img = action.payload.data.userUpdated.img
    },
    logoutLoggedUser: (state) => (state = initialState),
  },
})

export const { setLoggedUser, setUpdateUser, logoutLoggedUser } =
  userSlice.actions
export default userSlice.reducer

export const userSelector = (state: any) => state.user
