import { Container } from '../Container.styled';
import quote from '../../assets/images/quote.png';
import { QuoteImage, QuoteText } from './Quote.styled';
import styled from 'styled-components';

const QuoteContainer = styled(Container)`
  margin-top: 50px;
  padding: 100px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 40px;
  }
`;

export default function Quote() {
  return (
    <QuoteContainer>
      <QuoteText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          rem a quaerat numquam delectus sint facere quidem pariatur quae alias
          porro eos, consequuntur facilis atque officiis deleniti maxime.
          Voluptatibus, earum!
        </p>
        <br />
        <p>Lorem</p>
      </QuoteText>
      <QuoteImage>
        <img src={quote} alt='quote' />
      </QuoteImage>
    </QuoteContainer>
  );
}
