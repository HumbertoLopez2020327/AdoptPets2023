import React, { useState, useEffect, useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import  "../assets/styles/Navbar.css"
import { Link, NavLink,useNavigate } from "react-router-dom";
export const Navbar=()=>{
    const logout = (e)=>{
        e. preventDefault() 
        localStorage.removeItem("token")
        navigate("/login");
    }

    const navRef = useRef();
    const navigate = useNavigate();


    const showNavbar = ()=>{
         navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header className="Header1">
            <h3 className="NavBar"> Logo</h3>
            <nav className="NavBar" ref={navRef}>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/solicitud"
                    >
                        Solicitud
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/HomePage"
                    >
                        Home
                </NavLink>
             
                <NavLink
                className=  { ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/adopcion"
                    >
                      Adopciones
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/contact"
                    >
                        Contact Us
                </NavLink>
                <NavLink
                className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/comentario"
                    >
                        Comentarios
                </NavLink>
                <NavLink
                    onClick={(e) => logout(e)}
                    >
                        logout
                </NavLink>
                <button className="nav-btn  nav-close-btn" onClick={showNavbar} >
                   <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

