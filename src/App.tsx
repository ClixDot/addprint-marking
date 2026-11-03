import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Products from './components/Products';
import SpeedyFeature from './components/SpeedyFeature';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import SpeedySeriesDetailPage from './components/SpeedySeriesDetailPage';
import ELineDetailPage from './components/ELineDetailPage';
import SpeedMarkerDetailPage from './components/SpeedMarkerDetailPage';
import RubySoftwareDetailPage from './components/RubySoftwareDetailPage';
import LaserMaterialsDetailPage from './components/LaserMaterialsDetailPage';
import { LaserEngraverDetailPage } from './components/LaserEngraverDetailPage';
import { LaserCutterDetailPage } from './components/LaserCutterDetailPage';
import { LaserMarkerDetailPage } from './components/LaserMarkerDetailPage';
import { LaserSolutionsDetailPage } from './components/LaserSolutionsDetailPage';
import Reveal from './components/Reveal';
import WhatsAppWidget from './components/WhatsAppWidget';
import type { DetailedProduct } from './data/productsData';
import { getProductBySlug } from './data/productsData';

import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<DetailedProduct | null>(null);

  // Sync state with URL hash (#/product/:slug)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/product/')) {
        const slug = hash.replace('#/product/', '');
        const found = getProductBySlug(slug);
        if (found) {
          setSelectedProduct(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        setSelectedProduct(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);



  const handleSelectProduct = (product: DetailedProduct) => {
    setSelectedProduct(product);
    window.location.hash = `#/product/${product.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedProduct(null);
    window.location.hash = '#products';
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {selectedProduct ? (
          selectedProduct.slug === 'speedy-series' ? (
            <Reveal><SpeedySeriesDetailPage 
              product={selectedProduct} 
              onBack={handleBackToOverview} 
              onSelectProduct={handleSelectProduct}
            /></Reveal>
          ) : selectedProduct.slug === 'e-line' ? (
            <Reveal><ELineDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onNavigateSpeedy={() => {
                const speedy = getProductBySlug('speedy-series');
                if (speedy) handleSelectProduct(speedy);
              }}
            /></Reveal>
          ) : selectedProduct.slug === 'speedmarker-series' ? (
            <Reveal><SpeedMarkerDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
            /></Reveal>
          ) : selectedProduct.slug === 'laser-software' ? (
            <Reveal><RubySoftwareDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
            /></Reveal>
          ) : selectedProduct.slug === 'laser-materials' ? (
            <Reveal><LaserMaterialsDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
            /></Reveal>
          ) : selectedProduct.slug === 'laser-engraver' ? (
            <Reveal><LaserEngraverDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
              onNavigateSpeedy={() => {
                const speedy = getProductBySlug('speedy-series');
                if (speedy) handleSelectProduct(speedy);
              }}
            /></Reveal>
          ) : selectedProduct.slug === 'laser-cutter' ? (
            <Reveal><LaserCutterDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
              onNavigateSpeedy={() => {
                const speedy = getProductBySlug('speedy-series');
                if (speedy) handleSelectProduct(speedy);
              }}
              onNavigateELine={() => {
                const eline = getProductBySlug('e-line');
                if (eline) handleSelectProduct(eline);
              }}
              onNavigateRuby={() => {
                const ruby = getProductBySlug('laser-software');
                if (ruby) handleSelectProduct(ruby);
              }}
            /></Reveal>
          ) : selectedProduct.slug === 'laser-marker' ? (
            <Reveal><LaserMarkerDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
              onNavigateSpeedMarker={() => {
                const speedmarker = getProductBySlug('speedmarker-series');
                if (speedmarker) handleSelectProduct(speedmarker);
              }}
              onNavigateSpeedy={() => {
                const speedy = getProductBySlug('speedy-series');
                if (speedy) handleSelectProduct(speedy);
              }}
              onNavigateRuby={() => {
                const ruby = getProductBySlug('laser-software');
                if (ruby) handleSelectProduct(ruby);
              }}
            /></Reveal>
          ) : selectedProduct.slug === 'laser-solutions' ? (
            <Reveal><LaserSolutionsDetailPage
              product={selectedProduct}
              onBack={handleBackToOverview}
              onSelectProduct={handleSelectProduct}
            /></Reveal>
          ) : (
            <Reveal><ProductDetailPage 
              product={selectedProduct} 
              onBack={handleBackToOverview} 
              onSelectProduct={handleSelectProduct}
            /></Reveal>
          )
        ) : (
          <>
            <Reveal><Hero /></Reveal>
            <Reveal><TrustStrip /></Reveal>
            <Reveal><About /></Reveal>
            <Reveal><Products onSelectProduct={handleSelectProduct} /></Reveal>
            <Reveal><SpeedyFeature /></Reveal>
            <Reveal><Services /></Reveal>
            <Reveal><CTA /></Reveal>
            <Reveal><Contact /></Reveal>
          </>
        )}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;

