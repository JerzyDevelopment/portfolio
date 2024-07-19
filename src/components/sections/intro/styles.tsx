import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  h1 {
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
  }

  h3 {
    font-size: 20px;
    font-weight: 300;
    opacity: 20%;
  }
`;
