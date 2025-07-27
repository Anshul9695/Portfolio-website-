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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-6xl text-orange" />
            <p className="text-center mt-4 text-sm">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
