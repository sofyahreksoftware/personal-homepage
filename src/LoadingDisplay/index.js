import { LoadingAnimation } from "./styled";
import { MessageDisplay } from "../SharedStyles/MessageDisplay";
import { StatusMessage } from "../SharedStyles/StatusMessage";

export const LoadingDisplay = () => (
  <MessageDisplay>
    <StatusMessage>Please wait, projects are being loaded...</StatusMessage>
    <LoadingAnimation />
  </MessageDisplay>
);
