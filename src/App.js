import { MainContainer } from "./SharedStyles/StyledMain";
import { Bio } from "./Bio";
import { SkillsSection } from "./SkillsSection";
import { currentSkillsList, futureSkillsList } from "./skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { ToggleMode } from "./ToggleMode";

function App({ isDarkMode, setDarkMode }) {
  return (
    <div>
      <ToggleMode isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <MainContainer>
        <Bio />
        <SkillsSection
          titleName="My skillset includes&nbsp;🛠️"
          skills={currentSkillsList}
        />
        <SkillsSection
          titleName="What I want to learn next&nbsp;🚀"
          skills={futureSkillsList}
        />
        <Portfolio />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
