import BurgerButton from '../burger-button/BurgerButton';
import Button from '../button/Button';
import { Link, LogoContainer, Navigation, StyledNavBar } from './Navbar.styled';
import useActive from '../../hooks/useActive';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const { active, toggleState, disabled } = useActive();

  return (
    <StyledNavBar>
      <LogoContainer>
        <img src={logo} alt='Logo de webcrafters' />
      </LogoContainer>
      <Navigation active={active}>
        <Link>
          <a onClick={disabled}>Sobre nosotros</a>
        </Link>
        <Link>
          <a onClick={disabled}>Precios y planes</a>
        </Link>
        <Link>
          <a onClick={disabled}>Contacto</a>
        </Link>
        <Button handleClick={disabled}>Loremmm</Button>
      </Navigation>
      <BurgerButton handleClick={toggleState} active={active} />
    </StyledNavBar>
  );
}
