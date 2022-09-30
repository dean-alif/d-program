import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
        <h1 className="py-5">OUR SERVICES</h1>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <div className="box">
                                <div className="circle"> 
                                    <FontAwesomeIcon className="icon" icon={faFigma} size="2x"/>
                                </div>
                            <h3>Web Design</h3> 
                            <p>We approach every project as a team and always focus on results.</p>   
                        </div>    
                    </div> 

                    <div className="col">
                        <div className="box">
                            <div className="circle"> 
                                    <FontAwesomeIcon className="icon" icon={faCode} size="2x"/>
                            </div>
                        <h3>Web Development</h3>  
                            <p>Your website will be build with an new proven technologies.</p> 
                        </div>    
                    </div> 

                    <div className="col">
                        <div className="box">
                            <div className="circle"> 
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                            </div>
                        <h3>Dekstop App</h3>
                        <p>Your dekstop application will be build with an proven technologies.</p>   
                        </div>    
                    </div>                            
                </div>    
            </div>    
    </div>
  )
}

export default Services