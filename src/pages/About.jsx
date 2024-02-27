import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";


const About = () => {
  return (
    <div className = "bg-black">
      <section className="max-container">
        <h1 className='head-text text-white'>
          Hello, I'm <span className='yellow-gradient_text font-semibold drop-shadow'>Aarush</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-white'>
          <p>Results-driven Mathematics and Computer Science major at UCSD with expertise in JavaScript/TypeScript, HTML/CSS, and MERN stack for robust web application development. Proficient in Java, C++, and Python for practical problem-solving. 
            Committed to innovation, adaptability, and grounded in solid mathematical and computer science principles.
          </p>
        </div>
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text text-white'>My Skills</h3> 

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20 cursor-pointer hover:pointer' key={skill.name} onClick={() => window.open(skill.link, '_blank')}>
                <div className='btn-back rounded-xl'>
                  <div className='btn-front rounded-xl flex justify-center'>
                  <img 
                    title = {skill.name}
                    src ={skill.imageUrl}
                    alt = {skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className='py-16'>
          <h3 className='subhead-text text-white'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Various things I've done:</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={<span className="text-white">{experience.date}</span>}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li className="text-black-500/50 font-normal pl-1 text-sm" key={`experience-point-${index}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        </div>


        <hr className="border-slate-200 "/>

        <CTA />
    </section>
  </div> 

    
  );
};

export default About; 
