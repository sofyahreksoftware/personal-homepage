import { email } from "../email";
import {
  Title,
  TitleAdditionalContent,
} from "../../../../common/SharedStyles/TitleStyles";
import { StyledBio, InfoCard, Avatar, StyledReactIcon } from "./styled";
import { Description } from "../../../../common/SharedStyles/DescriptionStyles";
import { HireMeLink } from "../../../../common/SharedStyles/HireMeLink";
import myPhoto from "../../../../assets/myPhoto.jpg";
import { ReactComponent as LaptopIcon } from "../../../../assets/laptop.svg";
import { ReactComponent as EnvelopeIcon } from "../../../../assets/envelope.svg";

export const Bio = () => {
  return (
    <StyledBio>
      <Avatar src={myPhoto} alt="Sofya Grek" />
      <InfoCard>
        <TitleAdditionalContent>this is</TitleAdditionalContent>
        <Title as="h1">Sofya Hrek</Title>
        <Description $forBio>
          <StyledReactIcon />
          <LaptopIcon /> I am a passionate Frontend Developer with a strong interest in React, actively seeking new career opportunities.
        </Description>
        <HireMeLink
          rel="noreferrer noopener"
          title={`My e-mail: ${email}`}
          href={`mailto:${email}`}
        >
          <EnvelopeIcon /> Hire me
        </HireMeLink>
      </InfoCard>
    </StyledBio>
  );
};
