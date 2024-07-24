import { Title } from "../../../../../../../common/SharedStyles/TitleStyles";
import { Description } from "../../../../../../../common/SharedStyles/DescriptionStyles";
import { StyledRepositoryCard, LinkContainer, Link, LinkName } from "./styled";

export const RepositoryCard = ({ title, description, demoLink, repoLink }) => {
  return (
    <StyledRepositoryCard>
      <Title as="h5">{title}</Title>
      {description && <Description $forPortfolio>{description}</Description>} 
      <LinkContainer>
        {demoLink && (
          <>
            <LinkName>Demo:</LinkName>
            <dd>
              <Link
                href={`${demoLink}`}
                rel="noreferrer noopener"
                target="_blank"
                title="View demo of the project"
              >
                {demoLink}
              </Link>
            </dd>
          </>
        )}

        {repoLink && (
          <>
            <LinkName>Code:</LinkName>
            <dd>
              <Link
                href={`${repoLink}`}
                rel="noreferrer noopener"
                target="_blank"
                title="View repository of the project"
              >
                {repoLink}
              </Link>
            </dd>
          </>
        )}
      </LinkContainer>
    </StyledRepositoryCard>
  );
};
