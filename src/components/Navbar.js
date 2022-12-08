import React from "react";
import { IconButton } from "@mui/material";
import logo from "../assets/images/logo.jpg";

import HelpIcon from "@mui/icons-material/Help";

import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="container Navbar">
      <img src={logo}></img>

      <div className="menu-container">
        <div className="menu">
          <p className="header">Chuyên khoa</p>
          <p className="desc">Tìm bác sĩ theo chuyên khoa</p>
        </div>

        <div className="menu">
          <p className="header">Chuyên khoa</p>
          <p className="desc">Tìm bác sĩ theo chuyên khoa</p>
        </div>

        <div className="menu">
          <p className="header">Chuyên khoa</p>
          <p className="desc">Tìm bác sĩ theo chuyên khoa</p>
        </div>

        <div className="menu">
          <p className="header">Chuyên khoa</p>
          <p className="desc">Tìm bác sĩ theo chuyên khoa</p>
        </div>
      </div>

      <div className="right-content">
        <div>
          <HelpIcon color="primary" /> <span>Hỗ trợ</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
