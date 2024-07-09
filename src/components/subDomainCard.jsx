const SubDomainCard = ({ image, title, href }) => {
    return (
      <a href={href} target="blank">
        <div className="flex flex-col w-full  rounded-2xl border-2 border-transparent bg-medium-grey px-4 py-3.5 lg:py-5 transition hover:border-light-grey">
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full bg-decorator-grey">
              <img
                src={`/${image}`}
                alt="Sub Domain Icon"
                className="h-12 w-12 p-[0.6rem]"
              />
            </div>
            <div className="text-[1rem] flex-grow">
              <h1 className="text-[1.2rem] font-[800]">{title}</h1>
            </div>
            <img src="/chevronRight.svg" alt="Right Arrow" className="h-4 w-4 rotate-180" />
          </div>
        </div>
      </a>
    );
  };
  
  export default SubDomainCard;