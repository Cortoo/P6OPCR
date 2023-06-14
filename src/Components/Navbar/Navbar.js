import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import logo from "./../../assets/logo.jpg"

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
        <div className='navbar_logo'>
        
            <img src={logo} alt='Logo de Kasa'/>
        
        </div>
<div className = "navbar_elements">
    <Link to="/">
        <div>Accueil</div>
    </Link>
<Link to="about">
    <div> A propos</div>
</Link >
</div>
       </nav>
        </div>
    );
};

export default Navbar;



