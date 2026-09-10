import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  Activity, 
  Database, 
  Lock, 
  CheckCircle2, 
  HelpCircle,
  Network
} from 'lucide-react';
import { HERO_AGENT_NODES } from '../data/cryogenContent';
import { AgentNode } from '../types';

interface HeroFoldProps {
  onOpenConsultation: (topic?: string) => void;
}

export const HeroFold: React.FC<HeroFoldProps> = ({ onOpenConsultation }) => {
  const [selectedAgent, setSelectedAgent] = useState<AgentNode>(HERO_AGENT_NODES[0]);
  const [hoveredAgent, setHoveredAgent] = useState<AgentNode | null>(null);

  const activeAgent = hoveredAgent || selectedAgent;

  return (
    <section 
      id="hero-fold" 
      className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#080d1a] via-[#091122] to-[#070b14] border-b border-slate-800/80"
    >
      {/* Background Architectural Grid & Subtle Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono uppercase tracking-wider">CryoGen AI</span>
            <span className="text-cyan-600">|</span>
            <span>Domain Mesh & Multi Agent Framework Platform</span>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="text-slate-500">Architecture:</span>
            <span className="text-slate-200 font-medium">Decentralized Peer Network</span>
          </div>
        </div>

        {/* H1 and Executive Lead Copy */}
        <div className="max-w-4xl mb-8">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Orchestrate Specialized AI Agents Across the Enterprise
          </h1>
          
          <div className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            <p>
              <strong className="text-white font-semibold">CryoGen AI</strong> is Intelligenz IT’s decentralized Domain Mesh Agent Orchestration platform, where specialized AI agents collaborate to automate complex workflows, interact with enterprise systems, and deliver shared business outcomes within defined governance boundaries.
            </p>
          </div>
        </div>

        {/* Core Capability Strip */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 shadow-inner flex flex-wrap items-center justify-between gap-4 max-w-4xl">
          <div className="flex items-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Highly Scalable</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Easily Configurable</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Extremely Customizable</span>
            </div>
          </div>

          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Zero Master-Bottleneck
          </span>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <button
            id="hero-primary-cta"
            onClick={() => onOpenConsultation('Domain Mesh Use Case')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-lg shadow-cyan-500/25 transition-all active:scale-95 cursor-pointer"
          >
            <span>Discuss a Domain Mesh Use Case</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            id="hero-secondary-cta"
            to="/architecture"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <span>Explore the Architecture</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* HERO VISUAL — DECENTRALIZED AGENT MESH */}
        {/* ========================================================================= */}
        <div className="relative rounded-2xl bg-[#09101f]/95 border border-slate-700/80 shadow-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
          
          {/* Visual Header & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  CryoGen AI Decentralized Mesh Architecture
                </h2>
                <p className="text-[11px] text-slate-400">
                  Non-hierarchical peer coordination around shared enterprise objectives
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-400 italic text-[11px] font-mono">
                Illustrative Domain Mesh Architecture
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono border border-slate-700">
                Hover or tap agents to inspect
              </span>
            </div>
          </div>

          {/* Mesh Canvas Container */}
          <div className="relative w-full h-[480px] sm:h-[520px] bg-slate-950/60 rounded-xl border border-slate-800/80 overflow-hidden">
            
            {/* Background Mesh Coordinate Grid */}
            <div className="absolute inset-0 bg-dot-pattern opacity-40" />

            {/* SVG Connecting Paths between peer agents and center objective */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              <defs>
                <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Center Objective Coordinates: ~50%, 48% */}
              {HERO_AGENT_NODES.map((agent) => {
                const isSelected = activeAgent.id === agent.id;
                const isConnected = activeAgent.connections.includes(agent.id);

                return (
                  <g key={`center-line-${agent.id}`}>
                    <line
                      x1="50%"
                      y1="48%"
                      x2={`${agent.x}%`}
                      y2={`${agent.y}%`}
                      stroke={isSelected ? 'url(#activeGradient)' : '#334155'}
                      strokeWidth={isSelected ? '2' : '1'}
                      strokeDasharray={isSelected ? '4 2' : '2 2'}
                      strokeOpacity={isSelected ? '0.9' : '0.35'}
                    />
                  </g>
                );
              })}

              {/* Peer-to-Peer Inter-Agent Mesh Lines */}
              {HERO_AGENT_NODES.map((agent) =>
                agent.connections.map((targetId) => {
                  const target = HERO_AGENT_NODES.find((a) => a.id === targetId);
                  if (!target) return null;
                  const isActiveEdge =
                    (activeAgent.id === agent.id && activeAgent.connections.includes(target.id)) ||
                    (activeAgent.id === target.id && target.connections.includes(agent.id));

                  return (
                    <line
                      key={`edge-${agent.id}-${target.id}`}
                      x1={`${agent.x}%`}
                      y1={`${agent.y}%`}
                      x2={`${target.x}%`}
                      y2={`${target.y}%`}
                      stroke={isActiveEdge ? '#38bdf8' : '#1e293b'}
                      strokeWidth={isActiveEdge ? '2.5' : '1'}
                      strokeOpacity={isActiveEdge ? '0.85' : '0.4'}
                      strokeDasharray={isActiveEdge ? 'none' : 'none'}
                    />
                  );
                })
              )}
            </svg>

            {/* Central Concept: SHARED BUSINESS OBJECTIVE (Peer hub, NOT a permanent master controller) */}
            <div 
              className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 text-center"
              style={{ minWidth: '180px' }}
            >
              <div className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-slate-900/95 to-slate-950/95 border-2 border-cyan-500/80 shadow-xl shadow-cyan-500/20 backdrop-blur-md">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 text-[9px] font-mono uppercase tracking-wider border border-cyan-700 font-bold whitespace-nowrap">
                  Shared Objective
                </div>
                <div className="mt-1 flex items-center justify-center gap-1.5 text-white font-bold text-xs sm:text-sm">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span>Business Objective</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 leading-tight">
                  Decentralized Coordination Goal
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[9px] text-cyan-300/80 font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-900/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>State: Active Distributed Mesh</span>
                </div>
              </div>
            </div>

            {/* Specialist Agent Nodes (Positioned around the objective) */}
            {HERO_AGENT_NODES.map((agent) => {
              const isSelected = activeAgent.id === agent.id;
              const isPeerConnected = activeAgent.connections.includes(agent.id);

              return (
                <div
                  key={agent.id}
                  id={`agent-node-${agent.id}`}
                  onClick={() => setSelectedAgent(agent)}
                  onMouseEnter={() => setHoveredAgent(agent)}
                  onMouseLeave={() => setHoveredAgent(null)}
                  className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 cursor-pointer select-none`}
                  style={{ left: `${agent.x}%`, top: `${agent.y}%` }}
                >
                  <div
                    className={`relative px-3 py-2 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-110'
                        : isPeerConnected
                        ? 'bg-slate-900/90 border-cyan-700/60 shadow-md shadow-cyan-900/20'
                        : 'bg-slate-900/70 border-slate-700/70 hover:border-slate-500'
                    }`}
                    style={{ minWidth: '130px' }}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: agent.color }}
                        />
                        <span className="text-[11px] font-bold text-white tracking-tight">
                          {agent.name}
                        </span>
                      </div>
                      <span className="text-[8px] font-mono px-1 rounded bg-slate-800 text-slate-400">
                        Peer
                      </span>
                    </div>

                    <div className="text-[9px] text-slate-300 font-mono truncate max-w-[130px]">
                      {agent.domain}
                    </div>

                    {isSelected && (
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rotate-45" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Agent Live Inspection Drawer */}
          <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Selected Specialist Node</span>
              </div>
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <span style={{ color: activeAgent.color }}>●</span>
                <span>{activeAgent.name}</span>
                <span className="text-[11px] font-normal text-slate-400">({activeAgent.domain})</span>
              </div>
              <p className="text-slate-300 mt-1 leading-relaxed text-[11px]">
                {activeAgent.role}
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Direct Mesh Peer Connections
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {activeAgent.connections.map((peerId) => {
                  const peer = HERO_AGENT_NODES.find((a) => a.id === peerId);
                  return (
                    <span
                      key={peerId}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      ↔ {peer?.name || peerId}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Configured Tools & Interfaces
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {activeAgent.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Downward Integration Layer: Enterprise Applications, APIs, Knowledge, Data, Tools, Cloud Platforms */}
          <div className="mt-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-slate-500" />
                Enterprise Integration Layer
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                Bidirectional System Execution
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { name: 'Enterprise Applications', desc: 'SAP, Salesforce, ServiceNow' },
                { name: 'APIs & Services', desc: 'REST, GraphQL, gRPC, OData' },
                { name: 'Knowledge & RAG', desc: 'Policy graphs, SOPs, vector index' },
                { name: 'Data & Analytics', desc: 'Data lakes, semantic models' },
                { name: 'Tools & MCP', desc: 'MCP servers, CLI runbooks' },
                { name: 'Cloud Platforms', desc: 'AWS, Azure, GCP, Kubernetes' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/90 text-center"
                >
                  <div className="text-xs font-semibold text-slate-200">{item.name}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 font-mono truncate">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Governance Layer: Identity | Permissions | Policy | Human Approval */}
          <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-950/20 via-slate-900/80 to-amber-950/20 border border-amber-900/30 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Enterprise Governance Layer:</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-slate-300 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Identity (Entra / Okta)
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Permissions (Least Privilege RBAC)
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Policy Assertions
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1 text-amber-200 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Human Approval Gates
              </span>
            </div>
          </div>

          {/* Observation Layer: DPI — Performance & Scale Readiness */}
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-900/80 to-blue-950/30 border border-cyan-800/40 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>DPI Observation Layer:</span>
              <span className="text-slate-400 font-normal">Performance & Scale Readiness</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-200">
              <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                Continuous Telemetry
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                7 Dimensions Evaluated
              </span>
              <span className="text-slate-400">→ Audit-ready metrics</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
