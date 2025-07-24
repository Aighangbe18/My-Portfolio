import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectSection } from '../components/ProjectionSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import RateCard from '../components/RateCard';

export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

        {/*Theme Toggle */}
        <ThemeToggle />
         {/*Background Effects */}
         <StarBackground />

          {/*Navbar */}
          <Navbar />
           {/*Main Content */}
           <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <RateCard />
            <ContactSection />
           </main>

            {/*Footer */}
            <Footer />
    </div>
  );
};