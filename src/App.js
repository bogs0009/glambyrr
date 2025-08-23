import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ExtendedPortfolio from './pages/ExtendedPortfolio';
import BehindTheScenes from './pages/BehindTheScenes';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div id="home">
              <HeroSlider />
              <ServicesSection />
              <PortfolioSection />
              <About />
              <Contacts />
              <Footer />
            </div>
          }
        />
        <Route path="/portfolio" element={<ExtendedPortfolio />} />
        <Route path="/videos" element={<BehindTheScenes />} /> 
      </Routes>
    </Router>
  );
}

export default App;

