const Section = ({ title, children }) => {
  return (
    <section className="my-[5rem] lg:my-[5rem]">
      <h1 className="mb-4 text-[3rem] md:text-[3.5rem] font-[800]">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
