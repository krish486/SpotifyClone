import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../api/AuthAPi";

let AuthSlice = createSlice({
    isLoading:false,
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthApi.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(AuthApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(AuthApi.rejected, (state) => {
                (state.isLoading = false), (state.user = null);
                state.isAuthenticated = false;
            });
    }
})


export let { addUser, removeUser } = AuthSlice.actions
export default AuthSlice.reducer