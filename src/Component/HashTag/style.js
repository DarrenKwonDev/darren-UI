import styled from 'styled-components';

export const StyledHashTag = styled.button`
  padding: ${(props) => props.theme.paddings.base};
  margin: 0 ${(props) => props.theme.margins.small};

  border: 1px solid ${(props) => (props.selected ? props.theme.colors.mainColor : props.theme.colors.grayOne)};

  background: ${(props) => (props.selected ? props.theme.colors.mainColor : props.theme.colors.grayOne)};

  color: ${(props) => (props.selected ? props.theme.colors.white : props.theme.colors.grayThree)};

  font-size: ${(props) => props.theme.fontSizes.small};

  border-radius: 35px;
  outline: none; // 클릭해도 외곽선 안보이게
  cursor: pointer;
`;
