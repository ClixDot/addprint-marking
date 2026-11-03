import React, { useState, useEffect } from 'react';
import './ELineDetailPage.css';
import { 
  ArrowLeft, ArrowRight, Check, CheckCircle2, ShieldCheck, 
  Zap, Download, Send, Sparkles, Wrench, Play, ChevronDown, ChevronUp 
} from 'lucide-react';
import CustomSelect from './CustomSelect';
import { type DetailedProduct } from '../data/productsData';

interface ELineDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onNavigateSpeedy?: () => void;
}

export default function ELineDetailPage({ onBack, onNavigateSpeedy }: ELineDetailPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeMaterialType, setActiveMaterialType] = useState<'organic' | 'plastic' | 'metal'>('organic');
  const [activeTabCategory, setActiveTabCategory] = useState<string>('hardware');
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const galleryItems: Array<{ type: 'image' | 'video'; src: string; title: string }> = [
    { type: 'video', src: "/5.mp4", title: "E340 Laser Cutting Action (5.mp4)" },
    { type: 'image', src: "/images/e340_honeycomb_bed.png", title: "E340 CO2 Laser Honeycomb Cutting Bed" },
    { type: 'image', src: "/images/e340_slat_table.png", title: "E340 Aluminum Slat Cutting Table" },
    { type: 'image', src: "/images/e340_laser_head.png", title: "Precision OptiMotion™ Laser Head" },
    { type: 'image', src: "/images/e340_rotary_attachment.png", title: "E340 Rotary Engraving Attachment" },
    { type: 'image', src: "/images/speedy_100.png", title: "Compact Workstation System" }
  ];

  const advantages = [
    {
      title: "Reliable performance made simple",
      desc: "The E340 delivers dependable cutting and engraving quality supported by a robust mechanical design and OptiMotion™ for clean, consistent results. It is built for everyday workbench signage, education, and creative applications — without unnecessary complexity."
    },
    {
      title: "Streamlined workflow with Ruby® Essential",
      desc: "Ruby® Essential brings design, job preparation, and machine control together as a unified, connected workstation. Automated checks and real-time status information keep your production flow efficient from start to job completion."
    },
    {
      title: "Connected smart solution",
      desc: "Hardware, Ruby® software, and intelligent system information work together as a unified, connected solution. Automated checks and real-time status information help avoid errors, support mobile operation, and keep your laser running reliably day after day."
    },
    {
      title: "Adjustable service and support packages",
      desc: "The E340 starts at an attractive entry price, and you can tailor your package with training, support, and spare parts coverage as your business grows. You only pay for what you need, while knowing that expert Trotec assistance is always available when required."
    }
  ];

  const includedFeatures = [
    {
      title: "Automatic focusing",
      desc: "Automatically sets the workbench ensuring the laser is positioned at the correct focus point without manual adjustment.",
      linkText: "Read more about automatic focusing"
    },
    {
      title: "Working tables",
      desc: "E340 includes an aluminum slat table and honeycomb cutting matrix. Both fit precisely as one unit and can be swapped for individual use when needed.",
      linkText: "Learn more about laser tables"
    },
    {
      title: "2 inch focus lens",
      desc: "E340 comes with a 2 inch focus lens, optimized for reliable all-round performance across common engraving and cutting applications.",
      linkText: "Learn more about focus lenses"
    },
    {
      title: "Air assist",
      desc: "Integrated air assist blows soot and fumes away from the cutting kerf to protect optical components and deliver clean cut edges.",
      linkText: "Read more about air assist"
    },
    {
      title: "CE certificate",
      desc: "Fully certified to strict European CE laser safety standards with Class 2 interlocked enclosure protection.",
      linkText: "Learn more about safety"
    },
    {
      title: "Laser pointer",
      desc: "Red diode laser pointer shows exact starting position for fast alignment before initiating jobs.",
      linkText: "Learn more about positioning"
    },
    {
      title: "Rotary engraving equipment",
      desc: "Achieve reliable results on cylindrical, round, or conical objects with our rotary engraving attachment.",
      linkText: "Read more about rotary engraving"
    },
    {
      title: "Vision Print&Cut",
      desc: "A camera with the ability to detect registration marks ensures the precise and efficient cutting of materials printed with graphics or designs.",
      linkText: "Learn more about Vision Print&Cut"
    },
    {
      title: "Exhaust systems",
      desc: "Trotec's Atmos exhaust system efficiently removes dust and fumes, making them the ideal companion for E340 lasers.",
      linkText: "Learn more about exhaust systems"
    }
  ];

  const materialMatrix = {
    organic: [
      { name: "Wood & MDF", engrave: true, cut: true },
      { name: "Mirror & Glass", engrave: true, cut: false },
      { name: "Paper & Cardboard (White)", engrave: true, cut: true },
      { name: "Paper & Cardboard (Colored)", engrave: true, cut: true },
      { name: "Food & Organic items", engrave: true, cut: true },
      { name: "Leather & Suede", engrave: true, cut: true },
      { name: "Textiles & Fabric", engrave: true, cut: true },
      { name: "Glass (Transparent)", engrave: true, cut: false },
      { name: "Glass (Colored)", engrave: true, cut: false }
    ],
    plastic: [
      { name: "Acrylic (TroGlass, Cast & Extruded)", engrave: true, cut: true },
      { name: "Plastic Sheets (TroLase)", engrave: true, cut: true },
      { name: "Foams & Packaging", engrave: true, cut: true },
      { name: "Films & Foils", engrave: true, cut: true },
      { name: "Polyester & Polycarbonate", engrave: true, cut: true }
    ],
    metal: [
      { name: "Anodized Aluminum", engrave: true, cut: false },
      { name: "Coated Metal Plates", engrave: true, cut: false },
      { name: "Bare Metals (with marking spray)", engrave: true, cut: false }
    ]
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById('eline-demo-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="eline-detail-page">
      {/* Top Header Back Bar */}
      <div className="eline-topbar">
        <div className="container">
          <div className="topbar-flex">
            <div></div>
          </div>
        </div>
      </div>

      {/* Section 1: Hero Product Showcase (E340 CO2 Laser Cutter) */}
      <section className="eline-hero-showcase">
        <div className="container">
          <div className="eline-hero-grid">
            {/* Left: Gallery Visual */}
            <div className="eline-visual-box">
              <div className="eline-main-img-wrap">
                {galleryItems[selectedGalleryIdx].type === 'video' ? (
                  <video 
                    src={galleryItems[selectedGalleryIdx].src} 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                    className="eline-main-video" 
                  />
                ) : (
                  <img 
                    src={galleryItems[selectedGalleryIdx].src} 
                    alt={galleryItems[selectedGalleryIdx].title} 
                    className="eline-main-img" 
                  />
                )}
              </div>
              <div className="eline-thumb-row">
                {galleryItems.map((item, idx) => (
                  <button 
                    key={idx} 
                    className={`eline-thumb-btn ${selectedGalleryIdx === idx ? 'active' : ''} ${item.type === 'video' ? 'thumb-video-btn' : ''}`}
                    onClick={() => setSelectedGalleryIdx(idx)}
                    title={item.title}
                  >
                    {item.type === 'video' ? (
                      <div className="thumb-video-preview">
                        <video src={item.src} muted preload="metadata" />
                        <div className="thumb-play-overlay">
                          <Play size={14} fill="#ffffff" color="#ffffff" />
                        </div>
                      </div>
                    ) : (
                      <img src={item.src} alt={item.title} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Meta & Overview */}
            <div className="eline-info-box">
              <h1 className="eline-title">E340 CO2 Laser Cutter</h1>
              <p className="eline-subtitle">All a laser cutter needs</p>

              <p className="eline-lead-desc">
                Step into the world of mission CO₂ laser cutting with a system that gives you exactly what you need — reliable quality, effortless workflows, and smart features designed to help you work faster and more confidently.
              </p>

              <div className="eline-why-choose-block">
                <h3>Why choose E340?</h3>
                <ul className="eline-checklist">
                  <li>
                    <strong>Reliable cutting & engraving quality</strong> thanks to proven core technologies and robust build that minimize downtime and keep your production running smoothly.
                  </li>
                  <li>
                    <strong>Simple, efficient workflow with Ruby® Essential</strong>, combining design, job preparation, and machine control into one connected platform for faster, cleaner, and more intuitive operation.
                  </li>
                  <li>
                    <strong>OptiMotion™ automation for clean, fast cuts.</strong> Automatically adjusting speed and acceleration so you save cut time while maintaining consistently high-quality results.
                  </li>
                  <li>
                    <strong>Continuous system control and smart diagnostics</strong>, giving you real-time monitoring of laser, exhaust filters, and temperature — increasing uptime and making operation easier, even for beginners.
                  </li>
                  <li>
                    <strong>Flexible support options</strong>, allowing you to start with an attractive entry-level system and add premium Trotec training, service, and spare parts support whenever you need it.
                  </li>
                </ul>
              </div>

              <div className="eline-action-btns">
                <button onClick={handleScrollToDemo} className="btn-eline-red">
                  <span>Request a demo</span>
                  <ArrowRight size={15} />
                </button>
                <a href="#contact" className="btn-eline-outline">
                  <Download size={15} />
                  <span>Download brochure</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Advantages of the E340 */}
      <section className="eline-advantages-section">
        <div className="container">
          <div className="section-head-left">
            <h2>Advantages of the E340 — professional CO₂ laser cutting made simple</h2>
          </div>

          <div className="eline-adv-grid">
            {advantages.map((adv, idx) => (
              <div key={idx} className="eline-adv-card">
                <div className="adv-icon-badge">
                  {idx === 0 && <ShieldCheck size={22} />}
                  {idx === 1 && <Sparkles size={22} />}
                  {idx === 2 && <Zap size={22} />}
                  {idx === 3 && <Wrench size={22} />}
                </div>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Included features of the E340 */}
      <section className="eline-features-section">
        <div className="container">
          <div className="section-head-left">
            <h2>Included features of the E340</h2>
          </div>

          <div className="eline-features-grid">
            {includedFeatures.map((feat, idx) => (
              <div key={idx} className="eline-feature-card">
                <div className="feat-header-row">
                  <h4>{feat.title}</h4>
                  <span className="feat-info-dot">i</span>
                </div>
                <p>{feat.desc}</p>
                <a href="#contact" className="eline-feat-link">
                  <span>{feat.linkText}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Material compatibility */}
      <section className="eline-materials-section">
        <div className="container">
          <div className="section-head-left">
            <h2>Material compatibility with the E340</h2>
          </div>

          {/* Material Category Selector Tabs */}
          <div className="eline-mat-tabs">
            {(['organic', 'plastic', 'metal'] as const).map(tab => (
              <button
                key={tab}
                className={`mat-tab-btn ${activeMaterialType === tab ? 'active' : ''}`}
                onClick={() => setActiveMaterialType(tab)}
              >
                {tab === 'organic' && 'Organic materials'}
                {tab === 'plastic' && 'Plastic'}
                {tab === 'metal' && 'Metal'}
              </button>
            ))}
          </div>

          {/* Table Card */}
          <div className="eline-table-card">
            <table className="eline-mat-table">
              <thead>
                <tr>
                  <th>Material Category</th>
                  <th className="text-center">Engraving / Marking CO₂</th>
                  <th className="text-center">Cutting CO₂</th>
                </tr>
              </thead>
              <tbody>
                {materialMatrix[activeMaterialType].map((item, idx) => (
                  <tr key={idx}>
                    <td className="mat-name-cell">{item.name}</td>
                    <td className="text-center">
                      {item.engrave ? (
                        <span className="check-icon-yes"><Check size={16} /></span>
                      ) : (
                        <span className="dash-icon-no">—</span>
                      )}
                    </td>
                    <td className="text-center">
                      {item.cut ? (
                        <span className="check-icon-yes"><Check size={16} /></span>
                      ) : (
                        <span className="dash-icon-no">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="eline-mat-cta-row">
            <button onClick={handleScrollToDemo} className="btn-eline-red">
              <span>Schedule E340 online demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Technical data of E340 */}
      <section className="eline-tech-section">
        <div className="container">
          <div className="section-head-left">
            <h2>Technical data of E340</h2>
          </div>

          <div className="eline-tech-table-card">
            <div className="tech-table-header">E340 RF</div>
            <table className="eline-tech-table">
              <tbody>
                <tr>
                  <td className="tech-prop">Working area (W x D)</td>
                  <td className="tech-val">875 x 560 mm | 34.4 x 22.0 in</td>
                </tr>
                <tr>
                  <td className="tech-prop">Max. height of workpiece</td>
                  <td className="tech-val">210 mm | 8.3 in</td>
                </tr>
                <tr>
                  <td className="tech-prop">Loading area (W x D)</td>
                  <td className="tech-val">991 x 691 mm | 39.0 x 27.2 in</td>
                </tr>
                <tr>
                  <td className="tech-prop">Overall dimensions (W x D x H)</td>
                  <td className="tech-val">1520 x 1205 x 1115 mm | 59.8 x 47.5 x 43.9 in</td>
                </tr>
                <tr>
                  <td className="tech-prop">Max. processing speed</td>
                  <td className="tech-val">1.2 m/s | 47.2 ips</td>
                </tr>
                <tr>
                  <td className="tech-prop">Max. acceleration</td>
                  <td className="tech-val">25 m/s² | 984.3 in/s²</td>
                </tr>
                <tr>
                  <td className="tech-prop">Technology motion system</td>
                  <td className="tech-val">Brushless stepper motor</td>
                </tr>
                <tr>
                  <td className="tech-prop">Laser power CO₂</td>
                  <td className="tech-val">Sealed-off RF CO₂ laser 60 W</td>
                </tr>
                <tr>
                  <td className="tech-prop">Laser class</td>
                  <td className="tech-val">Class 2 safety interlocked enclosure</td>
                </tr>
                <tr>
                  <td className="tech-prop">Weight</td>
                  <td className="tech-val">Approx. 275 kg | 606.3 lbs</td>
                </tr>
                <tr>
                  <td className="tech-prop">Power consumption</td>
                  <td className="tech-val">1 ~ AC 110-230 V, 50/60 Hz, 1000 W</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: Upgrade to Speedy Series Banner */}
      <section className="eline-upgrade-banner">
        <div className="container">
          <div className="upgrade-banner-split">
            <div className="upgrade-visual">
              <img 
                src="/images/speedy_workshop_studio.png" 
                alt="Trotec Speedy Series Machines" 
                className="upgrade-img"
              />
            </div>
            <div className="upgrade-content">
              <h2>Are you looking for an industry-level laser machine?</h2>
              <p>
                If your business requires even higher throughput and maximum productivity, explore our Speedy series. While the E340 stands for reliable, straightforward laser cutting and engraving, the Speedy line is engineered for demanding workflows with superior speed, advanced automation options, and industry-leading productivity. Compare both series to find the perfect fit for your long-term growth.
              </p>
              <button 
                onClick={onNavigateSpeedy || onBack} 
                className="btn-eline-red"
              >
                <span>Discover the Speedy series</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Live Demo / Quote Request Form */}
      <section id="eline-demo-form" className="eline-form-section">
        <div className="container">
          <div className="section-head-center">
            <h2>See innovation in motion — request an E340 online live demo</h2>
          </div>

          <div className="eline-form-wrapper">
            {formSubmitted ? (
              <div className="eline-success-msg">
                <CheckCircle2 size={48} className="text-green" />
                <h3>Thank You for Requesting E340 Live Demo!</h3>
                <p>Our UAE laser technical specialists in Abu Dhabi and Dubai will contact you within 2 business hours to schedule your live demonstration.</p>
                <button onClick={() => setFormSubmitted(false)} className="btn-eline-outline mt-4">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="eline-demo-form">
                <div className="form-head-label">How can we help you?</div>
                <div className="form-category-tabs">
                  {[
                    { id: 'hardware', label: 'Hardware enquiry' },
                    { id: 'material', label: 'Material consultation' },
                    { id: 'support', label: 'Technical support' },
                    { id: 'other', label: 'Other' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`form-cat-btn ${activeTabCategory === cat.id ? 'active' : ''}`}
                      onClick={() => setActiveTabCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>First name *</label>
                    <input type="text" required placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last name *</label>
                    <input type="text" required placeholder="Doe" />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Email address *</label>
                    <input type="email" required placeholder="john@company.ae" />
                  </div>
                  <div className="form-group">
                    <label>Phone number *</label>
                    <input type="tel" required placeholder="+971 50 123 4567" />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Company name *</label>
                    <input type="text" required placeholder="Your Business LLC" />
                  </div>
                  <div className="form-group">
                    <label>Country *</label>
                    <CustomSelect
                      defaultValue="United Arab Emirates"
                      options={['United Arab Emirates','Saudi Arabia','Oman','Kuwait','Bahrain','Qatar']}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Laser experience</label>
                    <CustomSelect
                      defaultValue="Beginner (First laser purchase)"
                      options={['Beginner (First laser purchase)','Intermediate (Existing laser user)','Advanced (High-volume industrial operator)']}
                    />
                  </div>
                  <div className="form-group">
                    <label>Industry</label>
                    <CustomSelect
                      defaultValue="Signage & Advertising"
                      options={['Signage & Advertising','Education & Fablabs','Packaging & Prototyping','Personalized Gifts']}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional comments or questions</label>
                  <textarea rows={4} placeholder="Tell us about your materials, cutting thickness, or project requirements..."></textarea>
                </div>

                <button type="submit" className="btn-eline-red submit-eline-btn">
                  <span>Submit E340 Live Demo Request</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
