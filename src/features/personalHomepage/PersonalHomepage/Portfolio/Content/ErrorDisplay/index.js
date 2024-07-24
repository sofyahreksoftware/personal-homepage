import { githubUsername } from "../../../githubUsername";
import { ReactComponent as WarningIcon } from "../../../../../../assets/warning.svg";
import { HireMeLink } from "../../../../../../common/SharedStyles/HireMeLink";
import { Warning } from "./styled";
import { MessageDisplay } from "../../../../../../common/SharedStyles/MessageDisplay";
import { StatusMessage } from "../../../../../../common/SharedStyles/StatusMessage";

export const ErrorDisplay = () => (
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
      href={`https://github.com/${githubUsername}/`}
    >
      Go to Github
    </HireMeLink>
  </MessageDisplay>
);
