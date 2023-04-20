import { Container } from '../Container.styled';
import { Subtitle } from '../Subtitle';
import Card from '../card/Card';
import Section from '../section/Section';
import {
  AboutBackground,
  GridContainer,
  SubtitleContaiener,
} from './About.styled';
import wave from '../../assets/images/wave-bg.png';
import Quote from '../quote/Quote';

export default function About() {
  return (
    <Section>
      <Container>
        <SubtitleContaiener>
          <Subtitle>Lorem ipsum dolor sit amet.</Subtitle>
        </SubtitleContaiener>
        <GridContainer>
          <Card />
          <Card />
          <Card />
        </GridContainer>
      </Container>
      <AboutBackground>
        <img src={wave} alt='' />
      </AboutBackground>
      <Quote />
    </Section>
  );
}
