import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Network, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Overview', step: '01', to: '/' },
    { label: 'The Problem', step: '02', to: '/problem' },
    { label: 'Architecture', step: '03', to: '/architecture' },
    { label: 'Value & Governance', step: '04', to: '/value-governance' },
    { label: 'Use Cases', step: '05', to: '/use-cases' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50'
          : 'bg-[#090d16]/80 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Link to Homepage (/) */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1" 
          id="brand-link"
          aria-label="Intelligenz IT Home"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <Network className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                Intelligenz <span className="text-cyan-400">IT</span>
              </span>
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-700/50 hidden sm:inline-block">
                Enterprise AI
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wide">
              CryoGen AI <span className="text-slate-600">|</span> Domain Mesh
            </p>
          </div>
        </Link>

        {/* Desktop & Laptop Navigation */}
        <nav 
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-700/60 shadow-sm shadow-cyan-950/50 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`text-[10px] font-mono ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                    {link.step}
                  </span>
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-slate-400 font-mono px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Decentralized Mesh Ready</span>
          </div>
          <button
            id="header-cta-btn"
            onClick={() => onOpenConsultation('CryoGen AI Architecture Briefing')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg shadow-sm shadow-cyan-600/30 transition-all active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Discuss Use Case</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Hamburger Menu Toggle (Mobile & Tablet) */}
        <div className="lg:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800 hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="lg:hidden bg-[#090e1b] border-b border-slate-800/90 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold px-3 pb-1 border-b border-slate-800/60">
            Platform Navigation
          </div>

          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-200 bg-cyan-950/80 border border-cyan-700/70 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                        {link.step}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                        Current
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('CryoGen AI Architecture Briefing');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Discuss a Domain Mesh Use Case</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
