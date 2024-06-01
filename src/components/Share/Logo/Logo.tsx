import React from 'react';
import { Container } from './Logo.styles';
import { LogoProps } from '../../../interfaces/interfaces';

export const Logo: React.FC<LogoProps> = ({ background }) => {
  return <Container background={background} />;
};
