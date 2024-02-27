import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { projects } from "../constants";

const Projects = () => {
  return (
  <div className="bg-black">
    <section className="max-container bg-black text-white">
      <h1 className="head-text">
        My{" "}
        <span className="yellow-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
      I've worked on many projects over the years, but these are the ones I'm most passionate about.
       Some are open-source, so feel free to explore and share your ideas for improvement. Your input is always welcome!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-yellow-500"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  </div>
  );
};

export default Projects;
