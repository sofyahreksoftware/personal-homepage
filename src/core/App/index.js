import PersonalHomepge from "../../features/personalHomepage/PersonalHomepage";
import { ToggleMode } from "./ToggleMode";

function App({ isDarkMode, setDarkMode }) {
  return (
    <div>
      <ToggleMode isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <PersonalHomepge />
    </div>
  );
}

export default App;
