import React from 'react';
import { Link } from 'react-router-dom';
import { Network, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: '01 Overview & Architecture', to: '/' },
    { label: '02 The Problem (Single vs Mesh)', to: '/problem' },
    { label: '03 The 9-Phase Lifecycle', to: '/architecture' },
    { label: '04 Value, Governance & DPI', to: '/value-governance' },
    { label: '05 Enterprise Use Cases', to: '/use-cases' },
  ];

  return (
    <footer className="bg-[#050810] border-t border-slate-800 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Core Position */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 inline-flex group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Network className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Intelligenz <span className="text-cyan-400">IT</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Intelligenz IT is a digital transformation and enterprise technology company helping organizations move beyond isolated AI assistants toward coordinated, governed and measurable agent systems.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
              <span>Platform: CryoGen AI — Domain Mesh Agent Orchestration</span>
            </div>
          </div>

          {/* Col 2: Core Enterprise Capabilities */}
          <div>
            <div className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-3">
              Core Practices
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-slate-200 transition-colors">SAP S/4HANA & ECC Transformation</li>
              <li className="hover:text-slate-200 transition-colors">Salesforce Enterprise Solutions</li>
              <li className="hover:text-slate-200 transition-colors">ServiceNow ITSM & Workflows</li>
              <li className="hover:text-slate-200 transition-colors">Hybrid Cloud Architecture (AWS/Azure/GCP)</li>
              <li className="hover:text-slate-200 transition-colors">Enterprise Data & Analytics</li>
              <li className="hover:text-slate-200 transition-colors">Agentic AI & Multi-Agent Engineering</li>
            </ul>
          </div>

          {/* Col 3: Multi-Page Navigation Routes */}
          <div>
            <div className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-3">
              CryoGen AI Architecture
            </div>
            <ul className="space-y-2 text-slate-400">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="hover:text-cyan-300 transition-colors focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Intelligenz IT. All rights reserved.</p>
            <p className="text-slate-600">
              Illustrative architecture models shown. All third-party trademarks (SAP, Salesforce, ServiceNow, AWS, Azure) are property of their respective owners.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
