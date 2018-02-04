import React from 'react';

const Navbar = () => (
<nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Clicky Game</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>Score<span className="current-score"></span></li>
        <li>High Score<span className="high-score"></span></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;