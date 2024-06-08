const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

export const imagesMobile = [
  {
    src: `${basename}/assets/home/mobile/image-web-design.jpg`,
    alt: 'Web Design',
    onClick: () => console.log('clicked'),
  },
  {
    src: `${basename}/assets/home/mobile/image-app-design.jpg`,
    alt: 'App Design',
    onClick: () => console.log('clicked'),
  },
  {
    src: `${basename}/assets/home/mobile/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => console.log('clicked'),
  },
];

export const imagesTablet = [
  {
    src: `${basename}/assets/home/tablet/image-web-design.jpg`,
    alt: 'Web Design',
    onClick: () => console.log('clicked'),
  },
  {
    src: `${basename}/assets/home/tablet/image-app-design.jpg`,
    alt: 'App Design',
    onClick: () => console.log('clicked'),
  },
  {
    src: `${basename}/assets/home/tablet/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => console.log('clicked'),
  },
];

export const imagesDesktop = [
  {
    src: `${basename}/assets/home/desktop/image-app-design.jpg`,
    alt: 'App Design',
    onClick: () => console.log('clicked'),
  },
  {
    src: `${basename}/assets/home/desktop/image-graphic-design.jpg`,
    alt: 'Graphic Design',
    onClick: () => console.log('clicked'),
  },
];
