import login from '../../pages/api/login';
import UserInterface from '@/interfaces/UserInterface';
import {
  createSlice,
  createAsyncThunk,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  name: string;
}

const initialState: UserState = {
  name: '',
  email: '',
} as const;

/* export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (formInput: UserInterface) => {
    register(formInput).then((res: any) => console.log(res));
  }
); */

/* export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (formInput: any) => {
    return login(formInput).then((res: any) => {
      console.log(res);
      return res;
    });
  }
); */

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setName, setEmail } = userSlice.actions;

export default userSlice.reducer;
