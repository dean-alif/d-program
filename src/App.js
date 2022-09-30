import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portofolio from "./components/Portofolio";
import Footer from "./components/Footer";



function App() {
  return (
  <> 

  <Particles 
    className="particles"
    params={{
      particles: {
        number: {
          value: 140,
          density: {
            enable: true,
            value_area:900
          }
        },
        shape: {
          type: "square",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      }
    }}
  />

    <Navbar />
    
    <Header />
    < AboutMe />
    <Services />
    <Portofolio />
    <Footer />
  </>
  );
}

export default App;
