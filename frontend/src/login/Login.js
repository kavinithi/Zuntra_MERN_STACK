import React,{useState} from 'react';
import './Login.css';
// import './login/Login.css'
import { useNavigate } from "react-router-dom";
// import Shopping from "../assets/Images/Shopping.jpg"
import axios from 'axios';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login(){
    const navigate = useNavigate();

    const [username,setusername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [showPassword, setShowPassword] = useState(false);




const handleSubmit= async(e)=>{
   try {
      e.preventDefault();
       if(!username || !password){
            setError("All fields are required");
            return;
        }
    const res=await axios.post("http://localhost:5000/login",{
        username,
        password
    })
    console.log(res.data);
    
    navigate("/home")
   } catch (error) {
    console.log("error");
    
   }
}



    return(
        <>
        <div style={styles.wrapper}>
  

  <div style={styles.loginSection}>
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            value={username}
            type='email'
            placeholder='Enter your email id'
            onChange={(e) => setusername(e.target.value)}
            // required
          />
        </div>
        <div className="form-group">
  <label>Password</label>

  <div style={styles.passwordContainer}>

    <input
      value={password}
        type={showPassword ? "password" : "text"}
      placeholder='Enter your password'
      onChange={(e) => setPassword(e.target.value)}
      style={styles.passwordInput}
    />

    <span
      onClick={() => setShowPassword(!showPassword)}
      style={styles.eyeIcon}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>

  </div>
</div>
        <button type='submit'>Login</button>
      </form>
       {/* Register Link */}
        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
    </div>
  </div>
</div>

        </>
    )

}

export default Login;
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
    passwordContainer: {
  position: "relative",
  display: "flex",
  alignItems: "center"
},

passwordInput: {
  width: "100%",
  padding: "10px",
  paddingRight: "40px"
},

eyeIcon: {
  position: "absolute",
  right: "10px",
  cursor: "pointer",
  color: "#555"
}
  };
  

