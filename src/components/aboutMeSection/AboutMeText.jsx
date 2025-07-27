import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi! I'm Anshul Mishra, a passionate PHP Web Developer with 4.6 years of hands-on experience crafting dynamic, secure, and high-performing web applications. I specialize in backend development using PHP, with deep expertise in Laravel, MySQL, and API integrations.

        Over the years, I’ve worked on a wide range of projects—from scalable business platforms to custom CMS solutions—focusing on clean, maintainable code and seamless user experiences. My approach blends technical precision with a strong understanding of real-world business needs.

        I enjoy solving complex problems, optimizing performance, and delivering reliable, scalable code. Whether it's building an application from scratch or improving an existing system, I always aim to exceed expectations.

        When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and keeping up with the latest trends in web development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
