import { MainContainer } from "./SharedStyles/StyledMain";
import { Bio } from "./Bio";
import { SkillsSection } from "./SkillsSection";
import { currentSkillsList, futureSkillsList } from "./skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";

function App() {
  return (
    <div>
      <MainContainer>
        <Bio
          titleAdditionalContent="THIS IS"
          titleName="Sofya Hrek"
          description="I am a passionate Frontend Developer with a strong passion for React, actively pursuing new career opportunities."
        />
        <SkillsSection
          titleName="My skillset includes&nbsp;🛠️"
          skills={currentSkillsList}
        />
        <SkillsSection
          titleName="What I want to learn next&nbsp;🚀"
          skills={futureSkillsList}
          $condensedView
        />
        <Portfolio />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
