import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Contact from './Contact';
import Service from '../components/Service';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectsItem from '../components/ProjectsItem';
import Skills from '../components/Skills';
import BackBtn from '../components/BackBtn';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='customize-screen'>
          <Hero />
        </div>
        <div className='customize'>
          <Navbar />
          <Hero />
          <About />
          <Service />
          <ProjectsItem />
          <Skills />
          <Contact />
          <Footer />
          <BackBtn />
        </div>
      </div>
    </>
  );
};

export default Home;
