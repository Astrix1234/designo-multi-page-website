import { Helmet } from 'react-helmet-async';
import { MainPart } from '../../components/HomeAll/HeroPart/HeroPart';
import { PicturesDesign } from '../../components/HomeAll/PicturesDesign/PicturesDesign';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Designo</title>
      </Helmet>
      <MainPart />
      <PicturesDesign />
    </>
  );
}
