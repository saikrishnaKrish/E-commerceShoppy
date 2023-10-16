import React from 'react'

const SearchBar = () => {
    const [searchStr,setSearchStr]=useState("")
  return (
    <div>
        <label> Search Products</label>
        <input type='text' value={searchStr} placeholder='Search Products'/>
    </div>
  )
}

export default SearchBar