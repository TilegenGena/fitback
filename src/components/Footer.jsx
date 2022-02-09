import React from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";



const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <LinkedInIcon />
        <TwitterIcon />
        <PinterestIcon />
        <FacebookIcon />
      </div>
      <Link style={{textDecoration:"none"}} to="/fitbacks"> 
        <Button size='small' color="primary" variant="contained">All messages</Button> 
        </Link>

    </div>
  );
};

export default Footer;
