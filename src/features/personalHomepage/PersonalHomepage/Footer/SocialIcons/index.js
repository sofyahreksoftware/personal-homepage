import { StyledSocialIcons, IconsList } from "./styled";
import { socialIcons } from "./socialIcons";
import { showRandomTitle } from "./showRandomTitle";

export const SocialIcons = () => (
  <StyledSocialIcons>
    <IconsList>
      {socialIcons.map(({ url, Icon, name }) => (
        <li key={name}>
          <a
            key={name}
            href={url}
            rel="noreferrer noopener"
            target="_blank"
            title={`${showRandomTitle()} ${name}`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </IconsList>
  </StyledSocialIcons>
);
