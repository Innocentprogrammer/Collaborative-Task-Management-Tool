import React from "react";
import { assets } from "../assest/assest";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const name = "Mratyunjay";
  return (
    <div>
      <nav>
        <div class="navBar">
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
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
