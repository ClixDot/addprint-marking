import { useState, useEffect, useCallback } from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';

const SLIDES = [
  {
    image: '/images/01.jpg',
    tag: 'INDUSTRIAL LASER SYSTEMS',
    title: 'Precision That Makes Every',
    highlight: 'Mark Matter.',
    desc: 'Empowering businesses across the UAE with industry-leading laser engraving, high-speed cutting, and industrial marking technology.',
  },
  {
    image: '/images/02.jpg',
    tag: 'LASER CUTTING EXCELLENCE',
    title: 'Cut With Unmatched',
    highlight: 'Accuracy.',
    desc: 'Trotec laser cutters deliver flawless edges, consistent depth, and ultra-fine detail across every material — every single time.',
  },
  {
    image: '/images/03.jpg',
    tag: 'TROTEC AUTHORIZED PARTNER',
    title: 'World-Class Machines.',
    highlight: 'Local Expertise.',
    desc: 'As an authorized Trotec distributor in the UAE, ADDPRINT brings you world-class laser technology backed by dedicated on-site support.',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToSlide = useCallback((index: number, dir: 'next' | 'prev' = 'next') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setTimeout(() => {
      setActiveSlide(index);
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  const handleNext = useCallback(() => {
    const next = (activeSlide + 1) % SLIDES.length;
    goToSlide(next, 'next');
  }, [activeSlide, goToSlide]);

  const handlePrev = useCallback(() => {
    const prev = (activeSlide - 1 + SLIDES.length) % SLIDES.length;
    goToSlide(prev, 'prev');
  }, [activeSlide, goToSlide]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const slide = SLIDES[activeSlide];

  return (
    <section id="home" className="hero-workshop">
      {/* Background Image */}
      <img
        key={activeSlide}
        src={slide.image}
        alt={slide.title}
        className="hero-workshop-bg hero-video-bg"
      />
      <div className="hero-workshop-overlay" />

      {/* Slide Content */}
      <div className="container hero-workshop-container">
        <div className={`hero-workshop-content hero-content-animate ${isTransitioning ? 'fading' : ''}`}>
          <div className="hero-simple-tag">
            <span className="tag-dot" />
            <span>{slide.tag}</span>
          </div>

          <h1 className="hero-workshop-title">
            {slide.title}{' '}
            <span key={activeSlide} className="text-green-highlight">
              {slide.highlight}
              <svg className="hero-line-svg" viewBox="0 0 320 20" fill="none" preserveAspectRatio="none">
                <path
                  d="M 4,12 C 60,17 120,5 180,13 C 240,18 280,6 316,10"
                  stroke="var(--color-green)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hero-simple-desc">{slide.desc}</p>

          <div className="hero-workshop-cta">
            <a href="#products" className="btn hero-btn-main">
              <span>Explore Laser Machines</span>
              <span className="btn-arrow-circle">
                <ArrowRight size={14} />
              </span>
            </a>
            <a href="#contact" className="btn hero-btn-sec">
              <span>Talk to an Expert</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="hero-slider-controls">
        <div className="hero-slider-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(i, i > activeSlide ? 'next' : 'prev')}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="hero-progress-bar" key={activeSlide}>
        <div className="hero-progress-fill" />
      </div>
    </section>
  );
}
