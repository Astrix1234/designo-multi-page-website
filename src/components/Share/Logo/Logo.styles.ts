import styled from 'styled-components';

const basename = process.env.PUBLIC_URL || '/designo-multi-page-website';

export interface LogoProps {
  background: 'light' | 'dark';
}

const logoPaths = {
  light: `${basename}/assets/shared/desktop/logo-light.png`,
  dark: `${basename}/assets/shared/desktop/logo-dark.png`,
};

export const Container = styled.div<LogoProps>`
  width: 202px;
  height: 27px;
  background-image: url(${props => logoPaths[props.background]});
  background-size: contain;
  background-repeat: no-repeat;
`;
