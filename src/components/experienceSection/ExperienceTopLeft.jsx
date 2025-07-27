import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2020
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="4.6" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="7+" text="Web Projects" />
      </div>
      <p className="text-center">
        With over 4.6 years of experience in backend development, I've built secure, scalable, and performance-driven web applications for a variety of clients.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
