import React from 'react';
import styled from 'styled-components';

const StyledFancySubmitButton = styled.div`
  button[type='submit'],
  input[type='submit'] {
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: ${(props) => props.theme.margins.xxl};
    padding: ${(props) => props.theme.paddings.xl};
    font-size: 16px;
    letter-spacing: 5px;
    border-radius: 6px;
    cursor: pointer;
  }

  button[type='submit']:hover,
  input[type='submit']:hover {
    background: #bf1650;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type='button']:hover {
    transition: 0.3s all;
  }

  button[type='submit'],
  input[type='button'],
  input[type='submit'] {
    -webkit-appearance: none;
  }

  transition: all 0.2s ease;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;

function FancySubmitButton({ text = 'submit' }) {
  return (
    <StyledFancySubmitButton>
      <input type="submit" value={text} />
    </StyledFancySubmitButton>
  );
}

export default FancySubmitButton;
