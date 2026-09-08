import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Check, 
  X, 
  ArrowDown, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Network, 
  ShieldCheck, 
  RefreshCw,
  Sparkles
} from 'lucide-react';

export const ProblemFold: React.FC = () => {
  const [activeModelTab, setActiveModelTab] = useState<'comparison' | 'single' | 'mesh'>('comparison');

  const singleAgentChallenges = [
    { title: 'Mixed Responsibilities', desc: 'A single prompt context attempts to juggle domain logic, API schemas, security policies, and execution rules simultaneously.' },
    { title: 'Large Context Bloat', desc: 'Overburdened context windows lead to attention decay, hallucinated parameters, and sluggish response latency.' },
    { title: 'Difficult Failure Isolation', desc: 'When a general-purpose agent fails, diagnosing whether the failure stemmed from knowledge retrieval, logic, or API formatting is challenging.' },
    { title: 'Harder Enterprise Testing', desc: 'Non-deterministic broad agents cannot be isolated and tested against narrow domain invariants or unit-tested reliably.' },
    { title: 'Unclear Responsibility Boundaries', desc: 'Auditors cannot verify which sub-system or policy approved an action when everything emanates from one black box.' },
    { title: 'Limited Specialisation', desc: 'Generalist prompts lack the deep fidelity, specialized fine-tuning, or specific tool bindings required by mission-critical ERPs.' },
  ];

  const domainMeshAdvantages = [
    { title: 'Focused Responsibility', desc: 'Each specialist agent owns a discrete business or technical boundary with clear scope and accountability.' },
    { title: 'Relevant Context', desc: 'Context packages are compact, strictly bounded to the immediate task, preventing attention degradation.' },
    { title: 'Appropriate Scoped Tools', desc: 'Agents access only the specific APIs, schemas, and tools they require under least-privilege enterprise IAM.' },
    { title: 'Defined Permissions & Governance', desc: 'Clear security and policy gates isolate actions, making audit trails and human approval checkpoints explicit.' },
    { title: 'Peer-to-Peer Cross Validation', desc: 'Independent validation agents sanity-check and reconcile domain outputs before transactional commits.' },
    { title: 'Modular Scalability', desc: 'Introduce or upgrade a domain agent (e.g. S/4HANA upgrade) without destabilizing other parts of the mesh.' },
  ];

  return (
    <section 
      id="problem-fold" 
      className="relative py-24 bg-[#080c16] border-b border-slate-800 text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-medium mb-4 border border-slate-700">
            <span>02</span>
            <span className="text-slate-500">/</span>
            <span>The Enterprise Architecture Challenge</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Why One General-Purpose Agent Is Not Enough
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A complex enterprise workflow may require business interpretation, knowledge retrieval, policy evaluation, system interaction, data analysis, validation and execution. Asking one AI agent to own all of those responsibilities can create architectural and operational complexity.
          </p>
        </div>

        {/* Architectural Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* ========================================================= */}
          {/* LEFT: SINGLE-AGENT MODEL */}
          {/* ========================================================= */}
          <div className="rounded-2xl bg-gradient-to-b from-rose-950/20 via-slate-900/60 to-slate-950/80 border border-rose-900/40 p-6 sm:p-8 flex flex-col justify-between relative shadow-lg">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800/60">
                    Legacy Pattern
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    One Agent. Expanding Responsibility.
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-rose-950/50 border border-rose-800/40 text-rose-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              </div>

              {/* Visual Flow Representation */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-900/30 mb-6 font-mono text-xs">
                <div className="text-slate-400 text-center py-1 bg-slate-900/80 rounded border border-slate-800">
                  Business Request (Complex, Multi-System)
                </div>
                <div className="flex justify-center my-2 text-rose-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-600/50 text-center">
                  <div className="font-bold text-white text-sm">General-Purpose Agent</div>
                  <div className="text-[10px] text-rose-300 mt-1">
                    Centralized Cognitive Bottleneck
                  </div>
                </div>
                <div className="flex justify-center my-2 text-rose-400">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="text-center p-2 rounded bg-rose-950/20 border border-rose-900/40 text-rose-300 text-[11px] font-semibold">
                  Forced to Handle Everything:
                </div>
                <div className="grid grid-cols-2 gap-1.5 mt-2 text-[10px] text-center text-slate-300">
                  <span className="py-1 px-2 rounded bg-slate-900/90 border border-slate-800">Planning & Reasoning</span>
                  <span className="py-1 px-2 rounded bg-slate-900/90 border border-slate-800">Knowledge Retrieval</span>
                  <span className="py-1 px-2 rounded bg-slate-900/90 border border-slate-800">API Execution</span>
                  <span className="py-1 px-2 rounded bg-slate-900/90 border border-slate-800">Business Logic</span>
                  <span className="py-1 px-2 rounded bg-slate-900/90 border border-slate-800">Policy Evaluation</span>
                  <span className="py-1 px-2 rounded bg-slate-900/90 border border-slate-800">Self-Validation</span>
                </div>
              </div>

              {/* Challenges Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Potential Operational Challenges:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {singleAgentChallenges.map((challenge) => (
                    <div
                      key={challenge.title}
                      className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 hover:border-rose-800/40 transition-colors"
                    >
                      <div className="flex items-start gap-1.5">
                        <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-rose-200">{challenge.title}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">{challenge.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-900/30 text-xs text-slate-400 italic">
              Result: Fragile prompts, high failure risk, and unmanageable auditability.
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: DOMAIN MESH MODEL */}
          {/* ========================================================= */}
          <div className="rounded-2xl bg-gradient-to-b from-cyan-950/30 via-slate-900/70 to-slate-950/90 border border-cyan-500/50 p-6 sm:p-8 flex flex-col justify-between relative shadow-xl shadow-cyan-950/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/90 border border-cyan-700/60">
                    CryoGen AI Architecture
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Specialised Agents. Shared Objective.
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-700/50 text-cyan-400">
                  <Network className="w-5 h-5" />
                </div>
              </div>

              {/* Visual Flow Representation */}
              <div className="p-4 rounded-xl bg-slate-950/90 border border-cyan-800/40 mb-6 font-mono text-xs">
                <div className="text-slate-300 text-center py-1 bg-cyan-950/40 rounded border border-cyan-800/60 font-semibold text-cyan-200">
                  Business Objective (Shared Outcome)
                </div>
                <div className="flex justify-center my-2 text-cyan-400">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/40 text-center">
                  <div className="text-xs font-bold text-white">Decentralized Agent Mesh</div>
                  <div className="text-[10px] text-cyan-300 mt-0.5">
                    Peer-to-Peer Coordination Network
                  </div>
                </div>

                {/* Peer agents mesh horizontal flow */}
                <div className="mt-2.5 p-2 rounded bg-slate-900/60 border border-slate-800 text-[10px] space-y-1.5">
                  <div className="flex items-center justify-between gap-1 text-center font-semibold">
                    <span className="px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800">Planning</span>
                    <span className="text-cyan-400">↔</span>
                    <span className="px-1.5 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800">Domain</span>
                    <span className="text-cyan-400">↔</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800">Knowledge</span>
                    <span className="text-cyan-400">↔</span>
                    <span className="px-1.5 py-0.5 rounded bg-teal-950/80 text-teal-300 border border-teal-800">System</span>
                    <span className="text-cyan-400">↔</span>
                    <span className="px-1.5 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800">Validation</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5 text-[9px] text-center text-cyan-300">
                  <div className="p-1 rounded bg-cyan-950/50 border border-cyan-900">Focused Scope</div>
                  <div className="p-1 rounded bg-cyan-950/50 border border-cyan-900">Relevant Context</div>
                  <div className="p-1 rounded bg-cyan-950/50 border border-cyan-900">Appropriate Tools</div>
                  <div className="p-1 rounded bg-cyan-950/50 border border-cyan-900">Defined Permissions</div>
                </div>
              </div>

              {/* Advantages Breakdown */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Architectural Advantages:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {domainMeshAdvantages.map((advantage) => (
                    <div
                      key={advantage.title}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-700/50 transition-colors"
                    >
                      <div className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-cyan-200">{advantage.title}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">{advantage.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cyan-900/40 text-xs text-cyan-200 font-medium">
              Result: Fault-isolated, highly auditable, and testable enterprise workflows.
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BAF MODEL (Feature -> Advantage -> Benefit) */}
        {/* ========================================================= */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a1224] to-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
              The Architecture Rationale
            </span>
            <span className="text-xs text-slate-400">Feature · Advantage · Benefit Model</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Feature */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 font-bold">
                Feature
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Specialised agents organised as a decentralized Domain Mesh.
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rather than overloading one general model, work is partitioned across peer agents equipped with dedicated prompt contracts, system bindings, and knowledge scopes.
              </p>
            </div>

            {/* Advantage */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1 font-bold">
                Advantage
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Responsibilities can be distributed across agents with clearer roles, tools and context.
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Each agent operates within a compact context window, prevents prompt interference, executes through least-privilege IAM, and validates outputs with peers.
              </p>
            </div>

            {/* Benefit */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-700/60 shadow-md">
              <div className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider mb-1 font-bold">
                Benefit
              </div>
              <h4 className="text-sm font-bold text-white mb-2">
                Complex enterprise workflows become easier to coordinate, inspect, adapt and govern.
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enterprises reduce operational hallucination risks, isolate failures cleanly, and provide auditors with unambiguous evidence for every transactional step.
              </p>
            </div>
          </div>

          {/* Explicit Closing Line */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
              &ldquo;The objective is not to create more agents. It is to assign the right responsibility to the right agent.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
