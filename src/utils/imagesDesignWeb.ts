const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

export const createImagesMobile = (navigate: (path: string) => void) => [
  {
    src: `${basename}/assets/home/mobile/image-app-design.jpg`,
    alt: 'App Design',
    onClick: () => navigate('/app-design'),
  },
  {
    src: `${basename}/assets/home/mobile/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => navigate('/graphic-design'),
  },
];

export const createImagesTablet = (navigate: (path: string) => void) => [
  {
    src: `${basename}/assets/home/tablet/image-app-design.jpg`,
    alt: 'App Design',
    onClick: () => navigate('/app-design'),
  },
  {
    src: `${basename}/assets/home/tablet/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => navigate('/graphic-design'),
  },
];

export const createImagesDesktop = (navigate: (path: string) => void) => [
  {
    src: `${basename}/assets/home/desktop/image-app-design.jpg`,
    alt: 'App Design',
    onClick: () => navigate('/app-design'),
  },
  {
    src: `${basename}/assets/home/desktop/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => navigate('/graphic-design'),
  },
];
