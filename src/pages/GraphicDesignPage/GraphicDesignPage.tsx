import { Helmet } from 'react-helmet-async';
import {
  createImagesMobile,
  createImagesTablet,
  createImagesDesktop,
} from '../../utils/imagesDesignGraphic';
import { PicturesDesignPages } from '../../components/Share/DesignPages/PicturesDesignPages/PicturesDesignPages';
import { useNavigate } from 'react-router-dom';
import { HeroDesignPages } from '../../components/Share/DesignPages/HeroDesignPages/HeroDesignPages';

export default function GraphicDesignPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Designo-graphic-design</title>
      </Helmet>
      <HeroDesignPages
        title="Graphic Design"
        text="We deliver eye-catching branding materials that are 
tailored to meet your business objectives."
      />
      <PicturesDesignPages
        createImagesMobile={createImagesMobile}
        createImagesTablet={createImagesTablet}
        createImagesDesktop={createImagesDesktop}
        navigate={navigate}
      />
    </div>
  );
}
