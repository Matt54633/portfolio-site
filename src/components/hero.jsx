const Hero = () => {
  return (
    <section className="mx-0.5 my-[3rem] md:my-[6rem] lg:my-[7.5rem] flex flex-col w-full">
      <div className="flex flex-row gap-10 md:mt-0 justify-between items-center">
        <div className="flex flex-col gap-8 md:gap-8">
          <img src="/heroImageMedium.png" alt="Hero" className="w-1/2 h-1/2  min-[530px]:w-1/3 md:hidden min-[530px]:mb-[-8rem]  ml-auto mb-[-5rem]" />
          <div className="flex">

            <h1 className="w-full text-[4.5rem] md:text-[5rem] font-[800] leading-none lg:text-[6rem]">
              Hey,<br></br>I'm{" "}
              <span className="content-box bg-spanBG bg-contain bg-bottom bg-no-repeat py-1">Matt</span>
            </h1>

          </div>
          <p className="w-full text-left mb-2 text-[1.8rem] md:text-[2.2rem] leading-[2.5rem] lg:text-[2.5rem]">
            A software engineer from the UK
          </p>
        </div>
            <img src="/heroImageMedium.png" alt="Hero" className="w-1/4 h-1/4 md:block lg:hidden hidden" />
        <img src="/heroImage.png" alt="Hero" className="w-1/3 lg:block hidden" />
      </div>
      {/* <PrimaryButton buttonName="View my CV" destination={"/cv"} target={"_self"} /> */}
    </section>
  );
};

export default Hero;