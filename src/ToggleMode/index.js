import { ReactComponent as Icon } from "../assets/brightness.svg";
import {
  StyledToggleMode,
  StatusText,
  StatusIndicator,
  ToggleButton,
  IconBackground,
} from "./styled";

export const ToggleMode = ({ darkMode }) => {
  
  return (
    <StyledToggleMode>
      <StatusText>
        DARK MODE <StatusIndicator>{darkMode ? "ON" : "OFF"}</StatusIndicator>
      </StatusText>
      <ToggleButton $iconToRight={darkMode}>
        <IconBackground>
          <Icon />
        </IconBackground>
      </ToggleButton>
    </StyledToggleMode>
  );
};
