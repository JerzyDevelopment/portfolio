import styled from "styled-components";

export const Wrapper = styled.div`
  border: 3px dotted;
  border-style: none; /* Remove default border */
  border-width: 0 0 0 3px;
  position: relative;
  min-height: 85vh;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
  margin: 7.5vh 0;
  padding: 7.5vh 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 3px dashed rgba(255, 255, 255, 0.1); /* Adjust the thickness and color */
    border-width: 0 0 0 3px;
    border-style: dotted; /* Change to dotted */
    border-spacing: 10px; /* Increase the space between dots */
    pointer-events: none; /* Ensure the pseudo-element doesn't interfere with interactions */
  }
`;

export const Social = styled.a`
  svg {
    stroke: #f2f2f2;
    opacity: 50%;
    transition: 0.1s ease-in-out;
  }

  &:hover {
    svg {
      opacity: 80%;
    }
  }
`;
