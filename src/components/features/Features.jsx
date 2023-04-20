import { Container } from '../Container.styled';
import { Subtitle } from '../Subtitle';
import Section from '../section/Section';
import {
  Feature,
  FeatureDescription,
  FeaturesContainer,
  FeatureIcon,
} from './Features.styled';
import { features } from '../../content/features.content';

export default function Features() {
  return (
    <Section>
      <Container>
        <Subtitle dark>¿Por qué nosotros?</Subtitle>
        <FeaturesContainer>
          {features.map((feature, index) => {
            return (
              <Feature key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureDescription>
                  <h3>{feature.title}</h3>
                  <p>{feature.content}</p>
                </FeatureDescription>
              </Feature>
            );
          })}
        </FeaturesContainer>
      </Container>
    </Section>
  );
}
