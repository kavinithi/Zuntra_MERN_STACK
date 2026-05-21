
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


import Home from "./home/Home";
import Register from './register/Register';
import Login from './login/Login';
import Details from './Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
   
        <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
           <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;