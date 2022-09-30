import React from "react";
import Typed from "react-typed";



const Header = () => {
  return (
    <div id="home" className="header-wrapper">
        <div className="main-info">
            <h1>We are solution for your IT project</h1>
            <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Dekstop Application Development"]}
                typeSpeed={60}
                backSpeed={80}
                loop
            />

            <a href="mailto:info.dprogram@gmail.com" className="btn-main-offer">Contact Us</a>
        </div>
    </div>
  )
}

export default Header