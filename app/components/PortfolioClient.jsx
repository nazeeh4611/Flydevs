"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, CheckCircle, Globe, ArrowRight } from 'lucide-react';

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Badge({ children, on = 'light' }) {
  const isDark = on === 'dark';
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        border: `1.5px solid ${isDark ? '#d4e84a' : '#1a1a1a'}`,
        borderRadius: 999,
        padding: '6px 18px',
        fontSize: 'clamp(11px, 1vw, 12px)',
        fontWeight: 600,
        letterSpacing: '0.08em',
        color: isDark ? '#d4e84a' : '#1a1a1a',
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          background: isDark ? '#d4e84a' : '#1a1a1a',
          borderRadius: '50%',
        }}
      />
      {children}
    </div>
  );
}

const projects = [
      
    
  {
  title: 'Media Mind Digital',
  client: 'Media Mind Digital',
  category: 'Company Profile & Portfolio',
  description: 'A modern digital agency website showcasing branding, web development, digital marketing, creative design, and portfolio services with a clean, responsive, and user-friendly experience.',
  image: '/mm.png',
  results: [
    'Professional Online Presence',
    'Responsive Design',
    'SEO Optimized',
    'Fast Performance'
  ],
  technologies: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Responsive Design'
  ],
  duration: '2 Weeks',
  year: '2026',
  link: 'https://www.mediaminddigital.ae/',
  location: 'Dubai, UAE'
},
  {
    
    title: 'Alrkn Alraqy Hotel Management',
    client: 'Alrkn Alraqy',
    category: 'Hotel Management & Booking',
    description: 'Dubai and Middle East based hotel management and booking platform featuring luxury accommodations, real-time availability, and seamless reservation system.',
    image: '/alr.png',
    results: ['Dubai & Middle East', 'Hotel Management', 'Real-time Booking', 'Luxury Properties'],
    technologies: ['Hotel Booking', 'Property Management', 'Payment Integration', 'CRM'],
    duration: '2 weeks',
    year: '2026',
    link: 'https://www.alrknalraqy.in/',
    location: 'Dubai & Middle East'
  },
  {
    title: 'Eventra – Club Event Booking',
    client: 'Eventra',
    category: 'Event Booking Platform',
    description: 'Dubai-based club event and party booking platform built with MERN stack, offering seamless event discovery, booking management, and venue partnerships.',
    image: '/evnt.png',
    results: ['Dubai-Based', 'MERN Stack', 'Real-time Booking', 'Venue Partnerships'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment Gateway'],
    duration: '2 weeks',
    year: '2026',
    link: 'https://eventra.club/',
    location: 'Dubai, UAE'
  },
  {
    title: 'Secondwave – Digital Marketing',
    client: 'Secondwave',
    category: 'Digital Marketing Agency',
    description: 'Kerala-based digital marketing agency website showcasing comprehensive marketing solutions, SEO services, social media management, and creative campaigns.',
    image: '/sec.png',
    results: ['Kerala-Based', 'Full Service Agency', 'Performance Marketing', 'Creative Campaigns'],
    technologies: ['Digital Marketing', 'SEO', 'Social Media', 'Content Strategy'],
    duration: '1 week',
    year: '2026',
    link: 'https://secondwave.in/',
    location: 'Kerala, India'
  },
  {
    title: 'DD Events UAE – Event Management',
    client: 'DD Events UAE',
    category: 'Event Management',
    description: 'A creative event management website showcasing premium event planning services in Dubai, designed to bring client visions to life with style and precision.',
    image: '/dd.png',
    results: ['Dubai-Based', 'Creative Planning', 'Premium Events', 'High Engagement'],
    technologies: ['Event Portfolio', 'Brand Website', 'Media & Presentation'],
    duration: 'Ongoing',
    year: '2025',
    link: 'https://ddeventsuae.com/',
    location: 'Dubai, UAE'
  },
  {
    title: 'Arreen Medical – Clinical System',
    client: 'Arreen Medical',
    category: 'Healthcare Management',
    description: 'Saudi-based clinical system management platform for healthcare facilities, featuring patient records, appointment scheduling, and medical workflow automation.',
    image: '/arn.png',
    results: ['Saudi-Based', 'Clinical Management', 'Patient Records', 'Workflow Automation'],
    technologies: ['Healthcare', 'React', 'Node.js', 'Database Management', 'Security'],
    duration: '3 weeks',
    year: '2026',
    link: 'https://arren-ksa-frontend.vercel.app/',
    location: 'Saudi Arabia'
  },
  {
    title: 'Simpolo Trading – Building Materials',
    client: 'Simpolo Trading',
    category: 'Building Materials Supplier',
    description: 'A premium website for a trusted UAE-based supplier offering high-quality building materials since 2005, showcasing a wide range of durable and modern products.',
    image: '/sim.png',
    results: ['Since 2005', 'Premium Materials', 'UAE Trusted Supplier', 'Product Showcase'],
    technologies: ['Product Catalog', 'Construction Industry', 'Business Website'],
    duration: 'Ongoing',
    year: '2025',
    link: 'https://simpolotrading.com/',
    location: 'United Arab Emirates'
  },
  {
    title: 'Wavescation Holiday Homes',
    client: 'Waves Global LLC FZ',
    category: 'Property Management',
    description: 'DTCM-licensed premium holiday home management in Dubai, specializing in short-term rentals across Downtown Dubai, JBR, Palm Jumeirah and other prime locations with 5-star hospitality standards.',
    image: '/wave.png',
    results: ['DTCM Licensed', 'Premium Locations', '5-Star Standards', 'In-House Maintenance'],
    technologies: ['Property Mgmt', 'Hospitality', 'Booking Systems', 'Customer Service'],
    duration: '1 month',
    year: '2025',
    link: 'https://www.wavescation.com/',
    location: 'Dubai, UAE'
  },
  {
    title: 'The Foscape Aquatic Care',
    client: 'Foscape',
    category: 'Aquatic Services',
    description: 'World-class aquatic care services for residential and commercial aquariums, water gardens, fountains, swimming pools, spas, and lake management across South India.',
    image: '/fos.png',
    results: ['Residential & Commercial', 'Expert Maintenance', 'South India Coverage', 'Custom Solutions'],
    technologies: ['Aquarium Care', 'Water Systems', 'Maintenance', 'Consultation'],
    duration: '1 month',
    year: '2024',
    link: 'https://thefoscape.com/',
    location: 'South India'
  },
  {
    title: 'MVEWORLD Creative Production',
    client: 'MVEWORLD',
    category: 'Creative Agency',
    description: 'Full-service creative production agency specializing in filmmaking, advertisement creation, and event management for brand visual storytelling across Dubai and India.',
    image: '/mve.png',
    results: ['Expert Filmmaking', 'Brand Storytelling', 'Event Management', 'Multi-Location'],
    technologies: ['Videography', 'Editing', 'Marketing', 'Production'],
    duration: '1 month',
    year: '2024',
    link: 'https://springgreen-ant-mje91z0olyio9p2n.builder-preview.com/',
    location: 'Dubai & India'
  },
  {
    title: 'HH Mobiles & Gadgets',
    client: 'Hatfak Huna Mobile Phones Trading LLC',
    category: 'E-Commerce Retail',
    description: 'Premium mobile phones and accessories retailer based in Dubai, offering the latest gadgets and electronic devices with expert service and support.',
    image: '/hh.png',
    results: ['Dubai Based', 'Latest Gadgets', 'Expert Service', 'Accessories'],
    technologies: ['E-commerce', 'Retail', 'Mobile Tech', 'Customer Support'],
    duration: '1 month',
    year: '2024',
    link: 'https://hhmobiles.com/',
    location: 'Dubai, UAE'
  },
  {
    title: 'FlyBuy Fashion',
    client: 'FlyBuy Brand',
    category: 'Fashion E-Commerce',
    description: 'Multi-brand online fashion store for men and women, offering curated collections from India and UAE with seamless shopping experience.',
    image: '/fbb.png',
    results: ['Multi-Brand Store', 'Men & Women Fashion', 'India & UAE', 'Curated Collections'],
    technologies: ['E-commerce', 'Fashion', 'Multi-platform', 'Logistics'],
    duration: '1 month',
    year: '2024',
    link: 'https://flybuybrandae.creator-spring.com/',
    location: 'India & UAE'
  },
  {
    title: 'Zoyobathware Sanitary Solutions',
    client: 'Zoyobathware',
    category: 'Sanitary Retail',
    description: 'Premium sanitary ware provider in Malappuram and Kozhikode, offering modern and aesthetic fittings with expert consultation services.',
    image: '/zoy.png',
    results: ['Trusted Provider', 'Modern Fittings', 'Expert Team', 'Aesthetic Designs'],
    technologies: ['Sanitary Ware', 'Retail', 'Consultation', 'Installation'],
    duration: '1 month',
    year: '2024',
    link: 'https://zoyobathware.com/',
    location: 'Kerala, India'
  },
  {
    title: 'Evoke Smoke Lounge',
    client: 'Evoke Smoke Lounge',
    category: 'Hospitality & Entertainment',
    description: 'Community-centered hookah lounge offering premium tobacco, drinks, food, and gaming experiences in Qurum Hills with plans for franchise expansion.',
    image: '/evok.png',
    results: ['Community Focused', 'Multi-Revenue Streams', 'Gaming Facilities', 'Franchise Model'],
    technologies: ['Hospitality', 'F&B', 'Entertainment', 'Community Building'],
    duration: '1 month',
    year: '2024',
    link: 'https://evokesmokelauch.com/',
    location: 'Qurum Hills'
  },
  {
    title: 'Jungle Home Properties',
    client: 'Jungle Home',
    category: 'Property Booking',
    description: 'Specialized jungle property booking website featuring unique forest and jungle accommodations across South India for nature enthusiasts.',
    image: '/jung.png',
    results: ['South India Focus', 'Nature Properties', 'Easy Booking', 'Unique Experiences'],
    technologies: ['Booking System', 'Property Listings', 'Travel', 'Hospitality'],
    duration: '1 month',
    year: '2023',
    link: 'https://junglehome.hhmobiles.com/',
    location: 'South India'
  }
];

