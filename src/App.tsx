/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonaSection } from './components/PersonaSection';
import { Features } from './components/Features';
import { PreviewSection } from './components/PreviewSection';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { DownloadModal, ProModal, DemoModal } from './components/Modals';

export default function App() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [proOpen, setProOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div id="landing-page-root" className="min-h-screen bg-black font-sans text-white selection:bg-purple-500 selection:text-white">
      <Navbar
        onOpenPro={() => setProOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      <main id="main-content">
        <Hero
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenDemo={() => setDemoOpen(true)}
          onOpenPro={() => setProOpen(true)}
        />
        <PersonaSection />
        <Features />
        <PreviewSection
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenPro={() => setProOpen(true)}
        />
        <Pricing
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenPro={() => setProOpen(true)}
        />
        <FAQ />
        <CTASection
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenPro={() => setProOpen(true)}
        />
      </main>

      <Footer onOpenLicenseModal={() => setProOpen(true)} />

      {/* Interactive Modals */}
      <DownloadModal
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        onOpenPro={() => setProOpen(true)}
      />

      <ProModal
        isOpen={proOpen}
        onClose={() => setProOpen(false)}
      />

      <DemoModal
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        onOpenDownload={() => setDownloadOpen(true)}
      />
    </div>
  );
}
