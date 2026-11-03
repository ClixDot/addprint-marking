import React, { useState, useEffect } from 'react';
import './SpeedMarkerDetailPage.css';
import { 
  ArrowRight, Check, CheckCircle2, 
  Download, Send, Plus, Minus
} from 'lucide-react';
import { type DetailedProduct } from '../data/productsData';

interface SpeedMarkerDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
}

export default function SpeedMarkerDetailPage(_props: SpeedMarkerDetailPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeModel, setActiveModel] = useState('1600');
  const [activeMatTab, setActiveMatTab] = useState<'fiber' | 'co2'>('fiber');
  const [inquiryType, setInquiryType] = useState('Machine Enquiry');
  const [expandedOption, setExpandedOption] = useState<string | null>('class2');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const modelsList = [
    { id: '1600', name: 'SpeedMarker 1600', img: '/images/speedmarker_series_facility.png', area: '1300 × 450 mm | 51.18 × 17.72 in', height: '424 mm | 16.69 in' },
    { id: '1350', name: 'SpeedMarker 1350', img: '/images/trotec_laser_marker_head.png', area: '1000 × 450 mm | 39.37 × 17.72 in', height: '400 mm | 15.75 in' },
    { id: '1300', name: 'SpeedMarker 1300', img: '/images/speedmarker_series_facility.png', area: '800 × 450 mm | 31.50 × 17.72 in', height: '350 mm | 13.78 in' },
    { id: '700', name: 'SpeedMarker 700', img: '/images/speedy_100.png', area: '310 × 310 mm | 12.20 × 12.20 in', height: '250 mm | 9.84 in' },
    { id: '700RT', name: 'SpeedMarker 700RT', img: '/images/speedy_300.png', area: '310 × 310 mm | 12.20 × 12.20 in', height: '220 mm | 8.66 in' },
    { id: '50', name: 'SpeedMarker 50', img: '/images/trotec_laser_marker_head.png', area: 'Modular galvo lens field', height: 'Inline integration' }
  ];

  const currentModelData = modelsList.find(m => m.id === activeModel) || modelsList[0];

  const optionsList = [
    { id: 'class2', title: 'Laser class 2 and CE certificate', desc: 'Certified for safety and compliance, making it suitable for use in any industrial setting without additional protective measures.' },
    { id: 'mopa', title: 'MOPA laser', desc: 'Offers adjustable pulse durations for high-contrast markings on metals and plastics, ideal for color marking and delicate surfaces.' },
    { id: 'vrotary', title: 'Virtual rotary', desc: 'Multi-level and round surface marking calculation without complex mechanical rotation setup.' },
    { id: 'fshifter', title: 'Focus shifter', desc: 'Rapid 3D z-axis height adjustment for multi-tiered component surfaces.' },
    { id: 'rotary', title: 'Rotary attachment', desc: '360° cylindrical marking for tools, bottles, and round parts.' },
    { id: 'handling', title: 'Handling & table options', desc: 'Slat, honeycomb, and automated shuttle table concept for efficient part positioning.' },
    { id: 'ffinder', title: 'Focus finder', desc: 'Dual laser pointer visual distance positioning system for instant focal setup.' },
    { id: 'border', title: 'Border marking', desc: 'Live perimeter preview of the marking bounding box on workpieces.' },
    { id: 'usermgmt', title: 'User management & individualized screens', desc: 'Role-based screen locking and operator mode to eliminate user errors.' },
    { id: 'visualprog', title: 'Visual programming', desc: 'Flowchart based rule builder for non-coders.' },
    { id: 'components', title: 'High-quality components', desc: 'IP-rated optical enclosures and Austrian galvo drives for 24/7 industrial uptime.' },
    { id: 'vision', title: 'Vision system', desc: 'High-precision camera scanning for registration mark detection and component placement.' }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="speedmarker-detail-page">
      {/* Sticky Topbar Header */}
      <div className="speedmarker-topbar">
        <div className="container">
          <div className="speedmarker-topbar-flex">
            <div></div>
            <button onClick={() => handleScrollTo('speedmarker-demo-form')} className="btn-eline-red">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with Dark Facility Photo & Checklist */}
      <section className="speedmarker-hero-banner">
        <div className="container">
          <div className="hero-banner-content">
            <h1 className="hero-banner-title">
              Industrial Laser Marking Machines SpeedMarker.
            </h1>

            <div className="hero-banner-list">
              <div className="hero-banner-item">
                <Check size={18} />
                <div><strong>Streamlined efficiency</strong> – Fast marking and automation for smooth, high-speed workflow.</div>
              </div>
              <div className="hero-banner-item">
                <Check size={18} />
                <div><strong>Reliable marking</strong> – Consistent results with industrial-grade components and quality-enhancing features.</div>
              </div>
              <div className="hero-banner-item">
                <Check size={18} />
                <div><strong>Simple to use</strong> – Operate with minimal training thanks to intuitive software and smart presets.</div>
              </div>
              <div className="hero-banner-item">
                <Check size={18} />
                <div><strong>SpeedMark® laser software</strong> – Automate tasks and handle dynamic data with a flexible, user-friendly interface.</div>
              </div>
            </div>

            <div className="hero-banner-actions">
              <button onClick={() => handleScrollTo('speedmarker-demo-form')} className="btn-trotec-red">
                <span>Contact us</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </button>
              <button onClick={() => handleScrollTo('speedmarker-demo-form')} className="btn-trotec-white-outline">
                <span>Connect with SpeedMarker expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subnav Ribbon Bar */}
      <div className="speedmarker-subnav-ribbon">
        <div className="container">
          <div className="speedmarker-subnav-flex">
            <button onClick={() => handleScrollTo('models')} className="active">SpeedMarker series</button>
            <button onClick={() => handleScrollTo('efficiency')}>Advantages</button>
            <button onClick={() => handleScrollTo('software')}>Products</button>
            <button onClick={() => handleScrollTo('materials')}>Materials</button>
            <button onClick={() => handleScrollTo('brochure')}>Download</button>
            <button onClick={() => handleScrollTo('speedmarker-demo-form')}>Request a demo</button>
          </div>
        </div>
      </div>

      {/* White Card Container Section: Models & Tech Data */}
      <section id="models" className="speedmarker-main-card-section">
        <div className="container">
          <div className="speedmarker-white-card">
            <h2 className="models-header-title">SpeedMarker the laser marking machines by Trotec</h2>
            <p className="models-header-subtitle">
              All machines in the SpeedMarker series come equipped with a high-speed galvo head. SpeedMarker systems are available with fiber lasers with a wavelength of 1064 nm or with a CO₂ RT laser (wavelength 10600 nm).
            </p>



            {/* Model Machines Selector Photos Row */}
            <div className="models-images-row">
              {modelsList.map(m => (
                <button
                  key={m.id}
                  className={`model-photo-btn ${activeModel === m.id ? 'active' : ''}`}
                  onClick={() => setActiveModel(m.id)}
                >
                  <img src={m.img} alt={m.name} />
                  <span className="model-name">{m.name}</span>
                </button>
              ))}
            </div>

            <p className="model-description-text">
              Large working area for direct marking of individual large components or high-volume batches of small parts. Software controlled x-, y- and z-axis as a standard, automatic lift door and SpeedMark® laser software. Different lenses are available.
            </p>

            {/* Technical Data Split */}
            <div className="tech-data-container">
              <div className="blueprint-diagram-box">
                <div className="diagram-outline">
                  <div className="diagram-inner"></div>
                </div>
                <div className="diagram-label">{currentModelData.name} ({currentModelData.area})</div>
              </div>

              <div>
                <h4 className="tech-table-title">Technical data</h4>
                <table className="official-tech-table">
                  <tbody>
                    <tr>
                      <td className="prop-name">Maximum marking area</td>
                      <td className="prop-val">{currentModelData.area}</td>
                    </tr>
                    <tr>
                      <td className="prop-name">Max. workpiece height (F160)</td>
                      <td className="prop-val">{currentModelData.height}</td>
                    </tr>
                    <tr>
                      <td className="prop-name">Laser power fiber</td>
                      <td className="prop-val">20 – 50 W</td>
                    </tr>
                    <tr>
                      <td className="prop-name">Laser power MOPA</td>
                      <td className="prop-val">20 – 100 W</td>
                    </tr>
                    <tr>
                      <td className="prop-name">Laser class</td>
                      <td className="prop-val">2</td>
                    </tr>
                  </tbody>
                </table>

                <div className="tech-buttons-row">
                  <button onClick={() => handleScrollTo('speedmarker-demo-form')} className="btn-trotec-red">
                    <span>Connect with SpeedMarker series expert</span>
                  </button>
                  <button onClick={() => window.open('/images/SpeedMarker-brochure.pdf', '_blank')} className="btn-trotec-red-outline">
                    <span>Download brochure</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Split Feature Sections */}
      <section id="efficiency" className="speedmarker-split-section">
        <div className="container">
          <div className="split-grid">
            <div className="split-visual-card">
              <img src="/images/hero_speedmarker_fleet.png" alt="Streamlined efficiency" />
            </div>
            <div className="split-text">
              <h3>Streamlined efficiency – optimized processes, higher throughput</h3>
              <p className="lead">
                SpeedMarker combines high-speed galvo marking (up to 12 m/sec) with powerful automation to streamline workflows and enhance productivity.
              </p>
              <div className="split-bullets">
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Automation via SpeedMark software</strong> – speeds up repetitive tasks and reduces manual effort</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Flexible scripting</strong> – from simple workflows to complex, integrated programs</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Batch functionality</strong> – efficient and precise marking of multiple items up to large series</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Dynamic data</strong> – serial numbers, timestamps, and codes generated directly in software</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Standardized interfaces</strong> – easy integration to production processes, ERP systems and databases</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Time-saving features</strong> – Focus Shifter & Virtual Rotary for multi-level and curved surfaces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="speedmarker-split-section alt-bg">
        <div className="container">
          <div className="split-grid">
            <div className="split-text">
              <h3>Reliable marking – maximize productivity, minimize errors</h3>
              <p className="lead">
                The SpeedMarker series ensures consistent, high-quality results—job after job—thanks to robust industrial-grade components and smart features that reduce error potential.
              </p>
              <div className="split-bullets">
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Reproducible quality</strong> with high-precision optics and high-quality components</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Minimized scrap and downtime</strong> through reliable performance and process stability</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Material database</strong> with preset parameters—no trial & error, no expert knowledge needed</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Automated data handling</strong>—dynamic content, serialization, and code generation directly in software</div>
                </div>
                <div className="split-bullet-item">
                  <Check size={16} />
                  <div><strong>Error prevention</strong> through automation and user-independent processes</div>
                </div>
              </div>
            </div>
            <div className="split-visual-card">
              <img src="/images/trotec_laser_marker_head.png" alt="Reliable Marking" />
            </div>
          </div>
        </div>
      </section>

      {/* SpeedMark Software Dark Section */}
      <section id="software" className="software-dark-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              SpeedMark® laser software – automation made easy
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
              SpeedMark is Trotec's powerful laser marking software designed for galvo lasers. It enables automated, flexible, and error-free marking workflows—no programming skills required.
            </p>
          </div>

          <div className="software-outline-grid">
            <div className="software-outline-card">
              <h4>Visual workflow creation</h4>
              <p>Design marking processes using drag & drop flowcharts without written code.</p>
            </div>
            <div className="software-outline-card">
              <h4>Advanced scripting</h4>
              <p>Automate complex tasks with adaptable Visual Basic scripts for ERP integration.</p>
            </div>
            <div className="software-outline-card">
              <h4>Dynamic data handling</h4>
              <p>Generate serial numbers, codes, and timestamps automatically.</p>
            </div>
          </div>

          <div className="text-center">
            <button onClick={() => handleScrollTo('speedmarker-demo-form')} className="btn-eline-red">
              <span>Learn more about SpeedMark®</span>
            </button>
          </div>
        </div>
      </section>

      {/* Customization Options Accordions List */}
      <section className="speedmarker-split-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f2b48', marginBottom: '0.75rem' }}>
              Your Process, your machine: customization options
            </h2>
          </div>

          <div className="accordion-grid-2">
            {optionsList.map(opt => {
              const isOpen = expandedOption === opt.id;
              return (
                <div key={opt.id} className="accordion-card">
                  <div 
                    className="accordion-header"
                    onClick={() => setExpandedOption(isOpen ? null : opt.id)}
                  >
                    <h4>{opt.title}</h4>
                    <div className="accordion-icon-circle">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="accordion-content">
                      {opt.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Table & Brochure Download */}
      <section id="materials" className="speedmarker-split-section alt-bg">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f2b48', marginBottom: '1rem' }}>
              Material compatibility with the SpeedMarker series
            </h2>
          </div>

          <div className="mat-tab-row">
            <button 
              className={`mat-tab-btn ${activeMatTab === 'fiber' ? 'active' : ''}`}
              onClick={() => setActiveMatTab('fiber')}
            >
              Fiber Laser (1064 nm)
            </button>
            <button 
              className={`mat-tab-btn ${activeMatTab === 'co2' ? 'active' : ''}`}
              onClick={() => setActiveMatTab('co2')}
            >
              CO₂ Laser (10600 nm)
            </button>
          </div>

          <div className="mat-table-wrapper" style={{ marginBottom: '4rem' }}>
            <table className="mat-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Marking</th>
                  <th>Engraving</th>
                  <th>Cutting</th>
                </tr>
              </thead>
              <tbody>
                {activeMatTab === 'fiber' ? (
                  <>
                    <tr><td>Metals & Alloys (Steel, Aluminum, Titanium)</td><td>✓ (High Contrast / Color)</td><td>✓ (Deep Engraving)</td><td>—</td></tr>
                    <tr><td>Plastics & ABS (TroLase, Polycarbonate)</td><td>✓ (Foaming / Color Change)</td><td>✓</td><td>—</td></tr>
                    <tr><td>Anodized Aluminum</td><td>✓ (White Contrast)</td><td>✓</td><td>—</td></tr>
                    <tr><td>Coated Metal Plates</td><td>✓ (Ablation)</td><td>✓</td><td>—</td></tr>
                    <tr><td>Silicon & Semiconductors</td><td>✓</td><td>✓</td><td>—</td></tr>
                  </>
                ) : (
                  <>
                    <tr><td>Acrylics & PMMA</td><td>✓</td><td>✓ (Flame Polished)</td><td>✓ (Clean Edge)</td></tr>
                    <tr><td>Wood & MDF</td><td>✓</td><td>✓</td><td>✓</td></tr>
                    <tr><td>Glass & Crystal</td><td>✓ (Micro-fracture)</td><td>✓</td><td>—</td></tr>
                    <tr><td>Paper & Cardboard</td><td>✓</td><td>✓</td><td>✓</td></tr>
                    <tr><td>Leather & Textiles</td><td>✓</td><td>✓</td><td>✓</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Brochure Box */}
          <div id="brochure" className="speedmarker-white-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', padding: '2rem 2.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2b48', marginBottom: '0.4rem' }}>
                Download SpeedMarker brochure
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                2026-05 Catalog SpeedMarker TEC EN.pdf
              </p>
            </div>
            <button onClick={() => window.open('/images/SpeedMarker-brochure.pdf', '_blank')} className="btn-eline-red">
              <Download size={18} />
              <span>Download brochure (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="speedmarker-demo-form" className="speedmarker-split-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f2b48', marginBottom: '1rem' }}>
              You want to know how you can increase your productivity with a laser marking machine?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b' }}>
              Our experts are happy to assist you.
            </p>
          </div>

          <div className="eline-form-wrapper">
            {formSubmitted ? (
              <div className="text-center" style={{ padding: '2rem 1rem' }}>
                <CheckCircle2 size={54} color="#e30613" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f2b48', marginBottom: '0.75rem' }}>
                  Thank you for your enquiry!
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '540px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
                  Our technical specialist will contact you shortly.
                </p>
                <button onClick={() => setFormSubmitted(false)} className="btn-eline-red">
                  <span>Submit Another Request</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f2b48', marginBottom: '0.75rem' }}>How can we help you?</label>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {['Machine Enquiry', 'Material Consultation', 'Technical Support', 'Other'].map(type => (
                      <button
                        key={type}
                        type="button"
                        className={`mat-tab-btn ${inquiryType === type ? 'active' : ''}`}
                        onClick={() => setInquiryType(type)}
                        style={{ padding: '0.45rem 1.15rem', fontSize: '0.82rem' }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f2b48', marginBottom: '0.4rem' }}>First Name *</label>
                    <input type="text" required placeholder="First Name" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f2b48', marginBottom: '0.4rem' }}>Last Name *</label>
                    <input type="text" required placeholder="Last Name" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f2b48', marginBottom: '0.4rem' }}>Email Address *</label>
                    <input type="email" required placeholder="Email Address" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f2b48', marginBottom: '0.4rem' }}>Phone Number *</label>
                    <input type="tel" required placeholder="Phone Number" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#0f2b48', marginBottom: '0.4rem' }}>Message</label>
                  <textarea rows={4} placeholder="Your requirements..." style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.9rem' }}></textarea>
                </div>

                <button type="submit" className="btn-eline-red" style={{ width: '100%', padding: '1rem' }}>
                  <Send size={18} />
                  <span>Send Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
