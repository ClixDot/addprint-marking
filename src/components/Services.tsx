import { useState, useEffect, useRef } from 'react';
import './Services.css';
import { 
  Wrench, 
  ShieldCheck, 
  GraduationCap, 
  FlaskConical, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Headphones, 
  PackageCheck
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      id: "maintenance",
      name: "Field Service & Maintenance",
      icon: <Wrench size={18} />,
      badge: "24/7 Rapid Response",
      headline: "Certified On-Site UAE Support & Preventative AMC",
      desc: "Ensure zero unplanned production downtime with ADDPRINT's factory-trained Austrian certified service engineers located in Dubai.",
      perks: [
        "Comprehensive Annual Maintenance Contracts (AMC)",
        "Original Trotec Austrian spare parts in local UAE warehouse stock",
        "Optical alignment and beam path precision re-calibration"
      ],
      ctaText: "Request Service Visit",
      ctaLink: "#contact"
    },
    {
      id: "training",
      name: "Training & Masterclasses",
      icon: <GraduationCap size={18} />,
      badge: "Operator Certification",
      headline: "Master Your Trotec Machine & Ruby® Software",
      desc: "Empower your operators and designers with in-depth practical training sessions at our Sharjah Innovation Center or on-site at your facility.",
      perks: [
        "One-on-one operator training from basics to advanced cutting",
        "Run on Ruby® workflow optimization and nested cutting",
        "Material parameter database customization (100+ materials)",
        "Official Trotec Operator Certification upon completion"
      ],
      ctaText: "Book Training Session",
      ctaLink: "#contact"
    },
    {
      id: "warranty",
      name: "Warranty & Protection",
      icon: <ShieldCheck size={18} />,
      badge: "Complete Peace of Mind",
      headline: "Extended Ceramicore® Resonator & Machine Warranty",
      desc: "Protect your long-term capital investment with customizable warranty extensions, ensuring maximum uptime and guaranteed trade-in value.",
      perks: [
        "Extended Ceramicore® laser source warranty up to 5 years",
        "Preventative bi-annual laser health checks and optical cleaning",
        "All labor, travel, and genuine Austrian replacement parts included",
        "Dedicated VIP technical helpline and remote telemetry diagnosis"
      ],
      ctaText: "Inquire Warranty Packages",
      ctaLink: "#contact"
    },
    {
      id: "lab",
      name: "Sample Testing Lab",
      icon: <FlaskConical size={18} />,
      badge: "Zero-Risk Evaluation",
      headline: "Free Material Benchmark & Speed Analysis Lab",
      desc: "Test before you invest. Send us your vector drawings and specialized materials; we will cut, engrave, and provide complete time and cost studies.",
      perks: [
        "Same-day sample processing on your specific materials",
        "Detailed cutting speed, edge quality, and gas consumption reports",
        "High-definition video recording of your job execution",
        "Assistance with optimal lens and nozzle selection"
      ],
      ctaText: "Send Material Samples",
      ctaLink: "#contact"
    }
  ];

  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0
  });

  const updateIndicator = () => {
    const activeIndex = serviceCategories.findIndex(c => c.id === activeCategory.id);
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
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => updateIndicator();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory]);

  return (
    <section id="services" className="section services-modern-section">
      <div className="container">
        {/* Header */}
        <div className="services-modern-header text-center">
          <div className="services-pill-badge">
            <span>MORE THAN MACHINES • LIFETIME SUPPORT</span>
          </div>
          <h2>Complete UAE Service & Technical Excellence</h2>
          <p className="services-subtitle">
            Every Trotec laser machine from ADDPRINT is backed by over 40 years of local UAE engineering expertise, genuine Austrian parts, and dedicated customer care.
          </p>

          {/* Service Category Switcher with Sliding Floating Indicator */}
          <div className="services-category-nav" ref={navContainerRef}>
            <div 
              className="services-pill-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity
              }}
            />
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.id}
                ref={el => { tabRefs.current[idx] = el; }}
                onClick={() => setActiveCategory(cat)}
                className={`services-nav-btn ${activeCategory.id === cat.id ? 'active' : ''}`}
              >
                <span className="nav-btn-icon">{cat.icon}</span>
                <span className="nav-btn-text">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Showcase Card */}
        <div className="services-showcase-card" key={activeCategory.id}>
          <div className="services-showcase-grid">
            {/* Left Content */}
            <div className="services-showcase-left">
              <div className="service-badge-row">
                <span className="service-austrian-tag">
                  <PackageCheck size={14} />
                  <span>100% Genuine Austrian Parts</span>
                </span>
              </div>

              <h3>{activeCategory.headline}</h3>
              <p className="service-main-desc">{activeCategory.desc}</p>

              {/* Perks Grid */}
              <ul className="service-perks-list">
                {activeCategory.perks.map((perk, pIdx) => (
                  <li key={pIdx}>
                    <span className="perk-bullet-check">
                      <CheckCircle2 size={16} />
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="service-action-row">
                <a href={activeCategory.ctaLink} className="btn btn-primary service-cta-btn">
                  <span>{activeCategory.ctaText}</span>
                  <span className="btn-arrow-circle">
                    <ArrowRight size={14} />
                  </span>
                </a>

                <a href="tel:+97142985655" className="service-helpline-link">
                  <Headphones size={18} />
                  <span>Technical Desk: +971 4 2985655</span>
                </a>
              </div>
            </div>

            {/* Right Highlights & SLA Stats */}
            <div className="services-showcase-right">
              <div className="service-sla-deck">


                <div className="sla-metric-card">
                  <div className="sla-icon"><PackageCheck size={20} /></div>
                  <div className="sla-details">
                    <strong className="sla-number">98% In-Stock</strong>
                    <span className="sla-desc">Austrian Optics & Consumables in Dubai</span>
                  </div>
                </div>

                <div className="sla-metric-card highlight-green">
                  <div className="sla-icon"><ShieldCheck size={20} /></div>
                  <div className="sla-details">
                    <strong className="sla-number">1982–2026</strong>
                    <span className="sla-desc">40+ Years of Direct UAE Industrial Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
