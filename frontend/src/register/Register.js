import React,{useState} from 'react';
import './Register.css';
import { useNavigate } from "react-router-dom";
// import Shopping from "../assets/Images/Shopping.jpg"
import { Link } from "react-router-dom";

import axios from 'axios';


function Register(){
    const navigate = useNavigate();

    const [username,setusername]=useState('');
    //  const [name,setname]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

   const handleSubmit = async (e) => {

  try {

    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/register",
      {
        
        username,
        password
      }
    );

    console.log(res.data);

    navigate("/");

  } catch (error) {

    console.log(error);

  }
};


    return(
      <>
  <div style={styles.wrapper}>
    <div style={styles.loginSection}>
      <div className="login-container">
        <h2>Register</h2>

        {error && <p className='error'>{error}</p>}

        <form onSubmit={handleSubmit}>
      
          <div className="form-group">
            <label>Email</label>
            <input
              value={username}
              type='email'
              placeholder='Enter your email id'
              onChange={(e) => setusername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              value={password}
              type='password'
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='submit'>Register</button>
        </form>

        {/* Register Link */}
        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  </div>
</>
    )

}

export default Register;
const styles = {
    wrapper: {
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    imageSection: {
      flex: 1,
      height: '100%',
    },
    loginSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };
  

