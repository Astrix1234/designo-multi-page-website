import { Helmet } from 'react-helmet-async';
import { Locations } from '../../components/Share/Locations/Locations';
import { RealDeal } from '../../components/AboutAll/RealDeal/RealDeal';
import { WorldClassTalent } from '../../components/AboutAll/WorldClassTalent/WorldClassTalent';

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>Designo-about-us</title>
      </Helmet>
      <WorldClassTalent />
      <Locations />
      <RealDeal />
    </div>
  );
}
