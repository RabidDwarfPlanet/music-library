import { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import "./EditModal.css"
import axios from "axios";

const Modal = ({open, editModal, song, onUpdatedSong}) => {
    
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");
    const [likes, setLikes] = useState("");

    useEffect(() => {
            setTitle(song.title);
            setArtist(song.artist);
            setAlbum(song.album);
            if (song.releaseDate) {
                let date = song.releaseDate.split("T")
                let formatedDate = date[0]
                setReleaseDate(formatedDate);
            }
            setGenre(song.genre)
            setLikes(song.likes);
    }, [song])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedSong = {
            title,
            artist,
            album,
            releaseDate,
            genre,
            likes
        }

        try {
            const responce = await axios.put(`https://localhost:7042/api/Songs/${song.id}`, updatedSong)
            if (responce.status === 200) {
                onUpdatedSong();
                editModal(false)
            }
        } catch (error) {
            console.log("Error submitting new song:", error)
        }
        editModal(false)
    }

    if (!open || !song) return null;
    return ( 
        <div onClick={() => editModal(false)} className="overlay">
            <div onClick={(e) => {
                e.stopPropagation()
            }}>
                <form onSubmit={handleSubmit} className="edit-form">
                    <InputField label="Title" value={title} onChange={setTitle}/>
                    <InputField label="Artist" value={artist} onChange={setArtist}/>
                    <InputField label="Album" value={album} onChange={setAlbum}/>
                    <InputField label="Release Date" value={releaseDate} onChange={setReleaseDate} type="date"/>
                    <InputField label="Genre" value={genre} onChange={setGenre} />
                    <InputField label="Likes" value={likes} onChange={setLikes} />
                    <div className="button-container">
                        <div className="d-flex justify-content-end">
                        <button className="btn btn-primary button" type="submit">Edit Song</button>
                        </div>
                        <div className="d-flex justify-content-end">
                        <button onClick={() => editModal(false)} className="btn btn-danger button" type="button">Exit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Modal;