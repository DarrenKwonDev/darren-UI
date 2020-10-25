import styled from "styled-components";

export const StyledLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  background: ${(props) =>
    props.provider === "google"
      ? props.theme.colors.white
      : props.theme.colors.black};
  color: ${(props) =>
    props.provider === "google"
      ? props.theme.colors.black
      : props.theme.colors.white};

  width: 290px;
  height: 48px;

  cursor: pointer;
  outline: none;

  img {
    width: 15px;
    margin-right: ${(props) => props.theme.margins.base};
  }
`;
