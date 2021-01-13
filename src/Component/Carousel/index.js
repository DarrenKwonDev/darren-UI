import React, { useState } from "react";
import styled from "styled-components";
import topToBottom from "../../../animation/topToBottom";
import useInterval from "../../../hooks/useInterval";

const StyledCarousel = styled.section`
  position: relative;

  animation: ${topToBottom} 0.75s ease;

  max-width: 100%; // 모바일일 때 100%
  margin: 0 auto; // 모바일일 때
  border-radius: 0; // 모바일일 때
  height: 450px;

  ${(props) => props.theme.deviceSizes.desktop} {
    max-width: 75%; // 웹일 때 75%.
    margin: 64px auto 0 auto; // 웹일 때  위 아래 딱 붙이면 이상하니까 64px 벌려주자
    border-radius: 16px; // 웹일 때 둥글게
  }

  overflow: hidden; // img가 넘치지 않게

  .carousel-item {
    &:nth-child(${(props) => props.sliderPage}) {
      z-index: 1; // 보여지게 됨
    }
  }
`;

const StyledCarouselItem = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center center;
  }
`;

const SliderHoverButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
  z-index: 10;

  display: flex;
  background: ${(props) => props.theme.colors.black};
  background-color: rgba(0, 0, 0, 0.65);

  color: white;
  padding: ${(props) => props.theme.paddings.base}
    ${(props) => props.theme.paddings.xxl};
  border-radius: 32px;

  .slider-number {
    margin: 0 ${(props) => props.theme.margins.lg};
  }

  .slider-move-buttons {
    i {
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

function Carousel() {
  const pageCount = 3;
  const [sliderPage, setsliderPage] = useState(1);

  function handleLeftClick() {
    if (sliderPage <= 1) {
      return setsliderPage(pageCount);
    }
    return setsliderPage(sliderPage - 1);
  }

  function handleRightClick() {
    if (sliderPage >= pageCount) {
      return setsliderPage(1);
    }
    return setsliderPage(sliderPage + 1);
  }

  // n초마다 바뀜
  useInterval(() => {
    if (sliderPage >= pageCount) {
      return setsliderPage(1);
    }
    return setsliderPage(sliderPage + 1);
  }, 3500);

  return (
    <StyledCarousel sliderPage={sliderPage}>
      <StyledCarouselItem className="carousel-item">
        <img
          src={
            "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          }
        />
      </StyledCarouselItem>
      <StyledCarouselItem className="carousel-item">
        <a>
          <img
            src={
              "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            }
          />
        </a>
      </StyledCarouselItem>
      <StyledCarouselItem className="carousel-item">
        <a>
          <img
            src={
              "https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            }
          />
        </a>
      </StyledCarouselItem>

      {/* 상단 슬라이더 재생 버튼 */}
      <SliderHoverButtons className="slider-buttons">
        <div className="slider-move-buttons">
          <i className="fas fa-chevron-left" onClick={handleLeftClick}></i>

          <span className="slider-number">
            <span>{sliderPage}</span> / {pageCount}
          </span>

          <i className="fas fa-chevron-right" onClick={handleRightClick}></i>
        </div>
      </SliderHoverButtons>
    </StyledCarousel>
  );
}

export default Carousel;
