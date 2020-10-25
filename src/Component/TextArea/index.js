import React, { useEffect, useState, useRef } from "react";
import { StyledTextArea } from "./style";

function TextArea({ placeholder = "", name = "" }) {
  const textareaRef = useRef(null);
  const [text, settext] = useState("");

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + 6 + "px";
  }, [text]);

  const handleChange = (e) => {
    settext(e.target.value);
  };

  return (
    <StyledTextArea>
      <label htmlFor={name}>{name}</label>
      <textarea
        placeholder={placeholder}
        name={name}
        id={name}
        ref={textareaRef}
        onChange={handleChange}
      />
    </StyledTextArea>
  );
}

export default TextArea;
