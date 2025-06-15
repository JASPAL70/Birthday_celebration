import { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import { GiKitchenKnives } from 'react-icons/gi';



import cakeCuttingAnimation from '../assets/Animation - 1748423588629.json';
import celebrationSound from '../assets/happy-birthday-254480.mp3';
import cakeImage from '../assets/photo-1606983340126-99ab4feaa64a.jpeg';

const CakeCutting = ({ id }) => {
  const [knifeSelected, setKnifeSelected] = useState(false);
  const [isCut, setIsCut] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const audioRef = useRef(null);
  const lottieRef = useRef(null);

  const handleKnifeClick = () => {
    if (!isCut) setKnifeSelected(true);
  };

  const handleCakeClick = () => {
    if (knifeSelected && !isCut) {
      setIsCut(true);
      setKnifeSelected(false);
      audioRef.current?.play();
      lottieRef.current?.play();
    }
  };

  return (
    <section id={id} className="cake-section" style={styles.section}>
      <div style={styles.container}>
        
          <h2
      style={styles.heading}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
    >
      🎂 Virtual Cake Cutting 🎉
    </h2>


         <div
          onClick={handleCakeClick}
          style={{
            ...styles.cakeContainer,
            boxShadow: knifeSelected && !isCut ? '0 0 25pxrgb(243, 18, 18), inset 0 0 15pxrgb(208, 96, 98)' : '0 0 10px rgba(0,0,0,0.2)',
            transform: knifeSelected ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          {!animationEnded ? (
            <Lottie
              lottieRef={lottieRef}
              animationData={cakeCuttingAnimation}
              loop={false}
              autoplay={false}
              onComplete={() => setAnimationEnded(true)}
              style={{ width: '100%', height: '100%', borderRadius: '20px' }}
            />
          ) : (
            <img
              src={cakeImage}
              alt="Cake"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />
          )}

          {!isCut && (
            <GiKitchenKnives
              onClick={(e) => {
                e.stopPropagation();
                handleKnifeClick();
              }}
              style={{
                ...styles.knifeIcon,
                color: knifeSelected ? '#f39c12' : '#555',
                animation: knifeSelected ? 'glow 1s infinite alternate' : 'none',
              }}
            />
          )}
        </div>

        <p style={styles.instruction}>
          {isCut
            ? '🎉 Happy Birthday.......Yay! Cake is cut! 🍰'
            : knifeSelected
            ? 'Now click the cake to cut it!'
            : 'Click the knife first, then click the cake to cut!'}
        </p>

        <audio ref={audioRef} src={celebrationSound} preload="auto" />
      </div>

      {/* Glow Animation */}
      <style>{`
        @keyframes glow {
          from {
            text-shadow: 0 0 5px #f39c12, 0 0 10px #f39c12;
          }
          to {
            text-shadow: 0 0 15px #f39c12, 0 0 25px #f39c12;
          }
        }
      `}</style>
    </section>
  );
};

export default CakeCutting;

const styles = {
  section: {
     background: '#f4b8b8',
    padding: '50px 20px',
    textAlign: 'center',
    minHeight: '100vh',
  },
  container: {
    maxWidth: 600,
    margin: '0 auto',
  },
  heading: {
    width: '393px',
    height: '100px',
    background: 'linear-gradient(to right, #ffb6c1, #ffe0e9)',
    color: '#d0006f',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '60px auto 40px',
    boxShadow: '0 10px 25px rgba(255, 105, 180, 0.3)',
    transition: 'transform 0.3s ease',
    fontFamily: "'Dancing Script', cursive",
    cursor: 'pointer' // Needed to show it's interactive when hovered
  },
  cakeContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: 400,
    height: 400,
    margin: 'auto',
    borderRadius: 20,
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  knifeIcon: {
    position: 'absolute',
    top: '50%',
    left: '15%',
    fontSize: 70,
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '50%',
    padding: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
  },
  instruction: {
    marginTop: 30,
    fontSize: 20,
    color: '#a33f3f',
    fontWeight: 500,
  },
};



