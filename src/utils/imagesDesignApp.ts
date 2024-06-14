const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

export const createImagesMobile = (navigate: (path: string) => void) => [
  {
    src: `${basename}/assets/home/mobile/image-web-design.jpg`,
    alt: 'Web Design',
    onClick: () => navigate('/web-design'),
  },

  {
    src: `${basename}/assets/home/mobile/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => navigate('/graphic-design'),
  },
];

export const createImagesTablet = (navigate: (path: string) => void) => [
  {
    src: `${basename}/assets/home/tablet/image-web-design.jpg`,
    alt: 'Web Design',
    onClick: () => navigate('/web-design'),
  },

  {
    src: `${basename}/assets/home/tablet/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => navigate('/graphic-design'),
  },
];

export const createImagesDesktop = (navigate: (path: string) => void) => [
  {
    src: `${basename}/assets/home/desktop/image-web-design-small.jpg`,
    alt: 'Web Design',
    onClick: () => navigate('/web-design'),
  },
  {
    src: `${basename}/assets/home/desktop/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => navigate('/graphic-design'),
  },
];
