const WorkGroupCard = ({ title, image, children }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl ring-2 ring-light-grey p-4 ">
      <div className="flex flex-row items-center gap-4">
        <img
          src={`/${image}`}
          alt="Work Group Icon"
          className="h-12 w-12 rounded-full bg-decorator-grey p-[0.6rem]"
        />
        <h1 className="text-[1.75rem] font-bold">{title}</h1>
      </div>
      <div className="flex flex-col gap-6 lg:gap-4">{children}</div>
    </div>
  );
};

export default WorkGroupCard;
