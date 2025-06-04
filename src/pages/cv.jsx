import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CvHero from "../components/cvHero";
import Section from "../components/section";
import SkillList from "../components/skillList";
import ExperienceCard from "../components/experienceCard";
import BulletedList from "../components/bulletedList";

const CV = () => {
  return (
    <div>
      <Navbar />
      <CvHero />

      <Section title="About Me">
        <p className="font-medium">
          As an ambitious and adaptable Software Engineer with professional experience in both
          corporate and start-up environments, I bring a strong foundation in full-stack
          development, cloud engineering, and software delivery. Having worked on scalable
          cloud-based applications and modern web platforms, I thrive on learning new technologies
          quickly and contributing meaningfully to cross-functional teams.
        </p>
      </Section>

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

      <Section title="Education">
        <div className="mt-7 flex flex-col gap-4">
          {/* <div className="grid gap-4 lg:grid-cols-2"> */}
          <ExperienceCard
            jobTitle="Bournemouth University"
            company="Software Engineering BSc"
            datePeriod="2020 - 2024"
            icon="cap.svg">
            <SkillList skills={["1st Class Honours"]} colours={[]} />
          </ExperienceCard>

          <ExperienceCard
            jobTitle="Strode College"
            company="Computing and IT BTEC"
            datePeriod="2018 - 2020"
            icon="cap.svg">
            <SkillList skills={["D*D*D*"]} colours={[]} />
          </ExperienceCard>
          {/* </div> */}
          <ExperienceCard
            className="lg:col-span-2"
            jobTitle="Bucklers Mead Academy"
            company="GCSE"
            datePeriod="2013 - 2018"
            icon="cap.svg">
            <SkillList
              skills={[
                "Computer Science - 7",
                "Mathematics - 7",
                "Physics - 7",
                "Chemistry - 6",
                "Biology - 6",
                "English Language - 5",
                "English Literature - 4",
                "French - 5",
                "Product Design - C",
                "ECDL - D*"
              ]}
              colours={[]}
            />
          </ExperienceCard>
          <ExperienceCard
            className="lg:col-span-2"
            jobTitle="Bournemouth University"
            company="Subject Achievement Scholarship"
            datePeriod="2020"
            icon="cap.svg">
            <p className="font-medium">
              Awarded due to demonstrating outstanding commitment to the study through work
              experience and voluntary work.
            </p>
          </ExperienceCard>
        </div>
      </Section>

      <Section title="Experience">
        <div className="mt-7 flex flex-col gap-4">
          <ExperienceCard
            jobTitle="ADP"
            company="Associate Software Engineer"
            datePeriod="2024 - Current"
            icon="code.svg">
            <BulletedList
              items={[
                "Delivering scalable infrastructure using AWS, supporting continuous integration and deployment of cloud services.",
                "Building reusable Web Components with TypeScript to support dynamic and accessible user interfaces.",
                "Developing and maintaining APIs using C#, ensuring secure and efficient data handling for payroll processing."
              ]}
            />
          </ExperienceCard>
          <ExperienceCard
            jobTitle="QV Systems"
            company="Junior Web Developer"
            datePeriod="2022 - 2023"
            icon="code.svg">
            <BulletedList
              items={[
                "Engineered cloud-based solutions by utilising AWS to integrate APIs with a proprietary application.",
                "Completed the development of Node.js applications, enhancing system functionality.",
                "Led the research, design, and implementation of a Robotic Process Automation system, leveraging AWS infrastructure.",
                "Revamped internal API documentation, ensuring accuracy and clarity for effective communication.",
              ]}
            />
          </ExperienceCard>
          {/* <div className="grid gap-4 lg:grid-cols-2"> */}
          <ExperienceCard
            jobTitle="Huish MAT"
            company="IT Technician"
            datePeriod="2021"
            icon="cog.svg">
            <BulletedList
              items={[
                "Collaborated with IT Network Manager across three primary schools.",
                "Repurposed IT equipment to optimise resource utilisation.",
                "Provided timely IT support to staff members to resolve queries.",
              ]}
            />
          </ExperienceCard>

          <ExperienceCard
            className="lg:col-span-2"
            jobTitle="United Kingdom"
            company="Freelance and Voluntary Work"
            icon="code.svg">
            <BulletedList
              items={[
                "Collaborated with a local school to conceptualise and produce compelling marketing materials and documentation.",
                "Developed a bespoke CRM system for a local mechanic, streamlining customer management and service tracking."
              ]}
            />
          </ExperienceCard>
          {/* </div> */}
        </div>
      </Section>

      <Section title="Interests">
        <p className="font-medium">
          Outside of work, I enjoy cooking and trying new recipes with friends and family. I’m
          passionate about keeping up with emerging technologies, often through building personal
          projects, exploring new frameworks, and reading technical books. I also remain actively
          committed to volunteering, a value instilled in me through my time with the Scouting
          Association.
        </p>
      </Section>

      <Footer />
    </div>
  );
};

export default CV;
