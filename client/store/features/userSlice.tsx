import UserInterface from '@/interfaces/UserInterface';
import {
  createSlice,
  createAsyncThunk,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState: UserInterface = {
  email: '',
  password: '',
  token: '',
} as const;

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (formInput: UserInterface) => {
    console.log(formInput);
    return axios({
      method: 'POST',
      url: '/api/register',
      data: { email: formInput.email, password: formInput.password },
    })
      .then((res: any) => console.log(res))
      .catch((err) => console.warn(err));
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (formInput: UserInterface) => {
    console.log(formInput);
    return axios({
      method: 'POST',
      url: '/api/login',
      data: { email: formInput.email, password: formInput.password },
    })
      .then((response) => response.data)
      .catch((err) => console.warn(err));
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
    disconnect: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.token = payload.token;
    });
  },
});

export const { setEmail, disconnect } = userSlice.actions;

export default userSlice.reducer;
