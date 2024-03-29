import React from "react";
import Skills from "../components/Skills";
import pic from "../images/IMG_1175.JPG";

const About = () => {
  return (
    <section className='section about'>
      <div className='section-center about-center'>
        <article className='about-img'>
          <img src={pic} alt='image' className='hero-photo' />
        </article>
        <article className='about-info'>
          <div className='section-title about-title'>
            <h2>about me</h2>
            <div className='underline'></div>
          </div>

          <p>
            My name is Benneth Ossai, A front-end developer. I'm currently
            living in Portimao, PT 🌴. I'm curious of learning new things so i
            spent most of my time experimenting new things that will improve my
            skills as a front-end developer, I like to build new projects and
            also share what I've learned as a developer to other people. Outside
            of coding I enjoy sports and listening to music.
          </p>
          <div className='customize-screen'>
            <Skills />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
