// import PrimaryButton from "./primaryButton";

const Hero = () => {
  return (
    <section className="mx-0.5 my-[7.5rem] flex flex-col">
      <div className="mt-[-2rem] flex flex-col gap-12 md:mt-0">
        <h1 className="w-full text-[5rem] font-[800] leading-none md:text-[6rem]">
          Hey,<br></br>I'm{" "}
          <span className="content-box bg-spanBG bg-contain bg-bottom bg-no-repeat py-1">Matt</span>
        </h1>
        <p className="w-full text-left  text-[2.5rem] leading-none  md:text-[3.4rem] ">
          A software engineer from the UK
        </p>
      </div>
      {/* <PrimaryButton buttonName="View my CV" destination={"/cv"} target={"_self"} /> */}
    </section>
  );
};

export default Hero;
