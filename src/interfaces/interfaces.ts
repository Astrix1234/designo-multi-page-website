export interface StyledLinkProps {
  color: 'light' | 'dark';
}

export interface LinkPropsMore extends StyledLinkProps {
  to: string;
  children: React.ReactNode;
}

export interface LinkMobilProps {
  to: string;
  children: React.ReactNode;
}

export interface LogoProps {
  $background: 'light' | 'dark';
}

export interface ButtonProps {
  color: 'light' | 'dark';
  $background: 'white' | 'peach' | 'lightPeach';
}

export interface StyledButtonProps extends ButtonProps {
  onClick?: () => void;
  content: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface PictureProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface InputField {
  id: string;
  type: string;
  name: keyof FormValues;
  placeholder: string;
}

export interface LabelInputProps {
  id: string;
  error: { condition: boolean; message: string };
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export interface TextareaProps {
  id: string;
  error: { condition: boolean; message: string };
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder: string;
}

export interface MobilNavigationProps {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export interface TitleTextLightBgProps {
  title: string;
  text: string;
  textCont: string;
}

export interface PictureContainerAboutProps {
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
}

interface Image {
  src: string;
  alt: string;
  onClick: () => void;
}

export interface PicturesDesignPagesProps {
  createImagesMobile: (navigate: (path: string) => void) => Image[];
  createImagesTablet: (navigate: (path: string) => void) => Image[];
  createImagesDesktop: (navigate: (path: string) => void) => Image[];
  navigate: (path: string) => void;
}

export interface TileProps {
  title: string;
  text: string;
  src: string;
}

export interface TilesGridProps {
  tiles: TileProps[];
}
