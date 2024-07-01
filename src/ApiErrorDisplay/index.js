import { ReactComponent as WarningIcon } from "../assets/warning.svg";
import { HireMeLink } from "../SharedStyles/HireMeLink";
import { Warning } from "./styled";
import { MessageDisplay } from "../SharedStyles/MessageDisplay";
import { StatusMessage } from "../SharedStyles/StatusMessage";

export const ApiErrorDisplay = () => (
  <MessageDisplay>
    <WarningIcon />
    <Warning>Ooops! Something went wrong... </Warning>
    <StatusMessage>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </StatusMessage>
    <HireMeLink
      $centered
      rel="noreferrer noopener"
      title="Link To My Github"
      target="_blank"
      href="https://github.com/sofyahreksoftware/"
    >
      Go to Github
    </HireMeLink>
  </MessageDisplay>
);
