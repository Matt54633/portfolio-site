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
          As an ambitious and adaptable Software Engineer with professional experience at both
          established enterprises and start-ups, I bring expertise in full-stack development, cloud
          engineering, and software delivery. My experience in building scalable cloud applications
          and modern web platforms enables me to adapt to new technologies and thrive in
          cross-functional teams to deliver robust and impactful solutions.
        </p>
      </Section>

      <Section title="Achievements">
        <div className="mt-7 flex flex-col gap-4">
          <ExperienceCard
            jobTitle="Bournemouth University"
            company="Software Engineering BSc"
            datePeriod="2020 - 2024"
            icon="cap.svg">
            <SkillList skills={["1st Class Honours"]} colours={[]} />
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

          <ExperienceCard
            jobTitle="Strode College"
            company="Computing and IT BTEC"
            datePeriod="2018 - 2020"
            icon="cap.svg">
            <SkillList skills={["D*D*D*"]} colours={[]} />
          </ExperienceCard>
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
        </div>
      </Section>

      <Section title="Experience">
        <div className="mt-7 flex flex-col gap-4">
          <ExperienceCard
            jobTitle="ADP"
            company="Software Engineer"
            datePeriod="2025 - Current"
            icon="code.svg">
            <BulletedList
              items={[
                "Delivering full-stack multi-country payroll solutions in collaboration with global teams.",
                "Extending API capabilities with advanced monitoring, remote logging configuration and analytics.",
                "Developing and maintaining APIs using C# to ensure secure and efficient data handling for payroll processing."
              ]}
            />
          </ExperienceCard>
          <ExperienceCard
            jobTitle="ADP"
            company="Associate Software Engineer"
            datePeriod="2024 - 2025"
            icon="code.svg">
            <BulletedList
              items={[
                "Delivered scalable infrastructure using AWS to support the continuous integration and deployment of cloud services.",
                "Built reusable Web Components with TypeScript to support dynamic and accessible user interfaces.",
                "Further developed tooling and documentation to enhance team efficiency and knowledge sharing."
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
                "Led the research, design, and implementation of a Robotic Process Automation system, leveraging AWS infrastructure."
              ]}
            />
          </ExperienceCard>
          <ExperienceCard
            jobTitle="Huish MAT"
            company="IT Technician"
            datePeriod="2021"
            icon="cog.svg">
            <BulletedList
              items={[
                "Collaborated with IT Network Manager across three primary schools.",
                "Repurposed IT equipment to optimise resource utilisation.",
                "Provided timely IT support to staff members to resolve queries."
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
                "Collaborated with a local school to produce compelling marketing materials and documentation.",
                "Developed a bespoke CRM system for a mobile mechanic, streamlining customer management and service tracking."
              ]}
            />
          </ExperienceCard>
        </div>
      </Section>

      <Section title="Skills">
        <SkillList
          skills={[
            "C#",
            "TypeScript",
            "JavaScript",
            "Swift",
            "Python",
            "SQL",
            "HTML",
            "CSS",
            "AWS",
            ".NET",
            "React",
            "Web Components",
            "MSSQL",
            "Node.js",
            "Stencil",
            "Firebase",
            "Splunk",
            "Jira"
          ]}
          colours={[
            "primary-blue",
            "primary-blue",
            "primary-blue",
            "primary-blue",
            "primary-blue",
            "green",
            "green",
            "green",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "orange",
            "pink",
            "pink"
          ]}
        />
      </Section>

      <Section title="Interests">
        <p className="font-medium">
          Outside of my work, I enjoy cooking with friends and family and reading books on a wide
          array of subjects. I’m also passionate about researching emerging technologies, often
          through building personal projects and using new frameworks. I also remain committed to
          volunteering, a value instilled in me during my time with the Scouting Association.
        </p>
      </Section>

      <Footer />
    </div>
  );
};

export default CV;
