import styled from "styled-components";

import { ReactComponent as GitHubIcon } from "../assets/blueGithub.svg";

export const Entry = styled.div`
  text-align: center;
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  fill: ${({ theme }) => theme.colors.icons.simple.highlighted};
`;
