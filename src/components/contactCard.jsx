const ContactCard = ({ icon, title, href }) => {
  return (
    <a href={href} target="blank" className="w-full">
      <div className="flex items-center gap-2 rounded-2xl border-2 border-transparent bg-medium-grey px-4 py-3.5 transition hover:border-light-grey">
        <div className="w-14">
          <img
            src={`/${icon}`}
            alt="Contact Icon"
            className="h-12 w-12 rounded-full bg-decorator-grey p-[0.6rem]"
          />
        </div>
        <h1 className="text-[1.15rem] font-bold">{title}</h1>
      </div>
    </a>
  );
};

export default ContactCard;
