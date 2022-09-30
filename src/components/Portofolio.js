import React from "react";
import berirezeki from "../images/berirezeki.netlify.app.png";
import prediksihargapasar from "../images/prediksi-harga-pasar.herokuapp.com.png";
import sistempakar from "../images/Sistem Pakar Diagnosa.com.png";
import dekstopapp from "../images/dekstop-app.png";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus} from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

export const Portofolio = () => {

  //berirezeki

  const openPopupboxBeriRezeki = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={berirezeki} alt="Crowdfunding Web App Project" />
        <p>A crowdfunding web application developed as a means for people who want to share and help others in need.</p>
        <b>Live Preview :</b> <a className="hyper-link" onClick={() => window.open("https://berirezeki.netlify.app/")}>https://berirezeki.netlify.app/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBeriRezeki = {
    titleBar: {
      enable: true,
      text: "Project & Portofolio Detail"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // prediksihargapasar
  const openPopupboxPrediksiHargaPasar = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={prediksihargapasar} alt="Predict Market Price of Rice Web" />
        <p>A website developed to help predict the market price of rice in the future.</p>
        <b>Live Preview :</b> <a className="hyper-link" onClick={() => window.open("https://prediksi-harga-pasar.herokuapp.com/")}>https://prediksi-harga-pasar.herokuapp.com/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPrediksiHargaPasar = {
    titleBar: {
      enable: true,
      text: "Project & Portofolio Detail"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // sistempakar
  const openPopupboxSistemPakar = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={sistempakar} alt="Sistem Pakar Web" />
        <p>A website developed to help diagnose symptoms of psychological disorders from the complaints they feel.</p>
        <b>Live Preview :</b> <a className="hyper-link" onClick={() => window.open("https://hydropathical-starb.000webhostapp.com/dashboard/dashboard.php")}>https://hydropathical-starb.000webhostapp.com/dashboard/dashboard.php</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigSistemPakar = {
    titleBar: {
      enable: true,
      text: "Project & Portofolio Detail"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // sistempakar
  const openPopupboxDekstopApp = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={dekstopapp} alt="Dekstop Application" />
        <p>Our  clients using our Desktop Application for their Bussines Process, e.g. Textile Trading, Car Towing Services, Textile Fabric Retailer, Texitle Manufacture. Start from Procurements, Sales, Processing and Finance.</p>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigDekstopApp = {
    titleBar: {
      enable: true,
      text: "Project & Portofolio Detail"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portofolio" className="portofolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">OUR PROJECT AND PORTOFOLIO</h1>   
            <div className="image-box-wrapper row align-items-start">
                <div className="col">
                  <div className="portofolio-image-box" onClick={openPopupboxBeriRezeki}> 
                      <img className="portofolio-image" src={berirezeki} alt="Crowdfunding Web App Project" />
                      <div className="overflow"></div> 
                      <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} />   
                  </div>
                </div>

                <div className="col">
                  <div className="portofolio-image-box" onClick={openPopupboxPrediksiHargaPasar}> 
                      <img className="portofolio-image" src={prediksihargapasar} alt="Predict Market Price of Rice Web" />
                      <div className="overflow"></div>    
                      <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} />
                  </div>
                </div>

                <div className="col">
                  <div className="portofolio-image-box" onClick={openPopupboxSistemPakar}> 
                      <img className="portofolio-image" src={sistempakar} alt="Sistem Pakar Web" /> 
                      <div className="overflow"></div>  
                      <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} /> 
                  </div> 
                </div>

                <div className="col">
                  <div className="portofolio-image-box" onClick={openPopupboxDekstopApp}> 
                      <img className="portofolio-image" src={dekstopapp} alt="Sistem Pakar Web" /> 
                      <div className="overflow"></div>  
                      <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} /> 
                  </div> 
                </div>

            </div> 
        </div>
        <PopupboxContainer {...popupboxConfigBeriRezeki} />
        <PopupboxContainer {...popupboxConfigPrediksiHargaPasar} />
        <PopupboxContainer {...popupboxConfigSistemPakar} />
        <PopupboxContainer {...popupboxConfigDekstopApp} />
    </div>
  )
}

export default Portofolio;
