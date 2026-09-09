import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ConsultationModal } from './ConsultationModal';
import { ScrollToTop } from './ScrollToTop';

export interface LayoutContextType {
  onOpenConsultation: (topic?: string) => void;
}

export const Layout: React.FC = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('CryoGen AI Architecture Briefing');

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
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200 flex flex-col justify-between">
      {/* Scroll restoration to top upon route transition */}
      <ScrollToTop />

      {/* Global Sticky Enterprise Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Page Content Rendered Here */}
      <main className="flex-grow">
        <Outlet context={{ onOpenConsultation: handleOpenConsultation }} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Enterprise Architecture Advisory Consultation Dialog */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        defaultTopic={consultationTopic}
      />
    </div>
  );
};
