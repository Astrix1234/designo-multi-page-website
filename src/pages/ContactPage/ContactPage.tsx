import { Helmet } from 'react-helmet-async';
import { ContactUsPlusForm } from '../../components/ContactAll/ContactUsPlusForm/ContactUsPlusForm';
import { Locations } from '../../components/Share/Locations/Locations';

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Designo-contact-us</title>
      </Helmet>
      <ContactUsPlusForm />
      <Locations />
    </div>
  );
}
