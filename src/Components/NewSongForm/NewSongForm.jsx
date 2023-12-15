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

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSong = {
            title,
            artist,
            album,
            releaseDate,
            genre
        }

        try {
            const responce = await axios.post("https://localhost:7042/api/Songs", newSong)
            if (responce.status === 201) onNewSong();
        } catch (error) {
            console.log("Error submitting new song:", error)
        }
    }


    return ( 
        <form onSubmit={handleSubmit} className="new-form">
            <InputField label="Title" value={title} onChange={setTitle}/>
            <InputField label="Artist" value={artist} onChange={setArtist}/>
            <InputField label="Album" value={album} onChange={setAlbum}/>
            <InputField label="Release Date" value={releaseDate} onChange={setReleaseDate} type="date"/>
            <InputField label="Genre" value={genre} onChange={setGenre} />
            <div className="d-flex justify-content-end">
            <button className="btn btn-primary button" type="submit">Add Song</button>
            </div>
        </form>
    );
}
 
export default NewSongForm;