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
} as const;

/* export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (formInput: UserInterface) => {
    register(formInput).then((res: any) => console.log(res));
  }
); */

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
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.token = payload.token;
    });
  },
});

export const { setEmail } = userSlice.actions;

export default userSlice.reducer;
