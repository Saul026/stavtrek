import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
    isLogin: boolean;
}

const initialState: LoginState = {
    isLogin: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        signIn: () => {
            localStorage.setItem('isLogin', 'true');
        },
        signOut: () => {
            localStorage.removeItem('isLogin');
        },
    },
    selectors: {
        selectIsLogin: () => localStorage.getItem('isLogin'),
    },
});

export const { signIn, signOut } = loginSlice.actions;
export const { selectIsLogin } = loginSlice.selectors;
