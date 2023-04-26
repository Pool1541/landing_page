import {
  ImageContainer,
  Section,
  StyledHero,
  TextContainer,
} from './Hero.styled';
import Button from '../button/Button';
import image from '../../assets/images/hero.webp';

export default function Hero() {
  return (
    <Section>
      <StyledHero>
        <TextContainer>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            facere amet quibusdam commodi reprehenderit nulla, ab maxime, ad
            quod perferendis adipisci iure nemo repellendus vitae repellat
            placeat impedit, laboriosam excepturi!
          </p>
          <Button big>DÉCOUVRIR</Button>
        </TextContainer>
      </StyledHero>
      <ImageContainer>
        <img src={image} alt='Backdrop'></img>
      </ImageContainer>
    </Section>
  );
}
