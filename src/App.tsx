import React, { FC, useEffect, useState } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ParticlesContainer from './Particles/Particles';
import { MyGlobalContext } from './GlobalContext';
import Navbar from './components/Navbar/Navbar';
import CustomLoader from './LoadingAnimation';

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.pushState(null, '', '/Portfolio/');
  }, []);
  return (
    <>
      <MyGlobalContext.Provider value={{ loading, setLoading }}>
        <ParticlesContainer />
        <Navbar />
        <CustomLoader />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </MyGlobalContext.Provider>
    </>
  );
};

export default App;
