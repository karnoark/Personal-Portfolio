import React from 'react';
//import { Instagram, Facebook, Twitter } from '@mui/icons-material';
//import LinedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <p>Instagram Icon</p>
        <p>Twitter Icon</p>
        <p>Facebook Icon</p>
        <p>LinkedIn Icon</p>
        </div>
        <p> &copy; 2022 mayuresh.com</p>
    </div>
  );
}

export default Footer;