import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { UseCasesCtaFold } from '../components/UseCasesCtaFold';
import { PageNavigation } from '../components/PageNavigation';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { LayoutContextType } from '../components/Layout';

interface UseCasesPageProps {
  onOpenConsultation?: (topic?: string) => void;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({ onOpenConsultation: propOnOpen }) => {
  const outletContext = useOutletContext<LayoutContextType | null>();
  const onOpenConsultation = propOnOpen || outletContext?.onOpenConsultation || (() => {});

  useDocumentTitle(
    'Use Cases — CryoGen AI Domain Mesh',
    'Where Domain Mesh Orchestration Can Create Value. Multi-agent workflows across IT Operations, SAP & Enterprise Apps, Customer Service, and Cloud.'
  );

  return (
    <div className="pt-20 animate-in fade-in duration-300">
      {/* Main Use Cases & Conversion CTA */}
      <UseCasesCtaFold onOpenConsultation={onOpenConsultation} />

      {/* Contextual Previous/Next Navigation */}
      <section className="bg-[#060911] pb-20 px-4 sm:px-6 lg:px-8">
        <PageNavigation
          previous={{
            path: '/value-governance',
            step: '04',
            label: 'Value, Governance & Performance',
            description: 'Explore the 4 value blocks, dFTE digital workers, and DPI measurement framework.',
          }}
          next={{
            path: '/',
            step: '01',
            label: 'Overview & Decentralized Mesh',
            description: 'Return to the main overview and decentralized mesh visualizer.',
          }}
        />
      </section>
    </div>
  );
};
