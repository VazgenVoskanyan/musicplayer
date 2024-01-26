import "./SongRow.css"

const SongRow = ()=>{
    return(
        <div className="SongRow">
            <div>
                <div>

                <button>Play All</button>
                <select></select>

                </div>
                <div>

                    <button>
                        Add All
                    </button>
                    <select></select>

                </div>
            </div>

            <div>
                <select> 
                    <option value="0">
                    Track Num...
                    </option>
                </select>
                <input type="text" placeholder="Filter"/>
            </div>
            
         

        </div>
    )
}

export default SongRow;