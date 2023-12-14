const SongRow = ({ song }) => {
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
        </tr>
     );
}
 
export default SongRow;