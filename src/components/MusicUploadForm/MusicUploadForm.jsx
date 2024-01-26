import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewSong } from "../store/slices/SongListSlice/API";
import "./MusicUploadForm.css"
import { selectSongList } from "../store/slices/SongListSlice/SongListSlice";

const MusicUploadForm = () =>{
    const [NewPostSong,setNewPostSong] = useState("")
    const {musics} = useSelector(selectSongList)
    const dispatch = useDispatch()

    const postNewSong = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          setNewPostSong(reader.result);
        };
      };

    const handlerSubmit = (e)=>{
        e.preventDefault()        
        const { 
            SongName: { value: SongName },
            ArtistName: { value: ArtistName }
     } = e.target



        const newSong = {
            songName:SongName,
            artistName:ArtistName,
            trackNumber:musics.length + 1,
            file:NewPostSong
        };

        if (newSong.artistName && newSong.songName && newSong.file){
        dispatch(addNewSong(newSong))
        }

        e.target.reset()
    }



    return(

        <div>
            <form onSubmit={handlerSubmit}>
                <div>
                <input type="text" placeholder="SongName" name="SongName"/>
                <input type="text" placeholder="ArtistName" name="ArtistName"/>

                </div>
                <div>
                <input type="file" name="file" onChange={postNewSong}/>
                <button>Add</button>

                </div>

                
            </form>
        </div>
    )

}
export default MusicUploadForm;