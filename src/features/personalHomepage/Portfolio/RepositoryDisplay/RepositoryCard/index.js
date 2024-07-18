import { Title } from "../../../../../common/SharedStyles/TitleStyles";
import { Description } from "../../../../../common/SharedStyles/DescriptionStyles";
import { StyledRepositoryCard, LinkContainer, Link, LinkName } from "./styled";

export const RepositoryCard = ({ title, description, demoLink, repoLink }) => {
  return (
    <StyledRepositoryCard>
      <Title as="h5">{title}</Title>
      <Description $forPortfolio>{description}</Description>
      <LinkContainer>
        <LinkName>Demo:</LinkName>&nbsp;
        <Link href={`${demoLink}`} rel="noreferrer noopener" target="_blank">
          {demoLink}
        </Link>
      </LinkContainer>
      <br />
      <LinkContainer>
        <LinkName>Code:</LinkName>&nbsp;
        <Link href={`${repoLink}`} rel="noreferrer noopener" target="_blank">
          {repoLink}
        </Link>
      </LinkContainer>
    </StyledRepositoryCard>
  );
};
