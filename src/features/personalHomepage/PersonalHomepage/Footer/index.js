import { email } from "../email";
import { StyledFooter, IconsList } from "./styled";
import {
  TitleAdditionalContent,
  Title,
} from "../../../../common/SharedStyles/TitleStyles";
import { Description } from "../../../../common/SharedStyles/DescriptionStyles";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => (
  <StyledFooter>
    <TitleAdditionalContent as="h2">let's talk</TitleAdditionalContent>
    <Title $forFooter as="address">
      {email}
    </Title>

    <Description $forFooter>
      I am always eager to take on new projects when my schedule allows. If
      you're envisioning a website, dashboard, or mobile app and need assistance
      in bringing your ideas to fruition, please don't hesitate contact me!🤗
    </Description>

    <SocialIcons />
  </StyledFooter>
);
