import React, { FC } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import ParticlesContainer from './components/Particles/Particles';
const App: FC = () => {
  return (
    <>
      <ParticlesContainer />

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </>
  );
};

export default App;
