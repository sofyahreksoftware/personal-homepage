import { LoadingAnimation } from "./styled";
import { MessageDisplay } from "../../../../../../common/SharedStyles/MessageDisplay";
import { StatusMessage } from "../../../../../../common/SharedStyles/StatusMessage";

export const LoadingDisplay = () => (
  <MessageDisplay>
    <StatusMessage>Please wait, projects are being loaded...</StatusMessage>
    <LoadingAnimation />
  </MessageDisplay>
);
