const Section = ({ title, children }) => {
  return (
    <section className="my-[3.5rem] lg:my-[5rem]">
      <h1 className="mb-2 text-[3.5rem] font-[800]">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
