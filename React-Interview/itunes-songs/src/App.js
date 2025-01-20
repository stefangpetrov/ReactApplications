import { useEffect, useState } from 'react'
import './App.css'

const INITIAL_LIST = ['A', 'B', 'C', 'D', 'E'];

function App() {
  const [displayedSongs, setDisplayedSongs] = useState(INITIAL_LIST);
  const [fetchedSongs, setFetchedSongs] = useState([]);
  const [areNewSongsFetched, setAreNewSongsFetched] = useState(false);

  const handleInputChanged = async (event) => {
    const url = `/search?term=${encodeURIComponent(event.target.value)}`;
    try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch songs: ${response.statusText}`);
    }

    const data = await response.json();

    const filteredSongNames = (data.results)
      .map((item) => item.trackName)
      .sort()
      .slice(0, 5);

    if (filteredSongNames.length === 0) {
      setFetchedSongs(INITIAL_LIST);
    } else {
      setFetchedSongs(filteredSongNames);
    }

    setAreNewSongsFetched(true);
  } catch (error) {
    console.error("Error fetching songs:", error.message);
    return [];
  }
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
        
  }
  
  useEffect(() => {
    const interval = setInterval(() => {   
      setDisplayedSongs((prevDisplayedSongs) => mixSongs(prevDisplayedSongs));
    }, 1000);

    return () => clearInterval(interval);
  })
  
  return (
    <div className="App">
      <input onChange={handleInputChanged} type="text" placeholder="Search band" />
      <div className="grid">
        {displayedSongs.map((item, index) => (
          <div key={`${item}-${index}`} className="grid-item"><p>{item}</p></div>
        ))}
      </div>
    </div>
  )
}

export default App
