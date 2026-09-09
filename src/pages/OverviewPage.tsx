import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { HeroFold } from '../components/HeroFold';
import { PageNavigation } from '../components/PageNavigation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { LayoutContextType } from '../components/Layout';
import { 
  AlertTriangle, 
  Layers, 
  ShieldCheck, 
  Workflow, 
  ArrowRight, 
  Sparkles, 
  Compass,
  CheckCircle2
} from 'lucide-react';

interface OverviewPageProps {
  onOpenConsultation?: (topic?: string) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onOpenConsultation: propOnOpen }) => {
  const outletContext = useOutletContext<LayoutContextType | null>();
  const onOpenConsultation = propOnOpen || outletContext?.onOpenConsultation || (() => {});

  useDocumentTitle(
    'Overview — CryoGen AI Domain Mesh',
    'CryoGen AI is Intelligenz IT’s Domain Mesh Agent Orchestration system — a decentralized network of specialised AI agents working toward a common business objective.'
  );

  const explorationTracks = [
    {
      step: '02',
      title: 'The Problem',
      path: '/problem',
      headline: 'Why One General-Purpose Agent Is Not Enough',
      desc: 'Understand why enterprise workflows fail when forced into single-prompt generalist architectures, and how a domain mesh eliminates cognitive bottlenecks.',
      cta: 'Explore the Problem',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      accent: 'border-amber-800/40 hover:border-amber-500/60',
    },
    {
      step: '03',
      title: 'Architecture',
      path: '/architecture',
      headline: 'A Decentralized Network Working Toward One Objective',
      desc: 'Inspect the 9-phase execution lifecycle, dual-mode peer collaboration (explicit vs. implicit), and continuous DPI telemetry across the mesh.',
      cta: 'Explore the Architecture',
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      accent: 'border-cyan-800/40 hover:border-cyan-500/60',
    },
    {
      step: '04',
      title: 'Value & Governance',
      path: '/value-governance',
      headline: 'Enterprise Adaptability Governed for Trust',
      desc: 'Explore the 4 core value blocks, role-oriented dFTE digital workers, and the 7-dimension DPI measurement framework ensuring audited scale.',
      cta: 'Understand Value & Governance',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      accent: 'border-emerald-800/40 hover:border-emerald-500/60',
    },
    {
      step: '05',
      title: 'Use Cases',
      path: '/use-cases',
      headline: 'Where Domain Mesh Orchestration Creates Value',
      desc: 'Review 4 illustrative architecture flows across IT Operations, SAP & Enterprise Apps, Customer Service, and Hybrid Cloud Operations.',
      cta: 'Explore Use Cases',
      icon: <Workflow className="w-5 h-5 text-blue-400" />,
      accent: 'border-blue-800/40 hover:border-blue-500/60',
    },
  ];

  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Main Hero Fold with Decentralized Agent Mesh Visual */}
      <HeroFold onOpenConsultation={onOpenConsultation} />

      {/* 2. Structured Architectural Pathways to other pages */}
      <section className="py-20 bg-[#070b15] border-b border-slate-800/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 text-xs font-mono font-medium mb-3 border border-cyan-800/50">
              <Compass className="w-3.5 h-3.5" />
              <span>Explore the Platform Architecture</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Navigate the CryoGen AI Enterprise Framework
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore how Intelligenz IT structures decentralized agent coordination, operational governance, and verified business outcomes across every enterprise boundary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {explorationTracks.map((track) => (
              <Link
                key={track.path}
                to={track.path}
                className={`group p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0c1324] via-[#090e1b] to-[#070b15] border ${track.accent} transition-all duration-300 shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/50">
                        {track.step}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {track.title}
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {track.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {track.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {track.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all pt-3 border-t border-slate-800/80">
                  <span>{track.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* Contextual Next Navigation */}
          <PageNavigation
            next={{
              path: '/problem',
              step: '02',
              label: 'The Enterprise Architecture Challenge',
              description: 'Examine why single-agent models fail under enterprise complexity.',
            }}
          />

        </div>
      </section>
    </div>
  );
};
