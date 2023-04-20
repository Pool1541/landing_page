import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 500;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    font-weight: 600;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-out;
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(100vw)'};
  }
`;

export const Link = styled.li`
  a {
    color: var(--charcoal);
  }
`;
