import { ListSection } from "./ListSection";
import { mySkills, skillsToLearn } from "./mySkills&skillsToLearn";

function App() {
  return (
    <div>
      <ListSection
        titleName="My skillset includes&nbsp;🛠️"
        listItems={mySkills}
      />
      <ListSection
        titleName="What I want to learn next&nbsp;🚀"
        listItems={skillsToLearn}
        $condensedView
      />
    </div>
  );
}

export default App;
