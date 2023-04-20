import { StyledButton } from "./Button.styled";

export default function Button({ children, big, handleClick }) {
  return (
    <StyledButton big={big} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}
