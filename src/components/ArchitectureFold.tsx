import React, { useState } from 'react';
import { 
  Network, 
  Workflow, 
  Layers, 
  MessageSquare, 
  Database, 
  CheckCircle2, 
  ShieldAlert, 
  Play, 
  Gauge, 
  ArrowRight, 
  Check, 
  ChevronRight,
  Split,
  Cpu,
  RefreshCw,
  GitFork
} from 'lucide-react';
import { ARCHITECTURE_STEPS } from '../data/cryogenContent';

export const ArchitectureFold: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(3); // default step 4 (Distributed Collaboration)

  const activeStep = ARCHITECTURE_STEPS[activeStepIndex];

  return (
    <section 
      id="architecture-fold" 
      className="relative py-24 bg-[#090e1c] border-b border-slate-800 text-slate-100 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-mono font-medium mb-4 border border-cyan-800/60">
            <span>03</span>
            <span className="text-cyan-600">/</span>
            <span>How CryoGen AI Works</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            A Decentralized Network Working Toward One Objective
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            CryoGen AI coordinates specialised agents through a Domain Mesh architecture where responsibilities can be distributed while agents continue working toward a common business objective.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE ARCHITECTURE NETWORK OVERVIEW */}
        {/* ========================================================================= */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0c1427] to-[#080d19] border border-slate-700/80 shadow-2xl relative">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                Architectural Topology
              </span>
              <h3 className="text-base font-bold text-white mt-1">
                Decentralized Flow with Horizontal Governance & DPI Measurement
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full Workflow Traversal</span>
            </div>
          </div>

          {/* Conceptual Mesh Diagram Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
            
            {/* 1. Objective Ingress */}
            <div className={`p-4 rounded-xl text-center border transition-all ${activeStepIndex === 0 ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/20' : 'bg-slate-900/80 border-slate-800'}`}>
              <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold mb-1">Step 1 & 2</div>
              <div className="text-xs font-bold text-white">Business Objective</div>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">User, API, Event, ERP Trigger</p>
              <div className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                Decomposition
              </div>
            </div>

            {/* Ingress Arrow */}
            <div className="hidden lg:flex justify-center text-cyan-500">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            {/* 2. Decentralized Agent Mesh (Center) */}
            <div className={`lg:col-span-1 p-4 rounded-xl text-center border transition-all ${[2, 3].includes(activeStepIndex) ? 'bg-cyan-950/90 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'bg-slate-900/90 border-cyan-800/50'}`}>
              <div className="text-[10px] font-mono text-cyan-300 uppercase font-bold mb-1">Steps 3 & 4</div>
              <div className="text-xs font-bold text-white">CryoGen AI Mesh</div>
              <div className="my-2 p-2 rounded bg-slate-950/80 border border-slate-800 text-[10px] space-y-1">
                <div className="flex items-center justify-center gap-1 font-mono text-cyan-300">
                  <span>SAP</span>
                  <span className="text-slate-500">↔</span>
                  <span>CRM</span>
                  <span className="text-slate-500">↔</span>
                  <span>Cloud</span>
                </div>
                <div className="text-[9px] text-slate-400 font-mono">Peer-to-Peer Collab</div>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Specialist Peer Agents
              </span>
            </div>

            {/* Peer to System Arrow */}
            <div className="hidden lg:flex justify-center text-cyan-500">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            {/* 3. Enterprise Integration & Validation */}
            <div className={`p-4 rounded-xl text-center border transition-all ${[4, 5].includes(activeStepIndex) ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-500/20' : 'bg-slate-900/80 border-slate-800'}`}>
              <div className="text-[10px] font-mono text-cyan-400 uppercase font-bold mb-1">Steps 5 & 6</div>
              <div className="text-xs font-bold text-white">Enterprise & Validation</div>
              <p className="text-[10px] text-slate-400 mt-1 leading-snug">APIs, MCP, Knowledge, Peer Verification</p>
              <div className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                Consensus Check
              </div>
            </div>

          </div>

          {/* Governance & Controlled Outcome Sub-Layer */}
          <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className={`p-3 rounded-lg border text-xs flex items-center justify-between ${activeStepIndex === 6 ? 'bg-amber-950/50 border-amber-500' : 'bg-slate-950/60 border-slate-800'}`}>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="font-bold text-white text-xs">Step 7: Enterprise Governance</div>
                  <div className="text-[10px] text-slate-400">Identity, RBAC, Policy Assertions & Human Approval</div>
                </div>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                Enforced
              </span>
            </div>

            <div className={`p-3 rounded-lg border text-xs flex items-center justify-between ${activeStepIndex === 7 ? 'bg-teal-950/50 border-teal-500' : 'bg-slate-950/60 border-slate-800'}`}>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-teal-400" />
                <div>
                  <div className="font-bold text-white text-xs">Step 8: Controlled Execution</div>
                  <div className="text-[10px] text-slate-400">Target commits, updates in SAP / ServiceNow / Cloud</div>
                </div>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                Transactional
              </span>
            </div>
          </div>

          {/* DPI Measurement Layer (Spans the entire architecture) */}
          <div className={`mt-3 p-3 rounded-xl border text-xs flex flex-wrap items-center justify-between gap-2 ${activeStepIndex === 8 ? 'bg-cyan-950/60 border-cyan-400' : 'bg-cyan-950/30 border-cyan-800/40'}`}>
            <div className="flex items-center gap-2 text-cyan-300">
              <Gauge className="w-4 h-4 text-cyan-400" />
              <span className="font-bold">Step 9: DPI Layer — Measurement & Scale Readiness</span>
            </div>
            <div className="text-[11px] font-mono text-slate-300">
              Spans all stages · Measures 7 dimensions (Productivity, Quality, Execution, Governance, Risk, Validation, Cost)
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 9-STEP DECENTRALIZED EXECUTION SELECTOR */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Navigation Pill List (Left Column) */}
          <div className="lg:col-span-5 space-y-1.5">
            <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-2">
              The 9 Lifecycle Phases:
            </div>

            {ARCHITECTURE_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={step.number}
                  id={`step-button-${step.number}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-slate-800/90 border-cyan-400 shadow-md shadow-cyan-950 text-white'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                        isActive
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <div className="text-xs font-bold leading-tight text-white">
                        {step.title}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[200px]">
                        {step.category}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Step Detail Card (Right Column) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-[#0c1324] to-[#080d1a] border border-cyan-800/60 p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-700 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm">
                    0{activeStep.number}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      Phase {activeStep.number} of 9
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800">
                  Type: <span className="text-cyan-300 font-semibold">{activeStep.category}</span>
                </div>
              </div>

              {/* Step Description */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-medium">
                {activeStep.description}
              </p>

              {/* Step Deep-Dive Bullet Points */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Operational Mechanics:
                </div>
                {activeStep.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Emphasis on STEP 4: DISTRIBUTED COLLABORATION (Explicit vs Implicit) */}
              {activeStep.number === 4 && (
                <div className="mt-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/60">
                  <div className="text-xs font-mono uppercase text-cyan-300 font-bold mb-3 flex items-center gap-1.5">
                    <GitFork className="w-4 h-4 text-cyan-400" />
                    <span>Dual-Mode Collaboration Architecture</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="font-bold text-white mb-1 text-xs">Explicit Interaction</div>
                      <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                        <li>Agent-to-agent messaging</li>
                        <li>Task delegation & status exchange</li>
                        <li>Result validation & peer review</li>
                      </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="font-bold text-white mb-1 text-xs">Implicit Interaction</div>
                      <ul className="text-[11px] text-slate-300 space-y-1 list-disc list-inside">
                        <li>Shared workflow state & memory</li>
                        <li>Data environments & knowledge graphs</li>
                        <li>Direct enterprise system data stores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Emphasis on STEP 7: GOVERNANCE & HITL */}
              {activeStep.number === 7 && (
                <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-800/60">
                  <div className="text-xs font-mono uppercase text-amber-300 font-bold mb-2 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    <span>Non-Negotiable Enterprise Governance</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Decentralization does not equal absence of governance. Every agent interaction conforms to identity boundaries, RBAC permissions, policy checks, and mandatory human sign-off on consequential enterprise transactions.
                  </p>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Phase
                </button>

                <button
                  disabled={activeStepIndex === ARCHITECTURE_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(ARCHITECTURE_STEPS.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1 px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CLOSING STATEMENT AS MANDATED IN PROMPT */}
        {/* ========================================================================= */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-cyan-950/40 to-slate-900/90 border border-cyan-800/60 shadow-xl max-w-4xl">
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
              Coordinated intelligence without concentrating every responsibility inside one agent.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-cyan-200/80 font-mono">
              The CryoGen AI Domain Mesh Architecture Principle
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
