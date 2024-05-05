import { StyledSection, List, StyledItem } from "./styled";
import { Title } from "../StyledTitle/styled";

export const SkillsSection = ({ titleName, skills, $condensedView }) => {
  return (
    <StyledSection>
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
