import styled, { keyframes } from 'styled-components';

const expand = keyframes`
  to {
    transform: scaleX(1.8) scaleY(1.8);
    opacity: 0;
  }
`;

const shake = keyframes`
  0%, 3%, 7%, 11%, 15%, 19% {
    transform: translateX(5px);
  }
  1%, 5%, 9%, 13%, 17% {
    transform: translateX(-5px);
  }
  20% {
    transform: translateX(0px);
  }
`;

export const WhatsappButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 35px;
  right: 35px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(#22c15e, #22c15e);
  z-index: 1000;
  animation: 5s ease-in 5s infinite ${shake};

  @media screen and (max-width: 475px) {
    bottom: 25px;
    right: 25px;
    width: 50px;
    height: 50px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #22c15f;
    transform: scaleX(1) scaleY(1);
    border-radius: 50%;
    z-index: -1;
    transition: transform 0.3s ease 0s;
    animation: 2s ease 0s infinite running ${expand};
  }

  &::before {
    animation: 2s ease 1s infinite running ${expand};
  }

  svg {
    width: 50%;
    height: 50%;
    color: var(--white);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const Message = styled.div`
  position: absolute;
  right: 75px;
  width: 180px;
  height: 40px;
  border-radius: 5px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;

  @media screen and (max-width: 475px) {
    right: 65px;
    height: 35px;
  }

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    right: -5px;
    transform: rotateZ(45deg);
    background-color: inherit;
  }

  p {
    font-size: 0.95rem;
  }
`;
