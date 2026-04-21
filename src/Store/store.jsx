import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/player/state/playerSlice"
import AuthReducer from "../features/auth/state/AuthSlice"

export let store = configureStore({
    reducer: {
        player: playerReducer,
        auth: AuthReducer,
    }
})