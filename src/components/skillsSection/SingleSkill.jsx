const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-6 transition-all duration-500">
      <div className="flex flex-col items-center gap-1 relative">
        <div className="bg-white text-cyan h-[70px] w-[70px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-4xl border-4 border-orange">
          {imgSvg}
        </div>
        <p className="text-white font-bold text-xs">{text}</p>
      </div>
      <div className="w-[70px] h-[140px] bg-orange absolute top-[35px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
