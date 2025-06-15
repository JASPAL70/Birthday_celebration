const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <p>Made with ❤️ for your special day</p>
          <p>From ........</p>
          <p>© {new Date().getFullYear()} Birthday Celebration</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;