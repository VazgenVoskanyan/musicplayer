import { useDispatch, useSelector } from "react-redux";
import { selectSongList } from "../store/slices/SongListSlice/SongListSlice";
import { useEffect } from "react";
import { getSongList } from "../store/slices/SongListSlice/API";
import "./SongList.css"

const SongList = () =>{
    const {musics} = useSelector(selectSongList) 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSongList())
    }, [musics.length])
   
    return(
        <div>
            <div className="songlisttitle">
                <div className="firsttitle alltitle"></div>
                <div className="secondtitle alltitle">Song Name </div>
                <div className="thirdtitle alltitle">Artist Name</div>
                <div className="fourthtitle alltitle">Track</div>
                <div className="fifthtitle alltitle"></div>
            </div>

            <div>
                {musics?.map((music)=>{
                    return(
                    <div className="musicholder">
                       
                        <div className='audioholder'>
                            <div>
                                <div className="audioplay"></div>
                            </div>
                       
                        <audio >
                            <source src={music.file}/>
                        </audio>

                        </div>
                      
                        
                       
                        <div className="songnameholder">{music.songName} </div>
                        <div className="artistnameholder">{music.artistName} </div>
                        <div className="tracknumberholder">{music.trackNumber} </div>
                        <div className="iconholder"> </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SongList;