"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PortfolioClient from '../components/PortfolioClient';
import SEO from '../components/SEO';

export default function PortfolioPage() {
  return (
    <>
      <SEO
        title="Portfolio - Nacrosoft Technology & FlyHomies Associates | Our Projects"
        description="Explore our portfolio of successful projects including web development, VoIP solutions, e-commerce platforms, and digital transformation for businesses across Dubai, UAE, India, and Saudi Arabia."
        keywords="portfolio Nacrosoft Technology, web development portfolio, VoIP projects, e-commerce websites, digital solutions portfolio, UAE web development, India web projects, Saudi Arabia digital solutions"
        ogImage="/portfolio-og-image.jpg"
        ogUrl="https://flydevsglobal.com/portfolio"
      />
      <Navigation />
      <PortfolioClient />
      <Footer />
    </>
  );
}