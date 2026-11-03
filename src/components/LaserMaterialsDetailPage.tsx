import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Leaf, 
  CheckCircle2, 
  FileText, 
  PackageCheck, 
  Layers, 
  Flame, 
  ExternalLink 
} from 'lucide-react';
import type { DetailedProduct } from '../data/productsData';
import './LaserMaterialsDetailPage.css';

interface LaserMaterialsDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
}

export const LaserMaterialsDetailPage: React.FC<LaserMaterialsDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    selectedMaterials: [] as string[],
    message: ''
  });

  const handleCheckboxChange = (mat: string) => {
    if (formData.selectedMaterials.includes(mat)) {
      setFormData({
        ...formData,
        selectedMaterials: formData.selectedMaterials.filter(item => item !== mat)
      });
    } else {
      setFormData({
        ...formData,
        selectedMaterials: [...formData.selectedMaterials, mat]
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'trolase', name: 'Laser material sheets', img: '/images/trolase_swatch_fan.png' },
    { id: 'troglass', name: 'Acrylic sheets', img: '/images/troglass_acrylic_shapes.png' },
    { id: 'wood', name: 'Wood sheets', img: '/images/laserwood_cutting_bed.png' },
    { id: 'metals', name: 'Metals', img: '/images/brushed_metal_slat.png' },
    { id: 'troply', name: 'Engraving supplies', img: '/images/trolase_swatch_fan.png' },
    { id: 'gifts', name: 'Gifts & Drinkware', img: '/images/laserable_bottles_gifts.png' }
  ];

  return (
    <div className="laser-materials-detail-page">
      {/* 1. Hero Section */}
      <section className="mat-hero-banner">
        <div className="container">
          <div className="mat-hero-content">
            <div className="detail-category-tag" style={{ marginBottom: '1.25rem', background: 'var(--color-green, #BED35D)', color: '#111827', border: 'none' }}>
              Authentic Trotec Certified Materials
            </div>
            <h1 className="mat-hero-title">
              Laser and engraving materials.
            </h1>
            <p className="mat-hero-sub">
              We offer two-ply sheet materials, various kinds of acrylic sheets as well as wood and metals for laser engraving, laser engraving supplies and gift products for personalization. With that, we are happy to provide you with a large variety of high quality engraving supplies in different colors, sizes and thicknesses for your daily business.
            </p>
            <div className="mat-hero-actions">
              <button 
                onClick={() => handleScrollTo('mat-sample-form')} 
                className="btn-trotec-red"
              >
                <span>Request Material Swatch Box</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </button>
              <button 
                onClick={() => handleScrollTo('categories-grid')} 
                className="btn-trotec-white-outline"
              >
                <span>Browse Material Categories</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Premium Materials Category Bar */}
      <section id="categories-grid" className="mat-categories-section">
        <div className="container">
          <div className="mat-cat-header">
            <h2>Premium materials for exceptional results</h2>
            <p>
              From laser engraving and cutting to mechanical engraving, our materials are engineered to deliver exceptional results. They are ideally composed for efficient production of all kinds of applications from signs, labels, displays to promotional products, personalized items and arts and crafts. All laser and engraving materials are optimized and tested regarding sizes, parameters, and efficiency. That makes your daily work easier and brings excellent results.
            </p>
          </div>

          <div className="mat-cat-cards-grid">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className="mat-cat-card"
                onClick={() => handleScrollTo(`sec-${cat.id}`)}
              >
                <div className="mat-cat-img-box">
                  <img src={cat.img} alt={cat.name} />
                </div>
                <div className="mat-cat-name">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Category Showcase Blocks */}
      <section className="mat-showcase-section">
        <div className="container">
          {/* Block 1: TroLase */}
          <div id="sec-trolase" className="mat-showcase-split">
            <div className="mat-showcase-info">
              <h3>Laser material sheets (TroLase Series)</h3>
              <div className="mat-showcase-sub">Perfect for efficient production of signs, labels and much more</div>
              <p>
                Featuring a colored or metallic top layer and a contrasting acrylic core, the sheet materials of our TroLase Series are perfect for both laser cutting and engraving.
              </p>
              <ul className="mat-bullets-list">
                <li><Check size={16} /> Laser engraving reveals the contrasting core color</li>
                <li><Check size={16} /> Material can be laser cut to any shape and size</li>
                <li><Check size={16} /> Core material is made of modified acrylic specially developed for laser application</li>
              </ul>
              <div className="mat-note-box">
                <strong>UV & Outdoor Stability:</strong> Many laser materials of this range feature the benefit of being fully UV stable, allowing you to create outdoor applications with ease. Others are thin, flexible and with an adhesive backing for simple and fast production of labels and stickers.
              </div>
              <button onClick={() => handleScrollTo('mat-sample-form')} className="btn-trotec-red">
                <span>Discover TroLase Sheets</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
            </div>
            <div className="mat-showcase-media">
              <img src="/images/trolase_swatch_fan.png" alt="TroLase color swatch fan deck" />
            </div>
          </div>

          {/* Block 2: TroGlass Acrylic */}
          <div id="sec-troglass" className="mat-showcase-split reverse">
            <div className="mat-showcase-media">
              <img src="/images/troglass_acrylic_shapes.png" alt="TroGlass vibrant acrylic shapes" />
            </div>
            <div className="mat-showcase-info">
              <h3>Acrylic Sheets for laser engraving & cutting (TroGlass)</h3>
              <div className="mat-showcase-sub">Create high quality signs, displays and laser cut accessories</div>
              <p>
                Whether you need precision-cut clear acrylic for signage, colored acrylic sheets for vibrant displays, or reflective mirror or sparkling glitter surfaces, our acrylic sheets uphold top-quality standards.
              </p>
              <ul className="mat-bullets-list">
                <li><Check size={16} /> Various colors, grades of transparency and surface properties</li>
                <li><Check size={16} /> Exceptional purity, durability, and versatility</li>
                <li><Check size={16} /> Diversity from glitter to mirror effects</li>
              </ul>
              <div className="mat-note-box">
                <strong>Green Line Eco Range:</strong> With our range of acrylics, you have the flexibility to realize your creative ideas at highest production efficiency. We are happy to offer numerous sustainable Green Line products within this product range.
              </div>
              <button onClick={() => handleScrollTo('mat-sample-form')} className="btn-trotec-red">
                <span>Explore Acrylics Range</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
            </div>
          </div>

          {/* Block 3: LaserWood */}
          <div id="sec-wood" className="mat-showcase-split">
            <div className="mat-showcase-info">
              <h3>Wood sheets for laser engraving & cutting (LaserWood)</h3>
              <div className="mat-showcase-sub">Natural perfection for signs, promotional items and crafts</div>
              <p>
                Our wood materials collection includes veneers on MDF core, solid wood sheets as well as MDF and plywood sheets.
              </p>
              <ul className="mat-bullets-list">
                <li><Check size={16} /> Known for exceptional quality and smooth burn-free edges</li>
                <li><Check size={16} /> Surfaces are optimized in homogeneity for laser processing</li>
                <li><Check size={16} /> Carefully selected species of raw material to keep natural beauty of wood</li>
                <li><Check size={16} /> Eco-friendly water-based finish optimizes processing and enhances durability</li>
              </ul>
              <div className="mat-note-box">
                <strong>Prototyping & Crafting:</strong> While our veneer and solid wood sheets are especially popular for creating signs, artwork, medals and promotional items, our MDF and plywood products are perfectly suited for prototyping, modelling and crafting.
              </div>
              <button onClick={() => handleScrollTo('mat-sample-form')} className="btn-trotec-red">
                <span>Explore Wood Materials</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
            </div>
            <div className="mat-showcase-media">
              <img src="/images/laserwood_cutting_bed.png" alt="LaserWood sheet cutting in laser bed" />
            </div>
          </div>

          {/* Block 4: TroPly Mechanical */}
          <div id="sec-troply" className="mat-showcase-split reverse">
            <div className="mat-showcase-media">
              <img src="/images/brushed_metal_slat.png" alt="Brushed metal and TroPly engraving plate" />
            </div>
            <div className="mat-showcase-info">
              <h3>Engraving supplies for mechanical engraving (TroPly)</h3>
              <div className="mat-showcase-sub">Create durable and high quality nameplates, signs, and labels</div>
              <p>
                The engraving materials of our TroPly series are specially designed to provide optimum results when processed with mechanical engraving devices.
              </p>
              <ul className="mat-bullets-list">
                <li><Check size={16} /> Colored or metallic top layer and a contrasting core</li>
                <li><Check size={16} /> Micro-thin surfaces that allow for fast and detailed engraving</li>
                <li><Check size={16} /> Variety of robust thicknesses and vibrant surface colors</li>
              </ul>
              <button onClick={() => handleScrollTo('mat-sample-form')} className="btn-trotec-red">
                <span>Discover Engraving Plastics</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
            </div>
          </div>

          {/* Block 5: Gifts & Accessories */}
          <div id="sec-gifts" className="mat-showcase-split">
            <div className="mat-showcase-info">
              <h3>Laser engraving supplies and Gifts</h3>
              <div className="mat-showcase-sub">Profit from products ready for laser processing</div>
              <p>
                Enter your business by personalizing gifts and laser engraving supplies for your customers. Easily obtain products such as laserable bottles, aluminum tags, flasks and much more from us and rely on high quality products.
              </p>
              <ul className="mat-bullets-list">
                <li><Check size={16} /> Powder-coated stainless steel bottles & thermal tumblers</li>
                <li><Check size={16} /> Anodized aluminum keychains, tags & desk accessories</li>
                <li><Check size={16} /> Workholding matrix pins, magnets & badge fixtures for laser setup</li>
              </ul>
              <button onClick={() => handleScrollTo('mat-sample-form')} className="btn-trotec-red">
                <span>Explore Personalization Gifts</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
            </div>
            <div className="mat-showcase-media">
              <img src="/images/laserable_bottles_gifts.png" alt="Laserable powder-coated bottles and drinkware" />
            </div>
          </div>
        </div>
      </section>

      {/* 3B. Inspiring Applications Gallery (Img 1 to 8) */}
      <section className="mat-gallery-section">
        <div className="container">
          <div className="mat-gallery-header">
            <h2>Discover What You Can Create With Trotec Materials</h2>
            <p>
              From custom award trophies and architectural signage to intricate wooden puzzles and personalized gifts — explore real-world applications created with our certified material range.
            </p>
          </div>

          <div className="mat-gallery-grid">
            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">TroGlass Clear</span>
                <img src="/images/img1.webp" alt="Glass & Acrylic Award Trophies" />
              </div>
              <div className="mat-gallery-info">
                <h4>Glass & Acrylic Award Trophies</h4>
                <p>Laser cut & frosted vector engraving on ultra-clear cast acrylic.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">TroGlass Mirror</span>
                <img src="/images/img2.webp" alt="Colored Mirror Desk Organizers" />
              </div>
              <div className="mat-gallery-info">
                <h4>Colored Mirror Desk Accessories</h4>
                <p>Interlocking laser-cut vibrant acrylic storage containers & fixtures.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">LaserWood Veneer</span>
                <img src="/images/img3.webp" alt="Intricate Precision Wood Puzzles" />
              </div>
              <div className="mat-gallery-info">
                <h4>Intricate Wood Puzzles & Coasters</h4>
                <p>High precision burn-free vector cutting on natural wood sheets.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">TroLase Dual-Layer</span>
                <img src="/images/img4.webp" alt="Architectural Signage & Displays" />
              </div>
              <div className="mat-gallery-info">
                <h4>Architectural Signage & Labels</h4>
                <p>High-contrast surface engraving for indoor and outdoor signboards.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">LaserWood Solid</span>
                <img src="/images/img5.webp" alt="Custom Laser Engraved Wooden Gifts" />
              </div>
              <div className="mat-gallery-info">
                <h4>Engraved Wooden Keepsakes & Boxes</h4>
                <p>Dark contrast surface engraving with natural water-based finish.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">Anodized Metal</span>
                <img src="/images/img6.webp" alt="Industrial Metal Nameplates" />
              </div>
              <div className="mat-gallery-info">
                <h4>Industrial Metal Plates & Tags</h4>
                <p>Durable metallic surface marking for machine rating tags & plates.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">TroGlass Satins</span>
                <img src="/images/img7.webp" alt="Custom Acrylic Badges & Keychains" />
              </div>
              <div className="mat-gallery-info">
                <h4>Custom Acrylic Badges & Tags</h4>
                <p>Silky matte acrylic sheets for personalized identity badges & keyrings.</p>
              </div>
            </div>

            <div className="mat-gallery-card">
              <div className="mat-gallery-img-box">
                <span className="mat-gallery-tag">Laserable Gifts</span>
                <img src="/images/img8.webp" alt="Personalized Powder Coated Bottles" />
              </div>
              <div className="mat-gallery-info">
                <h4>Personalized Stainless Drinkware</h4>
                <p>Laser ablation on powder-coated bottles, flasks, and tumblers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Trotec Materials & 4 Quality Pillars */}
      <section className="mat-why-section">
        <div className="container">
          <div className="mat-why-header">
            <h2>Why Trotec materials?</h2>
            <p>
              Our commitment to quality ensures durability and effortless processing, saving you time and costs. Our materials are tested thoroughly in our Application Labs across the world to ensure outstanding results for our customers. We provide consistent quality, colors, and parameters, along with reliable material availability. With ideal sheet sizes for your machines and a cut-to-size option, we tailor our offerings to your needs. Our exceptional service guarantees quick responses and timely deliveries with a personal touch. We maintain a vast product range, available even in small quantities, and offer an eco-friendly "Green Line" product range for sustainability-conscious customers.
            </p>
          </div>

          <div className="mat-pillars-grid">
            <div className="mat-pillar-card">
              <div className="mat-pillar-img-box">
                <img src="/images/trotec_mat_source.png" alt="Trusted source for laser optimized materials" />
              </div>
              <h4>Trusted source for laser optimized materials</h4>
              <p>
                For over 20 years, we have been a leading supplier of engraving and laser materials, leveraging our extensive knowledge. As producers of our core materials, we maintain quality control and drive innovation. Focusing on acrylic, we conduct standardized tests to assess laser processing capabilities, ensuring superior results and meeting demanding laser engraving requirements.
              </p>
            </div>

            <div className="mat-pillar-card">
              <div className="mat-pillar-img-box">
                <img src="/images/trotec_uv_weather.png" alt="Engraving materials proven to be UV and weather stable" />
              </div>
              <h4>Engraving materials proven to be UV- and weather stable</h4>
              <p>
                Products stated to be UV- and weather-stable are tested. Our TroLase materials undergo extensive tests subjected to high intensity exposure conditions for 1200 hours following ISO 4892 standards. TroLase materials have passed this test without any visual changes in color or surface appearance.
              </p>
            </div>

            <div className="mat-pillar-card">
              <div className="mat-pillar-img-box">
                <img src="/images/trotec_quality_standards.png" alt="Highest quality standards from raw materials to finished goods" />
              </div>
              <h4>Highest quality standards from raw materials to finished goods</h4>
              <p>
                We source raw materials and finished goods from compliant suppliers, adhering to REACH and RoHS directives. We prioritize color and quality consistency, verifying color match with a spectrophotometer and conducting thorough incoming goods inspections, including packaging, labeling, protective film quality, and compliance with ISO 7823-1.
              </p>
            </div>

            <div className="mat-pillar-card">
              <div className="mat-pillar-img-box">
                <img src="/images/trotec_green_line.png" alt="Sustainable engraving supplies Green Line" />
              </div>
              <h4>Sustainable engraving supplies (Green Line)</h4>
              <p>
                We rely on regional partners who have the same high standards as we do. For more quality, responsible business today and a contribution to a future worth living, in our eco-friendly "Green Line" you find numerous products of our main product groups. Important aspects include recyclability, reusability, ethical sourcing, and reduced environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Machine Callout Banner */}
      <section className="mat-machine-callout">
        <div className="container">
          <div className="mat-callout-split">
            <div className="mat-callout-text">
              <h3>Which laser machine is best for your materials?</h3>
              <p>Explore our laser machines and find out which one is ideal to start your business or to increase your production capacity.</p>
              <button 
                onClick={() => {
                  if (onSelectProduct) {
                    const speedy = { id: 1, slug: 'speedy-series', name: 'Speedy series' } as DetailedProduct;
                    onSelectProduct(speedy);
                  }
                }}
                className="btn-trotec-red"
              >
                <span>Explore Laser Engravers</span>
                <span className="btn-arrow-circle"><ArrowRight size={14} /></span>
              </button>
            </div>
            <div className="mat-callout-image-box">
              <img 
                src="/images/trotec_expert_laser_machine.png" 
                alt="Trotec Laser Expert Specialist next to Speedy laser engraver" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Material Sample Swatch Request Form */}
      <section id="mat-sample-form" className="mat-form-section">
        <div className="container">
          <div className="mat-form-card">
            <div className="mat-form-head">
              <h2>Request Official Trotec Material Sample Swatch Box</h2>
              <p>Get authentic TroLase, TroGlass, and LaserWood material samples delivered to your workshop in UAE.</p>
            </div>

            {formSubmitted ? (
              <div className="form-success-box" style={{ padding: '2.5rem' }}>
                <CheckCircle2 size={48} color="var(--color-green-dark, #7e9420)" />
                <h3 style={{ fontSize: '1.4rem', color: '#0f2b48', marginTop: '0.75rem' }}>
                  Sample Request Received!
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                  Our materials specialist in Dubai will contact you shortly to confirm your sample box delivery address and material preferences.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn-trotec-red"
                  style={{ marginTop: '1rem' }}
                >
                  <span>Submit Another Request</span>
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
                  <label>Select Material Categories of Interest</label>
                  <div className="mat-check-grid">
                    {['TroLase Sheets', 'TroGlass Acrylic', 'LaserWood', 'TroPly Mechanical', 'Metals & Tags', 'Laserable Gifts'].map((mat) => (
                      <label key={mat} className="mat-check-label">
                        <input 
                          type="checkbox" 
                          checked={formData.selectedMaterials.includes(mat)}
                          onChange={() => handleCheckboxChange(mat)}
                        />
                        <span>{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Message / Material Requirements</label>
                  <textarea 
                    rows={3} 
                    placeholder="Specify sheet size, thickness, or application goals..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-trotec-red" 
                  style={{ width: '100%', height: '52px', marginTop: '0.5rem', justifyContent: 'center' }}
                >
                  <span>Request Official Material Sample Box</span>
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

export default LaserMaterialsDetailPage;
