import PrimaryButton from "./primaryButton";

const Hero = () => {
  return (
    <section className="mx-0.5 my-[3.5rem]">
      <div className="mb-12 flex flex-col  lg:mb-8 lg:flex-row">
        <h1 className="lg-mb-0 mb-10 w-full text-[5rem] font-[800] leading-none lg:text-[6rem]">
          Hey,<br></br>I'm{" "}
          <span className="content-box bg-spanBG bg-contain bg-bottom bg-no-repeat py-1">Matt</span>
        </h1>
        <p className="w-full  text-left text-[3.4rem] font-[600] leading-none lg:text-right lg:text-[4rem]">
          A software engineer from the UK
        </p>
      </div>

      <PrimaryButton buttonName="View my CV" destination={"/cv"} />
    </section>
  );
};

export default Hero;
