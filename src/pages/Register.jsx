import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Choks Chat</span>
        <span className="title">Register</span>
        <form >
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
          <img src={Add} alt="adding avatar" />
          <span>Upload avatar</span>
          </label>
          <button >Sign up</button>
         
        </form>
        <p>
          You do have an account? Login
        </p>
      </div>
    </div>
  )
}

export default Register
