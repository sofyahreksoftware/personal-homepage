import { StyledFooter, LinksList } from "./styled";
import { TitleAdditionalContent, Title } from "../SharedStyles/TitleStyles";
import { Description } from "../SharedStyles/DescriptionStyles";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedIn.svg";

export const Footer = () => (
  <StyledFooter>
    <TitleAdditionalContent>LET'S TALK</TitleAdditionalContent>
    <Title $withoutBorder>sofyahrek@gmail.com</Title>
    <Description $forFooter>
      I am always eager to take on new projects when my schedule allows. If
      you're envisioning a website, dashboard, or mobile app and need assistance
      in bringing your ideas to fruition, please don't hesitate contact me!🤗
    </Description>
    <LinksList>
      <li>
        <a
          href="https://github.com/sofyahreksoftware"
          rel="noreferrer noopener"
          target="_blank"
          title="Link to my GitHum page"
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/sofyahreksoftware"
          rel="noreferrer noopener"
          target="_blank"
          title="Link to my LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/sophia.grek.739"
          rel="noreferrer noopener"
          target="_blank"
          title="Link to my Facebook"
        >
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/_sophieta/"
          rel="noreferrer noopener"
          target="_blank"
          title="My Instagram"
        >
          <InstagramIcon />
        </a>
      </li>
    </LinksList>
  </StyledFooter>
);