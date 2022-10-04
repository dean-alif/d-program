import React from "react";
import {Link} from "react-scroll";
import Logo from "../PROGRAM-removebg-preview.png";
// REACT FONTAWESOME
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <div className="container">
                    <Link to="home" className="navbar-brand" id="logo" href="/"><img className="portofolio-image-logo" src={Logo} alt="Logo D'Program" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                        </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="home" offset={-110} className="nav-link" href="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" offset={-110} className="nav-link" href="/">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services" offset={-110} className="nav-link" href="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="portofolio" offset={-110} className="nav-link" href="/">Portofolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="footer" offset={-110} className="nav-link" href="/">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar