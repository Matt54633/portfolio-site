const ExperienceCard = ({ company, jobTitle, datePeriod, icon, children }) => {
  return (
    <div className="flex flex-col w-full gap-4 rounded-2xl border-2 border-transparent bg-medium-grey px-4 py-3.5 transition hover:border-light-grey">
      <div className="flex flex-row items-center gap-4">
        <div>
          <img
            src={`/${icon}`}
            alt="Experience Type Icon"
            className="h-12 w-12 rounded-full bg-decorator-grey p-[0.6rem]"
          />
        </div>
        <div className="text-[1rem]">
          <h1 className="text-[1.2rem] font-[800]">{company}</h1>
          <p className="font-medium">{jobTitle}</p>
          <p className="font-medium text-placeholder-grey">{datePeriod}</p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ExperienceCard;
