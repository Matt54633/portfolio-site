import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Section from "../components/section";
import SkillList from "../components/skillList";
import ExperienceCard from "../components/experienceCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Section title="About Me">
        <p className="font-medium">
          Hey! I'm a Software Engineering student in the final year of a 4-year bachelor's degree at
          Bournemouth University. With prior experience as a web developer and IT technician during
          my stints at QV Systems and Huish MAT, I have developed numerous applications utilising
          technologies such as NodeJS, Oracle APEX, Python Django, React and more. Outside of my
          degree, I have developed numerous personal projects, including several iOS and web
          applications.
        </p>
      </Section>

      <Section title="Skills">
        <SkillList
          skills={["HTML", "CSS", "JS", "React", "Swift", "Python", "SQL", "AWS"]}
          colours={[
            "primary-blue",
            "primary-blue",
            "pink",
            "pink",
            "orange",
            "orange",
            "green",
            "red"
          ]}
        />
      </Section>

      <Section title="Experience">
        <div className="flex flex-col lg:flex-row gap-4 mt-7">
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

      <Section title="My Work"></Section>

      <Section title="Contact Me"></Section>

      <Footer />
    </div>
  );
};

export default Home;
