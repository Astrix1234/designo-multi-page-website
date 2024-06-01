import React from 'react';
import { Container, LogoProps } from './Logo.styles';

export const Logo: React.FC<LogoProps> = ({ background }) => {
  return <Container background={background} />;
};
