"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ContactClient } from '../components/ContactClient';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Nacrosoft Technology & FlyHomies Associates | Get in Touch"
        description="Get in touch with Nacrosoft Technology and FlyHomies Associates for VoIP solutions, software development, web development, digital marketing, and mobile app development services."
        keywords="contact Nacrosoft Technology, contact FlyHomies Associates, VoIP inquiry, web development inquiry, business inquiry Dubai"
        ogImage="/contact-og-image.jpg"
        ogUrl="https://flydevsglobal.com/contact"
      />
      <Navigation />
      <ContactClient />
      <Footer />
    </>
  );
}