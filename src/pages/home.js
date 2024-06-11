import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Hero from "../components/hero";
import Section from "../components/section";
import SkillList from "../components/skillList";
import ExperienceCard from "../components/experienceCard";
import WorkCard from "../components/workCard";
import WorkGroupCard from "../components/workGroupCard";
// import SubDomainCard from "../components/subDomainCard";
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
            Hey! I'm a Software Engineer student based in the UK. With prior experience as both a web developer and IT technician
            during my stints at QV Systems and Huish MAT, I have developed numerous applications
            utilising technologies such as NodeJS, Oracle APEX, Python Django, React, Swift and more.
      
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
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
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
          <div className="mt-6 flex flex-col gap-4">
            <WorkGroupCard title="Apps" image="apps.svg">
              <WorkCard
                image="weather.jpeg"
                title="54633°"
                description="Hyperlocal iOS weather app for iOS, iPadOS and MacOS. Built using SwiftUI and the Apple Weather API."
                href="https://apps.apple.com/gb/app/54633/id6468419990/">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["orange", "pink"]} />
              </WorkCard>
              <WorkCard
                image="personal-bests.jpeg"
                title="Personal Bests"
                description="Progress tracking iOS app for tracking weight lifting. Built using Swift and the SwiftData framework."
                href="https://apps.apple.com/gb/app/personal-bests/id6468835590/">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["orange", "pink"]} />
              </WorkCard>
              <WorkCard
                image="shaker-gradient.jpg"
                title="Shaker Gradient"
                description="Shake to Generate! - Gradient generator for iOS. Built using Swift and SwiftUI with iCloud Sync."
                href="https://apps.apple.com/gb/app/gradient-shaker/id6499209609">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["orange", "pink"]} />
              </WorkCard>
              <WorkCard
                image="speed0.jpg"
                title="SPEED0"
                description="Route between locations, track average speed and change tracks. Built using Swift and SwiftUI."
                href="https://apps.apple.com/gb/app/speed0/id6469321016">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["orange", "pink"]} />
              </WorkCard>
            </WorkGroupCard>

            <WorkGroupCard title="Open Source" image="open-source.svg">
              <WorkCard
                image="swtools.png"
                title="SWTools"
                description="Swift Package that provides a collection of tools for use in Swift projects."
                href="https://github.com/matt54633/SWTools">
                <SkillList skills={["Swift"]} colours={["orange"]} />
              </WorkCard>
            </WorkGroupCard>

            <WorkGroupCard title="Sites" image="globe.svg">
              <WorkCard
                image="mcmsw.jpg"
                title="MCMSW"
                description="Designed, developed and deployed a brand new website and branding package for a local mechanic."
                href="https://mobilecarmechanic.net">
                <SkillList
                  skills={["HTML", "CSS", "JS"]}
                  colours={["primary-blue", "primary-blue", "pink"]}
                />
              </WorkCard>
              <WorkCard
                image="notes.jpg"
                title="Notes Site"
                description="Responsive note taker developed using TailwindCSS and Supabase authentication and database."
                href="https://notes.matt54633.com/">
                <SkillList
                  skills={["HTML", "CSS", "JS"]}
                  colours={["primary-blue", "primary-blue", "pink"]}
                />
              </WorkCard>

              {/* <div className="flex flex-col justify-between gap-4 lg:gap-0">
              <SubDomainCard
                image="gradient.svg"
                title="Gradient Generator"
                href="https://gradients.matt54633.com/"
              />

              <SubDomainCard
                image="sun.svg"
                title="Weather"
                href="https://weather.matt54633.com/"
              />

              <SubDomainCard image="note.svg" title="Notes" href="https://notes.matt54633.com/" />

              <SubDomainCard
                image="play.svg"
                title="Alternate Portfolio"
                href="https://play.matt54633.com/"
              />

              <SubDomainCard
                image="portal.svg"
                title="Booking Portal"
                href="https://portal.matt54633.com/"
              />
            </div> */}
            </WorkGroupCard>
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
