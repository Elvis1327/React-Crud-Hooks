import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="header">
            <h1>Bienvenido</h1>
            <nav className="navbar">
                <ul className="navbar-ul"> className="links"
                    <li className="navbar-li">
                        <Link className="links" to="/create">Create</Link>
                    </li>
                    <li className="navbar-li">
                        <Link className="links" to="/manage">Manage</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};



