
import React from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CompetenciesSection } from '@/components/CompetenciesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { ContactSection } from '@/components/ContactSection';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      <main className="relative z-10 pt-20">{/* Added top padding for floating nav */}
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <CompetenciesSection />
        <ProjectsSection />
        <CertificationsSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      
      <BackToTop />
      
      <footer className="relative z-10 bg-slate-900/80 backdrop-blur text-center py-8 border-t border-cyan-500/20">
        <p className="text-slate-400">&copy; 2025 Aya Mekni - AI Engineer</p>
      </footer>
    </div>
  );
};

export default Index;
