import { useState, useEffect } from 'react';
import './Header.css';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="container header-container">
        <div className="header-logo">
          <a href="#home" className="logo-brand-group">
            <img src="/images/addprint_logo.svg" alt="ADDPRINT Marking Systems" className="header-logo-addprint" />
            <img src="/images/trotec_logo.svg" alt="Trotec Laser" className="header-logo-trotec" />
          </a>
        </div>
        
        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          
          <div className="header-mobile-cta">
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
              <span>Talk to an Expert</span>
              <span className="btn-arrow-circle">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </nav>
        
        <div className="header-cta desktop-only">
          <a href="#contact" className="btn btn-primary">
            <span>Talk to an Expert</span>
            <span className="btn-arrow-circle">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
