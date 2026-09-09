import React from 'react';
import { ValueGovernanceFold } from '../components/ValueGovernanceFold';
import { PageNavigation } from '../components/PageNavigation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ValueGovernancePage: React.FC = () => {
  useDocumentTitle(
    'Value & Governance — CryoGen AI Domain Mesh',
    'Built for Enterprise Adaptability — Governed for Enterprise Trust. CryoGen AI combines modular domain agents, strict RBAC governance, and the DPI measurement framework.'
  );

  return (
    <div className="pt-20 animate-in fade-in duration-300">
      {/* Main Value, Governance & DPI Measurement Content */}
      <ValueGovernanceFold />

      {/* Contextual Previous/Next Navigation */}
      <section className="bg-[#080d1a] pb-20 px-4 sm:px-6 lg:px-8">
        <PageNavigation
          previous={{
            path: '/architecture',
            step: '03',
            label: 'The 9-Phase Lifecycle & Topology',
            description: 'Review the decentralized execution lifecycle and dual-mode peer collaboration.',
          }}
          next={{
            path: '/use-cases',
            step: '05',
            label: 'Enterprise Use Cases',
            description: 'Inspect multi-agent workflows in IT Operations, SAP, Customer Service, and Cloud.',
          }}
        />
      </section>
    </div>
  );
};
