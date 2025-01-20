import {React, useState} from 'react'

function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsIediting] = useState(false)
    function handleEditClick() {
        setIsIediting((editing) => !editing)
    
    }
    function handlePlayerNameChange(event){
        setPlayerName(event.target.value)
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input onChange={handlePlayerNameChange} type='text' required value={playerName}/>
}
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

export default Player