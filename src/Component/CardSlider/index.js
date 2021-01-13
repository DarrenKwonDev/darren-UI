import React, { useRef } from "react";
import StyledCardSlider from "./style";

function CardSlider({ children }) {
  const SliderRef = useRef(null);

  const handleLeftClick = (e) => {
    console.log(e);
    console.log(SliderRef.current.scrollLeft); // 현재 스크롤의 왼쪽 좌표를 얻음. scrollRight는 없음
    SliderRef.current.scrollLeft -= 300; // 이 방식도 좋지만 '부드럽게 움직임'이 없음

    // SliderRef.current.scroll({ left: 1, behavior: "smooth" });
  };
  const handleRightClick = (e) => {
    SliderRef.current.scrollLeft += 300;
    // SliderRef.current.scroll({ left: -50, behavior: "smooth" });
  };

  return (
    <StyledCardSlider ref={SliderRef}>
      <button className="left-button" onClick={handleLeftClick}>
        왼
      </button>
      {children}
      <button className="right-button" onClick={handleRightClick}>
        오
      </button>
    </StyledCardSlider>
  );
}

export default CardSlider;
