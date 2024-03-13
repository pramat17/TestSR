import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Logo from '../images/logo.png';
import { FaHome, FaEnvelope, FaTasks, FaUserFriends } from 'react-icons/fa';
import {PiAddressBook} from "react-icons/pi";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={Logo} alt="Logo" className="logo-img"/>
            </div>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`nav-items ${isOpen ? 'open' : ''}`}>
                <NavLink to="amazon.com" activeClassName="active"><FaHome /> Accueil</NavLink>
                <NavLink to="Tasks" activeClassName="active"><FaTasks /> Missions</NavLink>
                <NavLink to="Suivi" activeClassName="active"><FaUserFriends /> Suivi</NavLink>
                <NavLink to="Messagerie" activeClassName="active"><FaEnvelope /> Messagerie</NavLink>
                <NavLink to="Contact" activeClassName="active"><PiAddressBook/>Contact</NavLink>
            </div>
            <button className="deconnexion">Déconnexion</button>
        </nav>
    );
};

export default NavBar;
