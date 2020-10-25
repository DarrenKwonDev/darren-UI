import styled from "styled-components";

export const StyledTag = styled.button`
  padding: ${(props) => props.theme.paddings.base};

  border: 1px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.mainColor
        : props.theme.colors.grayOne};

  background: ${(props) =>
    props.selected ? props.theme.colors.mainColor : props.theme.colors.white};
  color: ${(props) =>
    props.selected ? props.theme.colors.white : props.theme.colors.grayTwo};

  border-radius: 35px;
  outline: none;
  cursor: pointer;
`;
