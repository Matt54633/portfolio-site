const ContactCard = ({ icon, href }) => {
  return (
    <a href={href} target="blank">
      <div className="flex items-center gap-2 rounded-2xl border-2 border-transparent bg-medium-grey px-4 py-3.5 transition hover:border-light-grey">
        <div className="rounded-full bg-decorator-grey p-[0.2rem]">
          <img src={`/${icon}`} alt="Contact Icon" className="m-2.5 h-8 w-8" />
        </div>
      </div>
    </a>
  );
};

export default ContactCard;
