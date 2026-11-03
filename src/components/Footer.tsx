import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo-card">
              <img src="/images/addprint_logo.svg" alt="ADDPRINT" className="footer-logo-img" />
              <img src="/images/trotec_logo.svg" alt="Trotec" className="footer-logo-trotec-img" />
            </a>
            <p className="footer-desc">
              ADDPRINT MARKING SYSTEMS TRADING LLC. Advanced laser engraving, cutting and industrial marking solutions.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#products">Products</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>AL KHUBAISI. DEIRA DUBAI</p>
            <p>Phone: +971 4 2985655</p>
            <p>Email: trotec@addprint.net</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Copyright &copy; {currentYear} ADDPRINT. Powered by{' '}
            <a 
              href="https://clixdot.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--color-green)', textDecoration: 'none', fontWeight: '600' }}
            >
              Clixdot
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
