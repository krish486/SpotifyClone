import { createSlice, current } from "@reduxjs/toolkit";
import songs from "../../../Utils/songs.json"

let playerSlice = createSlice({
    name: "player",
    initialState: {
        que: [...songs],
        currentPlayingSong: null,
        isPlaying: false,
    },
    reducers: {
        playNewSong: (state, action) => {
            state.currentPlayingSong = action.payload;
            state.isPlaying = true;
        },
        play: (state) => {
            state.isPlaying = true;
        },
        pause: (state) => {
            state.isPlaying = false;
        },
        next: (state) => {
            let index = state.que.findIndex(
                (elem) => elem.title === state.currentPlayingSong.title
            );

            if (index === -1) return;

            let nextIndex = (index + 1) % state.que.length;

            state.currentPlayingSong = state.que[nextIndex];
        },
        prev: (state) => {
            let index = state.que.findIndex(
                (elem) => elem.title === state.currentPlayingSong.title
            );

            if (index === -1) return;

            let nextIndex = (index - 1) % state.que.length;

            state.currentPlayingSong = state.que[nextIndex];
        },
    }
})

export let { playNewSong, play, pause, next, prev } = playerSlice.actions

export default playerSlice.reducer;