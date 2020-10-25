import styled from "styled-components";

export const SyledCard = styled.div`
  width: 170px;
  .upper {
    height: 120px;
    background-color: ${(props) => props.theme.colors.grayTwo};
  }
  .bottom {
    height: 100px;
  }
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  ${(props) => props.theme.deviceSizes.tablet} {
    width: 290px;
    .upper {
      height: 165px;
    }
    .bottom {
      height: 85px;
    }
  }

  ${(props) => props.theme.deviceSizes.desktop} {
    width: 350px;
    .upper {
      height: 200px;
    }
    .bottom {
      height: 100px;
    }
  }
`;

export const StyledUpper = styled.div`
  .liked {
    right: 0;
    top: 0;
  }
`;

export const StyledBottom = styled.div`
  padding: ${(props) => props.theme.paddings.xl};

  /* 상단 부분 스타일링 */
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => props.theme.margins.xl};

    .name {
    }
    .owner {
      color: ${(props) => props.theme.colors.grayOne};
    }
  }

  /* 하단 부분 스타일링 */
  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description__left {
      display: flex;
      align-items: center;

      .star {
        width: 15px;
      }

      .category {
        color: ${(props) => props.theme.colors.grayOne};
      }
      .score {
        color: ${(props) => props.theme.colors.grayOne};
      }
    }

    .description__right {
      .price {
        color: ${(props) => props.theme.colors.mainColor};
      }
    }
  }
`;
