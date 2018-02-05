import React from 'react';

const Navbar = props => (
    <nav className="light-blue lighten-1">
        <div className="nav-wrapper lc-nav">
            <span className="brand-logo">Clicky Game</span>
            <ul id="nav-mobile" className="right">
                <li>Score<span className="score current-score">{props.score}</span></li>
                <li>High Score<span className="score high-score">0</span></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;