const fetchSongs = async (term) => {
    const URL = `/search?term=${encodeURIComponent(term)}`;
     try {
        const response = await fetch(URL);
    
        if (!response.ok) {
          throw new Error(`Failed to fetch songs: ${response.statusText}`);
        }
    
        const data = await response.json();
    
        const filteredSongNames = (data.results)
          .map((item) => item.trackName)
          .sort()
          .slice(0, 5);
    
        return filteredSongNames;

    } catch (error) {
        console.error("Error fetching songs:", error.message);
        return [];
    }  
       
}

export default fetchSongs;