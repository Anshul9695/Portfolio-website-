import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "CRM Management System",
    year: "Dec2025",
    align: "right",
    image: "../../public/images/projects/CRM 25.PNG",
    link: "#",
  },
  {
    name: "Freight Management Platform",
    year: "Aug2024",
    align: "left",
    image: "../../public/images/projects/FR8 24.PNG",
    link: "#",
  },
  {
    name: "I-SHIP Logistics",
    year: "Mar2023",
    align: "right",
    image: "../../public/images/projects/I-SHIP 23.PNG",
    link: "#",
  },
  {
    name: "Amritansh Ayurveda",
    year: "Nov2021",
    align: "left",
    image: "../../public/images/projects/amritanshayurveda 21.PNG",
    link: "#",
  },
  {
    name: "Pitambara Shakti Peetham",
    year: "Jun2020",
    align: "right",
    image: "../../public/images/projects/PITAMBARASHAKTIPEETHAM 20.PNG",
    link: "#",
  },
  {
    name: "RML Pathology Lab",
    year: "Apr2021",
    align: "left",
    image: "../../public/images/projects/RML PATHOLODY 21.PNG",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
