import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 4px;

  /* primary or default */
  border: 1px solid
    ${(props) =>
      props.primary ? props.theme.colors.white : props.theme.colors.mainColor};
  background: ${(props) =>
    props.primary ? props.theme.colors.mainColor : props.theme.colors.white};
  color: ${(props) =>
    props.primary ? props.theme.colors.white : props.theme.colors.mainColor};

  /* disabled */
  border: 1px solid ${(props) => props.disabled && props.theme.colors.grayOne} !important;
  background: ${(props) =>
    props.disabled && props.theme.colors.grayOne} !important;
  color: ${(props) => props.disabled && props.theme.colors.grayTwo} !important;

  width: 350px;
  height: 44px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;
`;
