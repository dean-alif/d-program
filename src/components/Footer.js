import React from "react";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Get In Touch!</p>
                        </div>

                        <div className="d-flex">
                            <a href="https://wa.me/6281312453774">WhatsApp : +62 813-1245-3774</a>
                        </div>

                        <div className="d-flex">
                            <a href="mailto:info.dprogram@gmail.com">Email : info.dprogram@gmail.com</a>
                        </div>

                        
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <p className="copyright pt-4 text-center"> Copyright &copy; 
                        {new Date().getFullYear()}&nbsp;All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;