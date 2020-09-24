import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className='section skills'>
      <div className='section-center skills-center'>
        <div className=''>
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
              <li className='tailwind'>tailwind css</li>
              <li className='css'>CSS</li>
              <li className='html'>HTML</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;

// import React from "react";

// function Skills() {
//   return (
//     <section className='section skills'>
//       <div className='section-center skills-center'>
//         <div className='section-title skills-title'>
//           <h2>skills</h2>
//           <div className='underline'></div>
//         </div>
//         <article>
//           <h3>front end</h3>
//           <div className='skill'>
//             <p>REACT</p>
//             <div className='skill-container'>
//               <div className='skill-value value-75'></div>
//               {/* <p className='skill-text skill-text-80'>65%</p> */}
//             </div>
//           </div>
//           <div className='skill'>
//             <p>JAVASCRIPT</p>
//             <div className='skill-container'>
//               <div className='skill-value value-70'></div>
//               {/* <p className='skill-text skill-text-70'>70%</p> */}
//             </div>
//           </div>
//           <div className='skill'>
//             <p>CSS</p>
//             <div className='skill-container'>
//               <div className='skill-value'></div>
//               {/* <p className='skill-text'>86%</p> */}
//             </div>
//           </div>
//           <div className='skill'>
//             <p>HTML 5</p>
//             <div className='skill-container'>
//               <div className='skill-value'></div>
//               {/* <p className='skill-text'>86%</p> */}
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }

// export default Skills;
