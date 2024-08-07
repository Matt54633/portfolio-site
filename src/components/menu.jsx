import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

const Menu = ({ refs }) => {
  const { aboutRef, skillsRef, experienceRef, workRef, contactRef } = refs;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const skillsTop = skillsRef.current.getBoundingClientRect().top + window.scrollY;
      const experienceTop = experienceRef.current.getBoundingClientRect().top + window.scrollY;
      const workTop = workRef.current.getBoundingClientRect().top + window.scrollY;
      const contactTop = contactRef.current.getBoundingClientRect().top + window.scrollY;

      if (scrollPosition < skillsTop) {
        setActiveSection("about");
      }  else if (scrollPosition < experienceTop) {
        setActiveSection("skills");
      } else if (scrollPosition < workTop) {
          setActiveSection("experience")
      } else if (scrollPosition < contactTop) {
        setActiveSection("work");
      }  else if (scrollPosition > contactTop){
        setActiveSection("contact");
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setActiveSection("contact");
      }
    }, 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, skillsRef, experienceRef, workRef, contactRef]);


  const scrollToRef = (ref) => {
    const yOffset = -220;
    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="menu backdrop-blur[12px] backdrop-contrast-90 animate-fadeIn fixed bottom-0  z-10 mb-5 flex gap-1.5 rounded-xl border border-light-grey bg-medium-grey p-1 ">
      {" "}
      <a
        id="menuAbout"
        href="#about"
        onClick={() => scrollToRef(aboutRef)}
        className={`menuLink flex h-10 w-10 items-center justify-center rounded-lg border-[1px] border-light-grey p-[0.2rem] transition hover:border-light-blue ${
          activeSection === "about" ? "bg-light-blue" : ""
        }`}>
        <img alt="Menu" className="h-8 w-8" src="/memoji.png" />
      </a>
      <a
        id="menuSkills"
        href="#skills"
        onClick={() => scrollToRef(skillsRef)}
        className={`menuLink flex h-10 w-10 items-center justify-center rounded-lg border-[1px] border-light-grey p-[0.2rem] transition hover:border-light-blue ${
          activeSection === "skills" ? "bg-light-blue" : ""
        }`}>
        <img alt="Menu" className="h-8 w-8 mix-blend-difference" src="/skills.svg" />
      </a>
      <a
        id="menuExperience"
        href="#experience"
        onClick={() => scrollToRef(experienceRef)}
        className={`menuLink flex h-10 w-10 items-center justify-center rounded-lg border-[1px] border-light-grey p-[0.2rem] transition hover:border-light-blue ${
          activeSection === "experience" ? " bg-light-blue" : ""
        }`}>
        <img alt="Menu" className="h-8 w-8 mix-blend-difference" src="/work.svg" />
      </a>
      <a
        id="menuWork"
        href="#work"
        onClick={() => scrollToRef(workRef)}
        className={`menuLink flex h-10 w-10 items-center justify-center rounded-lg border-[1px] border-light-grey p-[0.12rem] transition hover:border-light-blue ${
          activeSection === "work" ? " bg-light-blue" : ""
        }`}>
        <img alt="Menu" className="h-8 w-8 mix-blend-difference" src="/tags.svg" />
      </a>
      <a
        id="menuContact"
        href="#contact"
        onClick={() => scrollToRef(contactRef)}
        className={`menuLink flex h-10 w-10 items-center justify-center rounded-lg border-[1px] border-light-grey p-[0.2rem] transition hover:border-light-blue ${
          activeSection === "contact" ? " bg-light-blue" : ""
        }`}>
        <img alt="Menu" className="h-7 w-7 mix-blend-difference" src="/contact.svg" />
      </a>
    </div>
  );
};

export default Menu;
