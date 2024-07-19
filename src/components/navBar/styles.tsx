import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  border: 3px dotted;
  border-style: none; /* Remove default border */
  border-width: 0 3px 0 0;
  position: relative;
  min-height: 85vh;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 225px;
  margin: 7.5vh 0;
  padding: 7.5vh 0;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 3px dashed rgba(255, 255, 255, 0.1); /* Adjust the thickness and color */
    border-width: 0 3px 0 0;
    border-style: dotted; /* Change to dotted */
    border-spacing: 10px; /* Increase the space between dots */
    pointer-events: none; /* Ensure the pseudo-element doesn't interfere with interactions */
  }
`;

interface iProps {
  $selected: boolean;
}

export const Selector = styled.p<iProps>`
  font-size: 32px;
  opacity: ${({ $selected }) => ($selected ? "1 !important" : "50%")};
  filter: ${({ $selected }) =>
    $selected ? "drop-shadow(0px 0px 4px #b8b8b8)" : "none"};
  font-weight: 200;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 80%;
  }
`;
