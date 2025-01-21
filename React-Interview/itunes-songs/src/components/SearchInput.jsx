import React from 'react'
import './SearchInput.css';

function SearchInput({onChange}) {
  return (
    <input
        onChange={onChange}
        type="text"
        placeholder="Search band"
    />
  )
}

export default SearchInput