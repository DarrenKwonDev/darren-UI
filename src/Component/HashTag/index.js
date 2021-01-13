import React, { useState, useCallback } from "react";
import { StyledHashTag } from "./style";

function HashTag({ text = "" }) {
  const [Selected, setSelected] = useState(false);

  const handleClick = useCallback(() => {
    setSelected(!Selected);
  }, [Selected]);

  return (
    <StyledHashTag selected={Selected} onClick={handleClick}>
      <h4># {text}</h4>
    </StyledHashTag>
  );
}

export default HashTag;
