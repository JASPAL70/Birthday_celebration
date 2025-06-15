import { useState, useEffect } from 'react';
import { FaBirthdayCake, FaGift, FaImages, FaEnvelope, FaRoute } from 'react-icons/fa';

const Navbar = ({ scrollToSection, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'landing',  label: 'Home' },
    { id: 'cake', icon: <FaBirthdayCake />, label: 'Cake' },
    { id: 'wishes', icon: <FaGift />, label: 'Wishes' },
    { id: 'gallery', icon: <FaImages />, label: 'Gallery' },
    { id: 'letters', icon: <FaEnvelope />, label: 'Letters' },
    { id: 'journey', icon: <FaRoute />, label: 'Journey' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div 
          className="navbar-logo" 
          onClick={() => scrollToSection('landing')}
        >
          <FaBirthdayCake /> Birthday🎂
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;