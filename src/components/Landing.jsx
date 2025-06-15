import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Landing = ({ scrollToSection }) => {
  useEffect(() => {
    // Confetti effect
    const confettiSettings = {
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    };
    confetti(confettiSettings);
    
    const interval = setInterval(() => {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="landing" className="landing-section">
      <div className="landing-background"></div>
      <div className="landing-content">
        <h1>Happy<br />Birthday ............</h1>
        <p className="subtitle">Celebrating ....th birthday for you</p>
        <button 
          onClick={() => scrollToSection('cake')} 
          className="btn"
        >
          Let's Celebrate
        </button>
      </div>
    </section>
  );
};

export default Landing;