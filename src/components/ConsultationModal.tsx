import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Network, Sparkles, Building, Mail, User, Briefcase } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Discuss a Domain Mesh Use Case',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Enterprise Architect',
    selectedSystems: ['SAP S/4HANA', 'ServiceNow'],
    workflowScope: '',
    timeframe: 'Next 3-6 Months',
  });

  if (!isOpen) return null;

  const availableSystems = [
    'SAP S/4HANA / ECC',
    'Salesforce CRM / Service Cloud',
    'ServiceNow ITSM / HRSD',
    'AWS / Azure / GCP Cloud',
    'Snowflake / Databricks Data Lake',
    'Legacy Core APIs & On-Prem Systems',
  ];

  const handleSystemToggle = (sys: string) => {
    setFormData((prev) => {
      const exists = prev.selectedSystems.includes(sys);
      if (exists) {
        return { ...prev, selectedSystems: prev.selectedSystems.filter((s) => s !== sys) };
      } else {
        return { ...prev, selectedSystems: [...prev.selectedSystems, sys] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#0b1222] border border-cyan-800/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#080d19]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Intelligenz IT Architecture Advisory
              </div>
              <h3 className="text-lg font-bold text-white">
                {defaultTopic}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-cyan-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Advisory Session Request Received
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. An Intelligenz IT Enterprise AI Strategist will contact you at <span className="text-cyan-300">{formData.email}</span> to schedule your CryoGen AI Domain Mesh architecture briefing.
              </p>

              {/* Discovery Summary Preview */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left text-xs space-y-2 mt-6">
                <div className="font-mono text-[11px] text-cyan-400 font-bold uppercase">
                  Proposed Architecture Scope:
                </div>
                <div className="text-slate-300">
                  <strong>Organization:</strong> {formData.company} ({formData.role})
                </div>
                <div className="text-slate-300">
                  <strong>Target Enterprise Systems:</strong> {formData.selectedSystems.join(', ')}
                </div>
                <div className="text-slate-300">
                  <strong>Recommended Mesh Nodes:</strong> {formData.selectedSystems.length + 2} Specialist Domain Agents + 1 Validation Agent + 1 Governance Gatekeeper
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-white transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-slate-300 text-xs leading-relaxed">
                Discuss how CryoGen AI can coordinate specialised agents across your enterprise systems (SAP, Salesforce, ServiceNow, Cloud) under strict governance and measurable DPI outcomes.
              </p>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Corporate Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      required
                      type="email"
                      placeholder="e.g. elena@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Company & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Organization / Enterprise *</label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Global Logistics Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Role / Responsibility *</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="CIO / CTO">CIO / CTO</option>
                    <option value="Chief AI / Digital Officer">Chief AI / Digital Officer</option>
                    <option value="Enterprise Architect">Enterprise Architect</option>
                    <option value="Head of AI / Automation">Head of AI / Automation</option>
                    <option value="Enterprise Apps Leader (SAP / CRM)">Enterprise Apps Leader (SAP / CRM)</option>
                    <option value="IT Transformation Leader">IT Transformation Leader</option>
                  </select>
                </div>
              </div>

              {/* Systems in Scope */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  Enterprise Systems in Target Scope:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {availableSystems.map((sys) => {
                    const isChecked = formData.selectedSystems.includes(sys);
                    return (
                      <button
                        type="button"
                        key={sys}
                        onClick={() => handleSystemToggle(sys)}
                        className={`p-2 rounded-lg border text-left flex items-center justify-between cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-cyan-950/70 border-cyan-600 text-cyan-200'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        <span className="text-[11px] font-medium">{sys}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Workflow Description */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Target Complex Workflow (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Cross-system incident remediation between AWS, Datadog and ServiceNow, or real-time ERP inventory reconciliation with Salesforce order amendments..."
                  value={formData.workflowScope}
                  onChange={(e) => setFormData({ ...formData, workflowScope: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Compliance note */}
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Non-disclosure & enterprise data privacy standards observed strictly.</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Architecture Advisory Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
