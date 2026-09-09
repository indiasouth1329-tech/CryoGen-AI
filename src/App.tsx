import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { OverviewPage } from './pages/OverviewPage';
import { ProblemPage } from './pages/ProblemPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { ValueGovernancePage } from './pages/ValueGovernancePage';
import { UseCasesPage } from './pages/UseCasesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OverviewPage />} />
          <Route path="problem" element={<ProblemPage />} />
          <Route path="architecture" element={<ArchitecturePage />} />
          <Route path="value-governance" element={<ValueGovernancePage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          {/* Catch-all route gracefully redirects to Overview homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
