import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2, 
  FileText, 
  PackageCheck, 
  Layers, 
  Flame, 
  BookOpen,
  ChevronRight,
  HelpCircle,
  Wrench,
  Wind,
  Shield,
  Table,
  HelpCircle as QuestionIcon,
  DollarSign,
  Briefcase,
  Compass
} from 'lucide-react';
import type { DetailedProduct } from '../data/productsData';
import './LaserEngraverDetailPage.css';
import CustomSelect from './CustomSelect';

interface LaserEngraverDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
  onNavigateSpeedy?: () => void;
}

export const LaserEngraverDetailPage: React.FC<LaserEngraverDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onNavigateSpeedy
}) => {
  const [activeTab, setActiveTab] = useState<'advantages' | 'engravers' | 'applications' | 'materials' | 'testimonials' | 'software' | 'accessories' | 'guide' | 'benefit' | 'pricing'>('advantages');
  const [materialFilter, setMaterialFilter] = useState<'CO2' | 'Fiber' | 'Flexx'>('CO2');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    application: 'Personalization & Customization',
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

  const materialsData = [
    { name: 'Acrylic', engrave: true, cut: true, mark: false },
    { name: 'Glass', engrave: true, cut: false, mark: false },
    { name: 'Plastic sheets', engrave: true, cut: true, mark: false },
    { name: 'Leather', engrave: true, cut: true, mark: false },
    { name: 'Metal*', engrave: materialFilter !== 'CO2', cut: false, mark: true },
    { name: 'Paper', engrave: true, cut: true, mark: false },
    { name: 'Plastics', engrave: true, cut: true, mark: false },
    { name: 'Stone', engrave: true, cut: false, mark: false },
    { name: 'Textiles', engrave: true, cut: true, mark: false },
    { name: 'Wood', engrave: true, cut: true, mark: false },
  ];

  const powerTableData = [
    { material: 'MDF (6 mm)', engravePower: '40 W', cutPower: '60 W' },
    { material: 'Plastic sheets (1.6 mm)', engravePower: '40 W', cutPower: '40 W' },
    { material: 'Paper', engravePower: '30 W', cutPower: '40 W' },
    { material: 'Acrylic (3 mm)', engravePower: '30 W', cutPower: '60 W' },
    { material: 'Stamps (2.3 mm)', engravePower: '40 W', cutPower: '30 W' },
    { material: 'Anodized aluminum', engravePower: '40 W', cutPower: '—' },
  ];

  return (
    <div className="engraver-detail-page">
      {/* Breadcrumb Navigation */}
      <div className="engraver-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-nav">
            <button onClick={onBack} className="btn-back-link">
              ← Back to Products
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Laser Engraver and Laser Engraving Machines</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Header Banner */}
      <section className="engraver-hero-banner">
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <div className="engraver-hero-content">
            <h1 className="engraver-hero-title">
              Laser Engraver and Laser Engraving Machines
            </h1>
            
            <ul className="engraver-hero-bullets">
              <li>
                <Check className="bullet-icon" size={18} />
                <span>Use a Trotec laser engraver to engrave and cut materials such as wood, acrylic, metal, stone, glass, leather, paper, textiles and plastics.</span>
              </li>
              <li>
                <Check className="bullet-icon" size={18} />
                <span>Find the right laser engraving machine whether it's for promotional products, automotive, mechanical engineering, education or personalization.</span>
              </li>
            </ul>

            <div className="engraver-hero-actions">
              <button 
                onClick={() => handleScrollTo('engraver-inquiry-form')} 
                className="btn-trotec-red"
              >
                <span>Request more info</span>
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Advantages Section */}
      <section id="section-advantages" className="engraver-section bg-light">
        <div className="container">
          <div className="section-heading text-center">
            <h2>What are the advantages of a laser engraving machine?</h2>
            <p className="section-subtext">
              A laser engraver offers many advantages over other engraving methods, including high precision, versatility and speed.
            </p>
          </div>

          <div className="advantages-grid">
            <div className="advantage-card">
              <h3>Finest details thanks to high precision</h3>
              <p>
                A laser beam enables you to engrave detailed patterns and ultra-fine lines. With the Speedy laser engraver you get excellent results, even with fonts as small as 1pt.
              </p>
            </div>

            <div className="advantage-card">
              <h3>No consumables are required, no tool wear</h3>
              <p>
                Laser engraving is contactless and eliminates tool wear. There are no additional costs for consumables, like chemical inks or cutters. This ensures sustainable production, increase your profit with "green" engraving technology.
              </p>
            </div>

            <div className="advantage-card">
              <h3>Increase the sales price up to tenfold</h3>
              <p>
                Profitability and high quality. Laser engraving produces a permanent and abrasion-resistant engraving that is palpable to the touch. This high-quality personalization allows for increasing the sales price of your finished product by a factor of 5 to 10.
              </p>
            </div>

            <div className="advantage-card">
              <h3>Countless application options</h3>
              <p>
                Flexible and intuitive. Discover countless application options. From glass to wood to metal, you can process anything with a laser machine. Engrave any complex workpiece. Along with our intuitive Ruby® laser software, the laser machine guarantees a smooth workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Laser Engravers at a Glance Section */}
      <section id="section-engravers" className="engraver-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Trotec laser engraving machines at a glance.</h2>
          </div>

          <div className="glance-card-container">
            <div className="glance-tab-header text-center">
              <div className="glance-machine-badge">
                <img src="/images/speedy_400.png" alt="Speedy series" className="glance-icon" />
                <span>Speedy series</span>
              </div>
            </div>

            <div className="glance-body-content">
              <h3 className="glance-title">
                Speedy series – the fastest laser engravers on the market. Suitable for the most complex engraving and cutting applications.
              </h3>
              <p className="glance-desc">
                The high performance laser engravers of the Speedy series are impressive for the superb quality produced at the highest cutting and engraving speeds. Available as CO₂, or combination fiber and CO₂ laser machines. This allows for numerous materials such as acrylic, wood, leather, paper, plastic, stone, textiles and glass to be engraved, and metals can also be marked. Combined with the laser software Ruby®, we guarantee an optimal workflow. It will enable you to move quickly from a creative idea to a finished product.
              </p>

              <div className="glance-grid-layout">
                {/* Working Area Diagram Visual */}
                <div className="glance-diagram-box">
                  <div className="nested-bed-box bed-400">
                    <span className="bed-label">Speedy 400</span>
                    <span className="bed-size">40 x 24 in</span>
                    <div className="nested-bed-box bed-360">
                      <span className="bed-label">Speedy 360</span>
                      <span className="bed-size">32 x 20 in</span>
                      <div className="nested-bed-box bed-300">
                        <span className="bed-label">Speedy 300</span>
                        <span className="bed-size">29 x 17 in</span>
                        <div className="nested-bed-box bed-100">
                          <span className="bed-label">Speedy 100</span>
                          <span className="bed-size">24 x 12 in</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Specs Table */}
                <div className="glance-specs-box">
                  <h4 className="specs-box-header">Technical data</h4>
                  <div className="specs-table">
                    <div className="specs-row">
                      <span className="specs-label">Working area (W x D)</span>
                      <span className="specs-value">up to 40 x 24 in</span>
                    </div>
                    <div className="specs-row">
                      <span className="specs-label">Max. workpiece height</span>
                      <span className="specs-value">283 mm</span>
                    </div>
                    <div className="specs-row">
                      <span className="specs-label">Laser type</span>
                      <span className="specs-value">CO₂, flexx or fiber laser</span>
                    </div>
                    <div className="specs-row">
                      <span className="specs-label">Laser power</span>
                      <span className="specs-value">20 – 120 watts</span>
                    </div>
                  </div>

                  <div className="specs-action">
                    <button 
                      onClick={() => {
                        if (onNavigateSpeedy) onNavigateSpeedy();
                        else if (onSelectProduct) {
                          onSelectProduct({
                            id: 1,
                            slug: "speedy-series",
                            name: "Speedy series",
                            category: "Laser Machines",
                            badge: "Flagship Flatbed",
                            buttonText: "Speedy",
                            image: "/images/speedy_workshop_studio.png",
                            tagline: "The world's fastest laser engraver and cutter.",
                            shortDescription: "High-speed CO2 and Flexx laser engravers for wood, acrylic, glass & metals.",
                            fullDescription: [],
                            specs: [],
                            features: [],
                            materials: [],
                            industries: [],
                            includedOptions: []
                          });
                        }
                      }}
                      className="btn-outline-red"
                    >
                      Speedy series
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Applications Section - What can I do with a laser engraver? */}
      <section id="section-applications" className="engraver-section bg-light">
        <div className="container">
          <div className="section-heading text-center">
            <h2>What can I do with a laser engraver?</h2>
            <p className="section-subtext">
              Find the right laser engraving machine for every purpose. Need more information before buying a laser machine? Our guide will tell you everything you need to know about laser engraving.
            </p>
          </div>

          {/* 5 Quick Category Cards Grid */}
          <div className="app-categories-grid">
            <div className="app-cat-card">
              <div className="app-cat-img-wrap">
                <img src="/images/hero_workshop_laser_hd.jpg" alt="Personalization" />
              </div>
              <h4>Personalization and customization</h4>
            </div>

            <div className="app-cat-card">
              <div className="app-cat-img-wrap">
                <img src="/images/promotional_water_bottle.jpg" alt="Promotional products" />
              </div>
              <h4>Promotional products</h4>
            </div>

            <div className="app-cat-card">
              <div className="app-cat-img-wrap">
                <img src="/images/industrial_serial_plates.png" alt="Production and manufacturing" />
              </div>
              <h4>Production and manufacturing</h4>
            </div>

            <div className="app-cat-card">
              <div className="app-cat-img-wrap">
                <img src="/images/engraved_law_office_sign.png" alt="Signs" />
              </div>
              <h4>Signs</h4>
            </div>

            <div className="app-cat-card">
              <div className="app-cat-img-wrap">
                <img src="/images/laser_education_prototype.png" alt="Prototyping, schools, universities" />
              </div>
              <h4>Prototyping, schools, universities</h4>
            </div>
          </div>

          {/* 5 Detailed Alternating Rows */}
          <div className="app-detailed-rows">
            {/* Row 1: Personalization */}
            <div className="app-detail-row">
              <div className="app-detail-media">
                <div className="hero-img-box">
                  <img src="/images/hero_workshop_laser_hd.jpg" alt="Added value through personalization" />
                  <div className="media-overlay-title">
                    <span>Added value through personalization</span>
                  </div>
                </div>
              </div>
              <div className="app-detail-content">
                <h3>Create unique products by personalizing and customizing</h3>
                <p>
                  Laser engraving is as easy as printing. Effortlessly create acrylic or precious metal jewelry, leather handbags and belts, unique wedding invitations or decorations. Customize cell phone cases, stainless flasks with the client logo or image you want. The rotary engraving attachment can be used to engrave gift items such as drinking glasses and thermo bottles. Laser processing increases the value of the initial product many times over. The investment pays for itself in just a few years.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Learn more about personalization
                </button>
              </div>
            </div>

            {/* Row 2: Promotional products */}
            <div className="app-detail-row reverse">
              <div className="app-detail-content">
                <h3>Laser engraver for designing promotional products – economical and innovative</h3>
                <p>
                  Due to constantly changing customer demands, maximum flexibility is required, especially in the promotional product industry. The laser machines of the Speedy series offer unlimited possibilities with individual designs on wooden boards, glass tumblers, and metal pens. With the rotary engraving attachment you can engrave cylindrical or conical objects like mugs, water bottles and glass tumblers 360° in various sizes and diameters. Or you can use the fiber laser of the SpeedMarker series for thermo bottles, key rings, and promotional items. Unique items, small series and large series can all be easily implemented.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Laser engraver for promotional products
                </button>
              </div>
              <div className="app-detail-media">
                <img src="/images/promotional_water_bottle.jpg" alt="Promotional products" className="rounded-img" />
              </div>
            </div>

            {/* Row 3: Industrial Production */}
            <div className="app-detail-row">
              <div className="app-detail-media">
                <img src="/images/industrial_serial_plates.png" alt="Industrial production" className="rounded-img" />
              </div>
              <div className="app-detail-content">
                <h3>Fast and precise capability for permanent marking in industrial production and manufacturing</h3>
                <p>
                  With the laser engraving machines of the Speedy series you can engrave data plates made of plastic. The marking lasers of the SpeedMarker series are suitable for deep engraving in metals and plastics. The product information is abrasion-resistant and therefore applied with exact clarity. In addition, very small fonts and codes can be used for marking, which is not always possible with other marking systems.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Laser engraver in manufacturing
                </button>
              </div>
            </div>

            {/* Row 4: Signs */}
            <div className="app-detail-row reverse">
              <div className="app-detail-content">
                <h3>Laser machines for permanent and cost-effective sign engraving</h3>
                <p>
                  Produce all kinds of signs with a Speedy series, including interior and exterior signage, direction signs, and nameplates. The laser can create intricate designs and range from individual items to small batches. Easy processing, zero tool wear, green non-contact processing, requiring zero touchups. You can find the optimal base material for your indoor and outdoor signage in our webshop. The materials are perfectly matched with the machine.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Laser engraver for sign marking
                </button>
              </div>
              <div className="app-detail-media">
                <img src="/images/engraved_law_office_sign.png" alt="Sign engraving" className="rounded-img" />
              </div>
            </div>

            {/* Row 5: Education & Prototyping */}
            <div className="app-detail-row">
              <div className="app-detail-media">
                <img src="/images/laser_education_prototype.png" alt="Education and prototyping" className="rounded-img" />
              </div>
              <div className="app-detail-content">
                <h3>Modern laser technology in education and for prototyping</h3>
                <p>
                  Laser engraving is a future-oriented, innovative technology used for prototyping in educational institutions such as schools or universities, and in FabLabs. Especially in the fields of architectural model making, fashion, art and product design. The benefits and reasons for using them in these fields are primarily ease of use, versatility, precision, speed and sustainability. By using laser engraving machines, students learn about digital fabrication – from the original idea to the digital design and digital manufacturing process. Offer your students the opportunity to safely implement their innovative ideas by using laser engravers.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Laser in education
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Starting a Laser Engraving Business eBook Banner */}
      <section className="engraver-section">
        <div className="container">
          <div className="ebook-banner-card">
            <div className="ebook-text-side">
              <h3>Are you about to start a business?</h3>
              <p>
                In this exclusive book, we give you guidance on how to get started with the laser, how to earn money with a laser system, and how to choose the right laser for your business.
              </p>
              <button 
                onClick={() => handleScrollTo('engraver-inquiry-form')}
                className="btn-trotec-red"
              >
                Download Book
              </button>
            </div>
            <div className="ebook-img-side">
              <img 
                src="/images/starting_laser_business_ebook.png" 
                alt="Starting a Laser Engraving Business eBook" 
                className="ebook-banner-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Materials Section - Matrix Table */}
      <section id="section-materials" className="engraver-section bg-light">
        <div className="container">
          <div className="section-heading text-center">
            <h2>What materials can I engrave with a laser machine?</h2>
            <p className="section-subtext">
              Depending on the laser source, materials can be engraved, cut or marked. Trotec offers CO₂, and fiber lasers and the combination of both in the Speedy flexx machines for countless applications.
            </p>

            <div className="material-filter-tabs">
              <button 
                className={`mat-tab ${materialFilter === 'CO2' ? 'active' : ''}`}
                onClick={() => setMaterialFilter('CO2')}
              >
                CO₂
              </button>
              <button 
                className={`mat-tab ${materialFilter === 'Fiber' ? 'active' : ''}`}
                onClick={() => setMaterialFilter('Fiber')}
              >
                Fiber
              </button>
              <button 
                className={`mat-tab ${materialFilter === 'Flexx' ? 'active' : ''}`}
                onClick={() => setMaterialFilter('Flexx')}
              >
                Flexx
              </button>
            </div>
          </div>

          <div className="materials-table-wrapper">
            <table className="materials-matrix-table">
              <thead>
                <tr>
                  <th className="th-material">Material</th>
                  <th className="th-action text-center">Engrave</th>
                  <th className="th-action text-center">Cut</th>
                  <th className="th-action text-center">Mark</th>
                </tr>
              </thead>
              <tbody>
                {materialsData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="td-material-name">{item.name}</td>
                    <td className="text-center">
                      {item.engrave ? <Check className="check-green" size={20} /> : <span className="dash-gray">–</span>}
                    </td>
                    <td className="text-center">
                      {item.cut ? <Check className="check-green" size={20} /> : <span className="dash-gray">–</span>}
                    </td>
                    <td className="text-center">
                      {item.mark ? <Check className="check-green" size={20} /> : <span className="dash-gray">–</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Customer Testimonials Section */}
      <section id="section-testimonials" className="engraver-section bg-light">
        <div className="container">
          <div className="section-heading">
            <h2>Customer testimonials about Trotec laser engravers.</h2>
            <p className="section-subtext">
              Discover how a laser engraver can contribute to the success of your business.
            </p>
          </div>

          <div className="testimonials-cards-grid">
            <div className="testimonial-card">
              <div className="testimonial-img-box">
                <img src="/images/hero_factory_facility.png" alt="MakerLab Enschede" />
                <div className="testimonial-tag">
                  <strong>MakerLab Enschede, Netherlands</strong>
                  <span>Customer Story</span>
                </div>
              </div>
              <div className="testimonial-card-body">
                <p>
                  "Senior FabLab Enschede: A laser system is indispensable for FabLab. FabLab Enschede is sharing their experience with Trotec Laser and their machines."
                </p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-img-box">
                <img src="/images/hero_speedy_flexx_lineup.png" alt="Forma" />
                <div className="testimonial-tag">
                  <strong>Forma, United Kingdom</strong>
                  <span>Customer Story</span>
                </div>
              </div>
              <div className="testimonial-card-body">
                <p>
                  "Forma increases overall performance by investing in a Speedy 400 and bringing the process of cutting acrylics in-house."
                </p>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-img-box">
                <img src="/images/laserable_bottles_gifts.png" alt="Criatons" />
                <div className="testimonial-tag">
                  <strong>Criatons, Spain</strong>
                  <span>Customer Story</span>
                </div>
              </div>
              <div className="testimonial-card-body">
                <p>
                  "Criatons Spain successfully expanded its portfolio by offering personalized laser engraved products."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Laser software Ruby® Detailed Section */}
      <section id="section-software" className="engraver-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Laser software Ruby®: Go quickly from idea to finished product.</h2>
            <p className="section-subtext">
              Our laser software Ruby® combines graphics editing and laser control. You're guided step-by-step through the workflow. Create or modify simple designs directly in Ruby®. Material effects such as deep engraving, relief engraving, stamp engraving and dark engraving can be easily selected from the integrated materials database. The laborious parameter search is eliminated. In addition, you can work in a team of users with different roles and authorizations. You already use a laser machine? Download Ruby® and discover the intuitive user interface.
            </p>
            <button className="btn-outline-red" onClick={() => handleScrollTo('engraver-inquiry-form')}>
              Laser Software Ruby®
            </button>
          </div>

          <div className="ruby-steps-container">
            <div className="ruby-step">
              <div className="ruby-icon-box">
                <Sparkles size={28} />
              </div>
              <h4>You've got an idea.</h4>
            </div>

            <div className="ruby-step-arrow">
              <ChevronRight size={24} />
            </div>

            <div className="ruby-step">
              <div className="ruby-icon-box">
                <FileText size={28} />
              </div>
              <h4>Create the design directly in the software.</h4>
            </div>

            <div className="ruby-step-arrow">
              <ChevronRight size={24} />
            </div>

            <div className="ruby-step">
              <div className="ruby-icon-box">
                <Zap size={28} />
              </div>
              <h4>Run jobs directly on your laser machine.</h4>
            </div>

            <div className="ruby-step-arrow">
              <ChevronRight size={24} />
            </div>

            <div className="ruby-step">
              <div className="ruby-icon-box">
                <Award size={28} />
              </div>
              <h4>Obtain a perfect laser engraving.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Accessories & Service Offers Grid */}
      <section id="section-accessories" className="engraver-section bg-light">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Accessories and service offers for your laser engraver</h2>
          </div>

          <div className="accessories-grid">
            <div className="accessory-card">
              <div className="acc-img-wrap">
                <img src="/images/trolase_swatch_fan.png" alt="Laser materials" />
              </div>
              <div className="acc-card-body">
                <h3>Laser materials</h3>
                <p>
                  As a manufacturer of laser machines as well as engraving materials, we are able to optimally match machine and material.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Shop materials
                </button>
              </div>
            </div>

            <div className="accessory-card">
              <div className="acc-img-wrap">
                <img src="/images/atmos_exhaust_system.png" alt="Atmos laser exhaust systems" />
              </div>
              <div className="acc-card-body">
                <h3>Atmos laser exhaust systems</h3>
                <p>
                  Dust and gases are reliably removed during the laser process. This ensures the best possible engraving and cutting results. Additionally, an optimal exhaust system extends the life of your laser system.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Atmos exhaust system
                </button>
              </div>
            </div>

            <div className="accessory-card">
              <div className="acc-img-wrap">
                <img src="/images/trocare_van_technician.png" alt="TroCare service packages" />
              </div>
              <div className="acc-card-body">
                <h3>TroCare: Customized service packages</h3>
                <p>
                  With the TroCare package you get annual maintenance for maximum productivity, as well as expert support from experienced service technicians, and discounted Academy training, spare parts & repair.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  TroCare
                </button>
              </div>
            </div>

            <div className="accessory-card">
              <div className="acc-img-wrap">
                <img src="/images/processing_table_concept.png" alt="Suitable processing table" />
              </div>
              <div className="acc-card-body">
                <h3>Suitable processing table depending on application</h3>
                <p>
                  The multi-functional table concept allows you to select the appropriate table for an application and easily switch it as needed. This will ensure the highest processing quality and productivity.
                </p>
                <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                  Multi-functional table concept
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. What You Should Know Guide Cards */}
      <section id="section-guide" className="engraver-section">
        <div className="container">
          <div className="section-heading text-center">
            <h2>What you should know about laser engraving.</h2>
            <p className="section-subtext">
              Would you like to learn more about laser engravers before making an investment? Find out everything you need to know about laser engraving in this guide.
            </p>
          </div>

          <div className="guide-cards-grid">
            <div className="guide-card">
              <div className="guide-icon-header">
                <Wrench size={32} className="guide-icon" />
              </div>
              <h3>How does a laser engraver work?</h3>
              <p>
                For the user, laser engraving is as simple as printing. In technical terms, the laser beam heats the material, causing it to vaporize, melt or burn.
              </p>
              <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                How to laser engrave?
              </button>
            </div>

            <div className="guide-card">
              <div className="guide-icon-header">
                <Flame size={32} className="guide-icon" />
              </div>
              <h3>What laser source for what material?</h3>
              <p>
                CO₂ laser systems are mainly suitable for processing non-metallic materials, such as wood, acrylic, glass, and paper. Fiber lasers are best for metal marking and high-contrast plastic marking.
              </p>
              <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                CO₂ vs. Fiber laser
              </button>
            </div>

            <div className="guide-card">
              <div className="guide-icon-header">
                <Zap size={32} className="guide-icon" />
              </div>
              <h3>Which laser power do I need for my application?</h3>
              <p>
                The optimal laser power depends largely on which application you perform most often.
              </p>
              <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                Laser power
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Comparison & Mechanical Engraving Advantages */}
      <section className="engraver-section bg-light">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Advantages of laser engraving compared to mechanical engraving and digital printing.</h2>
            <p className="section-subtext">
              Laser engraving, mechanical engraving and digital printing are different methods of labeling or marking materials such as metal, plastic, wood and glass. Laser engraving uses a laser beam to vaporize the material, thereby creating a permanent marking. Mechanical engraving uses a tool to cut or score the material to create the engraving. Digital printing involves printing a digital image directly onto the material. Choosing the right technology depends on the specific requirements and the desired results.
            </p>
          </div>

          <div className="mech-comparison-box">
            <div className="mech-img-side">
              <img src="/images/laserwood_cutting_bed.png" alt="Wood laser engraving detail" className="rounded-img" />
            </div>
            <div className="mech-content-side">
              <h3>Advantages of laser technology over mechanical engraving:</h3>
              <ul className="mech-bullets">
                <li><Check className="check-green" size={18} /> Fast machining processes without any pre- and post-processing of the material.</li>
                <li><Check className="check-green" size={18} /> Precise cutting and the finest geometries.</li>
                <li><Check className="check-green" size={18} /> The laser process is quiet and clean.</li>
                <li><Check className="check-green" size={18} /> Processing is contact-free and the material does not have to be clamped.</li>
                <li><Check className="check-green" size={18} /> Trotec laser machines offer consistent and reliable quality.</li>
                <li><Check className="check-green" size={18} /> Patented CeramiCore® laser source as well as precise axis and laser beam guidance.</li>
                <li><Check className="check-green" size={18} /> Efficient and quiet exhaust technology as well as closed axes.</li>
                <li><Check className="check-green" size={18} /> No tool wear.</li>
              </ul>
              <button className="btn-outline-red sm" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                Laser engraving vs mechanical engraving
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Company ROI, Power & Recommended Power Table */}
      <section id="section-benefit" className="engraver-section">
        <div className="container">
          <div className="section-heading">
            <h2>How can your company benefit from the laser engraver?</h2>
            <p className="section-subtext">
              Thanks to process-optimized workflows, a wide range of materials can be engraved in high quality without the need for any time-consuming template-making or onerous pre- or post-processing. This enables you to work more efficiently, increase productivity and at the same time reduce costs and improve your brand image.
            </p>
          </div>

          <div className="benefit-content-blocks">
            <div className="benefit-block">
              <h3>Calculate prices and increase profits</h3>
              <p>
                Laser engraving means that you can increase the price of personalized products many times over compared to the original item. End consumers are generally willing to pay more for products with a personal touch. In most cases, it's possible to charge 5 to 10 times more than you would for a standard product. Both single items and large orders can be economically processed with a laser machine. For larger quantities, it is helpful to work with templates so that you can engrave several parts in one operation, thus saving time.
              </p>
            </div>

            <div className="benefit-block">
              <h3>High power facilitates enormous flexibility</h3>
              <p>
                The recommended laser power depends on the individual application. If the laser is to be used primarily for engraving, you will achieve excellent results with laser powers between 30 and 120 watts. For laser cutting and high speed applications, we recommend using laser power of more than 60 watts. The maximum laser power affects both the quality of your products and the working time. For example, if you engrave anodized aluminum at 80 watts compared to 30 watts, it's more than twice as fast as at 30 watts.
              </p>
              <p>
                While you can regulate the laser power via the software, the maximum power output depends on the hardware. Therefore, the following applies: A high-powered laser machine offers more flexibility since you can use it to process many different materials.
              </p>
            </div>

            {/* Power Table */}
            <div className="power-table-wrapper">
              <h4 className="power-table-title">Recommended laser power (watts)</h4>
              <table className="power-matrix-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th className="text-center">Engrave</th>
                    <th className="text-center">Engrave and cut</th>
                  </tr>
                </thead>
                <tbody>
                  {powerTableData.map((row, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{row.material}</td>
                      <td className="text-center">{row.engravePower}</td>
                      <td className="text-center">{row.cutPower}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Inspired Projects & Machine Pricing Sections */}
      <section className="engraver-section bg-light">
        <div className="container">
          <div className="inspired-banner-grid">
            <div className="inspired-content">
              <h2>Laser projects that inspire</h2>
              <p>
                We offer templates including step-by-step instructions and ready-to-use graphic files for download, which you can immediately implement with your laser engraving machine.
              </p>
              <button className="btn-outline-red" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                Explore all laser projects
              </button>
            </div>
            <div className="inspired-media">
              <img src="/images/hero_workshop_trotec.jpg" alt="Laser projects that inspire" className="rounded-img" />
            </div>
          </div>
        </div>
      </section>

      <section id="section-pricing" className="engraver-section">
        <div className="container">
          <div className="pricing-banner-grid">
            <div className="pricing-media">
              <img src="/images/laser_machine_cost_head.png" alt="Laser engraving machine cost" className="rounded-img" />
            </div>
            <div className="pricing-content">
              <h2>How much does a laser engraving machine cost?</h2>
              <p>
                Our laser engravers are configured according to our customers' requirements. The price will vary depending on laser power, speed, size of the work surface, and optional extras such as additional lenses, camera systems and exhaust systems. Machines start from $10,900. Lease price from $190 per month for 36 months.
              </p>
              <button className="btn-outline-red" onClick={() => handleScrollTo('engraver-inquiry-form')}>
                Price of a laser machine
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 17. Inquiry Form Section */}
      <section id="engraver-inquiry-form" className="engraver-section">
        <div className="container">
          <div className="inquiry-wrapper">
            <div className="inquiry-text">
              <h2>Request Laser Engraver Info & Live Demo</h2>
              <p>
                Speak with our laser application specialists to find the right laser machine, software and material configuration for your production requirements.
              </p>
              <ul className="inquiry-features">
                <li><Check className="check-red" size={18} /> Free material sample test with your artwork</li>
                <li><Check className="check-red" size={18} /> On-site or online live machine demonstration</li>
                <li><Check className="check-red" size={18} /> Detailed ROI calculation & financing options</li>
              </ul>
            </div>

            <div className="inquiry-form-card">
              {formSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Thank you for your inquiry!</h3>
                  <p>Our laser engraving specialist will contact you within 24 hours with complete details and pricing.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="engraver-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alexander Wright" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Business Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. alex@company.com" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Company Ltd." 
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Primary Application</label>
                    <CustomSelect
                      defaultValue="Personalization & Customization"
                      options={[
                        'Personalization & Customization',
                        'Promotional Items & Gifts',
                        'Industrial Manufacturing & Nameplates',
                        'Signage & Architectural Wayfinding',
                        'Educational & Prototyping'
                      ]}
                      onChange={val => setFormData({...formData, application: val})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message / Requirements</label>
                    <textarea 
                      rows={3} 
                      placeholder="Tell us about the materials you plan to engrave or cut..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-trotec-red full-width">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaserEngraverDetailPage;
