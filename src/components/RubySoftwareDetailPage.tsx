import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Monitor, 
  Zap, 
  ShieldCheck, 
  Download, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  Play, 
  Cpu, 
  Cloud, 
  Users, 
  Globe, 
  FileText, 
  Grid 
} from 'lucide-react';
import type { DetailedProduct } from '../data/productsData';
import './RubySoftwareDetailPage.css';

interface RubySoftwareDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
}

export const RubySoftwareDetailPage: React.FC<RubySoftwareDetailPageProps> = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const rubyVideos = [
    { src: "/video/ruby-1.webm", title: "Ruby 1 - Seamless Graphic Prep & Setup", desc: "Design, edit and prepare laser jobs in one software environment." },
    { src: "/video/ruby-2.webm", title: "Ruby 2 - Direct Vector & Text Editing", desc: "Create graphics, photos and text without switching programs." },
    { src: "/video/ruby-3.webm", title: "Ruby 3 - Zero Driver File Imports", desc: "Import PDF, SVG, AI, DXF directly with automatic error fixing." },
    { src: "/video/ruby-4.webm", title: "Ruby 4 - Cross-Platform Access (Mac & PC)", desc: "Web-based workflow compatible across Windows, Mac, Linux & tablets." },
    { src: "/video/ruby-5.webm", title: "Ruby 5 - Network Job Distribution", desc: "Send jobs to multiple lasers across local network from anywhere." },
    { src: "/video/ruby-6.webm", title: "Ruby 6 - Multi-User Team Roles", desc: "Manage operator permissions, shared presets and material databases." }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "What's the best laser software for laser engraving?",
      a: "Ruby® is specifically designed by Trotec for laser engraving and cutting. It provides seamless vector editing, automatic line thickness detection, zero-driver print jobs, and cloud-based material presets for perfect contrast on every engraving project."
    },
    {
      q: "Which laser software do you use for laser cutting?",
      a: "Trotec Run on Ruby® is the official software platform for all Speedy and SP series laser cutters. It automatically optimizes cutting paths, skips overlapping cut lines, and calculates OptiMotion™ motion trajectories for up to 8x faster cutting speeds."
    },
    {
      q: "Will the Ruby® laser software work on Mac?",
      a: "Yes! Ruby® is completely client- and platform-independent. You can run it on Windows 10/11, macOS, Linux, or iPadOS via any modern web browser without installing heavy software drivers."
    },
    {
      q: "In which languages is the laser software available?",
      a: "Ruby® supports over 25 languages including English, German, French, Spanish, Italian, Japanese, Chinese, and Arabic."
    }
  ];

  return (
    <div className="ruby-software-detail-page">
      {/* 1. Hero Section */}
      <section className="ruby-hero-section">
        <div className="container">
          <div className="ruby-hero-header">
            <div className="detail-category-tag" style={{ marginBottom: '1.25rem' }}>
              Official Trotec Laser Software
            </div>
            <h1 className="ruby-hero-title">
              Why you need the Ruby® laser software.
            </h1>
            <p className="ruby-hero-lead">
              What does every laser user need today and in the future? A laser software that allows daily work with laser cutters and laser engravers to run seamlessly. A simple and quick workflow from the idea to the finished product. A platform that guarantees profitable order processing. A networked, web-based and fully digital setup. A user interface that delights. Ruby® has all of that. For simpler, faster work with your laser. Digital to the core.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => handleScrollTo('ruby-demo-form')} 
                className="btn-trotec-red"
              >
                <span>Get your laser software Ruby®</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>

          {/* 4 Advantage Cards Grid */}
          <div className="ruby-advantages-grid">
            <div className="ruby-adv-card">
              <div className="ruby-adv-icon">
                <Zap size={24} />
              </div>
              <h3>Speed up your workflow</h3>
              <p>
                Ruby® provides graphic editing and laser control in one software. With many applications, there's no need to switch between programs, and no time-consuming print-driver workflow.
              </p>
            </div>

            <div className="ruby-adv-card">
              <div className="ruby-adv-icon">
                <Layers size={24} />
              </div>
              <h3>Work independently</h3>
              <p>
                Prepare jobs from anywhere within the same network. Work together with different roles and permissions. Client and platform independent.
              </p>
            </div>

            <div className="ruby-adv-card">
              <div className="ruby-adv-icon">
                <Sparkles size={24} />
              </div>
              <h3>Anybody can use a laser</h3>
              <p>
                Minimum training required. A user interface that guides you intuitively, with self-explanatory tools and cloud-based material presets.
              </p>
            </div>

            <div className="ruby-adv-card">
              <div className="ruby-adv-icon">
                <Globe size={24} />
              </div>
              <h3>Be ready for the future</h3>
              <p>
                Web-based platform with an integrated cloud-based material database. Constantly being developed further for higher automation and integration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner CTA Box */}
      <section className="ruby-cta-banner">
        <div className="container">
          <div className="ruby-cta-box">
            <div className="ruby-cta-text">
              <h3>You want to simplify your workflow?</h3>
              <p>Get your laser software Ruby® today and experience seamless digital laser processing.</p>
            </div>
            <button 
              onClick={() => handleScrollTo('ruby-demo-form')}
              className="btn-trotec-red"
            >
              <span>Download Ruby®</span>
              <span className="btn-arrow-circle">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Split Features Section */}
      <section className="ruby-split-section">
        <div className="container">
          <div className="ruby-split-grid">
            <div className="ruby-split-image-wrapper">
              <img 
                src="/images/ruby_laser_software_operator_hd.jpg" 
                alt="Ruby Laser Software Operator at PC" 
              />
            </div>
            <div className="ruby-split-content">
              <div className="ruby-split-block">
                <h3>As a graphic design software for the laser machine, Ruby® guarantees a seamless workflow.</h3>
                <p>
                  Create designs, graphics, photos and text elements. You can quickly make adjustments with the integrated workflow. You can switch between the "design" and "prepare" steps at any time in the Ruby® software that is both a graphics and a laser program. With all the graphics tools that laser users need. These functionalities halve the time taken from the idea to the finished product.
                </p>
              </div>

              <div className="ruby-split-block">
                <h3>Work independently. Multiple users on multiple machines.</h3>
                <p>
                  Ruby® connects all your laser machines in one network. You can distribute jobs across multiple machines from a PC or Mac. Jobs are loaded onto the integrated memory of the Trotec Run on Ruby® laser machines and processed without an additional PC. Thanks to the new workflow, jobs can be prepared by one user and produced by another, anywhere and at any time within the same network.
                </p>
              </div>

              <div className="ruby-split-block">
                <h3>The user interface will delight you.</h3>
                <p>
                  The Ruby® laser software accompanies the user from the idea to the finished product. The seamless workflow starts with the design and continues from preparation to production. Self-explanatory, minimal training is required. The cloud-based material database guarantees the best laser results right away. The user selects the material and material effect such as deep engraving, dark engraving or kiss cut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Workflow Steps Bar */}
      <section className="ruby-workflow-section">
        <div className="container">
          <div className="ruby-workflow-header">
            <h2>From the idea to the product</h2>
            <p>
              All processing steps for laser users are integrated in one software. The workflow leads you step by step from the idea of a laser job to the finished end product. Graphic work, laser-related job preparation and laser operation can be carried out by different people seamlessly.
            </p>
          </div>



          {/* Interactive Ruby 1-6 Video Showcase Gallery */}
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f2b48', marginBottom: '1.25rem', textAlign: 'center' }}>
              Ruby® Live Workflow Video Demonstrations (Videos 1 to 6)
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
              {/* Main Active Video Player */}
              <div style={{ background: '#0b182b', borderRadius: '16px', overflow: 'hidden', minHeight: '360px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                <video 
                  key={selectedVideoIdx}
                  src={rubyVideos[selectedVideoIdx].src} 
                  controls 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', maxHeight: '460px', objectFit: 'contain', display: 'block' }}
                />
                <div style={{ padding: '1rem 1.25rem', background: '#070d14', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--color-green, #BED35D)' }}>
                      Clip {selectedVideoIdx + 1}: {rubyVideos[selectedVideoIdx].title}
                    </strong>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', margin: '0.2rem 0 0' }}>
                      {rubyVideos[selectedVideoIdx].desc}
                    </p>
                  </div>
                  <span className="ruby-addon-badge" style={{ margin: 0 }}>Ruby® Demo</span>
                </div>
              </div>

              {/* Video Selector Thumbnails List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '280px' }}>
                {rubyVideos.map((vid, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideoIdx(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '12px',
                      border: selectedVideoIdx === idx ? '2px solid var(--color-green, #BED35D)' : '1px solid #cbd5e1',
                      background: selectedVideoIdx === idx ? '#f5f8e6' : '#ffffff',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '8px', 
                      background: selectedVideoIdx === idx ? 'var(--color-green, #BED35D)' : '#f1f5f9',
                      color: '#111827',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontWeight: 800,
                      fontSize: '0.85rem'
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f2b48', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {vid.title}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {vid.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detailed Feature Blocks with Embedded Videos 1 to 6 */}
      <section className="ruby-detail-feature-block">
        <div className="container">
          {/* Block 1 - Video 1 */}
          <div className="ruby-feature-split" style={{ marginBottom: '5rem' }}>
            <div className="ruby-feature-info">
              <h3>Creating graphic and text elements.</h3>
              <p>
                Ruby® is an advanced laser workflow software that provides all the graphic tools that you need to create designs, graphics, photo and text elements, preventing the need for time-consuming switching between laser software and design software. Ruby software seamlessly works with files created in CorelDraw, Adobe Illustrator, AutoCAD, SVG, PDF, JPG, PNG, and BMP.
              </p>
              <div className="ruby-feature-stats">
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">1</span>
                  <span className="ruby-stat-label">Software Platform</span>
                </div>
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">∞</span>
                  <span className="ruby-stat-label">Design Functions</span>
                </div>
              </div>
            </div>
            <div className="ruby-feature-media">
              <video 
                src="/video/ruby-1.webm" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Block 2 - Video 2 */}
          <div className="ruby-feature-split reverse" style={{ marginBottom: '5rem' }}>
            <div className="ruby-feature-media">
              <video 
                src="/video/ruby-2.webm" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="ruby-feature-info">
              <h3>No hairlines, no RGB color code, no more configuring the sheet size.</h3>
              <p>
                You can import files such as pdf, svg, png, jpg, cdr or ai directly in Ruby® without a printer driver. The tedious work steps of printing out laser jobs from the graphics program is omitted. When files are loaded, errors are automatically detected and fixed, optimizing them for the laser machine.
              </p>
              <div className="ruby-feature-stats">
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">&gt;10</span>
                  <span className="ruby-stat-label">Import Formats</span>
                </div>
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">0</span>
                  <span className="ruby-stat-label">Printer Driver Needed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 - Video 3 */}
          <div className="ruby-feature-split" style={{ marginBottom: '5rem' }}>
            <div className="ruby-feature-info">
              <h3>Mac, Tablet, PC — Platform Independent.</h3>
              <p>
                Create your laser jobs on a Mac, work through them on a PC in your production department and check your laser progress on a tablet while on the go. Ruby® is platform- and client-independent – be it Windows, Linux or Mac. For all operating systems.
              </p>
              <div className="ruby-feature-stats">
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">1</span>
                  <span className="ruby-stat-label">Unified Platform</span>
                </div>
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">∞</span>
                  <span className="ruby-stat-label">Clients & OS</span>
                </div>
              </div>
            </div>
            <div className="ruby-feature-media">
              <video 
                src="/video/ruby-3.webm" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Block 4 - Video 4 */}
          <div className="ruby-feature-split reverse" style={{ marginBottom: '5rem' }}>
            <div className="ruby-feature-media">
              <video 
                src="/video/ruby-4.webm" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="ruby-feature-info">
              <h3>Access anytime and anywhere.</h3>
              <p>
                Prepare your laser jobs from anywhere within the same network. Whether creating architectural drawings remotely, cutting jobs in prepress or last-minute customer changes before production: with Ruby® you don't need to be directly at the laser machine.
              </p>
              <div className="ruby-feature-stats">
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">∞</span>
                  <span className="ruby-stat-label">Places to Prepare</span>
                </div>
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">1</span>
                  <span className="ruby-stat-label">Network Connection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 5 - Video 5 & 6 */}
          <div className="ruby-feature-split">
            <div className="ruby-feature-info">
              <h3>Multiple users & seamless team collaboration.</h3>
              <p>
                You can work together as a team with different roles and permissions. For example, operators can only adjust laser parameters for the job but not overwrite the saved material database. Prepress and production work together seamlessly.
              </p>
              <div className="ruby-feature-stats">
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">1</span>
                  <span className="ruby-stat-label">Laser Machine</span>
                </div>
                <div className="ruby-stat-item">
                  <span className="ruby-stat-num">0</span>
                  <span className="ruby-stat-label">Workflow Barriers</span>
                </div>
              </div>
            </div>
            <div className="ruby-feature-media">
              <video 
                src="/video/ruby-5.webm" 
                controls 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ width: '100%', maxHeight: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Smart Add-on Section */}
      <section className="ruby-addon-section">
        <div className="container">
          <div className="ruby-addon-box">
            <span className="ruby-addon-badge">Smart Add-on Feature</span>
            <h2>New: Send jobs to multiple lasers – directly from your browser</h2>
            <p>
              The Ruby® Smart Add-on is a free browser extension that allows users to send jobs directly to the Ruby® queue – including simultaneous job distribution to multiple lasers. It significantly reduces manual steps in multi-machine environments and is ideal for batch production and repetitive jobs.
            </p>

            <div className="ruby-addon-checklist">
              <div className="ruby-addon-check-item">
                <Check size={18} />
                <span>Operate multiple lasers in parallel and need efficient job distribution</span>
              </div>
              <div className="ruby-addon-check-item">
                <Check size={18} />
                <span>Run batch or repetitive production jobs</span>
              </div>
              <div className="ruby-addon-check-item">
                <Check size={18} />
                <span>Manage shared machine environments (production teams or educational labs)</span>
              </div>
              <div className="ruby-addon-check-item">
                <Check size={18} />
                <span>Want to reduce preparation time and avoid repetitive manual tasks</span>
              </div>
            </div>

            <div className="ruby-addon-actions">
              <button 
                onClick={() => handleScrollTo('ruby-demo-form')} 
                className="btn-trotec-red"
              >
                <span>Download the Ruby Smart Add-on</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comprehensive 19-Feature Grid */}
      <section className="ruby-all-features-section">
        <div className="container">
          <div className="ruby-grid-header">
            <h2>More features of our Ruby® laser software</h2>
            <p>Designed to maximize productivity, accuracy, and automation for every laser application.</p>
          </div>

          <div className="ruby-all-features-grid">
            <div className="ruby-feature-card-item">
              <h4>Import files directly</h4>
              <p>Import pdf, svg, png, jpg, cdr, ai directly without printer drivers. Errors are automatically fixed.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Control multiple lasers</h4>
              <p>Distribute jobs across multiple machines from one PC or Mac seamlessly over local network.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Network connectivity</h4>
              <p>Connect all laser machines to one network and access job queues anywhere in the shop floor.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Assign material effects</h4>
              <p>No tedious laser parameter guesswork. Select pre-calibrated material profiles and kiss cut or engrave.</p>
            </div>

            <div className="ruby-feature-card-item">
              <h4>Access job data anywhere</h4>
              <p>Prepare laser jobs remotely from your desk office without standing in front of the laser machine.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Full online & offline support</h4>
              <p>Stay updated with online cloud presets or work completely offline with locally stored parameters.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Speedy & SP compatibility</h4>
              <p>Compatible with all Trotec Speedy lasers and Trotec SP500 systems manufactured since 2004.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Optimize cutting jobs</h4>
              <p>Skip overlapping cut lines and nest vector parts directly inside Ruby® for maximum sheet usage.</p>
            </div>

            <div className="ruby-feature-card-item">
              <h4>Share parameters & jobs</h4>
              <p>Export and share verified laser material parameters and job templates with team members.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Rotary engraving workflow</h4>
              <p>Create, scale, and turn rotary jobs on the object with 3D preview before firing the laser.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Extended Print & Cut</h4>
              <p>Use vision registration marks to auto-align printed sheets even under ultra-low contrast light.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Bitmap tracing</h4>
              <p>Convert bitmap logos into vector cutlines automatically with one click inside the workspace.</p>
            </div>

            <div className="ruby-feature-card-item">
              <h4>Advanced Array function</h4>
              <p>Duplicate and tile designs across the full working bed instantly with precise spacing.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Hot Folder import profiles</h4>
              <p>Drop files into designated Hot Folders for automated processing and queued production.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Virtual job positioning</h4>
              <p>Align laser jobs live on live camera view over workpieces without manual ruler measurement.</p>
            </div>
            <div className="ruby-feature-card-item">
              <h4>Cutting screens</h4>
              <p>Clip graphics and photo elements precisely using closed vector shapes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Dark Testimonials */}
      <section className="ruby-testimonials-section">
        <div className="container">
          <div className="ruby-testimonials-header">
            <h2>What our customers love about the Ruby® laser software.</h2>
          </div>

          <div className="ruby-testimonials-grid">
            <div className="ruby-testi-card">
              <img src="/images/speedy_workshop_studio.png" alt="My Swedish Love" className="ruby-testi-img" />
              <div className="ruby-testi-body">
                <div className="ruby-testi-name">My Swedish Love</div>
                <div className="ruby-testi-loc">Austria • Customer Story</div>
                <p className="ruby-testi-quote">
                  "With Trotec's laser software Ruby®, My Swedish Love is now even more flexible and faster in customizing ethical baby gifts."
                </p>
              </div>
            </div>

            <div className="ruby-testi-card">
              <img src="/images/speedmarker_series_facility.png" alt="Kitzbühler Garage Line" className="ruby-testi-img" />
              <div className="ruby-testi-body">
                <div className="ruby-testi-name">Kitzbühler Garage Line</div>
                <div className="ruby-testi-loc">Austria • Customer Story</div>
                <p className="ruby-testi-quote">
                  "At the Kitzbühler Garage Line, professionals and novices have access to over 60 machines to realize their ideas. The three Trotec lasers running Ruby® are our most sought-after tools."
                </p>
              </div>
            </div>

            <div className="ruby-testi-card">
              <img src="/images/trotec_laser_materials_warehouse.png" alt="Otemae University" className="ruby-testi-img" />
              <div className="ruby-testi-body">
                <div className="ruby-testi-name">Otemae University</div>
                <div className="ruby-testi-loc">Japan • Customer Story</div>
                <p className="ruby-testi-quote">
                  "At Otemae University, students use a Speedy 400 with Ruby® software to produce intricate architectural models and accessories with zero learning curve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs Section */}
      <section className="ruby-faq-section">
        <div className="container">
          <div className="ruby-faq-header">
            <h2>FAQs about Ruby®</h2>
          </div>

          <div className="ruby-faq-accordion">
            {faqs.map((faq, idx) => (
              <div key={idx} className="ruby-faq-item">
                <button className="ruby-faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease' 
                    }} 
                  />
                </button>
                {activeFaq === idx && (
                  <div className="ruby-faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Live Demo Form */}
      <section id="ruby-demo-form" className="ruby-demo-section">
        <div className="container">
          <div className="ruby-demo-card">
            <div className="ruby-demo-head">
              <h2>Ruby® live presentation. Contact us.</h2>
              <p>Schedule a live demonstration or consultation with our laser software specialists in UAE.</p>
            </div>

            {formSubmitted ? (
              <div className="form-success-box" style={{ padding: '2.5rem' }}>
                <CheckCircle2 size={48} color="var(--color-green-dark, #7e9420)" />
                <h3 style={{ fontSize: '1.4rem', color: '#0f2b48', marginTop: '0.75rem' }}>
                  Presentation Request Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                  Our software specialist will contact you shortly to schedule your online or in-person Ruby® demonstration.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn-trotec-red"
                  style={{ marginTop: '1rem' }}
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="sidebar-form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Work Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@company.com" 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+971 50 123 4567" 
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Company LLC" 
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message / Software Questions</label>
                  <textarea 
                    rows={3} 
                    placeholder="Tell us about your laser machine model or workflow goals..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-trotec-red" 
                  style={{ width: '100%', height: '52px', marginTop: '0.5rem', justifyContent: 'center' }}
                >
                  <span>Request Ruby® Live Presentation</span>
                  <span className="btn-arrow-circle">
                    <ArrowRight size={14} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RubySoftwareDetailPage;
