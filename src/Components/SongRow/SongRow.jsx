const SongRow = ({ song, handleDelete }) => {
    let releaseDate = song.releaseDate.split("-");
    let day = releaseDate.pop();
    let dayTime = day.split("T")
    day = dayTime[0]
    releaseDate = `${releaseDate[1]}/${day}/${releaseDate[0]}`
    return ( 
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>{releaseDate}</td>
            <td>{song.likes}</td>
            <div className="d-flex justify-content-center">
            <td><button onClick={() => handleDelete(song.id)} className="btn btn-danger">Delete</button></td>
            </div>
        </tr>
     );
}
 
export default SongRow;