// reducers.js
import { createSlice } from '@reduxjs/toolkit';
import { darkTheme } from '../theme';



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        accessToken: null,
        refreshToken: null,
        pendingList: [],
        performedList: [],
        transferedList: [],
        donatedList: [],
        zonaPoint: 0,
        darkTheme: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setZonaPoint: (state, action) => {
            state.zonaPoint = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        },
        setpendingList: (state, action) => {
            state.pendingList = action.payload
        },
        setPerformedList: (state, action) => {
            state.performedList = action.payload
        },
        setTransferedList: (state, action) => {
            state.transferedList = action.payload
        },
        setDonatedList: (state, action) => {
            state.donatedList = action.payload
        },
        setDarkTheme: (state, action) => {
            state.darkTheme = action.payload
        }
    },
});

export const {  setUser, 
                setAccessToken, 
                logout, 
                setpendingList, 
                setPerformedList, 
                setTransferedList,
                setDonatedList,
                setRefreshToken,
                setZonaPoint,
                setDarkTheme} = userSlice.actions;
export default userSlice.reducer;
