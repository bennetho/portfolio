import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Service from '../components/Service';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import BackBtn from '../components/BackBtn';
import PageProject from '../components/PageProject';

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
          {/* <PageProject /> */}
          <Project />
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
