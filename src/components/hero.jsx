// import PrimaryButton from "./primaryButton";

const Hero = () => {
  return (
    <section className="mx-0.5 my-[6rem] lg:my-[7.5rem] flex flex-col">
      <div className="flex flex-col gap-10 md:mt-0">
        <h1 className="w-full text-[5rem] font-[800] leading-none md:text-[6rem]">
          Hey,<br></br>I'm{" "}
          <span className="content-box bg-spanBG bg-contain bg-bottom bg-no-repeat py-1">Matt</span>
        </h1>
        <p className="w-full text-left  text-[2.2rem] leading-[2.5rem]  md:text-[2.75rem] ">
          A software engineer from the UK
        </p>
      </div>
      {/* <PrimaryButton buttonName="View my CV" destination={"/cv"} target={"_self"} /> */}
    </section>
  );
};

export default Hero;
