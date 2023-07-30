import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string;
  name: string;
}

const initialState: UserState = {
  name: 'Sulhadin',
  email: 'sulhadin@gmail.com',
} as const;

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
