'use client';

import HeaderSection from './components/HeaderSection';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import BackToTop from './components/BackToTop';
import SkillsSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';

export default function Home() {

  return (
    <>
      <HeaderSection />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
    </>
  );
}
