import { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import "./EditModal.css"

const Modal = ({open, editModal, song}) => {
    
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
            setReleaseDate(song.releaseDate);
            setGenre(song.genre);
            setLikes(song.likes);

    }, [song])

    if (!open || !song) return null;
    return ( 
        <div className="overlay">

            <form className="edit-form">
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
    );
}
 
export default Modal;