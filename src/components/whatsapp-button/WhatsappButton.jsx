import WhatsappIcon from '../../assets/icons/Whatsapp.icon';
import { Message, WhatsappButtonContainer } from './WhatsappButton.styled';

export default function WhatsappButton() {
  return (
    <WhatsappButtonContainer
      href=' https://api.whatsapp.com/send?phone=51932088984&text=Hola,%20deseo%20más%20información.'
      target='_blank'
      rel='noreferer'
    >
      <WhatsappIcon />
      <Message>
        <p>¿Necesitas ayuda?</p>
      </Message>
    </WhatsappButtonContainer>
  );
}
