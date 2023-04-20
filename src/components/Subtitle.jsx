import styled from 'styled-components';

export const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  text-align: center;
  color: ${({ dark }) => (dark ? 'var(--charcoal)' : 'var(--white)')};
  text-shadow: 1px 1px 2px var(--charcoal);
`;
