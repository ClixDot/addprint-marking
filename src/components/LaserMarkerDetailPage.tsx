import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Flame, 
  ExternalLink,
  Cpu,
  Barcode,
  Wrench,
  ChevronRight,
  Database,
  Award,
  Maximize2,
  Lightbulb,
  Edit3,
  Monitor,
  HelpCircle,
  Stethoscope,
  Car,
  Tv,
  PenTool,
  Shield,
  Plane,
  Gift,
  PhoneCall
} from 'lucide-react';
import type { DetailedProduct } from '../data/productsData';
import './LaserMarkerDetailPage.css';
import CustomSelect from './CustomSelect';

interface LaserMarkerDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
  onNavigateSpeedMarker?: () => void;
  onNavigateSpeedy?: () => void;
  onNavigateRuby?: () => void;
}

export const LaserMarkerDetailPage: React.FC<LaserMarkerDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onNavigateSpeedMarker,
  onNavigateSpeedy,
  onNavigateRuby
}) => {
  const [activeTab, setActiveTab] = useState<'advantages' | 'marker' | 'applications' | 'software' | 'service' | 'insights'>('advantages');
  const [modelTab, setModelTab] = useState<'speedmarker' | 'intmark' | 'speedyflexx'>('speedmarker');
  const [comparisonTab, setComparisonTab] = useState<'embossing' | 'inkjet'>('embossing');
  const [videoTab, setVideoTab] = useState<'plate' | 'automotive'>('plate');
  
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [insightModal, setInsightModal] = useState<{ title: string; content: string } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    application: 'Metal & Steel Marking',
    message: ''
  });

  const handleScrollTo = (id: string, tabName?: typeof activeTab) => {
    if (tabName) setActiveTab(tabName);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="marker-detail-page">
      {/* Breadcrumb Bar */}
      <div className="marker-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-nav">
            <button onClick={onBack} className="btn-back-link">
              ← Back to Products
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Fiber Laser Marker Machines & Marking Systems</span>
          </div>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section className="marker-hero-banner">
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <div className="marker-hero-content">
            <div className="hero-badge">
              <Sparkles size={14} /> High-Speed Galvo & Fiber Laser Marking Systems
            </div>
            <h1 className="marker-hero-title">
              Fiber Laser Marker Machines & Marking Systems
            </h1>
            <p className="marker-hero-lead">
              Our laser marking systems enable you to achieve precise and permanent marking on metals and plastics. Trotec offers Galvo workstations, integrated laser markers and flatbed lasers for high-resolution marking. It remains legible even when exposed to extreme heat, cold or humidity.
            </p>
            
            <div className="marker-hero-actions">
              <button 
                className="btn-primary-red"
                onClick={() => setQuoteModalOpen(true)}
              >
                <span>Request more info</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-navigation Jump Links */}
      <nav className="marker-subnav-bar">
        <div className="container">
          <div className="subnav-links">
            <button 
              className={activeTab === 'advantages' ? 'active' : ''} 
              onClick={() => handleScrollTo('advantages', 'advantages')}
            >
              Advantages
            </button>
            <button 
              className={activeTab === 'marker' ? 'active' : ''} 
              onClick={() => handleScrollTo('laser-marker-glance', 'marker')}
            >
              Laser marker
            </button>
            <button 
              className={activeTab === 'applications' ? 'active' : ''} 
              onClick={() => handleScrollTo('applications', 'applications')}
            >
              Applications
            </button>
            <button 
              className={activeTab === 'software' ? 'active' : ''} 
              onClick={() => handleScrollTo('software-section', 'software')}
            >
              Software
            </button>
            <button 
              className={activeTab === 'service' ? 'active' : ''} 
              onClick={() => handleScrollTo('service-section', 'service')}
            >
              Service
            </button>
            <button 
              className={activeTab === 'insights' ? 'active' : ''} 
              onClick={() => handleScrollTo('market-insights', 'insights')}
            >
              Market insights
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Advantages of a laser marking machine */}
      <section id="advantages" className="marker-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">What are the advantages of a laser marking machine?</h2>
            <p className="section-subtitle">
              Precise, fast and permanent laser marking of metals, plastics and organic materials. Efficient, from single pieces to series production.
            </p>
          </div>

          <div className="advantages-grid-4">
            {/* Advantage 1 */}
            <div className="advantage-card-item">
              <div className="adv-icon-box red">
                <Barcode size={24} />
              </div>
              <h3 className="adv-card-title">Precise, legible marking</h3>
              <p className="adv-card-text">
                Thanks to the precision of laser marking, good legibility is guaranteed, even for tiny details like QR codes, serial numbers, logos and 1-point fonts. Laser marking guarantees consistent, perfect high-contrast results.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="advantage-card-item">
              <div className="adv-icon-box dark">
                <ShieldCheck size={24} />
              </div>
              <h3 className="adv-card-title">Permanent marking for traceability</h3>
              <p className="adv-card-text">
                Laser markings are resistant to abrasion, corrosion and other external factors. As a result, parts with 2D codes, complex data matrix or QR codes can be marked in a tamper-proof manner.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="advantage-card-item">
              <div className="adv-icon-box red">
                <Zap size={24} />
              </div>
              <h3 className="adv-card-title">Efficient, sustainable laser marking</h3>
              <p className="adv-card-text">
                Laser marking is contactless. This means that objects don't need to be fixed, the markings don't damage the surface of the material and there is no need for any additional consumables like ink or tools. Laser markers can be perfectly integrated into the manufacturing process. This makes laser marking one of the most time-saving and cost-effective marking processes.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="advantage-card-item">
              <div className="adv-icon-box dark">
                <Database size={24} />
              </div>
              <h3 className="adv-card-title">Dynamic data and networking</h3>
              <p className="adv-card-text">
                Our SpeedMark® laser software offers automation-compatible interfaces for connecting external data and control commands. Process variable data directly from external systems such as ERP or databases. Create automation sequences quickly and easily in the software to quickly produce individual small batches. For digital processing, from single pieces to large batch sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trotec laser marker at a glance */}
      <section id="laser-marker-glance" className="marker-section section-light">
        <div className="container">
          <div className="glance-card-container">
            <div className="glance-header">
              <h2 className="glance-title">Trotec laser marker at a glance.</h2>
              <p className="glance-subtitle">
                When it comes to marking parts and engraving information, a laser marker is fast and precise. If you need to mark single pieces or small batches, the U Series is ideal for laser marking in seconds. Our SpeedMarker series supports your automation processes with fast and productive laser marking of dynamic data. If you need to be flexible in your laser applications, the Speedy flexx opens up countless possibilities. In addition, we have integrated workstations in our portfolio that can be customized to your specific requirements.
              </p>
            </div>

            {/* Tabs */}
            <div className="marker-model-tabs">
              <button 
                className={`model-tab-btn ${modelTab === 'speedmarker' ? 'active' : ''}`}
                onClick={() => setModelTab('speedmarker')}
              >
                <img src="/images/speedmarker_galvo_action.png" alt="SpeedMarker series" className="tab-thumb-img" />
                <span>SpeedMarker series</span>
              </button>
              <button 
                className={`model-tab-btn ${modelTab === 'intmark' ? 'active' : ''}`}
                onClick={() => setModelTab('intmark')}
              >
                <img src="/images/trotec_laser_marker_head.png" alt="IntMark series" className="tab-thumb-img" />
                <span>IntMark series</span>
              </button>
              <button 
                className={`model-tab-btn ${modelTab === 'speedyflexx' ? 'active' : ''}`}
                onClick={() => setModelTab('speedyflexx')}
              >
                <img src="/images/speedy_100.png" alt="Speedy flexx" className="tab-thumb-img" />
                <span>Speedy flexx</span>
              </button>
            </div>

            {/* SpeedMarker Tab Content */}
            {modelTab === 'speedmarker' && (
              <div className="glance-tab-content fade-in">
                <h3 className="model-content-title">
                  SpeedMarker Series - Laser marking machines for automated marking in batch mode (for medium batch sizes).
                </h3>
                <p className="model-content-desc">
                  Easily integrate your laser marking systems into the production environment. By means of digital interfaces, external control signals like fieldbus automation and external databases can all be connected. The SpeedMarker uses high-quality optics and laser components, enabling you to increase your productivity while ensuring that the marking is perfectly legible.
                </p>

                <div className="glance-detail-grid">
                  {/* Nested diagram representation */}
                  <div className="diagram-box">
                    <div className="nested-size-box sp1300">
                      <span className="size-label">SpeedMarker 1300</span>
                      <div className="nested-size-box sp700">
                        <span className="size-label">SpeedMarker 700</span>
                        <div className="nested-size-box sp300">
                          <span className="size-label">SpeedMarker 300</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specs table */}
                  <div className="specs-table-wrapper">
                    <h4 className="table-heading">Technical data</h4>
                    <table className="glance-tech-table">
                      <tbody>
                        <tr>
                          <td className="spec-name">Working area (W x D)</td>
                          <td className="spec-val font-semibold">up to 51.2 x 17.7 in</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Max. workpiece height</td>
                          <td className="spec-val font-semibold">27 in</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Laser type</td>
                          <td className="spec-val">CO₂ or fiber laser</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Laser power</td>
                          <td className="spec-val">20 – 100 watts / 20 – 100 watts MOPA</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="glance-action-btn-row">
                      <button 
                        className="btn-outline-red"
                        onClick={() => {
                          if (onNavigateSpeedMarker) onNavigateSpeedMarker();
                        }}
                      >
                        SpeedMarker series
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* IntMark Tab Content */}
            {modelTab === 'intmark' && (
              <div className="glance-tab-content fade-in">
                <h3 className="model-content-title">
                  IntMark Series - OEM Laser Marking Heads for Robotic Line Integration
                </h3>
                <p className="model-content-desc">
                  Compact Galvo laser marking heads designed for direct mounting into production lines, robotic cells, and high-volume industrial automation systems with fieldbus communication interfaces.
                </p>

                <div className="glance-detail-grid">
                  <div className="diagram-box image-centered">
                    <img src="/images/trotec_laser_marker_head.png" alt="IntMark laser marking head" className="eline-preview-img" />
                  </div>

                  <div className="specs-table-wrapper">
                    <h4 className="table-heading">Technical data</h4>
                    <table className="glance-tech-table">
                      <tbody>
                        <tr>
                          <td className="spec-name">Marking Field</td>
                          <td className="spec-val font-semibold">70 x 70 mm to 300 x 300 mm</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Scanner Speed</td>
                          <td className="spec-val font-semibold">Up to 12,000 mm/sec</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Laser type</td>
                          <td className="spec-val">Ytterbium Fiber Laser (1064 nm)</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Laser power</td>
                          <td className="spec-val">20 - 70 watts MOPA</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="glance-action-btn-row">
                      <button 
                        className="btn-outline-red"
                        onClick={() => setQuoteModalOpen(true)}
                      >
                        Request OEM Specs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Speedy flexx Tab Content */}
            {modelTab === 'speedyflexx' && (
              <div className="glance-tab-content fade-in">
                <h3 className="model-content-title">
                  Speedy flexx Series - Dual CO₂ & Fiber Laser Marking & Cutting
                </h3>
                <p className="model-content-desc">
                  Combines CO₂ and Fiber laser sources in one flatbed machine, allowing you to mark organic materials, plastics, and metals in a single job setup without changing laser tubes manually.
                </p>

                <div className="glance-detail-grid">
                  <div className="diagram-box image-centered">
                    <img src="/images/hero_speedy_flexx_lineup.png" alt="Speedy flexx laser" className="eline-preview-img" />
                  </div>

                  <div className="specs-table-wrapper">
                    <h4 className="table-heading">Technical data</h4>
                    <table className="glance-tech-table">
                      <tbody>
                        <tr>
                          <td className="spec-name">Working area</td>
                          <td className="spec-val font-semibold">up to 40 x 24 in (1016 x 610 mm)</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Max. workpiece height</td>
                          <td className="spec-val font-semibold">12 in (305 mm)</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Laser type</td>
                          <td className="spec-val">CO₂ & Fiber Dual Resonators</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Laser power</td>
                          <td className="spec-val">CO₂: 60-120W / Fiber: 20-50W</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="glance-action-btn-row">
                      <button 
                        className="btn-outline-red"
                        onClick={() => {
                          if (onNavigateSpeedy) onNavigateSpeedy();
                        }}
                      >
                        Explore Speedy flexx
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Which laser marker is best for my requirements? */}
      <section id="applications" className="marker-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Which laser marker is best for my requirements?</h2>
            <p className="section-subtitle">
              Find the right laser marking system for your material, application field or industry.
            </p>
          </div>

          {/* 3 Main Category Cards */}
          <div className="requirements-cards-grid">
            <div className="req-card">
              <div className="req-img-wrap">
                <img src="/images/industrial_serial_plates.png" alt="Metal, plastics, organic materials" />
              </div>
              <div className="req-card-body">
                <h3 className="req-card-title">Metal, plastics, organic materials</h3>
                <a href="#materials-breakdown" onClick={(e) => { e.preventDefault(); handleScrollTo('materials-breakdown'); }} className="req-link">
                  <span>Explore material marking</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="req-card">
              <div className="req-img-wrap">
                <img src="/images/laserable_bottles_gifts.png" alt="Functional or decorative marking, dynamic data" />
              </div>
              <div className="req-card-body">
                <h3 className="req-card-title">Functional or decorative marking, dynamic data</h3>
                <a href="#functional-breakdown" onClick={(e) => { e.preventDefault(); handleScrollTo('functional-breakdown'); }} className="req-link">
                  <span>Explore functional marking</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            <div className="req-card">
              <div className="req-img-wrap">
                <img src="/images/marker_industries_fleet.png" alt="Industries" />
              </div>
              <div className="req-card-body">
                <h3 className="req-card-title">Industries</h3>
                <a href="#industry-breakdown" onClick={(e) => { e.preventDefault(); handleScrollTo('industry-breakdown'); }} className="req-link">
                  <span>Explore industry solutions</span>
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Laser marker for metals, plastics and organic materials */}
      <section id="materials-breakdown" className="marker-section section-light">
        <div className="container">
          <div className="section-header left">
            <h2 className="section-title text-left">Laser marker for metals, plastics and organic materials</h2>
          </div>

          <div className="marker-app-stack">
            {/* Metal Marking */}
            <div className="marker-app-row">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Cost-effective and sustainable metal marking</h3>
                <p className="marker-app-desc">
                  Laser machines <span className="underline-bold">mark soft and hard metals</span> and alloys quickly, legibly and permanently. Trotec laser marking machines are suitable for a wide range of applications, from <span className="underline-bold">marking for traceability</span>, flexible logos and product marking to a batch size of one and the <span className="underline-bold">personalization of promotional gifts</span>. Achieve the lowest cost per mark through non-contact marking processes without tool wear or consumables. With the use of annealing, even steel alloys can be processed without damaging the metal surface.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Metal marking</span>
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/industrial_serial_plates.png" alt="Cost-effective and sustainable metal marking" className="marker-feature-img" />
              </div>
            </div>

            {/* Plastic Marking */}
            <div className="marker-app-row reverse">
              <div className="marker-app-img-col">
                <img src="/images/marker_plastic_switch.png" alt="High quality marking of plastics with fiber laser" className="marker-feature-img" />
              </div>
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Achieve high quality, efficient marking of plastics with a fiber laser</h3>
                <p className="marker-app-desc">
                  <span className="underline-bold">Mark plastics such as ABS, PC and polyamide</span> quickly, permanently and to the highest quality. Thanks to the option of variable marking content, even single piece and small batch production can be marked economically, as setup times are eliminated. Fiber lasers are especially well suited for marking plastics, and they offer high-quality and consistent results that are easy to implement. In addition, fiber lasers are virtually maintenance-free and have an enormously long service life of at least 25,000 laser hours. A fiber laser marker allows you to quickly and easily mark a wide range of plastic materials with precision and to a high standard.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking of plastics</span>
                </button>
              </div>
            </div>

            {/* Organic Materials */}
            <div className="marker-app-row">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Fast and efficient marking of organic materials such as textiles, leather, and wood</h3>
                <p className="marker-app-desc">
                  Finish organic materials like wood and wood-based materials with <span className="underline-bold">CO₂ laser marking machines of the SpeedMarker series</span>. By using twin plates, even more items can be marked in a single marking pass. This is especially helpful when marking promotional gifts such as pens, USB sticks or lighters.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>CO₂ laser marker</span>
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/marker_wooden_pens.png" alt="Marking of organic materials such as wood and leather" className="marker-feature-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Functional Marking & Dynamic Data */}
      <section id="functional-breakdown" className="marker-section section-white">
        <div className="container">
          <div className="section-header left">
            <h2 className="section-title text-left">Functional & Dynamic Data Laser Marking</h2>
          </div>

          <div className="marker-app-stack">
            {/* Functional marking: data matrix codes */}
            <div className="marker-app-row reverse">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Functional marking: data matrix codes; serial numbers on metals</h3>
                <p className="marker-app-desc">
                  Detailed traceability of high-pressure or heavy-surface-area components to reduce surplus parts. Therefore, high quality and durable laser marking is required to ensure complete traceability for quality assurance. Laser marking machines produce precise high-resolution data matrix codes or serial numbers on smallest metallic surfaces and on intensive parts.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking for traceability</span>
                  <ExternalLink size={14} />
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/marker_enclosure_bed.png" alt="Data matrix codes and serial numbers" className="marker-feature-img" />
              </div>
            </div>

            {/* Dynamic Data */}
            <div className="marker-app-row">
              <div className="marker-app-img-col">
                <img src="/images/industrial_serial_plates.png" alt="Marking with dynamic data" className="marker-feature-img" />
              </div>
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Marking with dynamic data</h3>
                <p className="marker-app-desc">
                  Thanks to the high precision of laser marking, micro-text / 1-point fonts and fine graphics are perfectly legible. In the optics line, laser marking produces consistent results that are resistant to abrasion, heat and oil. <span className="underline-bold">Type plates and model tags</span> can be marked contactlessly, without consumables or noise. This ensures that plastics and metals can be marked quickly and easily for traceability.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking for traceability</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Medical, Automotive & Electronics */}
      <section className="marker-section section-light">
        <div className="container">
          <div className="marker-app-stack">
            {/* Medical Technology */}
            <div className="marker-app-row">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Laser marking in medical technology: precise and secure marking</h3>
                <p className="marker-app-desc">
                  Surgical and medical instruments and even implants can be marked with a marking laser. Thanks to their resistance to acids, detergents and body fluids, these markings remain readable marking-care items. Even thin plastics remain in the body for long-times, so harmful substances are released from the laser marking.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser markers in medical technology</span>
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/trotec_laser_marker_head.png" alt="Laser marking in medical technology" className="marker-feature-img" />
              </div>
            </div>

            {/* Automotive Industry with Video */}
            <div className="marker-app-row reverse">
              <div className="marker-app-img-col">
                <div className="video-player-container">
                  <video 
                    src="/marking/automotive.webm" 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="marker-feature-img video-element"
                    poster="/images/marker_automotive_connector.png"
                  >
                    Your browser does not support playing webm video.
                  </video>
                  <div className="video-label-badge">
                    <span>High-Speed Automotive Laser Marking (marking/automotive.webm)</span>
                  </div>
                </div>
              </div>
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">High-quality, cost-effective laser marking in the automotive industry</h3>
                <p className="marker-app-desc">
                  Laser marking enables the seamless, trace-free traceability of safety-relevant components in the automotive industry. To ensure this, production data, date, part, serial and batch numbers must be optically legible on all materials. Our laser machines are flexibly adapted for customer-specific manufacturing processes and offer a cost-effective, high-quality solution for marking of automotive components.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser markers for automotive industry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Automotive & Industrial Action Video Showcase */}
      <section className="marker-action-video-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title text-white">Automotive & Industrial Laser Marking Video Demonstration</h2>

            <div className="video-tab-switcher">
              <button 
                className={`video-tab-btn ${videoTab === 'plate' ? 'active' : ''}`}
                onClick={() => setVideoTab('plate')}
              >
                <span>Serial Plate Marking</span>
              </button>
              <button 
                className={`video-tab-btn ${videoTab === 'automotive' ? 'active' : ''}`}
                onClick={() => setVideoTab('automotive')}
              >
                <span>Automotive Component Marking</span>
              </button>
            </div>
          </div>
          <div className="featured-video-frame">
            <video 
              key={videoTab}
              src={videoTab === 'plate' ? '/marking/plate.webm' : '/marking/automotive.webm'} 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="featured-video-player"
            >
              Your browser does not support playing webm video.
            </video>
          </div>
        </div>
      </section>

      <section className="marker-section section-light">
        <div className="container">
          <div className="marker-app-stack">
            {/* Electronics & Sensors */}
            <div className="marker-app-row">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Cost-efficient manufacturing in the electronics and sensor industry</h3>
                <p className="marker-app-desc">
                  In the electrical industry, printed circuit boards, microchips and switches are usually marked contactlessly in mass production. In the process, components that include several pieces of information must be labeled using small and complex 2D codes. With a laser marker, high-contrast, permanent and extremely fast markings can be achieved without the use of consumables.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser markers for electronic components</span>
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/marker_automotive_connector.png" alt="Electronics and sensor marking" className="marker-feature-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Tool Making, Jewelry, Plastics, Aerospace & Promotional */}
      <section className="marker-section section-white">
        <div className="container">
          <div className="marker-app-stack">
            {/* Tool & Mold Making */}
            <div className="marker-app-row reverse">
              <div className="marker-app-img-col">
                <img src="/images/marker_drill_bits.png" alt="Tool and mold making" className="marker-feature-img" />
              </div>
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Flexible and permanent laser marking in tool and mold making</h3>
                <p className="marker-app-desc">
                  Laser marking of serial numbers, dynamic data and data plates can be precisely applied to tools with different geometry, even in the smallest font sizes. At the same time, the workpiece properties are not changed, since laser processing is contactless and chemical-free.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking of tool making tools</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Jewelry Industry */}
            <div className="marker-app-row">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Perfect precision: ultra-thin, detailed, high-quality laser markings for the jewelry industry</h3>
                <p className="marker-app-desc">
                  Not just for engraving, suitable for marking all parts. Our laser machines allow customized laser contact marking and photo-like marking of rings or necklace pendants. Fast turnaround component, watch springs, oscillating weights, watch hands, crowns, watch cases, watch straps and dials can all be marked and engraved efficiently.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking for watch/jewelry manufacturing</span>
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/marker_watch_rotors.png" alt="Laser marking for the jewelry industry" className="marker-feature-img" />
              </div>
            </div>

            {/* Plastics Technology */}
            <div className="marker-app-row reverse">
              <div className="marker-app-img-col">
                <img src="/images/marker_plastic_valve.png" alt="Durable marking solutions in plastics technology" className="marker-feature-img" />
              </div>
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Durable and efficient marking solutions in plastics technology</h3>
                <p className="marker-app-desc">
                  Plastics technology benefits from precise and efficient laser marking. Using techniques such as color change or surface foaming, plastic components can be marked permanently, legibly and with high contrast while saving material and resources.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking of plastics</span>
                </button>
              </div>
            </div>

            {/* Aerospace Industry */}
            <div className="marker-app-row">
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Secure proof of origin in the aerospace industry</h3>
                <p className="marker-app-desc">
                  Thanks to their high heat resistance and contactless marking, laser marking machines offer the traceability of aircraft, satellite and rocket engine components. Traditional technologies print tags that can be lost or melt and are difficult to read, especially if there's damage from a crash or accident.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser markers for aerospace</span>
                  <ExternalLink size={14} />
                </button>
              </div>
              <div className="marker-app-img-col">
                <img src="/images/marker_aerospace_rover.png" alt="Secure proof of origin in aerospace" className="marker-feature-img" />
              </div>
            </div>

            {/* Promotional Products */}
            <div className="marker-app-row reverse">
              <div className="marker-app-img-col">
                <img src="/images/promotional_water_bottle.jpg" alt="Laser markers in promotional products" className="marker-feature-img" />
              </div>
              <div className="marker-app-text-col">
                <h3 className="marker-app-heading">Laser markers in the promotional products industry</h3>
                <p className="marker-app-desc">
                  In the promotional products industry, items made of different materials such as leather, textiles, glass, paper and plastic are commonly processed. The combination of Speedy laser engravers and SpeedMarker laser marking systems is ideal for the high-quality marking of these products.
                </p>
                <button 
                  className="btn-outline-red flex-btn"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <span>Laser marking promotional products</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: SpeedMark® Software */}
      <section id="software-section" className="marker-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">SpeedMark marking software for automated marking sequences</h2>
          </div>

          {/* Workflow 4-Step Process */}
          <div className="ruby-workflow-grid">
            <div className="workflow-step-card">
              <div className="step-icon-circle">
                <Lightbulb size={24} className="icon-red" />
              </div>
              <h4 className="step-title">You've got an idea.</h4>
            </div>

            <div className="workflow-step-card">
              <div className="step-icon-circle">
                <Edit3 size={24} className="icon-red" />
              </div>
              <h4 className="step-title">Create the design directly in the software.</h4>
            </div>

            <div className="workflow-step-card">
              <div className="step-icon-circle">
                <Monitor size={24} className="icon-red" />
              </div>
              <h4 className="step-title">Run jobs directly on your laser machine.</h4>
            </div>

            <div className="workflow-step-card">
              <div className="step-icon-circle">
                <Sparkles size={24} className="icon-red" />
              </div>
              <h4 className="step-title">Obtain a perfect laser marking.</h4>
            </div>
          </div>

          <div className="ruby-info-content-box">
            <p className="ruby-paragraph">
              SpeedMark provides program modules for all standard marking tasks, including the creation of dynamic data, serial numbers and codes. You don't need any special programming knowledge for this. There are no upper limits – you can implement completely automated marking with user-specific interfaces. You can maximize the efficiency and quality of your individual work orders and reduce potential sources of error by making use of various scripting options.
            </p>
            <div className="center-btn-wrap">
              <button 
                className="btn-outline-red"
                onClick={() => setQuoteModalOpen(true)}
              >
                Marking software SpeedMark
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Service Offers */}
      <section id="service-section" className="marker-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Service offers for your laser marking machine.</h2>
          </div>

          <div className="accessories-grid-large">
            {/* Card 1 */}
            <div className="acc-card-large">
              <div className="acc-img-large-wrap">
                <img src="/images/trocare_van_technician.png" alt="TroCare maintenance" />
              </div>
              <div className="acc-card-body">
                <h3 className="acc-card-heading">TroCare: top maintenance for maximum productivity</h3>
                <p className="acc-card-text">
                  Unexpected repair costs or a complete machine failure can be disastrous. That is why our TroCare packages include free annual maintenance of your Trotec laser marker. If the laser should lose power or malfunction, our customer service is available on the phone and in person, and they'll do everything in their power to get you back up and running quickly at no additional cost.
                </p>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  TroCare
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="acc-card-large">
              <div className="acc-img-large-wrap">
                <img src="/images/ruby_laser_software_operator.png" alt="Bespoke laser solutions" />
              </div>
              <div className="acc-card-body">
                <h3 className="acc-card-heading">Customized laser markers for integration into your production line</h3>
                <p className="acc-card-text">
                  We analyze the laser process and your production flow with all its framework conditions to arrive at your customized laser solution. Your system will be optimally adapted to your productivity requirements, standard conformities, time and budget requirements as well as machine and laser safety.
                </p>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Bespoke laser solutions <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 11: Market Insights */}
      <section id="market-insights" className="marker-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Useful insights about laser marking methods</h2>
            <p className="section-subtitle">
              Would you like to learn more about marking lasers before making an investment? Find everything you need to know about laser marking in this guide.
            </p>
          </div>

          <div className="insights-grid-2">
            {/* Insight 1 */}
            <div className="insight-card">
              <div className="insight-icon-wrap">
                <Layers size={28} className="icon-red" />
              </div>
              <h3 className="insight-title">Laser plotter vs. galvo laser</h3>
              <p className="insight-text">
                Laser plotters (also flatbed lasers) and Galvo lasers differ in the way the laser beam is directed onto the material. With a laser plotter, the laser beam is guided along the x and y axis by using fixed mirrors, while with the Galvo laser, the laser beam is guided by fast-moving mirrors.
              </p>
              <button 
                className="btn-outline-red font-sm"
                onClick={() => setInsightModal({
                  title: "Laser plotter vs. galvo laser",
                  content: "Galvo lasers utilize high-speed motorized mirrors inside a compact scanning head, achieving marking speeds up to 12,000 mm/s on localized areas. Laser plotters (flatbed systems) move the entire laser head along gantry rails, allowing larger processing tables (up to 1000x600mm) suitable for both heavy cutting and large-area raster engraving."
                })}
              >
                Laser plotter vs. galvo laser
              </button>
            </div>

            {/* Insight 2 */}
            <div className="insight-card">
              <div className="insight-icon-wrap">
                <Flame size={28} className="icon-red" />
              </div>
              <h3 className="insight-title">How does laser marking work?</h3>
              <p className="insight-text">
                In laser marking, the surface is processed with a compressed, pulsed laser beam, which leads to a change in the material. This can range from discoloration, engraving and removal to foaming.
              </p>
              <button 
                className="btn-outline-red font-sm"
                onClick={() => setInsightModal({
                  title: "How does laser marking work?",
                  content: "Laser marking relies on solid-state fiber or CO₂ laser pulses targeting surface molecules. Main laser marking methods include Annealing (heat-induced oxidation beneath steel surfaces without burning), Engraving (material removal via vaporization), Foaming (gas bubbles trapped in polymers creating light contrast), and Ablation (removing surface coatings)."
                })}
              >
                Laser marking
              </button>
            </div>
          </div>

          {/* Technology Comparison Tabs */}
          <div className="tech-comparison-block">
            <h3 className="comp-block-heading">Laser marking vs. needle embossing and Ink Jet</h3>
            
            <div className="comp-tab-buttons">
              <button 
                className={`comp-tab-btn ${comparisonTab === 'embossing' ? 'active' : ''}`}
                onClick={() => setComparisonTab('embossing')}
              >
                Laser marking vs. needle embossing
              </button>
              <button 
                className={`comp-tab-btn ${comparisonTab === 'inkjet' ? 'active' : ''}`}
                onClick={() => setComparisonTab('inkjet')}
              >
                Laser marking vs. Inkjet
              </button>
            </div>

            <div className="comp-content-box">
              <ul className="comp-bullet-list">
                <li><Check size={18} className="check-red" /> Contactless process protects fragile parts from mechanical stress</li>
                <li><Check size={18} className="check-red" /> Zero consumables like ink, solvent cartridges, or stylus needles</li>
                <li><Check size={18} className="check-red" /> Ultra-high resolution legibility down to 1-point microtext</li>
                <li><Check size={18} className="check-red" /> Indestructible, tamper-proof, chemical-resistant markings</li>
                <li><Check size={18} className="check-red" /> Fastest cycle times for high-volume automated production lines</li>
                <li><Check size={18} className="check-red" /> Virtually zero maintenance for solid-state fiber laser engines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Modal */}
      {insightModal && (
        <div className="marker-modal-backdrop" onClick={() => setInsightModal(null)}>
          <div className="marker-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setInsightModal(null)}>✕</button>
            <h3 className="modal-title">{insightModal.title}</h3>
            <p className="modal-desc" style={{ lineHeight: 1.7, fontSize: '0.975rem', marginTop: '1rem' }}>
              {insightModal.content}
            </p>
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button className="btn-primary-red" onClick={() => { setInsightModal(null); setQuoteModalOpen(true); }}>
                Consult Marking Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Request Quote Modal */}
      {quoteModalOpen && (
        <div className="marker-modal-backdrop" onClick={() => setQuoteModalOpen(false)}>
          <div className="marker-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setQuoteModalOpen(false)}>✕</button>
            
            {!formSubmitted ? (
              <>
                <h3 className="modal-title">Request Fiber Laser Marker Information & Pricing</h3>
                <p className="modal-desc">
                  Fill out the form below to receive detailed technical specifications, OEM galvo integration manuals, or a live marking demonstration in UAE.
                </p>
                <form onSubmit={handleFormSubmit} className="modal-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Company Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Marking Application</label>
                    <CustomSelect
                      defaultValue="Metal & Stainless Steel Marking / Annealing"
                      options={[
                        'Metal & Stainless Steel Marking / Annealing',
                        'Plastic Parts & Electronics',
                        'Traceability, 2D Barcodes & QR Codes',
                        'Medical Devices & Surgical Instruments',
                        'Automotive & Aerospace Traceability',
                        'Jewelry, Fine Engraving & Medallions',
                        'OEM Galvo Head Production Line Integration'
                      ]}
                      onChange={val => setFormData({...formData, application: val})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message / Requirements</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about the metals or plastics you need to mark..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary-red full-width">
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank You!</h3>
                <p>Your laser marker inquiry has been submitted successfully. Our industrial laser engineers will get back to you within 24 hours.</p>
                <button className="btn-outline-red" onClick={() => { setQuoteModalOpen(false); setFormSubmitted(false); }}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LaserMarkerDetailPage;
