import PrimaryButton from "./primaryButton";

const Hero = () => {
    return (
        <section className="mx-0.5 my-[3.5rem]">
            <div className="flex flex-col lg:flex-row  mb-16 lg:mb-8">
            <h1 className="font-[800] text-[6rem] leading-none w-full mb-10 lg-mb-0">Hey,<br></br>I'm <span className="backgroundColour">Matt</span></h1>
            <p className="font-[600] text-[4rem] leading-none w-full text-left lg:text-right">A software engineer from the UK</p>
            </div>

            <PrimaryButton buttonName="View my CV" destination={"/cv"} />
        </section>
    )
}

export default Hero;