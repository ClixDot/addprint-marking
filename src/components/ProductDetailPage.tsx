import { useState, useEffect } from 'react';
import './ProductDetailPage.css';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, 
  Send, PhoneCall, FileText, Check, Layers, Sparkles 
} from 'lucide-react';
import { type DetailedProduct, PRODUCTS_DATA } from '../data/productsData';

interface ProductDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct: (product: DetailedProduct) => void;
}

export default function ProductDetailPage({ product, onBack, onSelectProduct }: ProductDetailPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    materialInterest: '',
    message: ''
  });

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFormSubmitted(false);
  }, [product.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const otherProducts = PRODUCTS_DATA.filter(p => p.id !== product.id);

  return (
    <div className="product-detail-page">
      {/* Top Header Back Bar */}
      <div className="product-detail-topbar">
        <div className="container">
          <div className="topbar-flex">
            <div></div>
          </div>
        </div>
      </div>

      {/* Hero Product Section */}
      <section className="product-detail-hero">
        <div className="container">
          <div className="detail-hero-grid">
            {/* Left: Image Showcase */}
            <div className="detail-image-column">
              <div className="detail-main-image-card">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="detail-main-img" 
                />
                {product.badge && (
                  <div className="detail-corner-badge">
                    <ShieldCheck size={14} />
                    <span>{product.badge}</span>
                  </div>
                )}
              </div>
              <div className="detail-image-caption">
                <span>Certified Austrian Laser Engineering</span>
                <span className="dot-sep">•</span>
                <span>ADDPRINT MARKING SYSTEMS TRADING LLC</span>
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="detail-info-column">
              <div className="detail-category-tag">{product.category}</div>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-tagline">{product.tagline}</p>

              <div className="detail-quick-specs">
                {product.specs.slice(0, 4).map((spec, sIdx) => (
                  <div key={sIdx} className="quick-spec-item">
                    <span className="quick-spec-label">{spec.label}</span>
                    <span className="quick-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="detail-cta-row">
                <a href="#quote-section" className="btn btn-primary detail-quote-cta">
                  <span>Request Official Quote</span>
                  <span className="btn-arrow-circle">
                    <ArrowRight size={14} />
                  </span>
                </a>
                <a href="tel:+97142985655" className="btn btn-secondary detail-call-cta">
                  <PhoneCall size={16} />
                  <span>+971 4 2985655</span>
                </a>
              </div>

              <div className="detail-trust-pills">
                <span className="trust-pill"><Check size={14} /> Official Trotec Partner</span>
                <span className="trust-pill"><Check size={14} /> UAE Local Warranty & Parts</span>
                <span className="trust-pill"><Check size={14} /> Live Demonstration Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="product-detail-body">
        <div className="container">
          <div className="detail-body-layout">
            {/* Main Content Column */}
            <div className="detail-main-content">
              {/* Detailed Overview */}
              <div className="detail-section-block">
                <h2 className="section-block-title">Product Overview</h2>
                <div className="detail-paragraphs">
                  {product.fullDescription.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="detail-section-block">
                <h2 className="section-block-title">Key Technological Advantages</h2>
                <div className="detail-features-grid">
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="feature-card">
                      <div className="feature-card-header">
                        <div className="feature-icon-circle">
                          <Sparkles size={18} />
                        </div>
                        <h3>{feat.title}</h3>
                      </div>
                      <p>{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="detail-section-block">
                <h2 className="section-block-title">Technical Specifications</h2>
                <div className="specs-table-wrapper">
                  <table className="specs-table">
                    <tbody>
                      {product.specs.map((spec, spIdx) => (
                        <tr key={spIdx}>
                          <td className="spec-name">{spec.label}</td>
                          <td className="spec-val">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Materials & Industries */}
              <div className="detail-section-block">
                <h2 className="section-block-title">Compatible Materials & Substrates</h2>
                <div className="materials-chip-cloud">
                  {product.materials.map((mat, mIdx) => (
                    <span key={mIdx} className="material-chip">
                      <CheckCircle2 size={14} />
                      <span>{mat}</span>
                    </span>
                  ))}
                </div>

                <h3 className="sub-block-title">Target Industries & Applications</h3>
                <div className="industries-list">
                  {product.industries.map((ind, iIdx) => (
                    <div key={iIdx} className="industry-item">
                      <Layers size={15} />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Packages & Options */}
              <div className="detail-section-block">
                <h2 className="section-block-title">Included Packages & Optional Add-ons</h2>
                <ul className="included-options-list">
                  {product.includedOptions.map((opt, oIdx) => (
                    <li key={oIdx}>
                      <CheckCircle2 size={16} className="opt-check-icon" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky Sidebar with Quote Form */}
            <aside className="detail-sidebar" id="quote-section">
              <div className="sidebar-quote-card">
                <div className="quote-card-header">
                  <FileText size={20} />
                  <h3>Request a Quote for {product.name}</h3>
                </div>
                <p className="quote-card-sub">
                  Get official pricing, material sample testing, and technical consultation from our Dubai & Abu Dhabi laser experts.
                </p>

                {formSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={36} color="var(--color-green-dark)" />
                    <h4>Inquiry Received!</h4>
                    <p>Our laser specialist will contact you with the official datasheet and quotation shortly.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)} 
                      className="btn btn-secondary btn-sm"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="sidebar-form">
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
                      <label>Company / Organization</label>
                      <input 
                        type="text" 
                        placeholder="Company name" 
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Materials you plan to process</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Acrylic, Stainless Steel, Wood..." 
                        value={formData.materialInterest}
                        onChange={e => setFormData({ ...formData, materialInterest: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Message / Project details</label>
                      <textarea 
                        rows={3} 
                        placeholder="Describe your requirements or questions..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-quote-btn">
                      <span>Submit Quote Inquiry</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}

                <div className="sidebar-contact-direct">
                  <span>Prefer to speak immediately?</span>
                  <a href="tel:+97142985655" className="direct-phone-link">
                    <PhoneCall size={14} /> +971 4 2985655
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Explore Other Products Bar */}
      <section className="detail-other-products section-light">
        <div className="container">
          <div className="other-header text-center">
            <h2>Explore Other Systems in Our Portfolio</h2>
            <p>Discover complete laser cutters, marking workstations, software, and materials.</p>
          </div>

          <div className="other-products-grid">
            {otherProducts.slice(0, 4).map(other => (
              <div 
                key={other.id} 
                className="other-product-card"
                onClick={() => onSelectProduct(other)}
              >
                <div className="other-img-box">
                  <img src={other.image} alt={other.name} />
                </div>
                <div className="other-card-info">
                  <h4>{other.name}</h4>
                  <p>{other.shortDescription}</p>
                  <button className="other-btn-view">
                    <span>View Specifications</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
