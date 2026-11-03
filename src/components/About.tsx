import { useState, useEffect } from 'react';
import './About.css';
import { Award, ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About() {
  const aboutImages = [
    { src: '/images/about_01.jpg', title: 'Laser Engraving Demonstration', caption: 'High-precision marking and personalization' },
    { src: '/images/about_02.jpg', title: 'Laser Cutting Applications', caption: 'Clean edge processing across diverse materials' },
    { src: '/images/about_03.jpg', title: 'Industrial Marking Systems', caption: 'Permanent traceability for engineering parts' },
    { src: '/images/about_04.jpg', title: 'Trotec Demonstration Facility', caption: 'Hands-on showroom and technical workshop in Dubai' }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % aboutImages.length);
  };

  return (
    <section id="about" className="section section-light about">
      <div className="container">
        <div className="about-grid">
          {/* Visual Showcase Column */}
          <div className="about-image-column">
            <div className="about-slider-card">
              {/* Main Image Frame */}
              <div className="about-main-image-wrapper">
                <img 
                  key={activeSlide}
                  src={aboutImages[activeSlide].src} 
                  alt={aboutImages[activeSlide].title} 
                  className="about-active-image"
                />
                
                {/* Floating Experience Badge */}
                <div className="about-floating-experience-badge">
                  <Award size={20} className="badge-icon" />
                  <div>
                    <span className="badge-years">1982 – 2026</span>
                    <span className="badge-title">40+ Years in UAE</span>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="about-slider-nav">
                  <button onClick={handlePrev} className="slider-arrow-btn" aria-label="Previous image">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={handleNext} className="slider-arrow-btn" aria-label="Next image">
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="about-image-caption-bar">
                  <strong>{aboutImages[activeSlide].title}</strong>
                  <span>{aboutImages[activeSlide].caption}</span>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="about-thumbnails-row">
                {aboutImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`about-thumb-btn ${activeSlide === idx ? 'active' : ''}`}
                    aria-label={`View ${img.title}`}
                  >
                    <img src={img.src} alt={img.title} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="about-content">
            <div className="about-label-badge">
              <ShieldCheck size={16} className="text-green" />
              <span>ABOUT ADDPRINT</span>
            </div>
            <h2>Built on Experience. Driven by Precision.</h2>
            <p className="about-lead">
              ADDPRINT MARKING SYSTEMS TRADING LLC — ADDPRINT has been serving customers with excellence since 1982. With over four decades of industry expertise, we are a leading provider of laser engraving, cutting machines, rubber stamps, and industrial marking solutions across the UAE.
            </p>
            <p>
              We proudly partner with leading organizations across the region, including oil and gas corporations, government ministries, semi-government authorities, banks, and major international manufacturing entities.
            </p>
            <p>
              As authorized distributors for world-class brands like Trotec, our mission is to empower your business with unmatched cutting precision, robust reliability, and dedicated local on-site support.
            </p>
            <div className="about-cta">
              <a href="#contact" className="btn btn-secondary">
                <span>Talk to Our Specialists</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
