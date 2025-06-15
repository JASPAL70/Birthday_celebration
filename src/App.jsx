import { useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import CakeCutting from './components/CakeCutting';
import Wishes from './components/Wishes';
import PhotoGallery from './components/PhotoGallery';
import Letters from './components/Letters';
import Journey from './components/Journey';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('landing');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Landing scrollToSection={scrollToSection} />
      <CakeCutting id="cake" />
      <Wishes id="wishes" />
      <PhotoGallery id="gallery" />
      <Letters id="letters" />
      <Journey id="journey" />
      <Footer />
    </div>
  );
}

export default App;
