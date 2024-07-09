const SkillTag = ({ skill, colour }) => {
  const colourClasses = {
    "primary-blue": "bg-primary-blue",
    orange: "bg-orange",
    pink: "bg-pink",
    green: "bg-green",
    red: "bg-red"
  };

  return (
    <div className="backdrop-blur[12px] backdrop-contrast-90 inline-flex items-center gap-2 rounded-2xl border-2 border-light-grey bg-medium-grey px-3 py-1.5 transition-colors duration-200 ease-in-out hover:bg-glass-grey">
      {colour && <div className={`${colourClasses[colour]} h-2 w-2 rounded-full`}></div>}
      <p className="font-bold">{skill}</p>
    </div>
  );
};

export default SkillTag;
