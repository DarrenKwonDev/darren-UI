import React from "react";
import { SyledCard, StyledBottom, StyledUpper } from "./style";
import path from "path";

function Card({
  Name = null,
  Owner = null,
  Category = null,
  Score = null,
  Price = null,
  isLiked = false,
}) {
  return (
    <SyledCard>
      <StyledUpper className="upper">
        <img
          src={path.resolve(
            process.env.PUBLIC_URL,
            "./icons/heart_disabled_line_white.svg"
          )}
          alt="liked"
          className="liked"
        />
      </StyledUpper>
      <StyledBottom className="bottom">
        {/* 상단 */}
        <div className="product">
          <h2 className="name">{Name}</h2>
          <h5 className="owner">{Owner}</h5>
        </div>
        {/* 하단 설명 */}
        <div className="description">
          <div className="description__left">
            <h5 className="category">{Category}</h5>
            <img
              src={path.resolve(process.env.PUBLIC_URL, "./icons/star.svg")}
              alt="star"
              className="star"
            />
            <h5 className="score">{Score}점</h5>
          </div>
          <div className="description__right">
            <h3 className="price">{Price}원</h3>
          </div>
        </div>
      </StyledBottom>
    </SyledCard>
  );
}

export default React.memo(Card);
