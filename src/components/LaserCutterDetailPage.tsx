import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
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
  Briefcase,
  Play,
  Lightbulb,
  Edit3,
  Monitor,
  Award,
  ExternalLink,
  DollarSign,
  CreditCard,
  Percent,
  Sliders,
  Maximize2
} from 'lucide-react';
import type { DetailedProduct } from '../data/productsData';
import './LaserCutterDetailPage.css';
import CustomSelect from './CustomSelect';

interface LaserCutterDetailPageProps {
  product: DetailedProduct;
  onBack: () => void;
  onSelectProduct?: (product: DetailedProduct) => void;
  onNavigateSpeedy?: () => void;
  onNavigateELine?: () => void;
  onNavigateRuby?: () => void;
}

export const LaserCutterDetailPage: React.FC<LaserCutterDetailPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onNavigateSpeedy,
  onNavigateELine,
  onNavigateRuby
}) => {
  const [activeTab, setActiveTab] = useState<'advantages' | 'cutters' | 'applications' | 'materials' | 'testimonials' | 'software' | 'accessories' | 'insights' | 'considerations' | 'pricing'>('advantages');
  const [cutterTab, setCutterTab] = useState<'speedy' | 'eline'>('speedy');
  const [applicationFilter, setApplicationFilter] = useState<'all' | 'signage' | 'education' | 'manufacturing' | 'personalization' | 'textile'>('all');
  const [comparisonTab, setComparisonTab] = useState<'nomaschine' | 'milling' | 'plasma' | 'saw'>('nomaschine');
  
  const [ebookModalOpen, setEbookModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [insightModal, setInsightModal] = useState<{ title: string; content: string } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    application: 'Signage & Displays',
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
    { name: 'Acrylic', cut: true, engrave: true, mark: false },
    { name: 'Glass', cut: false, engrave: true, mark: false },
    { name: 'Plastic sheets', cut: true, engrave: true, mark: false },
    { name: 'Leather', cut: true, engrave: true, mark: false },
    { name: 'Metal*', cut: false, engrave: false, mark: false },
    { name: 'Paper', cut: true, engrave: true, mark: false },
    { name: 'Plastics', cut: true, engrave: true, mark: false },
    { name: 'Stone', cut: false, engrave: true, mark: false },
    { name: 'Textiles', cut: true, engrave: true, mark: false },
  ];

  const thicknessPowerTable = [
    { material: 'Plywood', p30: '3 mm', p60: '8 mm', p120: '12 mm', p400: '12 mm' },
    { material: 'MDF', p30: '3 mm', p60: '8 mm', p120: '15 mm', p400: '25 mm' },
    { material: 'Solid wood', p30: '3 mm', p60: '8 mm', p120: '15 mm', p400: '25 mm' },
    { material: 'Acrylic', p30: '3 mm', p60: '6 mm', p120: '12 mm', p400: '20 mm' },
    { material: 'Polycarbonate, foils', p30: '—', p60: '—', p120: '—', p400: '—' },
    { material: 'Paper', p30: '200 g/m²', p60: '300 g/m²', p120: '600 g/m²', p400: '600 g/m²' },
    { material: 'Cardboard', p30: '200 g/m²', p60: '300 g/m²', p120: '600 g/m²', p400: '600 g/m²' },
    { material: 'Corrugated board', p30: 'Single wave C', p60: 'Double wave EB', p120: 'Double wave BC', p400: 'Double wave BC' },
    { material: 'Plastic sheets', p30: '1.6 mm', p60: '1.6 mm', p120: '1.6 mm', p400: '1.6 mm' },
    { material: 'Stamps', p30: '2.3 mm', p60: '2.3 mm', p120: '2.3 mm', p400: '2.3 mm' },
    { material: 'Anodized aluminum', p30: '—', p60: '—', p120: '—', p400: '—' },
    { material: 'Stainless steel', p30: '—', p60: '—', p120: '—', p400: '—' },
  ];

  return (
    <div className="cutter-detail-page">
      {/* Breadcrumb Navigation */}
      <div className="cutter-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-nav">
            <button onClick={onBack} className="btn-back-link">
              ← Back to Products
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Laser Cutter Machines and Industrial Laser Cutters</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Header Banner */}
      <section className="cutter-hero-banner">
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <div className="cutter-hero-content">
            <div className="hero-badge">
              <Sparkles size={14} /> Industrial & Professional Laser Cutting Systems
            </div>
            <h1 className="cutter-hero-title">
              Laser Cutter Machines and Industrial Laser Cutters
            </h1>
            <p className="cutter-hero-lead">
              We offer laser cutters from entry-level models to high-end machines for professionals, from small to large format laser cutting machines. Acrylic, wood, paper and plastic are just a few of the materials a laser machine can cut precisely and engrave in detail. Find the right laser cutting machine for your application.
            </p>
            
            <div className="cutter-hero-actions">
              <button 
                className="btn-primary-red"
                onClick={() => setQuoteModalOpen(true)}
              >
                <span>Request a Demo / Quote</span>
                <ArrowRight size={18} />
              </button>
              <button 
                className="btn-secondary-dark"
                onClick={() => setEbookModalOpen(true)}
              >
                <BookOpen size={18} />
                <span>Download Laser Selection Guide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-navigation / Jump links menu */}
      <nav className="cutter-subnav-bar">
        <div className="container">
          <div className="subnav-links">
            <button 
              className={activeTab === 'advantages' ? 'active' : ''} 
              onClick={() => handleScrollTo('advantages', 'advantages')}
            >
              Advantages
            </button>
            <button 
              className={activeTab === 'materials' ? 'active' : ''} 
              onClick={() => handleScrollTo('materials', 'materials')}
            >
              Materials
            </button>
            <button 
              className={activeTab === 'testimonials' ? 'active' : ''} 
              onClick={() => handleScrollTo('customer-stories', 'testimonials')}
            >
              Customer stories
            </button>
            <button 
              className={activeTab === 'software' ? 'active' : ''} 
              onClick={() => handleScrollTo('software', 'software')}
            >
              Software
            </button>
            <button 
              className={activeTab === 'accessories' ? 'active' : ''} 
              onClick={() => handleScrollTo('accessories', 'accessories')}
            >
              Options
            </button>
            <button 
              className={activeTab === 'insights' ? 'active' : ''} 
              onClick={() => handleScrollTo('useful-insights', 'insights')}
            >
              Useful insights
            </button>
            <button 
              className={activeTab === 'considerations' ? 'active' : ''} 
              onClick={() => handleScrollTo('considerations', 'considerations')}
            >
              Buying Guide
            </button>
            <button 
              className={activeTab === 'pricing' ? 'active' : ''} 
              onClick={() => handleScrollTo('pricing', 'pricing')}
            >
              Pricing & Financing
            </button>
          </div>
        </div>
      </nav>

      {/* Section 1: Advantages of a laser cutter */}
      <section id="advantages" className="cutter-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Advantages of a laser cutter</h2>
            <p className="section-subtitle">
              A laser cutter can cut and engrave many materials. Laser cutting is a fast, efficient, non-contact cutting process.
            </p>
          </div>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon-box red">
                <Layers size={24} />
              </div>
              <h3 className="advantage-title">Versatility of material processing</h3>
              <p className="advantage-text">
                Cut materials like acrylic, paper, wood, MDF sheets, textile and plastic contactlessly – anything from 1 mm paper to 25 mm acrylic is possible. Our laser cutters offer a working area of up to 49 x 35 inches.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box dark">
                <Zap size={24} />
              </div>
              <h3 className="advantage-title">Use the same machine to cut and engrave</h3>
              <p className="advantage-text">
                A laser cutter can engrave or mark logos, texts and patterns into the material, as well as cut materials. There's no need for an additional machine. This saves time and money, while creating added value and flexibility.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box red">
                <Sparkles size={24} />
              </div>
              <h3 className="advantage-title">Precise cutting of complex geometries and materials</h3>
              <p className="advantage-text">
                The laser beam achieves minimal kerf and enables the smallest radii of 1/10 mm. This allows the finest geometries, complex shapes and designs to be accurately cut, while the material is utilized efficiently since minimal waste is created. A laser cutter is ideal for the cost-effective production of displays, signs, architectural models, prototypes and artwork.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-box dark">
                <Flame size={24} />
              </div>
              <h3 className="advantage-title">No post-processing of the material</h3>
              <p className="advantage-text">
                The laser beam is a thermal process that vaporizes, burns or melts the material during the cut. For example, when laser cutting acrylic, you obtain a crisp cut edge by melting the acrylic. Wood is burned with pinpoint accuracy. Laser cutting seals the edges of synthetic textiles. This saves time and money in production and produces high-quality results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Featured Action Video Section */}
      <section className="cutter-action-video-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title text-white">Laser Cutting & Marking Video Demonstration</h2>
            <p className="section-subtitle text-slate-300">
              Watch high-speed precision vector cutting and fine detail engraving on our Trotec laser cutter systems (<code className="video-code-tag">marking/laser.webm</code>).
            </p>
          </div>
          <div className="featured-video-frame">
            <video 
              src="/marking/laser.webm" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="featured-video-player"
            >
              Your browser does not support playing webm videos.
            </video>
          </div>
        </div>
      </section>


      {/* Section 5: Materials matrix table */}
      <section id="materials" className="cutter-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">What materials can I cut with a laser machine?</h2>
            <p className="section-subtitle">
              The following materials can be cut with a CO₂ laser.
            </p>
          </div>

          <div className="materials-table-wrapper">
            <div className="mat-tab-bar">
              <span className="mat-tab-label active">CO₂</span>
            </div>

            <table className="materials-matrix-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th className="text-center">Cut</th>
                  <th className="text-center">Engrave</th>
                  <th className="text-center">Mark</th>
                </tr>
              </thead>
              <tbody>
                {materialsData.map((row, i) => (
                  <tr key={i}>
                    <td className="mat-name-cell">{row.name}</td>
                    <td className="text-center mat-check-cell">
                      {row.cut ? <Check className="check-icon-green" size={18} /> : <span className="dash-symbol">—</span>}
                    </td>
                    <td className="text-center mat-check-cell">
                      {row.engrave ? <Check className="check-icon-green" size={18} /> : <span className="dash-symbol">—</span>}
                    </td>
                    <td className="text-center mat-check-cell">
                      {row.mark ? <Check className="check-icon-green" size={18} /> : <span className="dash-symbol">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: Customer Testimonials */}
      <section id="customer-stories" className="cutter-section section-light">
        <div className="container">
          <div className="stories-header-row">
            <div>
              <h2 className="section-title text-left">Customer testimonials about Trotec laser cutters</h2>
              <p className="section-subtitle text-left">
                Discover how a laser cutter can contribute to the success of your business.
              </p>
            </div>
            <button 
              className="btn-outline-red"
              onClick={() => setQuoteModalOpen(true)}
            >
              All customer stories
            </button>
          </div>

          <div className="stories-cards-grid">
            {/* Story 1 */}
            <div className="story-card">
              <div className="story-card-img-wrap">
                <img src="/images/01.jpg" alt="University of Linz, Austria" />
                <div className="story-overlay-tag">
                  <span className="story-location">The university of Linz, Austria</span>
                  <span className="story-badge font-semibold">Customer story</span>
                </div>
              </div>
              <p className="story-card-desc">
                At the soft matter physics department at the Johannes Kepler University in Linz, a Speedy 300 is used for the development of device prototypes and new carrier materials.
              </p>
            </div>

            {/* Story 2 */}
            <div className="story-card">
              <div className="story-card-img-wrap">
                <img src="/images/02.jpg" alt="Building BloQs, UK" />
                <div className="story-overlay-tag">
                  <span className="story-location">Building BloQs, UK</span>
                  <span className="story-badge font-semibold">Customer story</span>
                </div>
              </div>
              <p className="story-card-desc">
                London-based open access workshop, Building BloQs, utilize an SP1500 within their workshop, allowing members to produce a variety of applications. Having previously owned an unreliable laser machine, the purchase of a Trotec laser machine has become the start of an ongoing partnership between Building BloQs and Trotec.
              </p>
            </div>

            {/* Story 3 */}
            <div className="story-card">
              <div className="story-card-img-wrap">
                <img src="/images/03.jpg" alt="Wimblebury Puzzles" />
                <div className="story-overlay-tag">
                  <span className="story-location">Wimblebury Puzzles</span>
                  <span className="story-badge font-semibold">Customer story</span>
                </div>
              </div>
              <p className="story-card-desc">
                Wimblebury Puzzles uses their Speedy 400 laser to create custom puzzles of places that people know and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Laser software Ruby® */}
      <section id="software" className="cutter-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">
              Laser software Ruby®: Move quickly from the idea to the finished cut product.
            </h2>
          </div>

          {/* Workflow 4-Step Chevron Process */}
          <div className="ruby-workflow-grid">
            <div className="workflow-step-card">
              <div className="step-icon-circle">
                <Lightbulb size={24} className="icon-red" />
              </div>
              <h4 className="step-title">Your idea</h4>
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
              <h4 className="step-title">Obtain perfect cutting results.</h4>
            </div>
          </div>

          <div className="ruby-info-content-box">
            <p className="ruby-paragraph">
              All processing steps for laser users are integrated in our Ruby® software. Switch between graphics editing and laser job preparation at any time. Create simple designs directly in Ruby® and make changes to existing graphics without needing an additional graphics design program. Especially when it comes to cutting, Ruby® provides great support in preparing graphics with its "Bitmap Vectorization" function. Easily convert the raster graphics into vector graphics for laser cutting. The Print&Cut application with Ruby® also helps to optimize your workflow. The software corrects inaccuracies by automatically calculating the difference and virtually rotating or positioning the original file, so that the cutting path perfectly matches the printed material. You already use a laser machine? <a href="#ruby" onClick={(e) => { e.preventDefault(); if (onNavigateRuby) onNavigateRuby(); }} className="inline-link font-semibold">Download Ruby®</a> and discover the intuitive user interface.
            </p>
            <p className="ruby-callout-text">
              Curious about what other features Ruby® offers to make your daily laser work easier?
            </p>
            <div className="center-btn-wrap">
              <button 
                className="btn-outline-red"
                onClick={() => {
                  if (onNavigateRuby) onNavigateRuby();
                }}
              >
                Laser software Ruby®
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Laser projects that inspire */}
      <section className="cutter-inspiration-banner">
        <div className="container">
          <div className="inspiration-content-box">
            <h2 className="inspiration-title">Laser projects that inspire</h2>
            <p className="inspiration-desc">
              You can use our laser templates directly on your laser cutter and re-cut them. Dive into the world of imaginative cutting and engraving applications – there are no limits to your creativity.
            </p>
            <button 
              className="btn-outline-red-light"
              onClick={() => setQuoteModalOpen(true)}
            >
              To the laser templates
            </button>
          </div>
        </div>
      </section>

      {/* Section 9: Accessories and service offers */}
      <section id="accessories" className="cutter-section section-white">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Accessories and service offers for your laser cutter</h2>
          </div>

          <div className="accessories-grid-large">
            {/* Card 1 */}
            <div className="acc-card-large">
              <div className="acc-img-large-wrap">
                <img src="/images/acc_processing_table.png" alt="Multi-functional table concept" />
              </div>
              <div className="acc-card-body">
                <h3 className="acc-card-heading">The right working table for your application</h3>
                <p className="acc-card-text">
                  The multi-functional table concept allows you to select the appropriate table for an application and easily switch it as needed. This ensures the highest processing quality and productivity.
                </p>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Multi-functional table concept
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="acc-card-large">
              <div className="acc-img-large-wrap">
                <img src="/images/acc_atmos_exhaust.png" alt="Atmos laser exhaust system" />
              </div>
              <div className="acc-card-body">
                <h3 className="acc-card-heading">Atmos laser exhaust system – worlds better</h3>
                <p className="acc-card-text">
                  Laser cutters and Atmos exhaust systems form a perfectly overall solution. Dust and gases are removed properly and safely. It prevents unsightly smoke deposits around the cut and flaming on top of the material, resulting in excellent cutting quality. The time required for cleaning after laser cutting is minimized.
                </p>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Atmos laser exhaust system
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="acc-card-large">
              <div className="acc-img-large-wrap">
                <img src="/images/acc_trocare_van.png" alt="TroCare protection plan" />
              </div>
              <div className="acc-card-body">
                <h3 className="acc-card-heading">TroCare protection plan</h3>
                <p className="acc-card-text">
                  Investing in a laser cutter is a significant step when it comes to building your laser business. Unexpected repair costs, order rejections or even a breakdown of the machine would be disastrous. That's why our TroCare packages offer preventive measures:
                </p>
                <ul className="acc-bullet-list">
                  <li>Predictable operating costs</li>
                  <li>Annual maintenance for maximum cutting performance</li>
                  <li>Competent support from experienced service technicians, discounts on Academy training courses, spare parts & repair.</li>
                </ul>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  TroCare
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="acc-card-large">
              <div className="acc-img-large-wrap">
                <img src="/images/ruby_laser_software_operator.png" alt="Trotec Academy training" />
              </div>
              <div className="acc-card-body">
                <h3 className="acc-card-heading">Trotec Academy – Know-how increases efficiency</h3>
                <p className="acc-card-text">
                  Our Academy program offers further training on subjects like photo-engraving, acrylic cutting, woodworking with the laser cutter, and how laser engraving and cutting can be made more precise. We offer seminars on laser basics for you and your new employees: material processing, laser cutting and engraving.
                </p>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Training seminars
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Useful insights about laser cutters */}
      <section id="useful-insights" className="cutter-section section-light">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title">Useful insights about laser cutters and laser cutting.</h2>
            <p className="section-subtitle">
              Would you like to learn more about laser cutting machines before making an investment? Find out everything you need to know about laser cutting in this guide.
            </p>
          </div>

          <div className="insights-grid">
            {/* Insight 1 */}
            <div className="insight-card">
              <div className="insight-icon-wrap">
                <Flame size={28} className="icon-red" />
              </div>
              <h3 className="insight-title">How does laser cutting work?</h3>
              <p className="insight-text">
                The laser system follows the selected geometry and separates the material in the process. The heat from the laser beam burns, melts or vaporizes the material.
              </p>
              <button 
                className="btn-outline-red font-sm"
                onClick={() => setInsightModal({
                  title: "How does laser cutting work?",
                  content: "Laser cutting is a contactless, thermal cutting process. The laser optics direct a high-intensity laser beam onto the material surface. Depending on the material, the concentrated heat beam burns, vaporizes, or melts the substrate along a pre-programmed vector path. Compressed air or nitrogen gas (air assist) blows away molten residue, leaving behind razor-sharp cut edges with zero tool wear."
                })}
              >
                How does laser cutting work?
              </button>
            </div>

            {/* Insight 2 */}
            <div className="insight-card">
              <div className="insight-icon-wrap">
                <Layers size={28} className="icon-red" />
              </div>
              <h3 className="insight-title">What materials can a laser cutter process?</h3>
              <p className="insight-text">
                High precision, speed and versatility – this is how the laser cutting process impresses. You can cut almost any material with a laser cutter.
              </p>
              <button 
                className="btn-outline-red font-sm"
                onClick={() => setInsightModal({
                  title: "What materials can a laser cutter process?",
                  content: "CO₂ laser cutters excel at processing organic substrates and polymers: cast & extruded acrylics, hardwoods, plywood, MDF, paper, cardboard, leather, felt, synthetic textiles, foam, rubber, and laserable plastic laminates. For bare metals (stainless steel, titanium, aluminum), fiber laser sources or flexx laser systems are used."
                })}
              >
                Suitable materials for laser cutting
              </button>
            </div>

            {/* Insight 3 */}
            <div className="insight-card">
              <div className="insight-icon-wrap">
                <Zap size={28} className="icon-red" />
              </div>
              <h3 className="insight-title">What laser power do I need for my application?</h3>
              <p className="insight-text">
                The optimal laser power depends largely on which application you perform most often.
              </p>
              <button 
                className="btn-outline-red font-sm"
                onClick={() => setInsightModal({
                  title: "What laser power do I need for my application?",
                  content: "For light engraving and thin paper/foil cutting, 30 to 40 watts is sufficient. For standard acrylic cutting up to 6 mm and wood up to 8 mm, 60 watts offers optimal balance. For high-speed production, thick acrylic (up to 20-25 mm), and dense hardwoods, 120W to 400W CO₂ lasers are recommended."
                })}
              >
                Laser power
              </button>
            </div>
          </div>

          {/* Technology comparison tabs & summary list */}
          <div className="tech-comparison-block">
            <h3 className="comp-block-heading">Advantages of a laser cutter in comparison with other technologies.</h3>
            
            <div className="comp-tab-buttons">
              <button 
                className={`comp-tab-btn ${comparisonTab === 'nomaschine' ? 'active' : ''}`}
                onClick={() => setComparisonTab('nomaschine')}
              >
                Laser cutter vs. no laser
              </button>
              <button 
                className={`comp-tab-btn ${comparisonTab === 'milling' ? 'active' : ''}`}
                onClick={() => setComparisonTab('milling')}
              >
                Laser cutter vs. cnc milling machine
              </button>
              <button 
                className={`comp-tab-btn ${comparisonTab === 'plasma' ? 'active' : ''}`}
                onClick={() => setComparisonTab('plasma')}
              >
                Laser cutters vs. plasma cutters
              </button>
              <button 
                className={`comp-tab-btn ${comparisonTab === 'saw' ? 'active' : ''}`}
                onClick={() => setComparisonTab('saw')}
              >
                Laser cutter vs. saw
              </button>
            </div>

            <div className="comp-content-box">
              <ul className="comp-bullet-list">
                <li><Check size={18} className="check-red" /> Inexpensive and quick production without any post-processing</li>
                <li><Check size={18} className="check-red" /> Any geometry and flexible contour design for individual products</li>
                <li><Check size={18} className="check-red" /> Reduced logistics and storage costs for different formats</li>
                <li><Check size={18} className="check-red" /> A single cutting tool for all materials</li>
                <li><Check size={18} className="check-red" /> Contactless, wear-free processes protect the workpiece</li>
                <li><Check size={18} className="check-red" /> Excellent cutting quality meets high cutting speed</li>
                <li><Check size={18} className="check-red" /> Precision: Best and reliable contour accuracy through OptiMotion™</li>
                <li><Check size={18} className="check-red" /> Adaptability: Work surfaces are optimized for different standard formats</li>
                <li><Check size={18} className="check-red" /> Low maintenance costs</li>
                <li><Check size={18} className="check-red" /> The right working table for every cutting application</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: What do you need to consider before choosing a laser cutter */}
      <section id="considerations" className="cutter-section section-white">
        <div className="container">
          <div className="section-header left">
            <div className="hero-badge">
              <Sliders size={14} /> Buying & Selection Guide
            </div>
            <h2 className="section-title text-left">
              What do you need to consider before choosing a laser cutter that's perfect for your application?
            </h2>
            <p className="section-subtitle text-left">
              Selecting the ideal industrial laser system requires evaluating laser source compatibility, wattage requirements, and material thickness capabilities.
            </p>
          </div>

          <div className="considerations-redesign-container">
            {/* Factor 1: Laser Sources Comparison */}
            <div className="consideration-card-block">
              <div className="consideration-grid">
                <div className="consideration-text-col">
                  <div className="factor-num-badge">Factor 01</div>
                  <h3 className="sub-heading-dark">A comparison of the different laser sources</h3>
                  <p className="body-desc-text">
                    Laser cutters differ primarily in the laser sources they use. Each laser type has its own advantages and is suitable for processing specific material classes:
                  </p>
                  
                  <div className="laser-sources-pills-list">
                    <div className="source-pill-card active-co2">
                      <div className="source-pill-header">
                        <span className="source-name font-semibold">CO₂ Laser Source (10.6 µm)</span>
                        <span className="source-tag-badge">Primary for Cutting</span>
                      </div>
                      <p className="source-pill-desc">
                        Ideal for processing non-metallic materials such as acrylic, wood, MDF, paper, textiles, plastics, leather, and organic substrates.
                      </p>
                    </div>

                    <div className="source-pill-card">
                      <div className="source-pill-header">
                        <span className="source-name font-semibold">Fiber Laser Source (1.06 µm)</span>
                        <span className="source-tag-badge metal">Metals & Hard Plastics</span>
                      </div>
                      <p className="source-pill-desc">
                        Best suited for metal marking (annealing/tarnishing), deep metal engraving, and high-contrast plastic marking with zero maintenance.
                      </p>
                    </div>

                    <div className="source-pill-card">
                      <div className="source-pill-header">
                        <span className="source-name font-semibold">Nd:YAG / Nd:YVO Crystal Lasers</span>
                        <span className="source-tag-badge crystal">Precision Micro-Marking</span>
                      </div>
                      <p className="source-pill-desc">
                        Suitable for specialized metal and plastic marking applications requiring ultra-fine laser spot diameters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="consideration-img-col">
                  <div className="consideration-img-frame">
                    <img 
                      src="/images/e340_laser_head.png" 
                      alt="Trotec high-precision laser optical cutting head" 
                      className="consideration-feature-img" 
                    />
                    <div className="img-caption-overlay">
                      <span>High-Precision CO₂ Optics & Laser Source Assembly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 2: High Power & Operational Flexibility */}
            <div className="consideration-card-block">
              <div className="consideration-grid reverse">
                <div className="consideration-img-col">
                  <div className="consideration-img-frame">
                    <img 
                      src="/images/laserwood_cutting_bed.png" 
                      alt="High power laser cutting bed in action" 
                      className="consideration-feature-img" 
                    />
                    <div className="img-caption-overlay">
                      <span>High-Wattage Laser Processing Thick Acrylic & Hardwood</span>
                    </div>
                  </div>
                </div>

                <div className="consideration-text-col">
                  <div className="factor-num-badge">Factor 02</div>
                  <h3 className="sub-heading-dark">High power facilitates enormous flexibility</h3>
                  <p className="body-desc-text">
                    Individual applications dictate the recommended laser wattage. As a rule of thumb, higher laser power enables faster cutting speeds and cleaner cut edges across thicker materials:
                  </p>
                  
                  <div className="power-rule-callout-box">
                    <div className="callout-icon-wrap">
                      <Zap size={22} className="icon-red" />
                    </div>
                    <div className="callout-text-wrap">
                      <h4 className="callout-title">Golden Rule of Laser Power Selection</h4>
                      <p className="callout-body">
                        While thin polyester fabric or paper can be cut economically with a <strong className="text-dark">60-watt laser</strong>, cutting 20 mm thick acrylic or dense hardwood requires a high-power laser system (<strong className="text-dark">120W to 400W</strong>). A higher wattage laser system provides ultimate flexibility to expand your business into heavier industrial materials.
                      </p>
                    </div>
                  </div>

                  <div className="wattage-flex-grid">
                    <div className="watt-card">
                      <span className="watt-val">30W - 60W</span>
                      <span className="watt-label">Thin foils, paper, 3-6mm wood/acrylic</span>
                    </div>
                    <div className="watt-card highlight">
                      <span className="watt-val">120W - 200W</span>
                      <span className="watt-label">High-speed production & 12-15mm materials</span>
                    </div>
                    <div className="watt-card">
                      <span className="watt-val">400W+</span>
                      <span className="watt-label">Heavy industrial 20-25mm thick substrates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Factor 3: Material Thickness vs Laser Power Matrix Table */}
            <div className="consideration-card-block full-width-block">
              <div className="factor-header-center">
                <div className="factor-num-badge center">Factor 03</div>
                <h3 className="sub-heading-dark text-center">What material thickness can be laser cut?</h3>
                <p className="body-desc-text text-center" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
                  Four primary variables dictate maximum cutting thickness: <strong>Laser Power (Wattage)</strong>, <strong>Processing Throughput</strong>, <strong>Edge Quality Requirements</strong>, and <strong>Material Density</strong>.
                </p>
              </div>

              {/* Technical Thickness vs Power Table */}
              <div className="power-matrix-table-wrapper">
                <table className="power-matrix-table">
                  <thead>
                    <tr>
                      <th>Material Substrate</th>
                      <th className="text-center">30 Watts CO₂</th>
                      <th className="text-center">60 Watts CO₂</th>
                      <th className="text-center">120 Watts CO₂</th>
                      <th className="text-center highlight-col">200W / 400W CO₂</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thicknessPowerTable.map((row, idx) => (
                      <tr key={idx}>
                        <td className="mat-row-name">{row.material}</td>
                        <td className="text-center">{row.p30}</td>
                        <td className="text-center">{row.p60}</td>
                        <td className="text-center">{row.p120}</td>
                        <td className="text-center font-semibold text-red-highlight">{row.p400}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Limitless application possibilities split banner */}
      <section className="limitless-split-banner">
        <div className="limitless-left-box">
          <h2 className="limitless-title">Limitless application possibilities – fast and precise cuts</h2>
          <p className="limitless-desc">
            Whether you're designing a maker space, integrating the laser cutter into manufacturing, or using laser cutting as an advanced technology in schools or universities, our laser cutters enable cost-effective, wear-free cutting of wood, acrylic, MDF, paper, textiles and foam with great accuracy and at continuous speed. This ranges from the production of exclusive single pieces to online series.
          </p>
          <button 
            className="btn-outline-white"
            onClick={() => setQuoteModalOpen(true)}
          >
            Discover applications
          </button>
        </div>
        <div className="limitless-right-box">
          <img src="/images/engraved_law_office_sign.png" alt="Application Lab laser acrylic sign" className="limitless-banner-img" />
        </div>
      </section>

      {/* Section 13: How much does a laser cutter cost & Financing */}
      <section id="pricing" className="cutter-section section-white">
        <div className="container">
          <div className="pricing-split-layout">
            <div className="pricing-img-side">
              <img src="/images/laser_machine_cost_head.png" alt="Laser cutter price factors" className="pricing-head-img" />
            </div>

            <div className="pricing-info-side">
              <h2 className="pricing-main-title">How much does a laser cutter cost?</h2>

              <div className="pricing-sub-block">
                <h3 className="pricing-sub-title">What factors influence the price of your laser cutter?</h3>
                <p className="pricing-desc">
                  We configure the laser cutter to match your requirements, which makes it impossible to quote an exact price. Various factors like laser power, work surface size and accessories (e.g. the exhaust system) will affect the overall price. Machines start from $9,000.
                </p>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Details on influencing factors
                </button>
              </div>

              <div className="pricing-sub-block">
                <h3 className="pricing-sub-title">Financing options at Trotec</h3>
                <p className="pricing-desc">
                  Purchasing a laser cutter is a well-planned investment. To make the purchase of your new Trotec laser cutter easier, we can support you with various payment models:
                </p>
                <ul className="pricing-bullet-list">
                  <li>• Leasing</li>
                  <li>• Payment in installments</li>
                  <li>• Cash payment</li>
                </ul>
                <button 
                  className="btn-outline-red"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Financing options
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight Details Modal */}
      {insightModal && (
        <div className="cutter-modal-backdrop" onClick={() => setInsightModal(null)}>
          <div className="cutter-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setInsightModal(null)}>✕</button>
            <h3 className="modal-title">{insightModal.title}</h3>
            <p className="modal-desc" style={{ lineHeight: 1.7, fontSize: '0.975rem', marginTop: '1rem' }}>
              {insightModal.content}
            </p>
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button className="btn-primary-red" onClick={() => { setInsightModal(null); setQuoteModalOpen(true); }}>
                Consult Technical Specialist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quote / Demo Request Modal */}
      {quoteModalOpen && (
        <div className="cutter-modal-backdrop" onClick={() => setQuoteModalOpen(false)}>
          <div className="cutter-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setQuoteModalOpen(false)}>✕</button>
            
            {!formSubmitted ? (
              <>
                <h3 className="modal-title">Request a Laser Cutter Quote & Consultation</h3>
                <p className="modal-desc">
                  Fill out the form below to receive detailed technical specifications, pricing, or to arrange a live cutting demonstration in UAE.
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
                      <label>Company / Institution</label>
                      <input 
                        type="text" 
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Target Application</label>
                    <CustomSelect
                      defaultValue="Signage & Displays (Acrylic)"
                      options={[
                        'Signage & Displays (Acrylic)',
                        'Education, Schools & FabLabs',
                        'Manufacturing & Industrial Gaskets/Parts',
                        'Personalization & Wooden Items',
                        'Textiles, Leather & Fashion'
                      ]}
                      onChange={val => setFormData({...formData, application: val})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message / Specific Requirements</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about the materials and thickness you plan to cut..."
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
                <p>Your laser cutter inquiry has been received. Our technical team will get back to you within 24 hours.</p>
                <button className="btn-outline-red" onClick={() => { setQuoteModalOpen(false); setFormSubmitted(false); }}>
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ebook Download Modal */}
      {ebookModalOpen && (
        <div className="cutter-modal-backdrop" onClick={() => setEbookModalOpen(false)}>
          <div className="cutter-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setEbookModalOpen(false)}>✕</button>
            <div className="ebook-modal-flex">
              <div className="ebook-modal-img-col">
                <img src="/images/starting_laser_business_ebook.png" alt="10 questions before buying a laser" />
              </div>
              <div className="ebook-modal-text-col">
                <h3 className="modal-title">Download Free Laser Selection Guide</h3>
                <p className="modal-desc">
                  "10 Questions to Ask Yourself Before Buying a Laser" - Learn how to calculate ROI, select laser power, and choose table sizes for your applications.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setEbookModalOpen(false); alert('Guide download link has been sent to your email!'); }} className="modal-form">
                  <div className="form-group">
                    <label>Work Email Address *</label>
                    <input type="email" required placeholder="name@company.com" />
                  </div>
                  <button type="submit" className="btn-primary-red full-width">
                    Instant PDF Download
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaserCutterDetailPage;
