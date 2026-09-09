import React from 'react';
import { ArchitectureFold } from '../components/ArchitectureFold';
import { PageNavigation } from '../components/PageNavigation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ArchitecturePage: React.FC = () => {
  useDocumentTitle(
    'Architecture — CryoGen AI Domain Mesh',
    'A Decentralized Network Working Toward One Objective. CryoGen AI coordinates specialised agents through a Domain Mesh architecture with dual-mode collaboration.'
  );

  return (
    <div className="pt-20 animate-in fade-in duration-300">
      {/* Main Architecture Content & 9-Step Lifecycle */}
      <ArchitectureFold />

      {/* Contextual Previous/Next Navigation */}
      <section className="bg-[#090e1c] pb-20 px-4 sm:px-6 lg:px-8">
        <PageNavigation
          previous={{
            path: '/problem',
            step: '02',
            label: 'The Enterprise Architecture Challenge',
            description: 'Why general-purpose single agents fail under enterprise complexity.',
          }}
          next={{
            path: '/value-governance',
            step: '04',
            label: 'Value, Governance & Performance',
            description: 'Explore the 4 value blocks, dFTE digital workers, and the 7-dimension DPI framework.',
          }}
        />
      </section>
    </div>
  );
};
