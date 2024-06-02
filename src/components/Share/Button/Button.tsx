import { StyledButton } from './Button.styles';
import { StyledButtonProps } from '../../../interfaces/interfaces';

export const Button = ({
  content,
  color = 'light',
  $background = 'white',
  onClick,
  type = 'button',
}: StyledButtonProps) => {
  return (
    <StyledButton
      color={color}
      $background={$background}
      onClick={onClick}
      type={type}
    >
      {content}
    </StyledButton>
  );
};
