"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AboutClient } from '../components/AboutClient';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About FLYDEVS GLOBAL - Creative Agency & Digital Solutions"
        description="Learn about FLYDEVS GLOBAL, a leading creative agency providing innovative digital solutions, web development, and design services. We build digital experiences people love."
        keywords="about FLYDEVS GLOBAL, creative agency Dubai, digital solutions, web development agency, design agency, innovative technology, digital transformation, creative design, engineering team, UI/UX design, brand development, digital experiences"
        ogImage="/about-og-image.jpg"
        ogUrl="https://flydevsglobal.com/about"
      />
      <Navigation />
      <AboutClient />
      <Footer />
    </>
  );
}