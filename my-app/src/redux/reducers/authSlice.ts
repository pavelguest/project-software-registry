import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isAuth: boolean;
}

const initialState: IInitialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
