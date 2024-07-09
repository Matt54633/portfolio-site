import SkillTag from "./skillTag";

const SkillList = ({ skills, colours }) => {
    return (
        <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <SkillTag key={i} skill={skill} colour={colours[i]} />
        ))}
      </div>
    );
  };
  
  export default SkillList;
