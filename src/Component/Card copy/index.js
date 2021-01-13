import React from "react";
import StyledCard from "./style";

function Card({ img = "", title = "", text = "", author = "" }) {
  return (
    <StyledCard className="card-item">
      <div className="card-image-wrapper">
        <img className="card-img" src={img}></img>
      </div>
      <div className="card-content">
        <h1 className="card-header">{title}</h1>
        <h3 className="card-middle">{author}</h3>
        <p className="card-text">{text}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
