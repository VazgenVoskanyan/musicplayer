import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseSendRequest } from "../../../../hook/UseSendRequest";

const {get,post} = UseSendRequest()
export const getSongList = createAsyncThunk("music/getSongList",async()=>{
    const result = await get("http://localhost:5000/music")
    return result
})

export const addNewSong = createAsyncThunk('music/addNewSong',async(data)=>{
    const result = await post("http://localhost:5000/music",data)
    return result
})