import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  auth: string;
}

const initialState: IInitialState = {
  auth: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
