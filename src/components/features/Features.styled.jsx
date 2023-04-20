import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  column-gap: 30px;

  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;

export const Feature = styled.div`
  padding: 20px;
  display: flex;

  @media screen and (max-width: 730px) {
    padding: 20px 0;
  }
`;

export const FeatureDescription = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const FeatureIcon = styled.div`
  padding: 20px;

  @media screen and (max-width: 730px) {
    padding: 20px 20px 0 0;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
