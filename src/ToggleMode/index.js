import { ReactComponent as Icon } from "../assets/brightness.svg";
import {
  StyledToggleMode,
  StatusText,
  StatusIndicator,
  ToggleButton,
  IconBackground,
} from "./styled";

export const ToggleMode = ({ isDarkMode }) => {
  
  return (
    <StyledToggleMode>
      <StatusText>
        DARK MODE <StatusIndicator>{isDarkMode ? "ON" : "OFF"}</StatusIndicator>
      </StatusText>
      <ToggleButton $iconToRight={isDarkMode}>
        <IconBackground>
          <Icon />
        </IconBackground>
      </ToggleButton>
    </StyledToggleMode>
  );
};
