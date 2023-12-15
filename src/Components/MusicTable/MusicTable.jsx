import SongRow from '../SongRow/SongRow';
import './MusicTable.css'

const MusicTable = ({ musicLibrary, handleDelete }) => {
    const musicArray = musicLibrary.map((song, i) => <SongRow key={i} song={song} handleDelete={handleDelete}/>)
    return ( 
        <div>
            <table className="music-table table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Likes</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{musicArray}</tbody>
            </table>
        </div>
    );
}
 
export default MusicTable;