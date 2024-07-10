import { ReactComponent as Icon } from "../assets/brightness.svg";
import {
  StyledToggleMode,
  StatusText,
  StatusIndicator,
  ToggleButton,
  IconBackground,
} from "./styled";

export const ToggleMode = ({ isDarkMode, setDarkMode }) => {
  const switchMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <StyledToggleMode>
      <StatusText>
        DARK MODE <StatusIndicator>{isDarkMode ? "ON" : "OFF"}</StatusIndicator>
      </StatusText>
      <ToggleButton onClick={switchMode}>
        <IconBackground $iconToRight={isDarkMode}>
          <Icon />
        </IconBackground>
      </ToggleButton>
    </StyledToggleMode>
  );
};
