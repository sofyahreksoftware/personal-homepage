import { Title, TitleAdditionalContent } from "../SharedStyles/TitleStyles";
import { StyledBio, InfoCard, Image } from "./styled";
import { Description } from "../SharedStyles/DescriptionStyles";
import { HireMeLink } from "../SharedStyles/HireMeLink";
import myPhoto from "../assets/myPhoto.png";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as LaptopIcon } from "../assets/laptop.svg";
import { ReactComponent as EnvelopeIcon } from "../assets/envelope.svg";

export const Bio = () => {
  return (
    <StyledBio>
      <Image src={myPhoto} alt="me" />
      <InfoCard>
        <TitleAdditionalContent>THIS IS</TitleAdditionalContent>
        <Title as="h1">Sofya Hrek</Title>
        <Description $forBio>
          <ReactIcon />
          <LaptopIcon /> I am a passionate Frontend Developer with a strong
          passion for React, actively pursuing new career opportunities."
        </Description>
        <HireMeLink
          rel="noreferrer noopener"
          title="My e-mail"
          href="mailto:sofyahrek@gmail.com"
        >
          <EnvelopeIcon /> Hire me
        </HireMeLink>
      </InfoCard>
    </StyledBio>
  );
};
