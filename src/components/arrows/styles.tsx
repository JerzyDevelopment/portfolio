import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  left: 0;

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    stroke: #f2f2f2;
    opacity: 70%;
    transition: 0.1s ease-in-out;

    &:hover {
      opacity: 100%;
    }
  }

  .top {
    top: 20px;
  }

  .bottom {
    transform: translateX(-50%) rotate(180deg);
    bottom: 20px;
  }
`;
