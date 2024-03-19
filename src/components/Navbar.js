import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import Button from '@mui/material/Button';


function Navbar() {
  
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  },[location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
          <button></button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
};

export default Navbar;