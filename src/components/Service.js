import React from 'react';

function Service() {
  return (
    <section className='section bg-grey'>
      <div className='section-title service-title'>
        <h2>services</h2>
        <div className='underline'></div>
      </div>
      <div className='services-center section-center'>
        <article className='service'>
          <i className='fas fa-code service-icon'></i>

          <h4>web development</h4>
          <div className='underline'></div>
          <p>
            clean, modern design - optimized for performance,search engines,with
            all UX interaction,will make it all from scratch.
          </p>
        </article>
        <article className='service'>
          <h4>web design</h4>
          <div className='underline'></div>
          <p>
            Are you looking for a new design? i can help you develop a fitting
            design for your new website or update the look of our old website.
          </p>
        </article>
        <article className='service'>
          <i className='fab fa-android service-icon'></i>
          <h4>Responsive & mobile friendly website</h4>
          <div className='underline'></div>
          <p>
            All websites I create are responsive and work just as good on mobile
            phone, tablet or on a computer. If your webpage is not responsive
            today, I can help you solve it
          </p>
        </article>
      </div>
    </section>
  );
}

export default Service;
