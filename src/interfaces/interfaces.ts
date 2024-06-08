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
