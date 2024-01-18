import React from 'react'

const Search = () => {
  return (
    <div className="search">
    <div className="searchForm">
    <input type='text' placeholder='Find a User' />   
    </div>
    <div className="userChat">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvj2fMzmOAbR5-fureGVf_eTERee61iXhbW8hQ8rvyw&s" alt="" />
      <div className="userChatInfo">
      <span>Vignesh</span>
      </div>
    </div>  
    </div>
  )
}

export default Search
