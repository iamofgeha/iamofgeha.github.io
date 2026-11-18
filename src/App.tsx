import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { Footer } from './components/layout/Footer';
import { Nav } from './components/layout/Nav';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Credentials } from './components/sections/Credentials';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Research } from './components/sections/Research';
import { Writing } from './components/sections/Writing';

export default function App() {
  // The browser tries to jump to the URL hash before React has rendered, so deep links
  // like /#work would land at the top. Re-apply the hash once the sections exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const raf = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Research />
          <Credentials />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
