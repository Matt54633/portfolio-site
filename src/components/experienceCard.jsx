const ExperienceCard = ({ company, jobTitle, datePeriod, icon, children }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border-2 border-transparent bg-medium-grey p-3.5 transition hover:border-light-grey">
      <div className="flex flex-row items-center gap-4">
        <div className="w-14">
          <img
            src={`/${icon}`}
            alt="Experience Type Icon"
            className="h-12 w-12 rounded-full bg-decorator-grey p-[0.6rem]"
          />
        </div>
        <div className="flex flex-col justify-between md:w-full md:flex-row md:items-center">
          <div>
            <h1 className="text-[1.15rem] font-bold">{company}</h1>
            <p className="font-medium">{jobTitle}</p>
          </div>
          <p className="font-medium text-placeholder-grey">{datePeriod}</p>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ExperienceCard;
