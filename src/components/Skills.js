import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className=''>
      {/* <div className='section-center skills-center'> */}
      <div className='skil'>
        <h2>skills</h2>
        <div className='underline'></div>
      </div>
      <article>
        {/* <h3>front end</h3> */}
        <div className='skill-c'>
          <ul>
            <li className='react'>React js</li>
            <li className='js'>JavaScript</li>
            <li className='mern'>mern stack</li>
            <li className='api'>RESTUL API</li>
          </ul>

          <ul>
            <li className='tailwind'>tailwind css</li>
            <li className='css'>CSS</li>
            <li className='html'>HTML</li>
          </ul>
        </div>
      </article>
      {/* </div> */}
    </section>
  );
}

export default Skills;
