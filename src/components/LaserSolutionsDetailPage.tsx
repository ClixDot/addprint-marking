import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Building2, 
  ExternalLink,
  ChevronRight,
  Factory,
  Wrench,
  Cog,
  Users,
  Award
} from 'lucide-react';
import type { DetailedProduct } from '../data/productsData';
import './LaserSolutionsDetailPage.css';
import CustomSelect from './CustomSelect';

interface LaserSolutionsDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
}

export const LaserSolutionsDetailPage: React.FC<LaserSolutionsDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct
}) => {
  const [activeNav, setActiveNav] = useState<'machinery' | 'references' | 'specialists'>('machinery');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Inquire Industrial Laser Solutions');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solutionType: 'InMarker Line Integration',
    message: ''
  });

  const handleScrollTo = (id: string, navName?: typeof activeNav) => {
    if (navName) setActiveNav(navName);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const openInquiryFor = (title: string, solutionType: string) => {
    setModalTitle(title);
    setFormData(prev => ({ ...prev, solutionType }));
    setQuoteModalOpen(true);
  };

  return (
    <div className="solutions-detail-page">
      {/* Breadcrumb Bar */}
      <div className="solutions-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-nav">
            <button onClick={onBack} className="btn-back-link">
              ← Back to Products
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Industrial solutions for production lines & mechanical engineering</span>
          </div>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section className="solutions-hero-banner">
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <div className="solutions-hero-content">
            <div className="hero-badge">
              <Factory size={14} /> Turnkey Automation & Production Line Integration
            </div>
            <h1 className="solutions-hero-title">
              Industrial solutions for production lines mechanical engineering
            </h1>
            
            <div className="solutions-hero-actions">
              <button 
                className="btn-primary-red"
                onClick={() => openInquiryFor('Inquire Industrial Solutions', 'Production Line Integration')}
              >
                <span>Inquire now</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-navigation Jump Links */}
      <nav className="solutions-subnav-bar">
        <div className="container">
          <div className="subnav-links">
            <button 
              className={activeNav === 'machinery' ? 'active' : ''} 
              onClick={() => handleScrollTo('machinery-section', 'machinery')}
            >
              Machinery for product labeling
            </button>
            <button 
              className={activeNav === 'references' ? 'active' : ''} 
              onClick={() => handleScrollTo('industry-references', 'references')}
            >
              References from industry
            </button>
            <button 
              className={activeNav === 'specialists' ? 'active' : ''} 
              onClick={() => handleScrollTo('specialists-section', 'specialists')}
            >
              Specialists support
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Machinery for product labeling */}
      <section id="machinery-section" className="solutions-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title text-gray-800">Machinery for product labeling</h2>
          </div>

          <div className="machinery-grid-2x2">
            {/* Card 1: InMarker */}
            <div className="machinery-card">
              <div className="machinery-img-wrap">
                <img 
                  src="/images/solutions_inmarker_head.png" 
                  alt="InMarker Fiber laser and MOPA for labeling metal and plastics" 
                />
              </div>
              <div className="machinery-card-body">
                <h3 className="machinery-card-title">
                  InMarker · Fiber laser and MOPA for labeling metal and plastics InMarker
                </h3>
                <p className="machinery-card-text">
                  The powerful industrial laser engravers guarantee precise labeling with short cycle times as part of your production line, robot cell or production facility.
                </p>
                <div className="machinery-card-btn-wrap">
                  <button 
                    className="btn-outline-red font-sm"
                    onClick={() => openInquiryFor('InMarker Fiber & MOPA Integration', 'InMarker Integration')}
                  >
                    More about the InMarker
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: VIN Marker */}
            <div className="machinery-card">
              <div className="machinery-img-wrap">
                <img 
                  src="/images/solutions_vin_marker.png" 
                  alt="VIN Marker Fiber laser for deep engravings for rapid inline VIN and PIN labeling" 
                />
              </div>
              <div className="machinery-card-body">
                <h3 className="machinery-card-title">
                  VIN Marker · Fiber laser for deep engravings for rapid inline VIN and PIN labeling
                </h3>
                <p className="machinery-card-text">
                  These powerful integration lasers offer the perfect solution for the automotive industry. Co-developed, tested and used by household-name car manufacturers.
                </p>
                <div className="machinery-card-btn-wrap">
                  <button 
                    className="btn-outline-red font-sm"
                    onClick={() => openInquiryFor('VIN Marker Automotive Solutions', 'VIN & PIN Marker')}
                  >
                    More about the VIN marker
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Safetycone */}
            <div className="machinery-card">
              <div className="machinery-img-wrap">
                <img 
                  src="/images/solutions_safetycone.png" 
                  alt="Safetycone Laser safety gasket for integrated laser markers" 
                />
              </div>
              <div className="machinery-card-body">
                <h3 className="machinery-card-title">
                  Safetycone · Laser safety gasket for integrated laser markers to provide the perfect safety solution for integrated laser markers
                </h3>
                <p className="machinery-card-text">
                  This laser protection cone saves both the effort and cost of housing and a control cabinet. With laser class 1, you can enjoy the highest possible level of safety in your production environment.
                </p>
                <div className="machinery-card-btn-wrap">
                  <button 
                    className="btn-outline-red font-sm"
                    onClick={() => openInquiryFor('Safetycone Protection Gasket', 'Safetycone Class 1')}
                  >
                    More about the Safetycone
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Customized Laser Solutions */}
            <div className="machinery-card">
              <div className="machinery-img-wrap">
                <img 
                  src="/images/solutions_customized_modular.png" 
                  alt="Customized laser solutions in a modular system" 
                />
              </div>
              <div className="machinery-card-body">
                <h3 className="machinery-card-title">
                  Customized laser solutions in a modular system
                </h3>
                <p className="machinery-card-text">
                  The Trotec Galvo Competence Center is an expert department that handles specific customer requirements that are not able to be performed using the standard laser systems available on the market. Generally speaking, Trotec's galvo specialists use the SpeedMarker series or InMarker series as the basis for developing these type of systems.
                </p>
                <div className="machinery-card-btn-wrap">
                  <button 
                    className="btn-outline-red font-sm"
                    onClick={() => openInquiryFor('Custom Modular Laser Solutions', 'Modular Custom System')}
                  >
                    More about customized solutions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: References from industry */}
      <section id="industry-references" className="solutions-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title text-gray-800">References from industry</h2>
          </div>

          <div className="references-logo-row">
            {/* Logo 1: b beck */}
            <div className="reference-logo-item">
              <div className="logo-badge-b">b</div>
              <span className="logo-text-beck">beck</span>
            </div>

            {/* Logo 2: DILLINGER */}
            <div className="reference-logo-item">
              <span className="logo-text-dillinger">DILLINGER<sup>®</sup></span>
            </div>

            {/* Logo 3: HK Hoffmann + Krippner */}
            <div className="reference-logo-item">
              <div className="logo-hk-box">
                <span className="hk-icon">HK</span>
                <span className="hk-sub">Hoffmann + Krippner</span>
              </div>
            </div>

            {/* Logo 4: Howden */}
            <div className="reference-logo-item">
              <div className="howden-logo-wrap">
                <span className="howden-symbol">🗲</span>
                <span className="howden-text">Howden</span>
              </div>
            </div>

            {/* Logo 5: Universität München */}
            <div className="reference-logo-item">
              <div className="uni-logo-wrap">
                <span className="uni-title">Universität</span>
                <span className="uni-sub">München</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Specialists to meet your industry-related requirements */}
      <section id="specialists-section" className="solutions-section section-light">
        <div className="container">
          <div className="specialists-content-box">
            <h2 className="section-title text-left">Specialists to meet your industry-related requirements</h2>
            <p className="specialists-desc">
              Our expert team in Industrial Requirements will provide you with advice and support for a feasibility study, training and commissioning. This team and the support of an additional 750 employees across the world provide you with a competent and reliable partner for your industrial processes.
            </p>
            <div className="specialists-btn-wrap">
              <button 
                className="btn-outline-red"
                onClick={() => openInquiryFor('Consult Industrial Specialists', 'Feasibility Study & Training')}
              >
                Find out more about it
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {quoteModalOpen && (
        <div className="solutions-modal-backdrop" onClick={() => setQuoteModalOpen(false)}>
          <div className="solutions-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setQuoteModalOpen(false)}>✕</button>
            
            {!formSubmitted ? (
              <>
                <h3 className="modal-title">{modalTitle}</h3>
                <p className="modal-desc">
                  Fill out the form below to connect with our industrial laser integration engineering team for custom CAD design, feasibility studies, and automated line integration.
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
                        placeholder="Industrial Manufacturing Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Solution Interest</label>
                    <CustomSelect
                      defaultValue="InMarker Fiber & MOPA Inline Integration"
                      options={[
                        'InMarker Fiber & MOPA Inline Integration',
                        'VIN & PIN Marker Automotive Deep Engraving',
                        'Safetycone Class 1 Laser Safety Gasket',
                        'Customized Modular Laser Cell System',
                        'Industrial Feasibility Study & On-Site Commissioning'
                      ]}
                      onChange={val => setFormData({...formData, solutionType: val})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Project / Production Line Details</label>
                    <textarea 
                      rows={3}
                      placeholder="Describe your cycle time requirements, material types, or PLC factory network interface..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary-red full-width">
                    Submit Solution Request
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Request Received!</h3>
                <p>Thank you for reaching out. Our industrial automation specialists will contact you within 24 hours to arrange a feasibility study.</p>
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

export default LaserSolutionsDetailPage;
