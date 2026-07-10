// AboutClient.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { ImageWithFallback } from '../Fallback/ImageWithFallback';

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

function StatCounter({ value, suffix, label, delay, dark = false }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          setTimeout(() => {
            let start = 0;
            const end = parseInt(value);
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }, delay);
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
  }, [value, delay, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6">
      <div
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2"
        style={{ color: dark ? '#d4e84a' : '#1a1a1a' }}
      >
        {count}
        {suffix}
      </div>
      <p className={dark ? 'text-white/60 text-sm sm:text-base' : 'text-gray-500 text-sm sm:text-base'}>
        {label}
      </p>
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

function AboutHero() {
  return (
    <section className="relative pt-8 pb-16 lg:pb-20">
      <FadeInSection>
        <div className="mb-6">
          <Badge on="light">ABOUT US</Badge>
        </div>
      </FadeInSection>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <FadeInSection delay={100}>
          <div>
            <h1 className="font-bold leading-[0.95] tracking-tight text-[clamp(2.5rem,6.5vw,5rem)] mb-6">
              <span className="block">Since 2015 —</span>
              <span className="block">Nacrosoft &</span>
              <span className="block text-gray-300">FlyHomies</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-gray-600 leading-relaxed mb-10">
              Building reliable, high-performance software solutions tailored to the unique needs of both B2B and B2C
              brands since 2015.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group bg-black text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-wider flex items-center justify-center gap-3 hover:bg-[#1a1a1a] transition-colors"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm tracking-wider flex items-center justify-center gap-3 hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                <span>OUR SERVICES</span>
              </Link>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="flex justify-center animate-float">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-[#d4e84a]/20 rounded-3xl blur-3xl"></div>
              <ImageWithFallback src="/fh.png" alt="Nacrosoft Technology and FlyHomies Associates" className="w-full h-full object-contain relative" />
            </div>
          </div>
        </FadeInSection>
      </div>

      <div className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl border-t border-gray-200 pt-10">
        {[
          { value: '9+', label: 'Years Experience' },
          { value: '100+', label: 'Happy Clients' },
          { value: '7+', label: 'Countries Served' },
          { value: '100+', label: 'Projects Completed' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1a1a]">{s.value}</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <FadeInSection>
      <section
        style={{
          marginTop: 20,
          background: '#1a1a1a',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 60px)',
          borderRadius: 24,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <Badge on="dark">OUR STORY</Badge>
            </div>

            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 'clamp(16px, 2vw, 20px)',
              }}
            >
              Our <span style={{ color: '#d4e84a' }}>Journey</span>
            </h2>

            <div
              style={{
                fontSize: 'clamp(14px, 1.2vw, 17px)',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
              }}
              className="space-y-4"
            >
              <p>
                Our inspiring journey began in 2015 as a startup unit within the computer engineering department classroom
                at Majlis College. Starting from humble beginnings, we&apos;ve navigated numerous challenges and milestones.
              </p>
              <p>
                Nacrosoft is an A to Z VoIP solution provider offering switches, servers, VOS 3000, dialers, routers, VoIP
                websites, reseller products, and many other VoIP tools including Switch VPS.
              </p>
              <p>
                In collaboration with FlyHomies Associates, we&apos;re revolutionizing web design and development by blending
                technical expertise with creative design capabilities.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#d4e84a]/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
              <ImageWithFallback src="/story.svg" alt="Nacrosoft Technology story" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

function TimelineSection() {
  const timelineData = [
    { year: '2016', event: 'Registered as a Private Limited Company named Nacrosoft Technology' },
    { year: '2018', event: 'Team strength reached 300; tie-ups with multinational companies in 7 countries' },
    { year: '2020', event: 'Started operations in the Middle East; moved into the Emirates heart of Dubai; focus shifted towards web design and development' },
    { year: '2021', event: 'Company rebranded as FlyHomies Associates, aligning with growing digital service demand' },
    { year: '2022', event: 'Positioned as a major player with top-tier brands under our belt' },
    { year: '2023', event: 'Growth trajectory continues to soar with strong commercial results' },
    { year: '2024', event: 'Registered as a private limited company; office opened in Willingdon Island, Kochi with tie-ups for office spaces' },
  ];

  return (
    <section style={{ marginTop: 20, padding: 'clamp(40px, 6vw, 80px) 0' }}>
      <FadeInSection>
        <div className="mb-6">
          <Badge on="light">OUR HISTORY</Badge>
        </div>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(40px, 6vw, 56px)',
            maxWidth: 700,
          }}
        >
          A decade of growth, one milestone at a time
        </h2>
      </FadeInSection>

      <div className="space-y-4">
        {timelineData.map((item, index) => (
          <FadeInSection key={item.year} delay={index * 100}>
            <div className="flex items-center gap-5 sm:gap-8 bg-white border border-black/5 rounded-2xl p-5 sm:p-7 shadow-[0_8px_24px_rgba(26,26,26,0.05)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,26,26,0.1)] transition-all duration-300">
              <div
                className="shrink-0 flex items-center justify-center rounded-full font-bold text-sm sm:text-base"
                style={{ width: 64, height: 64, background: '#d4e84a', color: '#1a1a1a' }}
              >
                {item.year}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.event}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const cards = [
    {
      icon: <Target size={28} strokeWidth={2} color="#1a1a1a" />,
      title: 'Our Mission',
      desc: 'To deliver reliable, high-performance software for both B2B and B2C brands through advanced test automation and innovative VoIP solutions.',
    },
    {
      icon: <Eye size={28} strokeWidth={2} color="#1a1a1a" />,
      title: 'Our Vision',
      desc: 'To revolutionize how businesses present themselves online by merging technical backbone with creative design, creating visually striking, user-friendly websites.',
    },
  ];

  return (
    <section style={{ marginTop: 20 }}>
      <div className="grid md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <FadeInSection key={card.title} delay={i * 150}>
            <div
              style={{
                background: '#1a1a1a',
                borderRadius: 24,
                padding: 'clamp(32px, 4vw, 44px)',
                height: '100%',
              }}
            >
              <div
                className="flex items-center justify-center rounded-full mb-6"
                style={{ width: 64, height: 64, background: '#d4e84a' }}
              >
                {card.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">{card.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const expertiseData = [
    { icon: <Award size={26} color="#1a1a1a" />, title: 'VoIP Solutions', desc: 'Complete A to Z VoIP solutions including switches, servers, and dialers' },
    { icon: <Lightbulb size={26} color="#1a1a1a" />, title: 'VOS 3000', desc: 'Expert implementation and customization of VOS 3000 systems' },
    { icon: <Shield size={26} color="#1a1a1a" />, title: 'Dialer Systems', desc: 'Itell, Pronto, Zem, Avon, and custom dialer solutions' },
    { icon: <Heart size={26} color="#1a1a1a" />, title: 'Web Development', desc: 'User-friendly, visually appealing websites with FlyHomies' },
    { icon: <Users size={26} color="#1a1a1a" />, title: 'Custom Software', desc: 'Bespoke software solutions for B2B and B2C brands' },
    { icon: <TrendingUp size={26} color="#1a1a1a" />, title: 'TOP UP Services', desc: 'Complete TOP UP, CDR Customizing, and VSP Customizing' },
    { icon: <Target size={26} color="#1a1a1a" />, title: 'Quality Assurance', desc: 'State-of-the-art test automation for reliable products' },
    { icon: <Lightbulb size={26} color="#1a1a1a" />, title: 'Innovation', desc: 'Nearly a decade of knowledge in VoIP and software development' },
  ];

  return (
    <section
      style={{
        marginTop: 20,
        background: '#d4e84a',
        padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 60px)',
        borderRadius: 24,
      }}
    >
      <style>{`
        .abt-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px 24px;
          border: 1px solid rgba(26,26,26,0.05);
          box-shadow: 0 8px 24px rgba(26,26,26,0.07);
          transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .abt-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(26,26,26,0.15);
        }
        .abt-card-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #f7f5f2;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .abt-card:hover .abt-card-icon {
          background: #d4e84a;
          transform: scale(1.05) translateY(-3px);
        }
      `}</style>

      <FadeInSection>
        <div className="mb-6">
          <Badge on="light">OUR EXPERTISE</Badge>
        </div>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(40px, 6vw, 56px)',
            maxWidth: 700,
          }}
        >
          Complete VoIP solutions and cutting-edge software development
        </h2>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {expertiseData.map((item, index) => (
          <FadeInSection key={item.title} delay={index * 80}>
            <div className="abt-card h-full">
              <div className="abt-card-icon">{item.icon}</div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '9', suffix: '+', label: 'Years Experience' },
    { value: '100', suffix: '+', label: 'Happy Clients' },
    { value: '7', suffix: '+', label: 'Countries Served' },
    { value: '100', suffix: '+', label: 'Projects Completed' },
  ];

  return (
    <FadeInSection>
      <section
        style={{
          marginTop: 20,
          background: '#1a1a1a',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 60px)',
          borderRadius: 24,
        }}
      >
        <div className="mb-10">
          <Badge on="dark">GROWTH IN NUMBERS</Badge>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginTop: 20,
              maxWidth: 640,
            }}
          >
            From classroom startup to global <span style={{ color: '#d4e84a' }}>technology partner</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} delay={index * 200} dark />
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}

function TeamSection() {
  const teamMembers = [
    { icon: <Users size={40} color="#1a1a1a" />, title: 'Leadership Team', desc: 'Visionary leaders guiding our strategic direction' },
    { icon: <Lightbulb size={40} color="#1a1a1a" />, title: 'Development Experts', desc: 'Skilled developers creating cutting-edge solutions' },
    { icon: <Heart size={40} color="#1a1a1a" />, title: 'Creative Team', desc: 'Design wizards crafting beautiful user experiences' },
  ];

  return (
    <section style={{ marginTop: 20, padding: 'clamp(40px, 6vw, 80px) 0' }}>
      <FadeInSection>
        <div className="mb-6">
          <Badge on="light">OUR PEOPLE</Badge>
        </div>
        <h2
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 16,
            maxWidth: 700,
          }}
        >
          Meet the team behind Nacrosoft & FlyHomies
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-12">
          The passionate professionals driving innovation and excellence across VoIP, software, and design.
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {teamMembers.map((member, i) => (
          <FadeInSection key={member.title} delay={i * 150}>
            <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-[0_8px_24px_rgba(26,26,26,0.07)] hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(26,26,26,0.12)] transition-all duration-500 text-center h-full">
              <div
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ background: '#f7f5f2' }}
              >
                {member.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{member.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={300}>
        <div className="text-center">
          <Link
            to="/team"
            className="group inline-flex items-center bg-black text-white px-8 py-4 rounded-full text-xs sm:text-sm tracking-wider gap-3 hover:bg-[#1a1a1a] transition-colors"
          >
            MEET OUR TEAM
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FadeInSection>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ marginTop: 20, marginBottom: 20 }}>
      <style>{`
        .abt-final-cta {
          background: #d4e84a;
          border-radius: 24px;
          padding: clamp(36px, 6vw, 64px) clamp(24px, 4vw, 60px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
        .abt-final-cta-btn {
          background: #1a1a1a;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 16px 32px;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
          letter-spacing: 0.03em;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .abt-final-cta-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 24px rgba(26,26,26,0.25);
        }
        .abt-final-cta-icon {
          width: 32px;
          height: 32px;
          background: #d4e84a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .abt-final-cta-btn:hover .abt-final-cta-icon {
          transform: translateX(3px) translateY(-3px);
        }
        @media (max-width: 900px) {
          .abt-final-cta {
            flex-direction: column;
            align-items: flex-start !important;
            text-align: left;
          }
          .abt-final-cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="abt-final-cta">
        <div>
          <h3
            style={{
              fontSize: 'clamp(24px, 3.5vw, 42px)',
              fontWeight: 800,
              color: '#1a1a1a',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: 10,
            }}
          >
            Ready to Work With Us?
          </h3>
          <p style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(26,26,26,0.65)', maxWidth: 520, lineHeight: 1.6 }}>
            From VoIP infrastructure to web design, let&apos;s build your next project together.
          </p>
        </div>
        <Link to="/contact" className="abt-final-cta-btn">
          CONTACT US TODAY
          <div className="abt-final-cta-icon">
            <ArrowUpRight size={16} color="#1a1a1a" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export function AboutClient() {
  return (
    <div className="pt-20 bg-[#f7f5f2] text-[#1a1a1a]" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHero />
        <StorySection />
        <TimelineSection />
        <MissionVisionSection />
        <ExpertiseSection />
        <StatsSection />
        <TeamSection />
        <FinalCTA />
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}