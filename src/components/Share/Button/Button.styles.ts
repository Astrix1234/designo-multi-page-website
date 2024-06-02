import styled from 'styled-components';
import { ButtonProps } from '../../../interfaces/interfaces';

const buttonColor = {
  light: 'var(--white)',
  dark: 'var(--dark-grey)',
  white: 'var(--white)',
  peach: 'var(--peach)',
  lightPeach: 'var(--light-peach)',
};

export const StyledButton = styled.button<
  ButtonProps & { $background: 'white' | 'peach' | 'lightPeach' }
>`
  background-color: ${props => buttonColor[props.$background]};
  color: ${props => buttonColor[props.color]};
  border: none;
  width: 152px;
  height: 56px;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--light-peach);
    color: var(--white);
  }
`;
