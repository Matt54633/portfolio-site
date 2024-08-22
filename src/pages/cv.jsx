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
          I am an ambitious and motivated student with a longstanding passion for Software
          Engineering. With prior industry experience in both Web Development and Cloud Engineering,
          I am looking for my next role to grow, learn and develop my skills further. I am adept at
          learning new technologies quickly and thoroughly, and can clearly communicate within a
          wider team. I am driven by a desire to continually improve my own skills and
          understanding, alongside applying my skills in ways that benefit others.
        </p>
      </Section>

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

      <Section title="Education">
        <div className="mt-7 flex flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <ExperienceCard
              jobTitle="Bournemouth University"
              company="Software Engineering BSc"
              datePeriod="2020 - Now"
              icon="cap.svg">
              <p className="font-medium">
                Subject Achievement Scholarship: Computing and IT Scholarship awarded due to
                demonstrating commitment to my area of study through additional work experience and
                voluntary or community work.
              </p>

              <SkillList skills={["1st Class Honours"]} colours={[]} />
            </ExperienceCard>

            <ExperienceCard
              jobTitle="Strode College"
              company="Computing and IT BTEC"
              datePeriod="2018 - 2020"
              icon="cap.svg">
              <p className="font-medium">
                Level 3 Extended Diploma in Computing & IT (Software Development).
              </p>

              <SkillList skills={["D*D*D*"]} colours={[]} />
            </ExperienceCard>
          </div>

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
                "Reduced data entry by 50% and total journey time by up to 300% for a customer finance proposal system."
              ]}
            />
          </ExperienceCard>
          <div className="grid gap-4 lg:grid-cols-2">
            <ExperienceCard
              jobTitle="Huish MAT"
              company="IT Technician"
              datePeriod="2021"
              icon="cog.svg">
              <BulletedList
                items={[
                  "Collaborated with IT Network Manager across three primary schools.",
                  "Repurposed IT equipment to optimise resource utilisation.",
                  "Provided timely IT support to staff members.",
                  "Developed technical skills and professionalism through hands-on exposure."
                ]}
              />
            </ExperienceCard>

            <ExperienceCard
              className="lg:col-span-2"
              jobTitle="Home"
              company="Freelancing"
              datePeriod="2001 - Now"
              icon="code.svg">
              <BulletedList
                items={[
                  "Worked with a local junior school to conceptualise and produce compelling marketing materials and documentation.",
                  "Engaged in meaningful interactions with staff members to comprehensively understand their needs and expectations.",
                  "Employed attentive dialogue and a deep understanding to craft solutions that not only met but exceeded their requirements."
                ]}
              />
            </ExperienceCard>
          </div>
        </div>
      </Section>

      <Section title="Interests">
        <p className="font-medium">
          Outside of work, I enjoy cooking and learning new recipes with my friends and family. I
          also attend my local football team as a season ticket holder, and have travelled across
          the country in support of them. I also regularly play football, alongside occasionally
          playing badminton.
          <br></br>
          <br></br>I strive to keep up to date with new technologies, and love to develop my own
          projects - regularly in new programming languages and frameworks. I have previously
          volunteered with the Scouting Association, and volunteering in the community has been
          close to my heart ever since I first started Scouting.
        </p>
      </Section>

      <Footer />
    </div>
  );
};

export default CV;
