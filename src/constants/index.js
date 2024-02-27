import { csforeach, monarch, Human, Healthlink} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    cplusplus,
    python,
    swords,
    dice,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
        link: "https://www.java.com/en/",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
        link: "https://www.cplusplus.com/",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
        link: "https://www.python.org/",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        link: "https://www.typescriptlang.org/",
    },  
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Backend",
        link: "https://www.mongodb.com/",
    }, 
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
        link: "https://expressjs.com/",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        link: "https://reactjs.org/",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
        link: "https://nodejs.org/",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        link: "https://git-scm.com/",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        link: "https://github.com/",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        link: "https://tailwindcss.com/",
    },
];



export const experiences = [
    {
        title: "Web and Database Director",
        company_name: "HealthLink",
        icon: Healthlink,
        iconBg: "#8080C5",
        date: "February 2024 - Present",
        points: [
            "Spearheading the development and optimization of HealthLink's web-based healthcare platform.",
            "Orchestrating database architecture enhancements and leading a dynamic team of developers.",
            "Strategizing and implementing improvements for HealthLink's website: https://healthlinkucsd.webflow.io/"
        ]
    },
    {
        title: "Software Engineer Intern",
        company_name: "4Human Corporation",
        icon: Human,
        iconBg: "#ADD8E6",
        date: "January 2024 - Present",
        points: [
            "Developing humanitarian applications using modern front-end technologies React.js and Vue.js.",
            "Implementing back-end functionalities using Express.js and MongoDB to support dynamic database management.",
            "Collaborating closely with the back-end team to integrate front-end components with back-end APIs.",
            "Engaging in Agile methodologies Scrum and sprint cycles to ensure project delivery efficiency."
        ]
    },
    {
        title: "Software Developer",
        company_name: "CS ForEach",
        icon: csforeach,
        iconBg: "#808080",
        date: "December 2023 - Present",
        points: [
            "Applying the MERN technology stack to enhance website design and capability.",
            "Gaining experience in Scrum methodologies and practices during full-cycle development.",
            "Mentoring high school interns in front-end development, focusing on DOM manipulation and storage.",
            "Using JS + HTML/CSS to create example web applications: https://github.com/Arush223/CSFEWeek2"
        ]
    },
    {
        title: "Guest Robotics Instructor",
        company_name: "Monarch High School",
        icon: monarch,
        iconBg: '#ADD8E6',
        date: "October 2023 - Present",
        points: [
            "Spearheading Lego Robotics workshops at Monarch High School within the framework of CS ForEach.",
            "Facilitating students in mastering sensor and motor functionalities through EV3 Classroom Code.",
            "Applying advanced pedagogical strategies to explain computing concepts such as loops and recursion.",
            "Developing and delivering multimedia-enriched presentations aimed at instructing students in the nuances of Human-Robot Interaction (HRI)."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Arush223',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aarushj',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: '3D Portfolio Website',
        description: 'Created a 3D portfolio website using React, Three.js, and React-Spring, allowing users to view my projects in a 3D environment.',
        link: 'https://github.com/Arush223/react-portfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'PicToPlate',
        description: 'Integrates Eyepop.ai and the OpenAI API to identify ingredients in photos and then craft delectable recipes from those ingredients.',
        link: 'https://github.com/Arush223/EyePopAiHackathon',
    },
    {
        iconUrl: swords,
        theme: 'btn-back-black',
        name: 'PvP Discord Bot',
        description: 'Developed a Discord bot using Discord.py that simulates Player vs Player (PvP) battles between users, allowing them to battle each other in a fun and interactive way.',
        link: 'https://github.com/Arush223/PythonDiscordBot',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-orange',
        name: 'Perfect Array Game',
        description: "Developed an elaborate Java guessing game based on 2D data structures, employing statistical methods and sorting algorithms to process randomly generated data.",
        link: 'https://github.com/Arush223/Arush223/blob/main/PerfectArray.java',
    },
];