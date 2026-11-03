import { useState, useEffect, useRef } from 'react';
import './Products.css';
import { ChevronLeft, ChevronRight, Zap, ArrowRight, Scissors, ScanLine, Cpu, Layers, Package, PenTool, Settings, Award } from 'lucide-react';
import { PRODUCTS_DATA, type DetailedProduct } from '../data/productsData';

interface ProductsProps {
  onSelectProduct?: (product: DetailedProduct) => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  const categories = ["All Systems", "Laser Machines", "Industrial Marking", "Software & Materials"];
  const [activeCategory, setActiveCategory] = useState("All Systems");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const sliderRef = useRef<HTMLDivElement>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0
  });

  const filteredProducts = activeCategory === "All Systems"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  // Measure and animate floating pill indicator
  const updateIndicator = () => {
    const activeIndex = categories.indexOf(activeCategory);
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateIndicator();
    const t = setTimeout(updateIndicator, 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  // Responsive cards count calculation & tab indicator update
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 992) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      }
      updateIndicator();
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCategory]);

  const maxIndex = Math.max(0, filteredProducts.length - cardsPerView);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const getProductIcon = (slug: string) => {
    const map: Record<string, React.ReactNode> = {
      'speedy-series':    <Scissors size={32} />,
      'e-line':           <Layers size={32} />,
      'speedmarker-series': <ScanLine size={32} />,
      'laser-software':   <Cpu size={32} />,
      'laser-materials':  <Package size={32} />,
      'laser-engraver':   <PenTool size={32} />,
      'laser-cutter':     <Scissors size={32} />,
      'laser-marker':     <Award size={32} />,
      'laser-solutions':  <Settings size={32} />,
    };
    return map[slug] ?? <Zap size={32} />;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? (maxIndex > 0 ? maxIndex : 0) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleProductClick = (product: DetailedProduct) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    } else {
      window.location.hash = `/product/${product.slug}`;
    }
  };

  return (
    <section id="products" className="section section-light products">
      <div className="container">
        {/* Section Header */}
        <div className="products-header text-center">
          <div className="products-label-badge">
            <Zap size={15} />
            <span>PRODUCT SHOWCASE</span>
          </div>
          <h2>Explore Our Laser Portfolio</h2>
          <p className="products-subtitle">
            Leading laser cutting, engraving, marking systems, intelligent software and certified materials.
          </p>

          {/* Category Filter Tabs with Sliding Floating Pill */}
          <div className="products-category-pills" ref={pillsContainerRef}>
            <div 
              className="category-pill-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity
              }}
            />
            {categories.map((cat, idx) => (
              <button
                key={idx}
                ref={el => { tabRefs.current[idx] = el; }}
                className={`category-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Slider Container */}
        <div 
          className="products-slider-wrapper"
        >
          {/* Navigation Buttons */}
          <div className="slider-nav-controls">
            <button 
              onClick={handlePrev} 
              className="slider-nav-arrow left" 
              aria-label="Previous Products"
              disabled={maxIndex === 0}
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              onClick={handleNext} 
              className="slider-nav-arrow right" 
              aria-label="Next Products"
              disabled={maxIndex === 0}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Slider Track with Tab Transition Key */}
          <div className="products-slider-viewport" key={activeCategory} ref={sliderRef}>
            <div 
              className="products-slider-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {filteredProducts.map((product, pIndex) => (
                <div 
                  key={product.id} 
                  className="products-slider-card-container tab-card-animate"
                  style={{ 
                    flex: `0 0 ${100 / cardsPerView}%`,
                    animationDelay: `${pIndex * 0.06}s`
                  }}
                >
                  <div 
                    className="product-card"
                    onClick={() => handleProductClick(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Product Image */}
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-image"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="product-content">
                      <h4 className="product-card-title">{product.name}</h4>
                      <p className="product-card-desc">{product.shortDescription}</p>

                      <div className="product-actions">
                        <button 
                          type="button"
                          className="btn btn-primary product-card-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product);
                          }}
                        >
                          <span>{product.buttonText}</span>
                          <span className="btn-arrow-circle">
                            <ArrowRight size={13} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots / Progress */}
          {maxIndex > 0 && (
            <div className="products-slider-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`slider-dot-btn ${currentIndex === dotIdx ? 'active' : ''}`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
