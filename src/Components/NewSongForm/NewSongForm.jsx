import axios from "axios";
import InputField from "../InputField/InputField";
import { useState } from "react";
import './NewSongForm.css'

const NewSongForm = ({ onNewSong }) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");
    const [likes, setLikes] = useState("");

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSong = {
            title,
            artist,
            album,
            releaseDate,
            genre, 
            likes
        }

        try {
            const responce = await axios.post("https://localhost:7042/api/Songs", newSong)
            if (responce.status === 201) {
                onNewSong();
                clearForm();
            }
        } catch (error) {
            console.log("Error submitting new song:", error)
        }
    }

    function clearForm () {
        setTitle('');
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');
        setLikes('');
    }


    return ( 
        <form onSubmit={handleSubmit} className="new-form">
            <InputField label="Title" value={title} onChange={setTitle}/>
            <InputField label="Artist" value={artist} onChange={setArtist}/>
            <InputField label="Album" value={album} onChange={setAlbum}/>
            <InputField label="Release Date" value={releaseDate} onChange={setReleaseDate} type="date"/>
            <InputField label="Genre" value={genre} onChange={setGenre} />
            <InputField label="Likes" value={likes} onChange={setLikes} type={"number"} />
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={clearForm}>Clear</button>
                <button className="btn btn-primary" type="submit">Add Song</button>
            </div>
        </form>
    );
}
 
export default NewSongForm;