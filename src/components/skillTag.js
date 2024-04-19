const SkillTag = ({ skill, colour }) => {
    const colourClasses = {
        'primary-blue': 'bg-primary-blue',
        'orange': 'bg-orange',
        'pink': 'bg-pink',
        'green': 'bg-green',
        'red': 'bg-red',
    };

    return (
        <div className="inline-flex items-center border-2 border-light-grey rounded-2xl bg-medium-grey backdrop-blur[12px] backdrop-contrast-90 px-3 py-1.5 gap-2 transition-colors duration-200 ease-in-out hover:bg-glass-grey">
            <div className={`${colourClasses[colour]} w-2.5 h-2.5 rounded-full`}></div>
            <p className="font-bold">{skill}</p>
        </div>
    );
}


export default SkillTag;