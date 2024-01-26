import MusicUploadForm from "../MusicUploadForm/MusicUploadForm";
import SongList from "../SongList/SongList";
import"./MusicPlayer.css"
import SongRow from "../SongRow/SongRow";

const MusicPlayer = ()=>{
    return(
        <div className="musicPlayerHolder">
            <SongRow />
            <SongList/>
            <MusicUploadForm/>
        </div>
    )

}

export default MusicPlayer;