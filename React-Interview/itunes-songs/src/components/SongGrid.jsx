import React from 'react'
import './SongGrid.css';

function SongGrid({songs}) {
  return (
    <div className="grid">
        {songs.map((item, index) => (
        <div key={`${item}-${index}`} className="grid-item">
            <p>{item}</p>
        </div>
        ))}
    </div>
  )
}

export default SongGrid