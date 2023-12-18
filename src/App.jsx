import axios from 'axios';
import Header from './Components/Header/Header';
import MusicTable from './Components/MusicTable/MusicTable';
import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import NewSongForm from './Components/NewSongForm/NewSongForm';
import Modal from './Components/EditModal/EditModal';

function App() {
  const [musicLibrary, setMusicLibrary] = useState([])
  const [musicList, setMusicList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentEdit, setCurrentEdit] = useState([]);
  
  function handleEdit (openModal, currentEdit) {
    setOpenModal(openModal)
    setCurrentEdit(currentEdit)
  }

  const handleDelete = async (songId) => {
    try {
        const testResponce = await axios.get(`https://localhost:7042/api/Songs/${songId}`)
        if (testResponce.status === 201) alert("You are about to delete this song")
        const responce = await axios.delete(`https://localhost:7042/api/Songs/${songId}`)
        if (responce.status === 204) fetchSongs();
    } catch (error) {
      console.log("Error in handleDelete: ", error)
    }
  }

  const handleSearch = (input) => {
    musicLibrary.map(function (song) {
      if (song.album === null) {
        song.album = ""
      }
    })
    let searchFilter = musicLibrary.filter((song) =>  song.title.toLowerCase().includes(input.toLowerCase()) || song.artist.toLowerCase().includes(input.toLowerCase()) || song.album.toLowerCase().includes(input.toLowerCase()) || song.genre.toLowerCase().includes(input.toLowerCase()))
    setMusicList(searchFilter)
  }

  const handleDeletePrompt = (songId) => {
    if(window.confirm("You are about to delete this song, are you sure you would like to continue")){
      handleDelete(songId)
    }
  }

  const fetchSongs = async () => {
    try {
      const responce = await axios.get("https://localhost:7042/api/Songs")
      setMusicLibrary(responce.data)
      setMusicList(responce.data);
    } catch (error) {
      console.log("Error at fetch movies: ", error)
    } 
  }

  useEffect(() => {
    fetchSongs();
  }, [])

  return (
    <div className="App d-flex flex-column align-items-center">
      <Header/>
      <SearchBar setValue={handleSearch}/>
      <MusicTable musicLibrary={musicList} handleDelete={handleDeletePrompt} handleEdit={handleEdit}/>
      <NewSongForm onNewSong={fetchSongs}/>
      <Modal open={openModal} editModal={setOpenModal} song={currentEdit} onUpdatedSong={fetchSongs}/>
    </div>
  );
}

export default App;
