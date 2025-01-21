import { useEffect, useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput';
import SongGrid from './components/SongGrid';
import INITIAL_LIST from './utils/constants';
import fetchSongs from './services/api'

function App() {
  const [displayedSongs, setDisplayedSongs] = useState(INITIAL_LIST);
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [areNewSongsFetched, setAreNewSongsFetched] = useState(false);

  const handleInputChanged = async (event) => {
    
    const filteredSongNames = await fetchSongs(event.target.value);

    if (filteredSongNames.length === 0) {
      setFetchedSongs(INITIAL_LIST);
    } else {
      setFetchedSongs(filteredSongNames);
    }

    setAreNewSongsFetched(true);
  };

  const mixSongs = (prevDisplayedSongs) => {
    const newDisplayedSongs = [...prevDisplayedSongs];
    if (areNewSongsFetched) {
      const newFetchedSongs = [...fetchedSongs];

      if (newFetchedSongs.length > 0) {
        const firstSong = newFetchedSongs.shift();
        newDisplayedSongs.shift();
        newDisplayedSongs.push(firstSong);
        setFetchedSongs(newFetchedSongs);
        return newDisplayedSongs;
      }
      setAreNewSongsFetched(false);
    }

    const firstSong = newDisplayedSongs.shift();
    newDisplayedSongs.push(firstSong);
    return newDisplayedSongs;       
  };

  useEffect(() => {
    const interval = setInterval(() => {   
      setDisplayedSongs((prevDisplayedSongs) => mixSongs(prevDisplayedSongs));
    }, 1000);

    return () => clearInterval(interval);
  })
  
  return (
    <div className="App">
      <SearchInput onChange={handleInputChanged}/>
      <SongGrid songs={displayedSongs} />
    </div>
  )
}

export default App