export default function PortfolioClient() {
  return (
    <div className="pt-20 bg-[#f7f5f2] text-[#1a1a1a]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20">
          <FadeInSection>
            <div className="mb-6">
              <Badge on="light">OUR PORTFOLIO</Badge>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="max-w-3xl">
              <h1 className="font-bold leading-[0.95] tracking-tight text-[clamp(2.5rem,6.5vw,5rem)] mb-6">
                <span className="block">Success Stories</span>
                <span className="block text-gray-300">& Live Projects</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
                Explore our successful projects and live websites we&apos;ve developed for businesses across various industries
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* Projects Grid */}
        <section className="py-8 pb-20">
          <FadeInSection delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Recent Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From e-commerce to hospitality, explore our diverse portfolio of successful web projects
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(26,26,26,0.07)] hover:shadow-[0_24px_48px_rgba(26,26,26,0.12)] transition-all duration-500 border border-black/5 group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = '/placeholder-project.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className="bg-[#1a1a1a] text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg text-center">
                        {project.category}
                      </span>
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-black/10">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-[#1a1a1a] mb-3">
                      <Globe size={16} />
                      <span className="font-medium text-sm">{project.client}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-black/5">
                        📍 {project.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-bold text-[#1a1a1a] mb-2 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.results.map((r, i) => (
                          <div key={i} className="flex gap-2 items-start group/item hover:translate-x-1 transition-transform duration-300">
                            <CheckCircle size={14} className="text-[#d4e84a] mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs text-gray-500 mb-2 font-medium">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-gray-50 px-2 py-1 rounded-full text-xs text-gray-700 border border-black/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex items-center justify-between pt-4 border-t border-black/5">
                      <span className="text-sm text-gray-500">{project.duration}</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a1a1a] hover:text-gray-700 flex items-center gap-2 group/btn font-medium text-sm"
                      >
                        Visit Website
                        <ExternalLink
                          size={14}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <FadeInSection>
            <div
              className="rounded-2xl p-12"
              style={{ background: '#1a1a1a' }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4e84a' }}>{projects.length}+</div>
                  <div className="text-white/60 text-sm">Live Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4e84a' }}>8+</div>
                  <div className="text-white/60 text-sm">Industries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4e84a' }}>3+</div>
                  <div className="text-white/60 text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#d4e84a' }}>100%</div>
                  <div className="text-white/60 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* CTA Section */}
        <section className="py-8 pb-20">
          <FadeInSection>
            <div
              className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              style={{ background: '#d4e84a' }}
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a] leading-tight">
                  Ready to Build Your Online Presence?
                </h2>
                <p className="text-lg text-[#1a1a1a]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                  From concept to launch, we help businesses create stunning, functional websites that drive results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-full hover:bg-[#2a2a2a] transition-all duration-300 text-sm font-medium group hover:scale-105 hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </FadeInSection>
        </section>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}