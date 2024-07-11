import {
  StyledToggleMode,
  StatusText,
  StatusIndicator,
  ToggleButton,
  IconBackground,
  StyledIcon,
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
          <StyledIcon />
        </IconBackground>
      </ToggleButton>
    </StyledToggleMode>
  );
};
