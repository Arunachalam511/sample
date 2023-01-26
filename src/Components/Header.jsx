import React from "react";
import './header.css';
import Banner from "../assests/images/Asset_16@4x.png";
export default function Header ()
{
    return( <header>
        <nav>
          <ul>
            <li>
              <img src={Banner} width="200" height="50" />
            </li>
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Reservations</li>
            <li className="nav-item">Order Online</li>
            <li className="nav-item">Login</li>
          </ul>
        </nav>
      </header>)
}