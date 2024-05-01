import { ListSection } from "./ListSection";

function App() {
  const skills = [
    "Semantic & accessible HTML",
    "Responsive Web Design",
    "SVG",
    "Web Fonts",
    "OpenGraph protocol",
    "CSS",
    "CSS Bem Convention",
    "Normalize.css",
    "box-sizing: border-box",
    "CSS Grid",
    "CSS Flexbox",
    "Media Queries",
    "CSS Selectors",
    "Pseudoclasses and Pseudo-elements",
    "Transitions",
    "Media Queries",
    "JavaScript (ES6+)",
    "NPM",
    "Node.js",
    "Immutability",
    "React.js",
    "React Router",
    "Styled Components",
    "Redux (Toolkit)",
    "Redux-Saga & generator functions ",
    "Working with API (XMLHttpRequest, Fetch, Axios)",
    "Promise, Async/Await",
    "Error handling",
    "JSON",
    "Terminal",
    "Git",
    "Git branching",
    "GitHub",
    "Pull Requests & Review",
    "Markdown",
    "Scrum",
    "Figma",
    "Trello",
  ];
  const skillsToLearn = [
    "TypeScript",
    "Next.js",
    "jQuery",
    "React Context",
    "Cypress",
    "Unit testing",
  ];

  return (
    <div>
      <ListSection
        titleName="My skillset includes&nbsp;🛠️"
        listItems={skills}
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
