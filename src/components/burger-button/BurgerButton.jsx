import { Button, Line } from "./BurgerButton.styled";

export default function BurgerButton({ handleClick, active }) {
  return (
    <Button active={active} onClick={handleClick} title="menu button">
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Button>
  );
}
