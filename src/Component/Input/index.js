import React from "react";
import { StyledInput } from "./style";

function Input({
  placeholder = "값을 입력해주세요",
  name = "default",
  required = false,
}) {
  return (
    <StyledInput>
      <label htmlFor={name}>{name}</label>
      <input
        placeholder={placeholder}
        id={name}
        name={name}
        required={required}
      />
    </StyledInput>
  );
}

export default Input;
