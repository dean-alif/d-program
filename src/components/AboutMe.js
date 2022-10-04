import React from "react";
import author from "../Logo D'PROGRAM.png";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5"> 
                        <img className="profile-img" src={author} alt="about me"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Us</h1>
                    <p className="about-text">
                    We are a teamwork with many experience backgrounds will provide solutions for our partner about simple working environment system. <br></br>

                    System Information was needed by Company to reach the goals by simple ways with accurate informationand and safety. <br></br>

                    Our Mission is : <b>"What You Say is What You Get"</b>  

                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;