import React from 'react';
import { Link } from 'react-router-dom';
import { linkedin, github } from '../assets/icons';

const CTA = () => {
  return (
    <section className="cta flex justify-between">
      <div className='font-semibold flex justify-end'>
        <a href="https://www.linkedin.com/in/aarushj/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn Icon" className="icon" /> 
        </a>
        <a href="https://github.com/Arush223" target="_blank" rel="noopener noreferrer" >
          <img src={github} alt="GitHub Icon" className="github-icon icon" /> 
        </a>
      </div>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
