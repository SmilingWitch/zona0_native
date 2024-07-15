// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        accessToken: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            console.log('user',state.user)
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
            console.log('access',state.user)
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
        },
    },
});

export const { setUser, setAccessToken, logout } = userSlice.actions;
export default userSlice.reducer;
