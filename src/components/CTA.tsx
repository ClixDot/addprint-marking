import './CTA.css';
import { ArrowRight, Phone, MessageSquare, CheckCircle2, MapPin, Calendar } from 'lucide-react';

export default function CTA() {
  const steps = [
    {
      num: "01",
      title: "Select Application",
      desc: "Cutting, engraving, or industrial galvo marking"
    },
    {
      num: "02",
      title: "Free Sample Benchmark",
      desc: "Send your material for live speed & quality tests"
    },
    {
      num: "03",
      title: "Local UAE Delivery",
      desc: "Installation, training & 24/7 technical support"
    }
  ];

  return (
    <section className="section cta-luminous-section">
      <div className="container">
        <div className="cta-luminous-card">
          {/* Decorative Corner Lights & Pattern */}
          <div className="cta-pattern-overlay"></div>
          <div className="cta-glow-orb top-left"></div>
          <div className="cta-glow-orb bottom-right"></div>

          <div className="cta-luminous-inner">
            {/* Top Badge */}
            <div className="cta-top-badge">
              <span>EXPERIENCE CENTER SHARJAH • LIVE MACHINE DEMOS</span>
            </div>

            {/* Main Title & Subtitle */}
            <h2 className="cta-luminous-title">
              Experience Trotec Precision <br className="desktop-break" />
              <span className="text-highlight">Live in Real Time.</span>
            </h2>
            <p className="cta-luminous-subtitle">
              Bring your PDF files and materials to our showroom. Our Austrian-certified application specialists will run live benchmarks and help configure your ideal laser solution.
            </p>

            {/* 3-Step Process Ribbon */}
            <div className="cta-steps-ribbon">
              {steps.map((step, idx) => (
                <div key={idx} className="cta-step-card">
                  <div className="step-number-badge">{step.num}</div>
                  <div className="step-text-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons-container">
              <a href="#contact" className="btn cta-btn-dark">
                <Calendar size={16} />
                <span>Book Live Showroom Demo</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </a>

              <a 
                href="https://wa.me/971501234567" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn cta-btn-whatsapp"
              >
                <MessageSquare size={16} />
                <span>Chat with Laser Specialist</span>
              </a>

              <a href="tel:+97142985655" className="btn cta-btn-call">
                <Phone size={15} />
                <span>+971 4 2985655</span>
              </a>
            </div>

            {/* Bottom Perks & Location */}
            <div className="cta-bottom-perks">
              <span className="perk-item">
                <CheckCircle2 size={15} className="perk-icon" />
                <span>Official Austrian Technology</span>
              </span>
              <span className="perk-divider">•</span>
              <span className="perk-item">
                <CheckCircle2 size={15} className="perk-icon" />
                <span>UAE Local Spare Parts & Warranty</span>
              </span>
              <span className="perk-divider">•</span>
              <span className="perk-item">
                <MapPin size={15} className="perk-icon" />
                <span>Sharjah Ind. Area 13, UAE</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
