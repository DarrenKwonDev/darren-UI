import styled from "styled-components";

export const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    width: 350px;
    height: 44px;
    margin: ${(props) => props.theme.margins.base} 0;
    padding: ${(props) => props.theme.paddings.base};
    border: 1px solid ${(props) => props.theme.colors.grayOne};
    border-radius: 4px;
    outline: none;
    resize: none;

    ::placeholder {
      color: ${(props) => props.theme.colors.grayOne};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.colors.mainColor};
    }
  }
`;
