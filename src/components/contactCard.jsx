const ContactCard = ({ icon, title, href }) => {
  return (
    <a href={href} target="blank" className="w-full">
      <div className="flex items-center gap-2 rounded-2xl border-2 border-transparent bg-medium-grey p-3 transition hover:border-light-grey">
        <div className="w-12">
          <img
            src={`/${icon}`}
            alt="Contact Icon"
            className="h-11 w-11 rounded-full bg-decorator-grey p-[0.6rem]"
          />
        </div>
        <h1 className="text-[1.15rem] font-bold">{title}</h1>
      </div>
    </a>
  );
};

export default ContactCard;
