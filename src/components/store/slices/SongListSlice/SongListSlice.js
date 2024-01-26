import { createSlice } from "@reduxjs/toolkit";
import { addNewSong, getSongList } from "./API";

const songListSlice = createSlice({
    name:"music",
    initialState:{
        musics:[],
    },
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getSongList.fulfilled,(state,{payload})=>{
            return {
                ...state,
                musics:payload
            }
        })
        .addCase(addNewSong.fulfilled,(state,{payload})=>{
            console.log(state);
            return{
                ...state,
                musics:[...state.musics,payload]
            }
        })
    }
})

export const selectSongList = (state )=> state.music

export const {togglePlay} = songListSlice.actions

export const musicReducers = songListSlice.reducer