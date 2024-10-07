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
            <div className="flex gap-2.5 items-center" >
            <p className="font-medium">{jobTitle}</p>
            <div className="h-1.5 w-1.5 rounded-full bg-light-blue"></div>
            <p className="font-medium ">{datePeriod}</p>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ExperienceCard;
