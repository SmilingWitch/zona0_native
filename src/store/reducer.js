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
        bankedList: [],
        performedList: [],
        transferedList: [],
        donatedList: [],
        zonaPoint: 0,
        darkTheme: false,
        effectedOperation: false,
        institutionsList: [],
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
        setBankedList: (state, action) => {
            state.bankedList = action.payload
        },
        setDonatedList: (state, action) => {
            state.donatedList = action.payload
        },
        setInstitutionsList: (state, action) => {
            state.institutionsList = action.payload
        },
        setDarkTheme: (state, action) => {
            state.darkTheme = action.payload
        },
        updateUserInfo: (state, action) => {
            const { image, last_name, name, username } = action.payload;
            if (state.user) {
                state.user = {
                    ...state.user,
                    image,
                    last_name,
                    name,
                    username
                };}
                console.log(state.user)
            },
        setEffectedOperation: (state, action) => {
            state.effectedOperation = action.payload
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
                setInstitutionsList,
                setRefreshToken,
                setZonaPoint,
                setDarkTheme,
                setBankedList,
                updateUserInfo,
                setEffectedOperation} = userSlice.actions;
export default userSlice.reducer;
