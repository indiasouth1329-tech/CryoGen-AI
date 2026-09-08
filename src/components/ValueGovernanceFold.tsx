import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sliders, 
  Maximize2, 
  Gauge, 
  Check, 
  ArrowRight, 
  Lock, 
  UserCheck, 
  BarChart3, 
  Briefcase, 
  Mail, 
  ChevronRight,
  Cpu
} from 'lucide-react';
import { VALUE_BLOCKS, DPI_DIMENSIONS } from '../data/cryogenContent';

export const ValueGovernanceFold: React.FC = () => {
  const [activeDpiDim, setActiveDpiDim] = useState(0);
  const [selectedSupportTab, setSelectedSupportTab] = useState<'dFTE' | 'DPI' | 'emailAgent'>('dFTE');

  return (
    <section 
      id="value-fold" 
      className="relative py-24 bg-[#080d1a] border-b border-slate-800 text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-medium mb-4 border border-slate-700">
            <span>04</span>
            <span className="text-slate-500">/</span>
            <span>Value, Governance & Performance</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Built for Enterprise Adaptability — Governed for Enterprise Trust
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Scalability without chaos. Customizability without proprietary lock-in. CryoGen AI provides the architectural discipline required to deploy agentic systems in audited, mission-critical environments.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4 CORE VALUE BLOCKS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {VALUE_BLOCKS.map((block) => (
            <div
              key={block.number}
              className="rounded-2xl bg-gradient-to-b from-[#0e162a] via-[#0a1020] to-[#070b15] border border-slate-800 hover:border-cyan-700/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/50">
                      {block.number}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {block.title}
                    </h3>
                  </div>
                </div>

                {/* Feature / Advantage / Benefit Structured Breakdown */}
                <div className="space-y-4 text-xs">
                  {/* Feature */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-1">
                      Feature: {block.feature}
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {block.featureSubtitle}
                    </p>
                  </div>

                  {/* Advantage */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[10px] font-mono uppercase text-blue-400 font-bold mb-1">
                      Advantage
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {block.advantage}
                    </p>
                  </div>

                  {/* Benefit */}
                  <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
                    <div className="text-[10px] font-mono uppercase text-cyan-300 font-bold mb-1">
                      Benefit
                    </div>
                    <p className="text-cyan-100 text-xs font-medium leading-relaxed">
                      {block.benefit}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-2">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-1.5">
                      {block.bulletPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-xs">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* SUPPORTING ARCHITECTURE STATEMENT EQUATION */}
        {/* ========================================================================= */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a1428] to-slate-900 border border-cyan-800/60 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold px-3 py-1 rounded bg-cyan-950 border border-cyan-800">
              The Architecture Formula
            </span>
            <p className="text-slate-400 text-xs mt-2">
              How the components unite into an enterprise operating model
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center items-center">
            
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-white">CryoGen AI</div>
              <div className="text-[10px] text-cyan-400 font-mono mt-1">= Orchestration</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-white">Domain Agents</div>
              <div className="text-[10px] text-blue-400 font-mono mt-1">= Specialisation</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-white">Enterprise Controls</div>
              <div className="text-[10px] text-amber-400 font-mono mt-1">= Governance</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold text-white">Humans</div>
              <div className="text-[10px] text-emerald-400 font-mono mt-1">= Accountability</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 col-span-2 sm:col-span-1">
              <div className="text-xs font-bold text-white">DPI</div>
              <div className="text-[10px] text-purple-400 font-mono mt-1">= Measurement</div>
            </div>

          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Together Operating As:</div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Governed Domain Mesh Operations
            </h3>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SUPPORTING CAPABILITIES: dFTE, DPI & EMAIL AGENT */}
        {/* ========================================================================= */}
        <div className="rounded-2xl bg-[#090f1e] border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Complementary Intelligenz IT Capabilities
              </span>
              <h3 className="text-base font-bold text-white mt-1">
                Deep-Dive: Digital Workers (dFTE), DPI Measurement & Specialized Micro-Agents
              </h3>
            </div>

            {/* Capability switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <button
                onClick={() => setSelectedSupportTab('dFTE')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  selectedSupportTab === 'dFTE'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                dFTE Digital Worker
              </button>
              <button
                onClick={() => setSelectedSupportTab('DPI')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  selectedSupportTab === 'DPI'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                DPI Measurement
              </button>
              <button
                onClick={() => setSelectedSupportTab('emailAgent')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                  selectedSupportTab === 'emailAgent'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Specialized Example
              </button>
            </div>
          </div>

          {/* TAB 1: dFTE — Digital Full-Time Equivalent */}
          {selectedSupportTab === 'dFTE' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-950/70 border border-blue-800/60 text-blue-300 text-xs font-mono mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Role-Oriented Concept</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  dFTE — Digital Full-Time Equivalent
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  A role-oriented digital worker concept designed around responsibilities, Key Result Areas (KRAs), expected outcomes, workflow ownership, enterprise permissions, human escalation, and controlled autonomy.
                </p>
                <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200">
                  <strong>Enterprise Principle:</strong> A dFTE is strictly <em>not</em> an employee replacement. A dFTE participates as a governed, specialised digital worker within a broader CryoGen AI domain mesh.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                  dFTE Architectural Anchors:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-cyan-300 font-mono block text-[10px]">Contract</span>
                    <span className="font-semibold text-white">Defined KRAs & Scope</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-cyan-300 font-mono block text-[10px]">Access</span>
                    <span className="font-semibold text-white">Enterprise Permissions</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-cyan-300 font-mono block text-[10px]">Supervision</span>
                    <span className="font-semibold text-white">Human Escalation Matrix</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-cyan-300 font-mono block text-[10px]">Integration</span>
                    <span className="font-semibold text-white">System of Record Access</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DPI — Agent Performance Measurement */}
          {selectedSupportTab === 'DPI' && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    DPI — Agent Performance Measurement Framework
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    A portable agent-performance, governance and scalability measurement framework for individual AI agents, digital workers, and multi-agent workflows.
                  </p>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950 px-3 py-1.5 rounded-lg border border-cyan-800">
                  Answers: Is this agent system ready to scale responsibly?
                </div>
              </div>

              {/* 7 Dimensions Selector Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 my-4">
                {DPI_DIMENSIONS.map((dim, idx) => (
                  <button
                    key={dim.name}
                    onClick={() => setActiveDpiDim(idx)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      activeDpiDim === idx
                        ? `${dim.color} border-current ring-1 ring-current`
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-bold">{dim.name}</div>
                  </button>
                ))}
              </div>

              {/* Active Dimension Details */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                    Evaluated Dimension: {DPI_DIMENSIONS[activeDpiDim].name}
                  </span>
                  <p className="text-slate-200 font-medium">
                    {DPI_DIMENSIONS[activeDpiDim].desc}
                  </p>
                </div>
                <div className="hidden sm:block text-right font-mono text-[11px] text-slate-400">
                  Continuous Telemetry · Scalability Gatekeeper
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Practical Focused Agent Example (Email Automation Agent) */}
          {selectedSupportTab === 'emailAgent' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-950/70 border border-teal-800/60 text-teal-300 text-xs font-mono mb-3">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Specialised Agent Spotlight</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Specialised Email Automation Agent
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  A practical example of a focused specialist agent operating inside a CryoGen AI mesh. It does not attempt to solve ERP inventory or cloud provisioning—it masters enterprise inbound communication triage.
                </p>
                <div className="text-xs text-slate-400">
                  Communicates directly with Knowledge Agent (for policy verification) and CRM Agent (for ticket updating).
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="text-[10px] font-mono text-teal-400 uppercase font-semibold">
                  Dedicated Agent Competencies:
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    <span>Analyse enterprise emails & extract business intent</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    <span>Classify and triage messages according to SLA urgency</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    <span>Filter non-actionable noise & group related thread histories</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    <span>Consolidate information packages for peer agent handoff</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
