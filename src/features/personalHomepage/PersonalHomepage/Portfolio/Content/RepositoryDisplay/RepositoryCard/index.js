import { Title } from "../../../../../../../common/SharedStyles/TitleStyles";
import { Description } from "../../../../../../../common/SharedStyles/DescriptionStyles";
import { StyledRepositoryCard, LinkContainer, LinkWrapper, Link, LinkName } from "./styled";

export const RepositoryCard = ({ title, description, demoLink, repoLink }) => {
  return (
    <StyledRepositoryCard>
      <Title as="h5">{title}</Title>
      {description && <Description $forPortfolio>{description}</Description>} 
      <LinkContainer>
        {demoLink && (
          <>
            <LinkName>Demo:</LinkName>
            <LinkWrapper>
              <Link
                href={`${demoLink}`}
                rel="noreferrer noopener"
                target="_blank"
                title="View demo of the project"
              >
                {demoLink}
              </Link>
            </LinkWrapper>
          </>
        )}

        {repoLink && (
          <>
            <LinkName>Code:</LinkName>
            <LinkWrapper>
              <Link
                href={`${repoLink}`}
                rel="noreferrer noopener"
                target="_blank"
                title="View repository of the project"
              >
                {repoLink}
              </Link>
            </LinkWrapper>
          </>
        )}
      </LinkContainer>
    </StyledRepositoryCard>
  );
};
