import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroFold } from './components/HeroFold';
import { ProblemFold } from './components/ProblemFold';
import { ArchitectureFold } from './components/ArchitectureFold';
import { ValueGovernanceFold } from './components/ValueGovernanceFold';
import { UseCasesCtaFold } from './components/UseCasesCtaFold';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('Discuss a Domain Mesh Use Case');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) {
      setConsultationTopic(topic);
    }
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sticky Enterprise Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main 5 Folds */}
      <main>
        {/* FOLD 1: Hero / Domain Mesh Big Picture */}
        <HeroFold onOpenConsultation={handleOpenConsultation} />

        {/* FOLD 2: The Problem — Why One General-Purpose Agent Is Not Enough */}
        <ProblemFold />

        {/* FOLD 3: How CryoGen AI Works — 9-Phase Decentralized Network */}
        <ArchitectureFold />

        {/* FOLD 4: Value, Governance & Performance — Adaptability & Trust */}
        <ValueGovernanceFold />

        {/* FOLD 5: Practical Use Cases & Enterprise Conversion CTA */}
        <UseCasesCtaFold onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Lead Capture & Architecture Advisory Dialog */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        defaultTopic={consultationTopic}
      />
    </div>
  );
}
