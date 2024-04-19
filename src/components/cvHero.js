import PrimaryButton from "./primaryButton";

const CvHero = () => {
    return (
        <section className="mx-0.5 my-[3.5rem]">
            <div className="flex flex-col lg:flex-row  mb-2">
            <h1 className="font-[800] text-[5rem] lg:text-[6rem] leading-none w-full mb-10 lg-mb-0">CV</h1>
            </div>

            <PrimaryButton buttonName="Download My CV" destination={"/CV.pdf"} />
        </section>
    )
}

export default CvHero;