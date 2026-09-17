import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { GitHubSection } from './components/sections/GitHubSection';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ResumeModal } from './components/modals/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#cbd5e1] relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Blurred Navbar */}
      <Navbar onResumeClick={() => setResumeModalOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <Hero onResumeClick={() => setResumeModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Experience Section */}
        <Experience />

        {/* 5. Projects Section with Detail Modal */}
        <Projects />

        {/* 6. Achievements Section */}
        <Achievements />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Building in Public / GitHub Section */}
        <GitHubSection />

        {/* 9. Contact Section */}
        <Contact onResumeClick={() => setResumeModalOpen(true)} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
