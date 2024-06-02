import { Helmet } from 'react-helmet-async';
import { MainPart } from '../../components/HomeAll/HeroPart/HeroPart';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Designo</title>
      </Helmet>
      <MainPart />
    </>
  );
}
