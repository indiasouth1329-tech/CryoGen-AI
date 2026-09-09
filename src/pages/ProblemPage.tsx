import React from 'react';
import { ProblemFold } from '../components/ProblemFold';
import { PageNavigation } from '../components/PageNavigation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ProblemPage: React.FC = () => {
  useDocumentTitle(
    'The Problem — CryoGen AI Domain Mesh',
    'Why One General-Purpose Agent Is Not Enough. Enterprise workflows span multiple systems and policies, creating architectural bottlenecks for single-agent architectures.'
  );

  return (
    <div className="pt-20 animate-in fade-in duration-300">
      {/* Main Problem Content & Visual Comparison */}
      <ProblemFold />

      {/* Contextual Previous/Next Navigation */}
      <section className="bg-[#080c16] pb-20 px-4 sm:px-6 lg:px-8">
        <PageNavigation
          previous={{
            path: '/',
            step: '01',
            label: 'Overview & Decentralized Mesh',
            description: 'Return to the system overview and core architectural capabilities.',
          }}
          next={{
            path: '/architecture',
            step: '03',
            label: 'How CryoGen AI Works',
            description: 'Discover the 9-phase lifecycle and dual-mode peer collaboration model.',
          }}
        />
      </section>
    </div>
  );
};
