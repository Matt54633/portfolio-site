const WorkCard = ({ image, title, description, children, href }) => {
  return (
    <a href={href} target="blank">
      <div className="flex w-full flex-col gap-4 rounded-2xl bg-medium-grey ring-2 ring-inset ring-transparent  transition hover:ring-light-grey">
        <div className="flex flex-col gap-4">
          <img
            src={`/${image}`}
            alt="Work Type Icon"
            className="aspect-[4/3] rounded-t-xl object-cover"
          />
          <div className="mb-4 flex flex-col gap-2 px-4 py-3.5 text-[1rem]">
            <h1 className="text-[1.2rem] font-[800]">{title}</h1>
            <p className="mb-2 font-medium">{description}</p>

            {children}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
