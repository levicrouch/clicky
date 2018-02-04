import React from 'react';

const Navbar = () => (
    <div className="row">
        <div className="navbar-fixed col l12">
            <nav>
                <div className="nav-wrapper lc-nav">
                    <a href="#" className="brand-logo">Clicky Game</a>
                    <ul id="nav-mobile" className="right">
                        <li>Score<span className="current-score"></span></li>
                        <li>High Score<span className="high-score"></span></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
);

export default Navbar;