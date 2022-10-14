import React from "react";
import "../styles/homepage.css";

import Navbar from "../components/Navbar";

import homepageImage from "../assets/images/homepage.jpg";

function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div
        class="home-header-banner"
        style={{ backgroundImage: `url(${homepageImage})` }}
      >
        <div className="content-up">
          <div className="title1">NỀN TẢNG Y TẾ</div>
        </div>

        <div class="search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Tìm chuyên khoa" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
