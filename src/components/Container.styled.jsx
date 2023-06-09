import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;

  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }
`;
