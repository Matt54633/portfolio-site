const WorkGroupCard = ({ title, image, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center gap-3.5 bg-medium-grey p-3.5 rounded-2xl border-2 border-transparent transition hover:border-light-grey">
        <img
          src={`/${image}`}
          alt="Work Group Icon"
          className="h-8 w-8 rounded-full bg-decorator-grey p-[0.35rem]"
        />
        <h1 className="text-[1.3rem] font-bold">{title}</h1>
      </div>
      <div className="flex flex-col gap-6 lg:gap-5">{children}</div>
    </div>
  );
};

export default WorkGroupCard;
