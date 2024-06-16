import { Helmet } from 'react-helmet-async';
import { Locations } from '../../components/LocationsAll/Locations/Locations';

export default function LocationsPage() {
  return (
    <div>
      <Helmet>
        <title>Designo-our-locations</title>
      </Helmet>
      <Locations />
    </div>
  );
}
