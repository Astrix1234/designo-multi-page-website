import { Container } from './FooterContacts.styles';

export const FooterContacts = () => {
  return (
    <Container>
      <address>
        <p>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </address>
      <div>
        <p>Contact Us (Central Office)</p>
        <a href="tel:+12538638967">P : +1 253-863-8967</a>
        <a href="mailto:contact@designo.co">M : contact@designo.co</a>
      </div>
    </Container>
  );
};
