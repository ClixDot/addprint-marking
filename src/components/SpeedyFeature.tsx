import { useState, useEffect, useRef } from 'react';
import './SpeedyFeature.css';
import { ArrowRight, Zap, Shield, Cpu, Gauge, Layers, Check } from 'lucide-react';

export default function SpeedyFeature() {
  const models = [
    {
      id: "s400",
      name: "Speedy 400",
      badge: "Flagship Production System",
      area: "1016 × 610 mm",
      areaInch: "40.0 × 24.0 in",
      power: "80, 120 Watts",
      speed: "4.3 m/s (170 in/s)",
      acceleration: "5g acceleration",
      laser: "CO₂ Laser",
      software: "Run on Ruby® 3.0",
      image: "/images/speedy_workshop_studio.png",
      description: "Engineered for maximum throughput and peak production environments requiring uninterrupted 24/7 reliability.",
      features: [
        "OptiMotion™ path planning (8x faster curve cutting)",
        "InPack Technology™ lifetime dust protection for optics",
        "SonarFocus™ digital ultrasonic auto-focus"
      ]
    },
    {
      id: "s360",
      name: "Speedy 360",
      badge: "Ergonomic Powerhouse",
      area: "813 × 508 mm",
      areaInch: "32.0 × 20.0 in",
      power: "80, 120 Watts",
      speed: "3.55 m/s (140 in/s)",
      acceleration: "5g acceleration",
      laser: "CO₂ Laser",
      software: "Run on Ruby® 3.0",
      image: "/images/hero_speedy_flexx_lineup.png",
      description: "Optimal work area-to-footprint ratio with front-loading bed accessibility for effortless material handling.",
      features: [
        "Closed-loop DC brushless servomotors",
        "Atmos exhaust integration with active filter feedback",
        "Multifunctional table concept with vacuum grid",
        "LED interior illuminated workspace"
      ]
    },
    {
      id: "s300",
      name: "Speedy 300",
      badge: "The Global Benchmark",
      area: "726 × 432 mm",
      areaInch: "29.0 × 17.0 in",
      power: "50, 80, 120 Watts",
      speed: "3.55 m/s (140 in/s)",
      acceleration: "5g acceleration",
      laser: "CO₂ Laser",
      software: "Run on Ruby® 3.0",
      image: "/images/ruby_laser_software_operator_hd.jpg",
      description: "The most trusted mid-format laser machine worldwide for custom awards, signage, architectural models and gifts.",
      features: [
        "CeramiCore® all-ceramic resonator design",
        "Rotary attachment ready for cylindrical engraving",
        "Air assist pump with automatic software modulation",
        "Precise laser pointer for fast job positioning"
      ]
    },
    {
      id: "s100_co2",
      name: "Speedy 100 CO₂",
      badge: "Compact Professional",
      area: "610 × 305 mm",
      areaInch: "24.0 × 12.0 in",
      power: "30, 50, 80 Watts",
      speed: "2.8 m/s (110 in/s)",
      acceleration: "4g acceleration",
      laser: "CO₂ Laser",
      software: "Run on Ruby® 3.0",
      image: "/images/speedy_100.png",
      description: "Compact industrial desktop footprint delivering identical commercial cutting precision as large format models.",
      features: [
        "Space-saving form factor fits through standard doorways",
        "Class 2 safety enclosure with safety interlocks",
        "High-definition engraving up to 1000 DPI",
        "Low maintenance requirement with zero consumable cost"
      ]
    },
    {
      id: "s100_diode",
      name: "Speedy 100 Diode",
      badge: "Specialty Diode System",
      area: "610 × 305 mm",
      areaInch: "24.0 × 12.0 in",
      power: "40 Watts",
      speed: "2.8 m/s (110 in/s)",
      acceleration: "4g acceleration",
      laser: "Cross Diode Laser",
      software: "Run on Ruby® 3.0",
      image: "/images/speedy_100.png",
      description: "Compact desktop system featuring a cross diode laser for specialized marking and engraving applications.",
      features: [
        "Space-saving form factor fits through standard doorways",
        "Class 2 safety enclosure with safety interlocks",
        "Specialized diode laser source",
        "Low maintenance requirement with zero consumable cost"
      ]
    },
    {
      id: "s50",
      name: "Speedy 50",
      badge: "Entry Level Professional",
      area: "457 × 305 mm",
      areaInch: "18.0 × 12.0 in",
      power: "30 Watts",
      speed: "2.0 m/s (78 in/s)",
      acceleration: "2g acceleration",
      laser: "CO₂ Laser",
      software: "Run on Ruby® 3.0",
      image: "/images/speedy_100.png",
      description: "The perfect entry point into professional laser engraving, offering Trotec quality in the most compact package.",
      features: [
        "Ultra-compact desktop design",
        "Class 2 safety enclosure with safety interlocks",
        "High-definition engraving up to 1000 DPI",
        "Seamless Ruby® software integration"
      ]
    }
  ];

  const [activeModel, setActiveModel] = useState(models[0]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0
  });

  const updateIndicator = () => {
    const activeIndex = models.findIndex(m => m.id === activeModel.id);
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateIndicator();
    const t = setTimeout(updateIndicator, 50);
    return () => clearTimeout(t);
  }, [activeModel]);

  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeModel]);

  return (
    <section className="section speedy-bento-section">
      <div className="container">
        {/* Section Header */}
        <div className="speedy-bento-header text-center">
          <div className="speedy-pill-tag">
            <span>AUSTRIAN LASER ENGINEERING</span>
          </div>
          <h2>The Speedy Series — Engineered for Peak Production</h2>
          <p>
            Faster production. Smarter workflows. Unmatched cutting edge quality.
          </p>

          {/* Model Switcher Segmented Bar */}
          <div className="speedy-segmented-bar">
            <div 
              className="speedy-pill-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity
              }}
            />
            {models.map((m, idx) => (
              <button
                key={m.id}
                ref={el => { tabRefs.current[idx] = el; }}
                onClick={() => setActiveModel(m)}
                className={`speedy-segment-btn ${activeModel.id === m.id ? 'active' : ''}`}
              >
                <span className="segment-title">{m.name}</span>
                <span className="segment-sub">{m.areaInch.split(' ')[0]} in</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Showcase Grid */}
        <div className="speedy-bento-container">
          {/* Left Hero Stage Card */}
          <div className="speedy-stage-card" key={activeModel.id}>
            <div className="stage-top-meta">
              <span className="stage-badge">{activeModel.badge}</span>
              <span className="stage-ruby-tag">
                <Zap size={13} />
                <span>{activeModel.software}</span>
              </span>
            </div>

            {/* Visual Machine Display */}
            <div className="stage-image-wrapper">
              <div className="stage-glow-ambient"></div>
              <img 
                src={activeModel.image} 
                alt={activeModel.name} 
                className="stage-machine-img"
              />
            </div>

            <div className="stage-bottom-info">
              <h3>{activeModel.name}</h3>
              <p>{activeModel.description}</p>
            </div>
          </div>

          {/* Right Specs & Innovations Column */}
          <div className="speedy-bento-right">
            {/* 4 Bento Metric Tiles */}
            <div className="speedy-tiles-grid">
              <div className="bento-tile">
                <div className="bento-icon-box"><Layers size={18} /></div>
                <span className="bento-label">Working Area</span>
                <strong className="bento-val">{activeModel.area}</strong>
                <span className="bento-sub">{activeModel.areaInch}</span>
              </div>

              <div className="bento-tile">
                <div className="bento-icon-box"><Cpu size={18} /></div>
                <span className="bento-label">Laser Technology</span>
                <strong className="bento-val">{activeModel.laser}</strong>
                <span className="bento-sub">Dual-Source Flexx® Option</span>
              </div>

              <div className="bento-tile">
                <div className="bento-icon-box"><Gauge size={18} /></div>
                <span className="bento-label">Max Velocity</span>
                <strong className="bento-val">{activeModel.speed}</strong>
                <span className="bento-sub">{activeModel.acceleration}</span>
              </div>

              <div className="bento-tile">
                <div className="bento-icon-box"><Zap size={18} /></div>
                <span className="bento-label">Laser Power</span>
                <strong className="bento-val">{activeModel.power}</strong>
                <span className="bento-sub">Ceramicore® Source</span>
              </div>
            </div>

            {/* Key Innovations Card */}
            <div className="speedy-innovations-card">
              <h4>
                <Shield size={16} className="innovations-shield" />
                <span>Patented Trotec Technological Advantages</span>
              </h4>
              <ul className="innovations-list">
                {activeModel.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="check-bullet"><Check size={13} /></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="speedy-action-bar">
              <a href="#contact" className="btn btn-primary speedy-quote-action">
                <span>Request Quote for {activeModel.name}</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </a>

              <a href="#products" className="btn btn-secondary speedy-compare-action">
                <span>Compare All Models</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
