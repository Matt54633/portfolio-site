import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Hero from "../components/hero";
import Section from "../components/section";
import SkillList from "../components/skillList";
import ExperienceCard from "../components/experienceCard";
import WorkCard from "../components/workCard";
import ContactCard from "../components/contactCard";
import React, { useRef } from "react";

const Home = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Menu refs={{ aboutRef, skillsRef, experienceRef, workRef, contactRef }} />
      </div>
      <div ref={aboutRef}>
        <Hero />

        <Section title="About Me">
          <p className="font-medium">
            Hey! I'm a Software Engineering student in the final year of a 4-year bachelor's degree
            at Bournemouth University. With prior experience as a web developer and IT technician
            during my stints at QV Systems and Huish MAT, I have developed numerous applications
            utilising technologies such as NodeJS, Oracle APEX, Python Django, React and more.
            Outside of my degree, I have developed numerous personal projects, including several iOS
            and web applications.
          </p>
        </Section>
      </div>

      <div ref={skillsRef}>
        <Section title="Skills">
          <SkillList
            skills={[
              "HTML",
              "CSS",
              "JS",
              "Node.js",
              "React",
              "Swift",
              "Python",
              "Django",
              "SQL",
              "Terraform",
              "AWS",
              "Firebase"
            ]}
            colours={[
              "primary-blue",
              "primary-blue",
              "pink",
              "pink",
              "pink",
              "orange",
              "orange",
              "orange",
              "green",
              "green",
              "red",
              "red"
            ]}
          />
        </Section>
      </div>

      <div ref={experienceRef}>
        <Section title="Experience">
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <ExperienceCard
              jobTitle="Junior Web Developer"
              company="QV Systems"
              datePeriod="2022 - 2023"
              icon="code.svg"
            />
            <ExperienceCard
              jobTitle="IT Technician"
              company="Huish MAT"
              datePeriod="2021"
              icon="cog.svg"
            />
          </div>
        </Section>
      </div>

      <div ref={workRef}>
        <Section title="My Work">
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <WorkCard
              image="weather.jpeg"
              title="54633°"
              description="Hyperlocal iOS weather app for iPhone & iPad. Built using SwiftUI and Apple Weather API."
              href="https://apps.apple.com/gb/app/54633/id6468419990/">
              <SkillList skills={["Swift", "SwiftUI"]} colours={["pink", "pink"]} />
            </WorkCard>
            <WorkCard
              image="personal-bests.jpeg"
              title="Personal Bests"
              description="Progress tracking iOS app for tracking weight lifting personal bests. Built using Swift and the SwiftData framework."
              href="https://apps.apple.com/gb/app/personal-bests/id6468835590/">
              <SkillList
                skills={["Swift", "SwiftUI", "SwiftData"]}
                colours={["pink", "pink", "red"]}
              />
            </WorkCard>
            <WorkCard
              image="mcmsw.svg"
              title="MCMSW"
              description="Designed, developed and deployed a brand new website and branding package for a local mechanic."
              href="https://mobilecarmechanic.net">
              <SkillList
                skills={["HTML", "CSS", "JS"]}
                colours={["primary-blue", "primary-blue", "pink"]}
              />
            </WorkCard>
            <WorkCard
              image="portal.svg"
              title="Booking Portal"
              description="Booking management template. Utilises a Django backend and customisable front-end.">
              <SkillList skills={["Django", "SQL"]} colours={["orange", "red"]} />
            </WorkCard>
          </div>
        </Section>
      </div>

      <div ref={contactRef}>
        <Section title="Contact Me">
          <div className="flex gap-4">
            <ContactCard
              icon={"linkedin.svg"}
              href={"https://www.linkedin.com/in/matt-sullivan-506490191/"}
            />

            <ContactCard icon={"email.svg"} href={"mailto:msportfolio26@gmail.com"} />
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
