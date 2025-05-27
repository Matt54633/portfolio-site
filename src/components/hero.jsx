import PrimaryButton from "./primaryButton";

const Hero = () => {
  return (
    <section className="mx-0.5 my-[3rem] flex w-full flex-col md:my-[6rem] lg:my-[7.5rem]">
      <div className="flex flex-row items-center justify-between gap-4 md:mt-0">
        <div className="flex flex-col gap-4 md:gap-8">
          <img
            src="/heroImageMedium.svg"
            alt="Hero"
            className="mb-[-6rem] ml-auto hidden h-2/5  w-2/5 transition duration-300 ease-in-out hover:scale-105 min-[340px]:block min-[600px]:hidden"
          />
          <div className="flex items-center">
            <h1 className="w-full text-[4.75rem] font-[800] leading-[5.5rem] md:text-[5rem] md:leading-[6rem] lg:text-[6rem] lg:leading-[6.5rem]">
              Hey,<br></br>I'm <span className="border-b-4 border-b-primary-blue">Matt</span>
            </h1>
          </div>
          <p className="mb-2 w-full text-left text-[1rem] font-[500] leading-[2.5rem] min-[350px]:text-[1.25rem]  md:text-[1.75rem] lg:text-[2.2rem]">
            A software engineer from the UK
          </p>
        </div>
        <img
          src="/heroImage.svg"
          alt="Hero"
          className="w-2/5 transition duration-300 ease-in-out hover:scale-105 max-[599px]:hidden md:block md:w-2/5 min-[810px]:w-1/3 lg:w-1/3"
        />
      </div>
      <div>
        <PrimaryButton buttonName="View my CV" destination={"/cv"} target={"_self"} />
      </div>
    </section>
  );
};

export default Hero;
