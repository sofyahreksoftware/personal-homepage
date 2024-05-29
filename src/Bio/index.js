import { Title, TitleAdditionalContent } from "../StyledTitle/styled";
import { StyledBio, InfoCard, Image,  HireMeLink } from "./styled";
import { Description } from "../StyledDescription/styled";
import myPhoto from "../assets/myPhoto.png";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as LaptopIcon } from "../assets/laptop.svg";
import { ReactComponent as EnvelopeIcon } from "../assets/envelope.svg";

export const Bio = ({ titleAdditionalContent, titleName, description }) => {
  return (
    <StyledBio>
      <Image src={myPhoto} alt="me" />
      <InfoCard>
        <TitleAdditionalContent>
          {titleAdditionalContent}
        </TitleAdditionalContent>
        <Title as="h1">{titleName}</Title>
        <Description>
          <ReactIcon />
          <LaptopIcon /> {description}
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
