"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServicesClient from '../components/ServicesClient';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="FLYDEVS GLOBAL - Services & Digital Solutions"
        description="Discover FLYDEVS GLOBAL's comprehensive digital services including web development, VoIP solutions, software development, UI/UX design, and digital transformation. We build innovative solutions for B2B and B2C brands."
        keywords="web development services, VoIP solutions, software development, digital transformation, UI/UX design, creative agency, digital solutions Dubai, web design agency, custom software, B2B solutions, B2C solutions"
        ogImage="/services-og-image.jpg"
        ogUrl="https://flydevsglobal.com/services"
      />
      <Navigation />
      <ServicesClient />
      <Footer />
    </>
  );
}