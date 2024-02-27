import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText}) => (
        <div className ="info-box">
            <p className="font-medium sm:text-xl text-center">{text}</p>
            
            <Link to={link} className="neo-gradient neo-btn">
                {btnText}
            </Link>
        </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-gradient bg-transparent py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Aarush Jagtap</span>
        <br />
        A Mathematics and Computer Science major @ UCSD
      </h1>
    ),
    2: (
        <InfoBox
            text ="Unlock the power of collaboration! Join me on a journey of innovation and growth."
            link = "/about"
            btnText="See my experience"
        />
    ),
    3: (
        <InfoBox
            text="Experience the impact of teamwork! Explore my portfolio of projects and innovations."
            link="/projects"
            btnText="Explore my projects"
        />
    ),
    4: (
        <InfoBox
            text = "Ready to embark on an epic collaboration?"
            link = "/contact"
            btnText= "Connect with me"
        />
        
    ),
}

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}
export default HomeInfo;