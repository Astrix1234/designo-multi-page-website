import { Helmet } from 'react-helmet-async';
import { MainPart } from '../../components/HomeAll/HeroPart/HeroPart';
import { PicturesDesign } from '../../components/HomeAll/PicturesDesign/PicturesDesign';
import { Features } from '../../components/HomeAll/Features/Features';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Designo</title>
      </Helmet>
      <MainPart />
      <PicturesDesign />
      <Features />
    </>
  );
}
