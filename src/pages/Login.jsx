import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Choks Chat</span>
        <span className="title">LogIn!</span>
        <form >
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          
          <button >Sign In</button>
         
        </form>
        <p>
          You don't have an account? Register
        </p>
      </div>
    </div>
  )
}

export default Login
