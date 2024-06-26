import { Helmet } from 'react-helmet-async';
import {
  createImagesMobile,
  createImagesTablet,
  createImagesDesktop,
} from '../../utils/imagesDesignApp';
import { PicturesDesignPages } from '../../components/Share/DesignPages/PicturesDesignPages/PicturesDesignPages';
import { useNavigate } from 'react-router-dom';
import { HeroDesignPages } from '../../components/Share/DesignPages/HeroDesignPages/HeroDesignPages';
import { TilesGrid } from '../../components/Share/DesignPages/TilesGrid/TilesGrid';
import { dataAppDesign } from '../../utils/dataAppDesign';

export default function AppDesignPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>Designo-app-design</title>
      </Helmet>
      <HeroDesignPages
        title="App Design"
        text="Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips."
      />
      <TilesGrid tiles={dataAppDesign} />
      <PicturesDesignPages
        createImagesMobile={createImagesMobile}
        createImagesTablet={createImagesTablet}
        createImagesDesktop={createImagesDesktop}
        navigate={navigate}
      />
    </div>
  );
}
