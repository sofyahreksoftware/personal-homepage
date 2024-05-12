import { Bio } from "./Bio";
import { SkillsSection } from "./SkillsSection";
import { currentSkillsList, futureSkillsList } from "./skills";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
