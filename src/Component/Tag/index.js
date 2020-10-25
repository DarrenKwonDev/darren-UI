import React, { useState, useCallback } from "react";
import { StyledTag } from "./style";

function Tag({ text = "" }) {
  const [Selected, setSelected] = useState(false);

  const handleClick = useCallback(() => {
    setSelected(!Selected);
  }, [Selected]);

  return (
    <StyledTag selected={Selected} onClick={handleClick}>
      <h4>{text}</h4>
    </StyledTag>
  );
}

export default Tag;
