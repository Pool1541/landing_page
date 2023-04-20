import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 2000px;
  padding: 50px 0;
  background: var(--charcoal);
  color: var(--white);
  margin: auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 50px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
  }
`;

export const FooterLogo = styled.div``;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: var(--earth-yellow);
    margin-bottom: 1rem;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  margin-top: 50px;
`;
