import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = ({search, setSearch}) => {
  return (
    <div className='search'>
        <h2><FaSearch /> Pesquisar: </h2>
        
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Digite para pesquisar...'/>
      
    </div>
  )
}

export default Search
