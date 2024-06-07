export interface StyledLinkProps {
  color: 'light' | 'dark';
}

export interface LinkPropsMore extends StyledLinkProps {
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
  onClick: () => void;
  content: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface PictureProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export interface NavContainerProps {
  isContactPage: boolean;
}
