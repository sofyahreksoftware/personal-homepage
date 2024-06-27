import { ReactComponent as WarningIcon } from "../assets/warning.svg";
import { HireMeLink } from "../SharedStyles/HireMeLink";
import { StyledApiErrorDisplay, Warning, ErrorMessage } from "./styled";

export const ApiErrorDisplay = () => (
  <StyledApiErrorDisplay>
    <WarningIcon />
    <Warning>Ooops! Something went wrong... </Warning>
    <ErrorMessage>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </ErrorMessage>
    <HireMeLink
      $centered
      rel="noreferrer noopener"
      title="Link To My Github"
      target="_blank"
      href="https://github.com/sofyahreksoftware/"
    >
      Go to Github
    </HireMeLink>
  </StyledApiErrorDisplay>
);
