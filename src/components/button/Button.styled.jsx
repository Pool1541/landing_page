import styled from 'styled-components';

export const StyledButton = styled.button`
  background: var(--btn-bg);
  color: var(--white);
  font-size: ${({ big }) =>
    big ? 'clamp(1rem, 1.8vw, 1.3rem)' : 'clamp(0.85rem, 1.8vw, 1rem)'};
  font-weight: 500;
  padding: ${({ big }) => (big ? '15px 30px' : '10px 24px')};
  border-radius: 99px;
`;
