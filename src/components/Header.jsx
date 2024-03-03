import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <ul>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}