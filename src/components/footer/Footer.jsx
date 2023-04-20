import { Container } from "../Container.styled";
import {
  FooterGrid,
  StyledFooter,
  FooterLogo,
  FooterList,
  Copyright,
} from "./Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterGrid>
          <FooterLogo>LOGO</FooterLogo>
          <FooterList>
            <li>
              <h3>Planes</h3>
            </li>
            <li>
              <a>Básico</a>
            </li>
            <li>
              <a>Avanzado</a>
            </li>
          </FooterList>
          <FooterList>
            <li>
              <h3>Contacto</h3>
            </li>
            <li>
              <a>+51 958695895</a>
            </li>
            <li>
              <a>+51 958695895</a>
            </li>
            <li>
              <a>lorem@ipsus.com</a>
            </li>
          </FooterList>
          <FooterList>
            <li>
              <h3>Institucional</h3>
            </li>
            <li>
              <a>Política de privacidad</a>
            </li>
            <li>
              <a>Términos y condiciones</a>
            </li>
          </FooterList>
        </FooterGrid>
        <Copyright>
          <p>© Lorem ipsus 2023. Todos los derechos reservados.</p>
        </Copyright>
      </Container>
    </StyledFooter>
  );
}
