import Places from './Places.jsx';
import Error from './Error.jsx';
import { useState, useEffect, useCallback } from 'react';


export default function AvailablePlaces({ onSelectPlace }) {
  
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3000/placessssss');
        const resData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places')
        }

        setAvailablePlaces(resData.places);
      } catch(error) {
        setError(error);
      }
       
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message}/>
  }
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={false}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
