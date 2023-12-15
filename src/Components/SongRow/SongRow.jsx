const SongRow = ({ song, handleDelete, handleEdit }) => {
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
            <td>
                <div className="d-flex justify-content-center">
                    <button onClick={() => handleDelete(song.id)} className="btn btn-danger">Delete</button>
                </div>
            </td>
            <td>
                <div className="d-flex justify-content-center">
                    <button onClick={() => handleEdit(true, song)} className="btn btn-secondary">Edit</button>
                </div>
            </td>
        </tr>
     );
}
 
export default SongRow;