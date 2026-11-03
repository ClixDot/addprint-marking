import { useState, useEffect } from 'react';
import './SpeedySeriesDetailPage.css';
import { 
  ArrowRight, Check, CheckCircle2, ShieldCheck, 
  Zap, Download, PhoneCall, Send,
  Sliders, Layers, Box, Wrench, Eye, Cpu, Compass, Flame, Thermometer
} from 'lucide-react';
import { type DetailedProduct } from '../data/productsData';
import CustomSelect from './CustomSelect';

interface SpeedySeriesDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
}

export default function SpeedySeriesDetailPage({ onBack }: SpeedySeriesDetailPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeMaterialType, setActiveMaterialType] = useState<'co2' | 'fiber' | 'diode'>('co2');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Speedy Models Lineup Dataset
  const speedyModels = [
    {
      id: "s400",
      name: "Speedy 400",
      image: "/images/speedy_400.png",
      tagline: "Maximum productivity and flexibility",
      desc: "Our flagship product in the Speedy line sets the standard with its expansive work area, the industry's fastest engraving speed and acceleration, coupled with OptiMotion™, Sonar Technology™, HDLR Technology™, and a user-friendly Run on Ruby® touch panel for swift and seamless operation.",
      widthMm: 1016,
      depthMm: 610,
      widthInch: 40,
      depthInch: 24,
      workingArea: "1016 × 610 mm (40.0 × 24.0 in)",
      laserCo2: "80W, 120W",
      laserFiber: "30W, 50W",
      maxSpeed: "4.3 m/s (170 in/s)",
      acceleration: "5g acceleration",
      operatingMode: "Optimized modes including Raster, Vector, and Combined",
      maxHeight: "305 mm (12.0 in)"
    },
    {
      id: "s360",
      name: "Speedy 360",
      image: "/images/speedy_360.png",
      tagline: "Ergonomic powerhouse with front loading",
      desc: "Optimal work area-to-footprint ratio with front-loading bed accessibility for effortless material handling. Engineered for high-throughput job shops and prototyping environments.",
      widthMm: 813,
      depthMm: 508,
      widthInch: 32,
      depthInch: 20,
      workingArea: "813 × 508 mm (32.0 × 20.0 in)",
      laserCo2: "40W – 120W",
      laserFiber: "20W, 30W, 50W",
      maxSpeed: "3.55 m/s (140 in/s)",
      acceleration: "5g acceleration",
      operatingMode: "Optimized Raster, Vector & Combined modes",
      maxHeight: "188 mm (7.4 in)"
    },
    {
      id: "s300",
      name: "Speedy 300",
      image: "/images/speedy_300.png",
      tagline: "The global benchmark for laser engraving",
      desc: "The most trusted mid-format laser machine worldwide for custom awards, signage, architectural models and gifts with CeramiCore® laser source.",
      widthMm: 726,
      depthMm: 432,
      widthInch: 29,
      depthInch: 17,
      workingArea: "726 × 432 mm (28.5 × 17.0 in)",
      laserCo2: "30W – 80W",
      laserFiber: "20W, 30W",
      maxSpeed: "3.55 m/s (140 in/s)",
      acceleration: "5g acceleration",
      operatingMode: "Raster and Vector precision modes",
      maxHeight: "170 mm (6.7 in)"
    },
    {
      id: "s100",
      name: "Speedy 100",
      image: "/images/speedy_100.png",
      tagline: "Compact industrial performance",
      desc: "Compact industrial desktop footprint delivering identical commercial cutting precision and optics protection as large format Speedy systems.",
      widthMm: 610,
      depthMm: 305,
      widthInch: 24,
      depthInch: 12,
      workingArea: "610 × 305 mm (24.0 × 12.0 in)",
      laserCo2: "12W – 60W",
      laserFiber: "20W, 30W",
      maxSpeed: "2.8 m/s (110 in/s)",
      acceleration: "4g acceleration",
      operatingMode: "High-definition raster and vector cutting",
      maxHeight: "170 mm (6.7 in)"
    },
    {
      id: "s100cross",
      name: "Speedy 100 cross",
      image: "/images/speedy_100.png",
      tagline: "Equipped with advanced Diode laser",
      desc: "Dual technology platform integrating CO2 and high-brightness Diode laser for specialized micro-processing, educational institutions and electronics marking.",
      widthMm: 610,
      depthMm: 305,
      widthInch: 24,
      depthInch: 12,
      workingArea: "610 × 305 mm (24.0 × 12.0 in)",
      laserCo2: "30W – 60W CO2",
      laserFiber: "450nm Diode laser module",
      maxSpeed: "2.8 m/s (110 in/s)",
      acceleration: "4g acceleration",
      operatingMode: "Dual wavelength vector & raster processing",
      maxHeight: "170 mm (6.7 in)"
    },
    {
      id: "s50",
      name: "Speedy 50",
      image: "/images/speedy_100.png",
      tagline: "Entry-level professional CO2 laser",
      desc: "Exclusively configured with sealed CO2 laser tube for schools, retail personalization counters, and light prototyping workshops.",
      widthMm: 457,
      depthMm: 305,
      widthInch: 18,
      depthInch: 12,
      workingArea: "457 × 305 mm (18.0 × 12.0 in)",
      laserCo2: "20W, 30W",
      laserFiber: "N/A",
      maxSpeed: "2.0 m/s (80 in/s)",
      acceleration: "3g acceleration",
      operatingMode: "Standard raster engraving and vector cutting",
      maxHeight: "125 mm (5.0 in)"
    },
    {
      id: "sp500",
      name: "SP 500",
      image: "/images/product 7.webp",
      tagline: "Large-format flatbed production laser",
      desc: "Heavy-duty industrial flatbed laser cutter designed for large acrylic sheets, wood panels, architectural signage, and high-volume nesting jobs.",
      widthMm: 1245,
      depthMm: 710,
      widthInch: 49,
      depthInch: 28,
      workingArea: "1245 × 710 mm (49.0 × 28.0 in)",
      laserCo2: "60W – 200W",
      laserFiber: "N/A (CO2 Flatbed)",
      maxSpeed: "2.54 m/s (100 in/s)",
      acceleration: "3g acceleration",
      operatingMode: "Large format pass-through cutting and engraving",
      maxHeight: "300 mm (11.8 in)"
    }
  ];

  const [selectedModel, setSelectedModel] = useState(speedyModels[0]);

  // Features Grid Items
  const featuresList = [
    {
      id: 1,
      title: "CeramiCore® laser source",
      icon: <Zap size={20} />,
      desc: "Our patented resonator body made of 100% ceramic ensures maximum gas purity, permanent seal integrity, ultra-fast pulse modulation, and highest beam quality for unmatched lifespan."
    },
    {
      id: 2,
      title: "TroCare service",
      icon: <Wrench size={20} />,
      desc: "TroCare is a tailored service program designed to maximize uptime and extend the lifespan of Speedy laser systems through preventative maintenance, genuine parts, and expert UAE engineers."
    },
    {
      id: 3,
      title: "Vision Design & Position",
      icon: <Eye size={20} />,
      desc: "Overhead live optical camera captures real-time high-resolution imagery of the working table, allowing operators to position vector artwork directly onto irregular remnants with sub-millimeter precision."
    },
    {
      id: 4,
      title: "Flexx technology",
      icon: <Layers size={20} />,
      desc: "Two laser sources (CO2 + Fiber) integrated into a single machine. Process wood, acrylic, glass, and mark bare metals in one single job file without manual tube or optics swap."
    },
    {
      id: 5,
      title: "Pass-through capability",
      icon: <Box size={20} />,
      desc: "Front and rear ergonomic pass-through hatch openings allow continuous processing of oversized wooden panels, long rolls, and long structural materials."
    },
    {
      id: 6,
      title: "Atmos Exhaust systems",
      icon: <Compass size={20} />,
      desc: "Digitally synchronized Atmos extraction filters smoke, dust, and toxic VOCs with active carbon and HEPA filtration, modulating suction volume based on cutting workload."
    },
    {
      id: 7,
      title: "Different focus lenses",
      icon: <Sliders size={20} />,
      desc: "Comprehensive selection of high-grade optical lenses (1.5\", 2.0\", 2.5\", 4.0\", and flexx lenses) tailored for ultra-fine micro-text or thick 20mm acrylic cutting."
    },
    {
      id: 8,
      title: "CE certificate & safety",
      icon: <ShieldCheck size={20} />,
      desc: "Certified Class 2 safety enclosure with electro-mechanical interlock switches, laser protection safety glass, and active emergency brake controls."
    },
    {
      id: 9,
      title: "InPack Technology™",
      icon: <Cpu size={20} />,
      desc: "Hermetically sealed linear motion guides and high-precision drive components protect bearings and belts against abrasive laser smoke and combustible dust."
    },
    {
      id: 10,
      title: "Precise Laser pointer",
      icon: <Zap size={20} />,
      desc: "Red diode targeting beam projects exact start coordinates onto workpieces for zero-waste test positioning and job dry runs."
    },
    {
      id: 11,
      title: "Vision Print&Cut",
      icon: <Eye size={20} />,
      desc: "Optical camera registration system detects printed registration marks and compensates for material distortion, skew, and scaling in real time."
    },
    {
      id: 12,
      title: "HDLR technology",
      icon: <Flame size={20} />,
      desc: "High Dynamic Laser Range circuitry enables ultra-fine laser power modulation for subtle photo grayscale reproduction down to individual pixels."
    },
    {
      id: 13,
      title: "Rotary engraving equipment",
      icon: <Box size={20} />,
      desc: "Plug-and-play motorized rotary chuck and cone attachments for seamless 360-degree cylindrical marking on glasses, bottles, mugs, and industrial tubes."
    },
    {
      id: 14,
      title: "Temperature sensor",
      icon: <Thermometer size={20} />,
      desc: "Integrated thermal monitoring in the work area automatically triggers warnings and emergency ventilation if abnormal heat buildup is detected."
    },
    {
      id: 15,
      title: "Multifunctional table concept",
      icon: <Layers size={20} />,
      desc: "Interchangeable table inserts (Vacuum bed, Aluminium cutting grid, Honeycomb tabletop, Acrylic slats, Ferromagnetic plate) for every substrate."
    },
    {
      id: 16,
      title: "Automatic focusing (SonarFocus™)",
      icon: <Sliders size={20} />,
      desc: "Digital ultrasonic SonarFocus™ automatically detects surface elevation and sets optimal focal distance in fractions of a second with digital repeatability."
    }
  ];

  // Material Compatibility Matrix
  const materialData = [
    { name: "Acrylics (TroGlass, PMMA)", co2Engrave: true, co2Cut: true, fiberEngrave: false, fiberCut: false, diodeEngrave: true, diodeCut: true },
    { name: "Glass & Crystal", co2Engrave: true, co2Cut: false, fiberEngrave: false, fiberCut: false, diodeEngrave: false, diodeCut: false },
    { name: "Plastic sheets & Foils (TroLase)", co2Engrave: true, co2Cut: true, fiberEngrave: true, fiberCut: false, diodeEngrave: true, diodeCut: true },
    { name: "Leather & Alcantara", co2Engrave: true, co2Cut: true, fiberEngrave: false, fiberCut: false, diodeEngrave: true, diodeCut: true },
    { name: "Metals (Stainless, Aluminum, Brass)", co2Engrave: false, co2Cut: false, fiberEngrave: true, fiberCut: false, diodeEngrave: false, diodeCut: false },
    { name: "Paper, Cardboard & Carton", co2Engrave: true, co2Cut: true, fiberEngrave: false, fiberCut: false, diodeEngrave: true, diodeCut: true },
    { name: "Engineered Plastics (Delrin, ABS, POM)", co2Engrave: true, co2Cut: true, fiberEngrave: true, fiberCut: false, diodeEngrave: true, diodeCut: true },
    { name: "Stone, Granite, Marble & Slate", co2Engrave: true, co2Cut: false, fiberEngrave: false, fiberCut: false, diodeEngrave: false, diodeCut: false },
    { name: "Textiles, Denim, Felt & Silk", co2Engrave: true, co2Cut: true, fiberEngrave: false, fiberCut: false, diodeEngrave: true, diodeCut: true },
    { name: "Wood & MDF (TroWood)", co2Engrave: true, co2Cut: true, fiberEngrave: false, fiberCut: false, diodeEngrave: true, diodeCut: true }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="speedy-detail-page">
      {/* Top Header Back Bar */}
      <div className="speedy-top-breadcrumb-bar">
        <div className="container">
          <div className="topbar-flex">
            <div></div>
          </div>
        </div>
      </div>

      {/* Hero Showcase Banner */}
      <section className="speedy-hero-banner">
        <div className="speedy-hero-bg-overlay"></div>
        <div className="container">
          <div className="speedy-hero-content">
            <h1 className="speedy-hero-title">
              Laser Cutting and Engraving Machine <br />
              <span className="text-highlight">Speedy Series.</span>
            </h1>

            <ul className="speedy-hero-checklist">
              <li>
                <span className="check-bullet"><Check size={14} /></span>
                <span>CO₂, fiber and diode laser for cutting and engraving</span>
              </li>
              <li>
                <span className="check-bullet"><Check size={14} /></span>
                <span>Unmatched engraving speed up to 4.3 m/s and 5g acceleration</span>
              </li>
              <li>
                <span className="check-bullet"><Check size={14} /></span>
                <span>Working area from 457 × 305 mm (18 × 12 in) to 1016 × 610 mm (40 × 24 in)</span>
              </li>
              <li>
                <span className="check-bullet"><Check size={14} /></span>
                <span>Perfect for single-piece personalization or large-scale industrial manufacturing</span>
              </li>
              <li>
                <span className="check-bullet"><Check size={14} /></span>
                <span>Ideal for personalization, sign making, awards, education & industrial applications</span>
              </li>
            </ul>

            <div className="speedy-hero-cta-row">
              <button onClick={() => handleScrollTo('quote-section')} className="btn btn-primary speedy-hero-btn">
                <span>Get a Quote</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
              <a href="tel:+97142985655" className="btn btn-secondary speedy-consult-btn">
                <PhoneCall size={16} />
                <span>Consult a Speedy Expert</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Speedy Series Model Lineup & Bed Visualizer */}
      <section id="models" className="speedy-section-models">
        <div className="container">
          <div className="section-head-center">
            <h2>The Speedy series: precision laser cutters and engravers for professionals</h2>
            <p className="section-subtext">
              The Speedy series machines are built for long-lasting, precise cutting and engraving and are powered by our cutting-edge laser software, <strong>Ruby®</strong>. The Speedy laser cutting and engraving machines are offered with either a CO₂ RF laser or as the <strong>Speedy flexx model</strong>, which includes an additional fiber laser.
            </p>
            <p className="section-footnote">
              Exceptions: <em>Speedy 50</em> - exclusively with CO₂ laser; <em>Speedy 100 cross</em> - equipped with a diode laser.
            </p>
          </div>

          {/* Model Selection Tabs */}
          <div className="speedy-model-tabs-bar">
            {speedyModels.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(m)}
                className={`speedy-model-tab-btn ${selectedModel.id === m.id ? 'active' : ''}`}
              >
                <span className="model-tab-name">{m.name}</span>
                <span className="model-tab-dim">{m.widthInch}×{m.depthInch} in</span>
              </button>
            ))}
          </div>

          {/* Active Model Interactive Showcase */}
          <div className="speedy-model-showcase-box">
            <div className="showcase-header-row">
              <div>
                <h3>{selectedModel.name} — {selectedModel.tagline}</h3>
                <p className="showcase-desc">{selectedModel.desc}</p>
              </div>
            </div>

            <div className="speedy-showcase-split">
              {/* Left: Bed Comparison Visualizer */}
              <div className="speedy-bed-visualizer-card">
                <div className="visualizer-header">
                  <span>Bed Size Comparison ({selectedModel.name})</span>
                  <span className="badge-highlight">{selectedModel.workingArea}</span>
                </div>

                <div className="bed-canvas-area">
                  {/* Outer Frame (Speedy 400 scale) */}
                  <div className="bed-box-s400">
                    <span className="bed-label">Speedy 400 (1016 × 610 mm)</span>
                    
                    {/* S360 outline */}
                    <div className="bed-box-s360">
                      <span className="bed-label">Speedy 360 (813 × 508 mm)</span>

                      {/* S300 outline */}
                      <div className="bed-box-s300">
                        <span className="bed-label">Speedy 300 (726 × 432 mm)</span>

                        {/* S100 outline */}
                        <div className="bed-box-s100">
                          <span className="bed-label">Speedy 100 (610 × 305 mm)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bed-visualizer-footer">
                  <span>Active Selection: <strong>{selectedModel.name}</strong></span>
                  <span>Max Workpiece Height: <strong>{selectedModel.maxHeight}</strong></span>
                </div>
              </div>

              {/* Right: Technical Data Table */}
              <div className="speedy-tech-table-card">
                <h4>Technical Specifications — {selectedModel.name}</h4>
                
                <div className="tech-params-table">
                  <div className="tech-table-row">
                    <span className="tech-label">Working Area (W × D)</span>
                    <span className="tech-val">{selectedModel.workingArea}</span>
                  </div>
                  <div className="tech-table-row">
                    <span className="tech-label">Laser Power CO₂</span>
                    <span className="tech-val">{selectedModel.laserCo2}</span>
                  </div>
                  <div className="tech-table-row">
                    <span className="tech-label">Laser Power Fiber</span>
                    <span className="tech-val">{selectedModel.laserFiber}</span>
                  </div>
                  <div className="tech-table-row">
                    <span className="tech-label">Max. Engraving Speed</span>
                    <span className="tech-val highlight-green">{selectedModel.maxSpeed}</span>
                  </div>
                  <div className="tech-table-row">
                    <span className="tech-label">Max. Acceleration</span>
                    <span className="tech-val">{selectedModel.acceleration}</span>
                  </div>
                  <div className="tech-table-row">
                    <span className="tech-label">Operating Modes</span>
                    <span className="tech-val">{selectedModel.operatingMode}</span>
                  </div>
                  <div className="tech-table-row">
                    <span className="tech-label">Max. Workpiece Height</span>
                    <span className="tech-val">{selectedModel.maxHeight}</span>
                  </div>
                </div>

                <div className="tech-card-action-row">
                  <button onClick={() => handleScrollTo('quote-section')} className="btn btn-primary btn-sm">
                    <span>Connect with Speedy Expert</span>
                    <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
                  </button>
                  <a href="#contact" className="btn btn-secondary btn-sm">
                    <Download size={14} />
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Reliability & Expert Service Pillars with Video 3 */}
      <section className="speedy-section-service-pillars">
        <div className="container">
          <div className="service-pillars-card">
            <div className="service-pillars-header">
              <h2>Reliable laser cutting and engraving machines with expert service for long-term success</h2>
              <p>
                Speedy laser engraver and cutter machines combine robust Austrian engineering with certified UAE local support to keep your production running smoothly.
              </p>
            </div>

            <div className="service-pillars-split">
              {/* Left: Service Video 3 */}
              <div className="service-video-wrapper">
                <video 
                  src="/3.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="service-video-player"
                />
                <div className="service-video-badge">
                  <ShieldCheck size={16} />
                  <span>Precision Engineering in Action</span>
                </div>
              </div>

              {/* Right: Pillars Grid */}
              <div className="pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-bullet">•</div>
                  <div className="pillar-text">
                    <strong>Precision-built hardware</strong> – Designed for high-speed engraving and cutting with consistent micron accuracy.
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-bullet">•</div>
                  <div className="pillar-text">
                    <strong>Integrated safety features</strong> – Protect operators and ensure compliance with European Class 2 safety standards.
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-bullet">•</div>
                  <div className="pillar-text">
                    <strong>Expert installation and training</strong> – Certified UAE technicians set up your machine and train your team for peak productivity.
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-bullet">•</div>
                  <div className="pillar-text">
                    <strong>Preventive maintenance programs</strong> – Regular check-ups to minimize downtime, preserve optics, and extend machine life.
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-bullet">•</div>
                  <div className="pillar-text">
                    <strong>Fast global & local UAE support</strong> – Remote telemetry diagnostics, local spare parts warehouse in Sharjah, and same-day on-site dispatch.
                  </div>
                </div>

                <div className="service-pillar-cta">
                  <button onClick={() => handleScrollTo('quote-section')} className="btn btn-primary">
                    <span>Connect with Speedy Series Expert</span>
                    <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ruby® Laser Software */}
      <section id="software" className="speedy-section-ruby">
        <div className="container">
          <div className="ruby-showcase-container">
            <div className="ruby-text-column">
              <div className="ruby-badge">SMART SOFTWARE ECOSYSTEM</div>
              <h2>Ruby® laser software: simplify your workflow from design to production</h2>
              <p className="ruby-lead">
                Ruby® is the intuitive, browser-based software that runs locally, not in the cloud, making laser job preparation and execution completely effortless.
              </p>

              <ul className="ruby-feature-list">
                <li>
                  <span className="ruby-bullet"><Check size={14} /></span>
                  <div><strong>Seamless workflow</strong> – Go from vector design to engraving without switching external printer drivers.</div>
                </li>
                <li>
                  <span className="ruby-bullet"><Check size={14} /></span>
                  <div><strong>Real-time job preview</strong> – Position and adjust your artwork directly on the live camera view of your workpiece.</div>
                </li>
                <li>
                  <span className="ruby-bullet"><Check size={14} /></span>
                  <div><strong>Multi-user collaboration</strong> – Share job files, material recipes, and work simultaneously across devices.</div>
                </li>
                <li>
                  <span className="ruby-bullet"><Check size={14} /></span>
                  <div><strong>Integrated material database</strong> – Pre-tested cutting and engraving recipes for dependable results you can trust.</div>
                </li>
                <li>
                  <span className="ruby-bullet"><Check size={14} /></span>
                  <div><strong>Continuous updates</strong> – Enjoy new cutting algorithms and automated features delivered regularly.</div>
                </li>
              </ul>

              <div className="ruby-cta-wrap">
                <button onClick={() => handleScrollTo('quote-section')} className="btn btn-primary">
                  <span>Learn more about Ruby® Laser Software</span>
                  <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
                </button>
              </div>
            </div>

            {/* Workflow 4 Steps Bar */}
            <div className="ruby-workflow-column">
              <div className="workflow-steps-ribbon">
                <div className="step-card">
                  <div className="step-num">01</div>
                  <div className="step-label">Customer Design</div>
                </div>
                <div className="step-connector">➔</div>
                <div className="step-card">
                  <div className="step-num">02</div>
                  <div className="step-label">Add to Ruby®</div>
                </div>
                <div className="step-connector">➔</div>
                <div className="step-card">
                  <div className="step-num">03</div>
                  <div className="step-label">Run on Speedy</div>
                </div>
                <div className="step-connector">➔</div>
                <div className="step-card highlight">
                  <div className="step-num">04</div>
                  <div className="step-label">Perfect Product</div>
                </div>
              </div>

              <div className="ruby-ui-mockup-card">
                <div className="mockup-header-dots">
                  <span></span><span></span><span></span>
                  <span className="mockup-title">Ruby® 3.0 — Laser Workflow in Action</span>
                </div>
                <div className="ruby-video-wrapper">
                  <video 
                    src="/2.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="ruby-video-player"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: All in One Package with Video 4 */}
      <section id="solutions" className="speedy-section-all-in-one">
        <div className="container">
          <div className="all-in-one-grid">
            {/* Left: Video 4 */}
            <div className="all-in-one-visual">
              <video 
                src="/4.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="all-in-one-video-player"
              />
              <div className="all-in-one-badge-float">
                <ShieldCheck size={20} />
                <div>
                  <strong>Official Austrian Partnership</strong>
                  <span>ADDPRINT MARKING SYSTEMS TRADING LLC</span>
                </div>
              </div>
            </div>

            {/* Right: Text Information */}
            <div className="all-in-one-text">
              <h2>Everything you need in a laser cutter and engraver in one package</h2>
              <p className="all-in-one-lead">
                Get the complete turnkey solution from a single source: laser machine, exhaust system, service, and certified materials—all tested and optimized to work together.
              </p>

              <ul className="all-in-one-bullets">
                <li>
                  <strong>Laser and exhaust system synergy</strong> – Perfectly matched Atmos extraction for clean, odor-free, and safe indoor operation.
                </li>
                <li>
                  <strong>Certified material compatibility</strong> – TroLase, TroGlass, TroWood, and more, guaranteed for clean cut edges and rich contrast.
                </li>
                <li>
                  <strong>One-stop UAE support</strong> – A single partner in Abu Dhabi and Dubai for installation, warranty, consumables, and troubleshooting.
                </li>
                <li>
                  <strong>Optimized performance</strong> – Every component engineered in Austria to deliver maximum electrical and production efficiency.
                </li>
                <li>
                  <strong>Simplified purchasing</strong> – Save time with bundled turnkey solutions tailored directly to your production requirements.
                </li>
              </ul>

              <div className="all-in-one-actions">
                <button onClick={() => handleScrollTo('quote-section')} className="btn btn-primary btn-sm">
                  <span>Explore Industry Solutions</span>
                  <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
                </button>
                <button onClick={onBack} className="btn btn-secondary btn-sm">
                  <span>Learn More About ADDPRINT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Premium Laser Materials with Warehouse Video */}
      <section id="materials" className="speedy-section-materials">
        <div className="container">
          <div className="materials-video-showcase-card">
            {/* Left: Material Warehouse Video */}
            <div className="materials-video-container">
              <video 
                src="/Material_warehouse.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="materials-video-player"
              />
              <div className="materials-video-badge">
                <ShieldCheck size={16} />
                <span>UAE Central Material Stock & Fabrication</span>
              </div>
            </div>

            {/* Right: Text & Details */}
            <div className="materials-text-block">
              <h2>Premium laser materials for limitless applications</h2>
              <p>
                Trotec offers a comprehensive range of high-quality engraving and cutting materials designed to deliver perfect results with your Speedy laser. From durable laminates to vibrant acrylics, every product is tested for optimal performance and compatibility.
              </p>

              <ul className="materials-feature-bullets">
                <li>
                  <strong>Extensive material portfolio</strong> – Choose from wood, acrylic, plastics, paper, leather, and textiles to suit any application.
                </li>
                <li>
                  <strong>Specialty solutions for professionals</strong> – TroLase laminates for signage, TroGlass acrylics for creative projects, and TroWood for natural finishes.
                </li>
                <li>
                  <strong>Optimized for laser processing</strong> – Each sheet is formulated for clean laser cuts without sticky residue or charred edges.
                </li>
                <li>
                  <strong>Integrated material database</strong> – Ruby® software includes pre-calibrated speed, power, and frequency settings for fast setup.
                </li>
                <li>
                  <strong>Fast UAE delivery from local stock</strong> – Direct delivery across Dubai, Abu Dhabi, Sharjah, and northern Emirates.
                </li>
              </ul>

              <div className="materials-action">
                <button onClick={() => handleScrollTo('compatibility-section')} className="btn btn-primary">
                  <span>Explore Material Compatibility Matrix</span>
                  <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Features & Options Accordion Grid */}
      <section id="features" className="speedy-section-features-grid">
        <div className="container">
          <div className="section-head-center">
            <h2>Speedy series features and options</h2>
            <p className="section-subtext">
              Modular options and patented engineering innovations tailored for maximum productivity and operator convenience.
            </p>
          </div>

          <div className="speedy-features-matrix-grid">
            {featuresList.map((f) => (
              <div 
                key={f.id} 
                className={`feature-matrix-card ${expandedFeature === f.id ? 'expanded' : ''}`}
                onClick={() => setExpandedFeature(expandedFeature === f.id ? null : f.id)}
              >
                <div className="feature-matrix-header">
                  <div className="feature-icon-bubble">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <div className="feature-expand-indicator">
                    {expandedFeature === f.id ? '−' : '+'}
                  </div>
                </div>
                <p className="feature-matrix-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Material Compatibility Table */}
      <section id="compatibility-section" className="speedy-section-matrix-table">
        <div className="container">
          <div className="section-head-center">
            <h2>Material compatibility with the Speedy series</h2>
            <p className="section-subtext">
              Select your laser source type to explore compatible substrates and processing modes.
            </p>

            {/* Laser Technology Switcher */}
            <div className="matrix-source-tabs">
              <button 
                onClick={() => setActiveMaterialType('co2')}
                className={`matrix-tab-btn ${activeMaterialType === 'co2' ? 'active' : ''}`}
              >
                CO₂ Laser
              </button>
              <button 
                onClick={() => setActiveMaterialType('fiber')}
                className={`matrix-tab-btn ${activeMaterialType === 'fiber' ? 'active' : ''}`}
              >
                Fiber Laser (Flexx)
              </button>
              <button 
                onClick={() => setActiveMaterialType('diode')}
                className={`matrix-tab-btn ${activeMaterialType === 'diode' ? 'active' : ''}`}
              >
                Diode Laser
              </button>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="matrix-table-card">
            <table className="compatibility-table">
              <thead>
                <tr>
                  <th className="th-material">Material</th>
                  <th className="th-action text-center">Engrave</th>
                  <th className="th-action text-center">Cut</th>
                </tr>
              </thead>
              <tbody>
                {materialData.map((item, idx) => {
                  let canEngrave = false;
                  let canCut = false;
                  if (activeMaterialType === 'co2') {
                    canEngrave = item.co2Engrave;
                    canCut = item.co2Cut;
                  } else if (activeMaterialType === 'fiber') {
                    canEngrave = item.fiberEngrave;
                    canCut = item.fiberCut;
                  } else {
                    canEngrave = item.diodeEngrave;
                    canCut = item.diodeCut;
                  }

                  return (
                    <tr key={idx}>
                      <td className="td-name">{item.name}</td>
                      <td className="td-check text-center">
                        {canEngrave ? (
                          <span className="check-active">✓</span>
                        ) : (
                          <span className="check-dash">—</span>
                        )}
                      </td>
                      <td className="td-check text-center">
                        {canCut ? (
                          <span className="check-active">✓</span>
                        ) : (
                          <span className="check-dash">—</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="matrix-footer-note">
              <p>
                <strong>Note:</strong> With the <strong>Speedy flexx</strong>, you can process all materials suitable for CO₂ and fiber lasers—thanks to both laser sources built into a single machine.
              </p>
            </div>
          </div>

          <div className="matrix-bottom-cta-row">
            <button onClick={() => handleScrollTo('quote-section')} className="btn btn-primary">
              <span>Connect with Trotec Material Expert</span>
              <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
            </button>
            <a href="#contact" className="btn btn-secondary">
              <Download size={14} />
              <span>Get Full List of Laserable Materials</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 8: Direct UAE Quote Form */}
      <section id="quote-section" className="speedy-section-quote-form">
        <div className="container">
          <div className="speedy-quote-wrapper">
            <div className="quote-left-info">
              <span className="quote-badge">OFFICIAL UAE DISTRIBUTOR</span>
              <h2>Request a Quote & Live Demo for Speedy Series</h2>
              <p>
                Get machine pricing, customized configuration options, and material benchmarking at our Sharjah Innovation Center.
              </p>

              <div className="quote-contact-mini">
                <div><strong>Location:</strong> P. O. Box: 32272, Dubai & Sharjah, UAE</div>
                <div><strong>Direct Phone:</strong> +971 4 2985655</div>
                <div><strong>Email:</strong> trotec@addprint.net</div>
              </div>
            </div>

            <div className="quote-form-card">
              {formSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="text-green" />
                  <h3>Quote Request Received!</h3>
                  <p>Our Trotec laser specialist will contact you within 2 business hours with technical specifications and pricing.</p>
                  <button onClick={() => setFormSubmitted(false)} className="btn btn-secondary btn-sm">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="quote-form-element">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Full Name *</label>
                      <input type="text" required placeholder="John Doe" />
                    </div>
                    <div className="form-field">
                      <label>Company / Organization</label>
                      <input type="text" placeholder="Design Studio LLC" />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Email Address *</label>
                      <input type="email" required placeholder="john@example.com" />
                    </div>
                    <div className="form-field">
                      <label>Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+971 50 1234567" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Preferred Speedy Model</label>
                    <CustomSelect
                      defaultValue={`${selectedModel.name} (${selectedModel.workingArea})`}
                      options={speedyModels.map(m => `${m.name} (${m.workingArea})`)}
                    />
                  </div>

                  <div className="form-field">
                    <label>Materials to Process & Project Notes</label>
                    <textarea rows={3} placeholder="E.g. 5mm Acrylic cutting, Stainless steel barcode engraving..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-quote-btn">
                    <span>Submit Speedy Quote Request</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
