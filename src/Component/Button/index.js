import React from "react";
import { StyledButton } from "./style";

function Button({ text = "", disabled = false, primary = false }) {
  return (
    <StyledButton primary={primary} disabled={disabled}>
      <h5>{text}</h5>
    </StyledButton>
  );
}

export default Button;
