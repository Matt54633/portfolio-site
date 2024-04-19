const Section = ({title, children }) => {
    return (
        <section className="my-[3.5rem]">
        <h1 className="font-[800] text-[3.5rem] lg:text-[4rem] mb-2.5">{title}</h1>
        {children}
        </section>
    );
    }

export default Section;