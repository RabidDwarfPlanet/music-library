import axios from 'axios';
import Header from './Components/Header/Header';
import MusicTable from './Components/MusicTable/MusicTable';
import React, { useState, useEffect } from "react";
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import NewSongForm from './Components/NewSongForm/NewSongForm';

function App() {
  const [musicLibrary, setMusicLibrary] = useState([])



  const fetchSongs = async () => {
    try {
      const responce = await axios.get("https://localhost:7042/api/Songs")
      setMusicLibrary(responce.data)
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
      <SearchBar/>
      <MusicTable musicLibrary={musicLibrary}/>
      <NewSongForm onNewSong={fetchSongs}/>
    </div>
  );
}

export default App;
