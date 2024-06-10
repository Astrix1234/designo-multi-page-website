import { Helmet } from 'react-helmet-async';
import { Locations } from '../../components/Share/Locations/Locations';
import { RealDeal } from '../../components/AboutAll/RealDeal/RealDeal';
import { WorldClassTalent } from '../../components/AboutAll/WorldClassTalent/WorldClassTalent';
import { AboutUs } from '../../components/AboutAll/AboutUs/AboutUs';

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>Designo-about-us</title>
      </Helmet>
      <AboutUs />
      <WorldClassTalent />
      <Locations />
      <RealDeal />
    </div>
  );
}
