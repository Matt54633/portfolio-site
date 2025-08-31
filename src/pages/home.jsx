import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Menu from "../components/menu";
import Hero from "../components/hero";
import Section from "../components/section";
import SkillList from "../components/skillList";
import ExperienceCard from "../components/experienceCard";
import WorkCard from "../components/workCard";
import WorkGroupCard from "../components/workGroupCard";
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
            Hey! I'm a Software Engineer based in the UK, passionate about building innovative
            applications. With experience as both a web developer and a software engineer, I work
            with a wide range of technologies, including Node.js, Stencil.js, React,
            Swift, AWS, C#, and Web Components.
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
              "C#",
              "Swift",
              "Python",
              "SQL",
              "React",
              "Node.js",
              "Stencil.js",
              "SwiftUI",
              "AWS",
              "Terraform",
              "Firebase"
            ]}
            colours={[
              "primary-blue",
              "primary-blue",
              "primary-blue",
              "primary-blue",
              "primary-blue",
              "primary-blue",
              "primary-blue",
              "green",
              "green",
              "green",
              "green",
              "red",
              "red",
              "red"
            ]}
          />
        </Section>
      </div>

      <div ref={experienceRef}>
        <Section title="Career">
          <div className="flex flex-col gap-4">
            <ExperienceCard
              company="Software Engineer"
              jobTitle="ADP"
              datePeriod="2025 - Current"
              icon="code.svg"
            />
            <ExperienceCard
              company="Associate Software Engineer"
              jobTitle="ADP"
              datePeriod="2024 - 2025"
              icon="code.svg"
            />
            <ExperienceCard
              company="Junior Web Developer"
              jobTitle="QV Systems"
              datePeriod="2022 - 2023"
              icon="code.svg"
            />
            <ExperienceCard
              company="IT Technician"
              jobTitle="Huish MAT"
              datePeriod="2021"
              icon="cog.svg"
            />
          </div>
        </Section>
      </div>

      <div ref={workRef}>
        <Section title="Work">
          <div className="flex flex-col gap-16">
            <WorkGroupCard title="Sites" image="globe.svg">
              <WorkCard
                image="mcmsw.jpg"
                title="MCMSW"
                description="Designed, developed and deployed a brand new website and branding package for a local mechanic."
                href="https://mobilecarmechanic.net">
                <SkillList
                  skills={["HTML", "CSS", "JS"]}
                  colours={["primary-blue", "primary-blue", "primary-blue"]}
                />
              </WorkCard>
              <WorkCard
                image="mcmsw-crm.png"
                title="MCMSW CRM"
                description="Bespoke customer relationship management system with automated document generation and invoicing. "
                href="https://mobilecarmechanic.net">
                <SkillList
                  skills={["React", "Firebase"]}
                  colours={["green", "red"]}
                />
              </WorkCard>
              <WorkCard
                image="bennys.png"
                title="Benny's Fish and Chips"
                description="Website developed for a local fish and chip shop. Built using React and Tailwind."
                href="https://bennysfishandchips.co.uk">
                <SkillList skills={["React"]} colours={["green"]} />
              </WorkCard>
            </WorkGroupCard>

            <WorkGroupCard title="Open Source" image="open-source.svg">
              <WorkCard
                image="swtools.png"
                title="SWTools"
                description="Multi-platform package providing a collection of tools for use in Swift projects."
                href="https://github.com/matt54633/SWTools">
                <SkillList skills={["Swift"]} colours={["primary-blue"]} />
              </WorkCard>
            </WorkGroupCard>
            <WorkGroupCard title="Apps" image="apps.svg">
              <WorkCard
                image="emissionIQ.png"
                title="EmissionIQ"
                description="Gamified iOS app for tracking carbon emissions. Level up, achieve trophies and more."
                href="https://apps.apple.com/gb/app/emissioniq/id6477887658">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["primary-blue", "green"]} />
              </WorkCard>
              <WorkCard
                image="budgets.png"
                title="Clear Budgets"
                description="Budgeting iOS app for tracking expenses, managing subscriptions and more."
                href="https://apps.apple.com/gb/app/clear-budgets/id6503365476">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["primary-blue", "green"]} />
              </WorkCard>
              <WorkCard
                image="weather.jpeg"
                title="54633°"
                description="Hyperlocal iOS weather app for iOS, iPadOS and MacOS. Built using SwiftUI and the Apple Weather API."
                href="https://apps.apple.com/gb/app/54633/id6468419990/">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["primary-blue", "green"]} />
              </WorkCard>
              <WorkCard
                image="personal-bests.jpeg"
                title="Personal Bests"
                description="Progress tracking iOS app for tracking weight lifting. Built using Swift and the SwiftData framework."
                href="https://apps.apple.com/gb/app/personal-bests/id6468835590/">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["primary-blue", "green"]} />
              </WorkCard>
              <WorkCard
                image="shaker-gradient.jpg"
                title="Gradient Shaker"
                description="Shake to Generate! - Gradient generator for iOS. Built using Swift and SwiftUI with iCloud Sync."
                href="https://apps.apple.com/gb/app/gradient-shaker/id6499209609">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["primary-blue", "green"]} />
              </WorkCard>
              <WorkCard
                image="speed0.jpg"
                title="SPEED0"
                description="Route between locations, track average speed and change tracks. Built using Swift and SwiftUI."
                href="https://apps.apple.com/gb/app/speed0/id6469321016">
                <SkillList skills={["Swift", "SwiftUI"]} colours={["primary-blue", "green"]} />
              </WorkCard>
            </WorkGroupCard>

          </div>
        </Section>
      </div>

      <div ref={contactRef}>
        <Section title="Contact Me">
          <div className="flex flex-col gap-4 sm:flex-row">
            <ContactCard
              icon={"linkedin.svg"}
              title={"LinkedIn"}
              href={"https://linkedin.com/in/matthew-james-sullivan"}
            />

            <ContactCard
              icon={"email.svg"}
              title={"Email"}
              href={"mailto:msportfolio26@gmail.com"}
            />
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
