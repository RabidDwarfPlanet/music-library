import axios from 'axios';
import Header from './Components/Header/Header';
import MusicTable from './Components/MusicTable/MusicTable';
import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import NewSongForm from './Components/NewSongForm/NewSongForm';

function App() {
  const [musicLibrary, setMusicLibrary] = useState([])
  const [musicList, setMusicList] = useState([]);
  
  

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
    let searchFilter = musicLibrary.filter((song) =>  song.title.includes(input) || song.artist.includes(input) || song.artist.includes(input) || song.genre.includes(input))
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
      setMusicList(responce.data)
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
      <MusicTable musicLibrary={musicList} handleDelete={handleDeletePrompt}/>
      <NewSongForm onNewSong={setMusicLibrary}/>
    </div>
  );
}

export default App;
