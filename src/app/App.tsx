import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import { BackgroundBlobs } from '@/app/components/BackgroundBlobs';
import { Hero } from '@/app/components/Hero';
import { VideoSection } from '@/app/components/VideoSection';
import { HowItWorks } from '@/app/components/HowItWorks';
import { Portfolio } from '@/app/components/Portfolio';
import { Testimonials } from '@/app/components/Testimonials';
import { CTASection } from '@/app/components/CTASection';
import { Footer } from '@/app/components/Footer';
import ProjectDetail from '@/app/pages/ProjectDetail';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-500 relative ${
          isDark ? 'bg-[#1e1e1e]' : 'bg-[#eeeeee]'
        }`}
      >
        <BackgroundBlobs isDark={isDark} />
        <CustomCursor />
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

        <div className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero isDark={isDark} />
                  <VideoSection isDark={isDark} />
                  <HowItWorks isDark={isDark} />
                  <Portfolio isDark={isDark} />
                  <Testimonials isDark={isDark} />
                  <CTASection isDark={isDark} />
                  <Footer isDark={isDark} />
                </>
              }
            />
            <Route
              path="/project/:id"
              element={
                <>
                  <ProjectDetail isDark={isDark} />
                  <Footer isDark={isDark} />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
