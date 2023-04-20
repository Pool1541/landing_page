import styled from 'styled-components';

export const QuoteText = styled.div`
  width: 50%;
  font-style: italic;
  font-size: clamp(1rem, 3.5vw, 1.5rem);
  position: relative;
  z-index: 20;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  p:last-child {
    font-weight: 600;
    text-align: end;
  }
`;

export const QuoteImage = styled.div`
  position: absolute;
  width: 20%;
  max-width: 100px;
  top: 0;
  right: 35%;
  z-index: 20;
  filter: drop-shadow(1px 1px 1px black);

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    right: 20px;
  }
`;
