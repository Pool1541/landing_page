import {
  CardImageContainer,
  CardTextContainer,
  StyledCard,
} from "./Card.styled";
import image from "../../assets/images/pawshop.png";

export default function Card() {
  return (
    <StyledCard>
      <CardImageContainer>
        <img src={image} alt="card image" />
      </CardImageContainer>
      <CardTextContainer>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem!
        </p>
      </CardTextContainer>
    </StyledCard>
  );
}
