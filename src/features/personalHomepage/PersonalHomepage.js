import { MainContainer } from "../../common/SharedStyles/StyledMain";
import { Bio } from "./Bio";
import { SkillsSection } from "./SkillsSection";
import { currentSkillsList, futureSkillsList } from "../../common/skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";

function PersonalHomepage() {
  return (
    <div>
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

export default PersonalHomepage;
