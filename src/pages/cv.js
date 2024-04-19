import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CvHero from "../components/cvHero";
import Section from "../components/section";
import SkillList from "../components/skillList";

const CV = () => {
  return (
    <div>
      <Navbar />
      <CvHero />
   
      <Section title="About Me">
      <p className="font-medium">
        I am an ambitious and motivated student with a longstanding passion for Software
        Engineering. With prior industry experience in both Web Development and Cloud Engineering, I
        am looking for my next role to grow, learn and develop my skills further. I am adept at
        learning new technologies quickly and thoroughly, and can clearly communicate within a wider
        team. I am driven by a desire to continually improve my own skills and understanding,
        alongside applying my skills in ways that benefit others.
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

      <Section title="Education">
      </Section>

      <Section title="Experience">
      </Section>

      <Section title="Interests">
        <p className="font-medium">
        Outside of work, I enjoy cooking and learning new recipes with my friends and family. I also attend my local football team as a season ticket holder, and have travelled across the country in support of them. I also regularly play football, alongside occasionally playing badminton.
            <br></br><br></br>I strive to keep up to date with new technologies, and love to develop my own projects - regularly in new programming languages and frameworks. I have previously volunteered with the Scouting Association, and volunteering in the community has been close to my heart ever since I first started Scouting.
        </p>
      </Section>


      

      <Footer />
    </div>
  );
};

export default CV;
