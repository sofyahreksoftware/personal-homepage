import { StyledSection, Title, List, StyledItem } from "./styled";

export const ListSection = ({ titleName, listItems, $condensedView }) => {
  return (
    <StyledSection>
      <Title>{titleName}</Title>
      <List $condensedView={$condensedView}>
        {listItems &&
          listItems.map((item, index) => (
            <StyledItem key={index}>{item}</StyledItem>
          ))}
      </List>
    </StyledSection>
  );
};
