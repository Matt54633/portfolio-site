const ContactCard = ({ icon, href }) => {
    return (
      <a href={href} target="blank">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border-2 border-transparent bg-medium-grey px-4 py-3.5 transition hover:border-light-grey">
          <div className="rounded-full bg-decorator-grey p-[0.6rem]">
            <img src={`/${icon}`} alt="Contact Icon" className="h-9 w-9 m-2" />
          </div>
        </div>
      </a>
    );
  };
  
  export default ContactCard;
