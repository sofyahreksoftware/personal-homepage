import { List, StyledItem } from "./styled";
import { StyledSection } from "../../../../common/SharedStyles/SectionStyles";
import { Title } from "../../../../common/SharedStyles/TitleStyles";

export const SkillsSection = ({ titleName, skills, $condensedView }) => {
  return (
    <StyledSection $white>
      <Title>{titleName}</Title>
      <List $condensedView={$condensedView}>
        {skills &&
          skills.map((skill, index) => (
            <StyledItem key={index}>{skill}</StyledItem>
          ))}
      </List>
    </StyledSection>
  );
};