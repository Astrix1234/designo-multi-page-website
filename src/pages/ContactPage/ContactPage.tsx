import { Helmet } from 'react-helmet-async';
import { Contact } from '../../components/ContactAll/Contact/Contact';

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Designo-contact-us</title>
      </Helmet>
      <Contact />
    </div>
  );
}
