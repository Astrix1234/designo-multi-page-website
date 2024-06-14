import { Helmet } from 'react-helmet-async';
import {
  createImagesMobile,
  createImagesTablet,
  createImagesDesktop,
} from '../../utils/imagesDesignWeb';
import { PicturesDesignPages } from '../../components/Share/DesignPages/PicturesDesignPages/PicturesDesignPages';
import { useNavigate } from 'react-router-dom';
import { HeroDesignPages } from '../../components/Share/DesignPages/HeroDesignPages/HeroDesignPages';

export default function WebDesignPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Designo-web-design</title>
      </Helmet>
      <HeroDesignPages
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
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
