import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;
   
    try {
     await signInWithEmailAndPassword(auth, email, password);
     navigate('/');
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Choks Chat</span>
        <span className="title">LogIn!</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          
          <button >Sign In</button>
          {err && <span className="err">Something went wrong!</span>}
         
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
