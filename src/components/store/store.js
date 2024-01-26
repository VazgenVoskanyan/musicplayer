import { configureStore } from "@reduxjs/toolkit";
import { musicReducers } from "./slices/SongListSlice/SongListSlice";

export const store = configureStore({
    reducer:{
        music:musicReducers,
        isPlaying:"",
        
    }
})