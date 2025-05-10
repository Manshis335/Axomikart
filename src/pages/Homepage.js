import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductBanner from '../components/ProductBanner';
import ProductSlider from '../components/ProductSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductBanner />
      <ProductSlider />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default HomePage; 
