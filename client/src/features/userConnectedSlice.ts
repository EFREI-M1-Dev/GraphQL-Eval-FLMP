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

/* export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (formInput: UserInterface) => {
    const register = useRegister()
    register(formInput).then((res) => setLoggedUser(res.token))
  }
) */

/* export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (formInput: UserInterface) => {
    const login = useLogin()
    return login(formInput.email, formInput.password).then((res) => res)
  }
) */

/* export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (formInput: UserInterface) => {
    const update = useUpdateUser()
    return update(formInput).then((res) => res)
  }
) */

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.token = action.payload
    },
    setUpdateUser: (state, action) => {
      state.mail = action.payload.data.userUpdated.email
      state.firstName = action.payload.data.userUpdated.firstname
      state.lastName = action.payload.data.userUpdated.lastname
      state.img = action.payload.data.userUpdated.img
    },
    logoutLoggedUser: (state) => (state = initialState),
  },
  /* extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, { payload }) => {
      state.isFetching = false
      state.isSuccess = true
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isFetching = false
      state.isSuccess = true
      state.id = payload.user._id
      state.mail = payload.user.email
      state.firstName = payload.user.firstname
      state.lastName = payload.user.lastname
      state.img = payload.user.img
    })
  }, */
})

export const { setLoggedUser, setUpdateUser, logoutLoggedUser } =
  userSlice.actions
export default userSlice.reducer

export const userSelector = (state: any) => state.user
