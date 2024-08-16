import React from "react";
import { assets } from "../assest/assest";
import "./navbar.css";

function Navbar() {
  const name = "Mratyunjay";
  return (
    <div>
      <nav>
        <div class="navBar">
          <div class="avtar">
            <img src={assets.avtar} alt="avtar" />
          </div>
          <h4>Hi {name}</h4>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
