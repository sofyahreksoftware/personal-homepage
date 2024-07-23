import { Title } from "../../../../../../common/SharedStyles/TitleStyles";
import { Description } from "../../../../../../common/SharedStyles/DescriptionStyles";
import { StyledRepositoryCard, LinkContainer, Link, LinkName } from "./styled";

export const RepositoryCard = ({ title, description, demoLink, repoLink }) => {
  return (
    <StyledRepositoryCard>
      <Title as="h5">{title}</Title>
      <Description $forPortfolio>{description}</Description>
      <LinkContainer>
        <LinkName>Demo:</LinkName>
        <dd>
          <Link href={`${demoLink}`} rel="noreferrer noopener" target="_blank">
            {demoLink}
          </Link>
        </dd>

        <LinkName>Code:</LinkName>
        <dd>
          <Link href={`${repoLink}`} rel="noreferrer noopener" target="_blank">
            {repoLink}
          </Link>
        </dd>
      </LinkContainer>
    </StyledRepositoryCard>
  );
};
