import styled from "styled-components";
import { Container } from "../Container.styled";

export const Section = styled.section`
  width: 100%;
`;

export const StyledHero = styled(Container)`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  padding: 0 40px;

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 450px;

  h1 {
    font-size: clamp(2rem, 5.5vw, 3.5rem);
    margin-bottom: 2.5rem;
    text-shadow: 1px 1px 2px var(--white);
    @media screen and (max-width: 430px) {
      margin-bottom: 1.5rem;
    }
  }

  p {
    margin-bottom: 5rem;
    font-weight: 500;
    text-shadow: 1px 1px 2px var(--white);
    @media screen and (max-width: 430px) {
      margin-bottom: 2rem;
    }
  }

  button {
    @media screen and (max-width: 430px) {
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 100vh;
  width: 60%;
  min-width: 900px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  overflow-y: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #d7d8d4 0%, #e2ecf300 100%);
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (max-width: 430px) {
      backdrop-filter: blur(5px);
    }
  }

  img {
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    position: relative;
    @media screen and (max-width: 430px) {
      right: -150px;
      opacity: 0.8;
    }
  }
`;
