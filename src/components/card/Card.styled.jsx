import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
`;

export const CardImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardTextContainer = styled.div`
  padding: 40px;
  border-radius: 20px;
  background: var(--white);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
  }
`;
