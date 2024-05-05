import { SkillsSection } from "./SkillsSection";
import { currentSkillsList, futureSkillsList } from "./skills";

function App() {
  return (
    <div>
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
