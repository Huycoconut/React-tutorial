import './Header.css'; 
import React from 'react';

let time = new Date().toLocaleTimeString();
let today = new Date().toLocaleDateString();
const welcom = ["Chào mừng đến React"];



function Header() {
    return (
      <div className="header">
        <h1 className="header-title">{welcom[0]}</h1>
        <p className="header-info">
          Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại:{" "}
          <span className="header-time">{time}</span>
        </p>
      </div>
    );
  }
  
export default Header;
