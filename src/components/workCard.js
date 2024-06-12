const WorkCard = ({ image, title, description, children, href }) => {
  return (
    <a href={href} className="flex" target="blank">
      <div className="flex flex-row gap-4 rounded-2xl bg-medium-grey ring-2 ring-inset ring-transparent transition hover:ring-light-grey">
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <img
            src={`/${image}`}
            alt="Work Type Icon"
            className="aspect-[4/3] rounded-t-xl object-cover lg:w-1/4 lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none"
          />
          <div className="flex flex-col justify-between gap-1 px-4 py-3.5 text-[1rem]">
            <h1 className="text-[1.15rem] font-bold">{title}</h1>

            <p className="mb-2 font-medium">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
