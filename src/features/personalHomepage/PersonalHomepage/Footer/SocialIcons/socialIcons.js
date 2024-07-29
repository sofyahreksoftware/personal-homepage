import { styleIcon } from "./styled";
import { githubUsername } from "../../githubUsername";
import { ReactComponent as GitHubIcon } from "../../../../../assets/github.svg";
import { ReactComponent as FacebookIcon } from "../../../../../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../../assets/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../../../../assets/linkedIn.svg";

export const socialIcons = [
  {
    name: "GitHub",
    Icon: styleIcon(GitHubIcon),
    url: `https://github.com/${githubUsername}`,
  },
  {
    name: "LinkedIn",
    Icon: styleIcon(LinkedInIcon),
    url: "https://www.linkedin.com/in/sofya-grek-363294319/",
  },
  {
    name: "Instagram",
    Icon: styleIcon(InstagramIcon),
    url: "https://www.instagram.com/_sophieta/",
  },
  {
    name: "Facebook",
    Icon: styleIcon(FacebookIcon),
    url: "https://www.facebook.com/sophia.grek.739",
  },
];
