import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Choks chat</span>
    <div className="user">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvj2fMzmOAbR5-fureGVf_eTERee61iXhbW8hQ8rvyw&s" alt="" />
    <span>Chokka</span>
    <button>logout</button>
    </div>
      
    </div>
  )
}

export default Navbar
