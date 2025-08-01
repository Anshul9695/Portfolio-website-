import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiWordpress } from "react-icons/si";
import { SiMagento } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "jQuery",
    icon: SiJquery,
  },
  {
    skill: "AJAX",
    icon: IoLogoJavascript,
  },
  {
    skill: "Laravel",
    icon: SiLaravel,
  },
  {
    skill: "WordPress",
    icon: SiWordpress,
  },
  {
    skill: "Magento",
    icon: SiMagento,
  },
  {
    skill: "PHP",
    icon: SiPhp,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Git",
    icon: SiGit,
  },
  {
    skill: "Jira",
    icon: SiJira,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
              className="flex-shrink-0"
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
