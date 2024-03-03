import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className='navbar'>
                <Link to="/" className='home-link'>Home</Link>
                <ul>
                    <li>
                        <Link to="/projects" className='proj-link'>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className='contact-link'>Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className='about-link'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}