import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Building2, 
  Users, 
  Cloud, 
  ShieldCheck, 
  ArrowDown, 
  Terminal, 
  Sliders,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { USE_CASES } from '../data/cryogenContent';

interface UseCasesCtaFoldProps {
  onOpenConsultation: (topic?: string) => void;
}

export const UseCasesCtaFold: React.FC<UseCasesCtaFoldProps> = ({ onOpenConsultation }) => {
  const [activeUseCaseId, setActiveUseCaseId] = useState<string>('it-operations');

  const activeUseCase = USE_CASES.find((uc) => uc.id === activeUseCaseId) || USE_CASES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'it-operations':
        return <Server className="w-4 h-4" />;
      case 'enterprise-applications':
        return <Building2 className="w-4 h-4" />;
      case 'customer-service':
        return <Users className="w-4 h-4" />;
      case 'cloud-operations':
        return <Cloud className="w-4 h-4" />;
      default:
        return <Server className="w-4 h-4" />;
    }
  };

  const otherDomains = [
    { name: 'Finance', detail: 'Cross-ledger reconciliation & invoice anomaly audit' },
    { name: 'Procurement', detail: 'Contract vendor compliance & purchase order triage' },
    { name: 'Supply Chain', detail: 'Inventory disruption rerouting & logistics sync' },
    { name: 'Manufacturing', detail: 'Predictive equipment telemetry & work-order routing' },
    { name: 'Life Sciences', detail: 'GxP validation logs & regulatory document checks' },
  ];

  return (
    <section 
      id="use-cases-fold" 
      className="relative py-24 bg-gradient-to-b from-[#070b15] via-[#09101f] to-[#060911] text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-medium mb-4 border border-slate-700">
            <span>05</span>
            <span className="text-slate-500">/</span>
            <span>Enterprise Use Cases</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Where Domain Mesh Orchestration Can Create Value
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            CryoGen AI is particularly relevant where a business objective crosses multiple systems, responsibilities or areas of expertise.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4 ILLUSTRATIVE USE CASES (Clearly Labeled) */}
        {/* ========================================================================= */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-[10px] uppercase font-bold">
              Illustrative Architecture Examples
            </span>
            <span className="hidden sm:inline">Select a domain to inspect the mesh flow</span>
          </div>
          <span className="text-xs text-slate-500 font-mono hidden md:inline">
            Cross-system integration points
          </span>
        </div>

        {/* Use Case Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {USE_CASES.map((uc) => {
            const isSelected = activeUseCase.id === uc.id;

            return (
              <button
                key={uc.id}
                id={`use-case-tab-${uc.id}`}
                onClick={() => setActiveUseCaseId(uc.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-400 text-white shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-400/40'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {getIcon(uc.id)}
                </div>
                <div>
                  <div className="text-xs font-bold leading-snug">{uc.title}</div>
                  <div className="text-[10px] text-slate-400 truncate max-w-[130px]">
                    {uc.domain}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Use Case Architecture Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#080e1a] border border-slate-700 shadow-2xl mb-14 relative">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                  {activeUseCase.title}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  · {activeUseCase.domain}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Multi-Agent Workflow Lifecycle
              </h3>
            </div>

            <button
              onClick={() => onOpenConsultation(`Use Case: ${activeUseCase.title}`)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-600/80 hover:bg-cyan-600 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <span>Discuss {activeUseCase.title} Mesh</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Step-by-Step Flow Visualizer */}
          <div className="space-y-6">
            
            {/* Step 1: Trigger */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
                1. Operational Ingress & Trigger
              </div>
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{activeUseCase.trigger}</span>
              </div>
            </div>

            {/* Step 2: Peer-to-Peer Specialist Agent Mesh */}
            <div>
              <div className="text-[10px] font-mono uppercase text-cyan-400 font-bold mb-2 flex items-center justify-between">
                <span>2. Participating Specialist Agents (Decentralized Mesh)</span>
                <span className="text-slate-500 font-normal">Direct peer collaboration</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {activeUseCase.agents.map((agent, i) => (
                  <div
                    key={agent}
                    className="p-3 rounded-lg bg-slate-900/90 border border-cyan-800/40 text-center relative"
                  >
                    <div className="text-xs font-bold text-white">{agent}</div>
                    <div className="text-[9px] text-cyan-300 font-mono mt-0.5">Specialist Peer</div>
                    {i < activeUseCase.agents.length - 1 && (
                      <span className="hidden sm:inline absolute -right-2 top-1/2 -translate-y-1/2 text-cyan-500 text-xs z-10">
                        ↔
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Peer Validation & Human Approval Gate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] font-mono uppercase text-purple-400 font-bold mb-1">
                  3. Peer Output Validation
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeUseCase.validation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40">
                <div className="text-[10px] font-mono uppercase text-amber-300 font-bold mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>4. Governed Human Approval Gate</span>
                </div>
                <p className="text-xs text-amber-100/90 leading-relaxed">
                  {activeUseCase.approval}
                </p>
              </div>
            </div>

            {/* Step 4: Controlled Execution Outcome */}
            <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-800/50">
              <div className="text-[10px] font-mono uppercase text-teal-400 font-bold mb-1">
                5. Governed Business Outcome
              </div>
              <p className="text-xs font-semibold text-teal-100 leading-relaxed">
                {activeUseCase.outcome}
              </p>
            </div>

            {/* Potential Value Realization */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                Potential Enterprise Value:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeUseCase.valuePoints.map((vp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{vp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Systems of Record */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono text-slate-400">
              <span>Connected Systems:</span>
              {activeUseCase.systems.map((sys) => (
                <span
                  key={sys}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {sys}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Other Illustrative Domains Strip */}
        <div className="mb-20 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-3">
            Other Illustrative Enterprise Domains:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherDomains.map((dom) => (
              <div
                key={dom.name}
                className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="font-bold text-white text-xs">{dom.name}</div>
                <div className="text-[10px] text-slate-400 mt-1 leading-tight">{dom.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CONVERSION CTA SECTION */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0e172a] via-[#0b1324] to-[#070c17] border-2 border-cyan-600/60 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle glow accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-6">
            
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-mono font-semibold border border-cyan-800">
              <span>Enterprise AI Architecture Advisory</span>
            </span>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Start With One Complex Workflow
            </h3>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              The strongest Agentic AI opportunities often sit where work already crosses multiple applications, teams and areas of expertise.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Intelligenz IT can help identify those workflows, define specialist agent responsibilities, design the CryoGen AI Domain Mesh and establish the governance and performance measurement required for enterprise adoption.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                id="final-primary-cta"
                onClick={() => onOpenConsultation('Discuss a CryoGen AI Use Case')}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-600/30 transition-all active:scale-95 cursor-pointer"
              >
                <span>Discuss a CryoGen AI Use Case</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="final-secondary-cta"
                onClick={() => onOpenConsultation('Explore Your Agentic AI Roadmap')}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
              >
                <span>Explore Your Agentic AI Roadmap</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Closing Statement as specified in prompt */}
            <div className="pt-8 border-t border-slate-800 text-xs sm:text-sm font-mono text-cyan-300/90 leading-relaxed font-semibold">
              &ldquo;Define the objective. Assemble the right specialist agents. Govern the network. Measure the outcome. Scale when the evidence supports it.&rdquo;
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
