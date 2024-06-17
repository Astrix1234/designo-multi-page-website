import styled, { css } from 'styled-components';
import { media } from '../../../../stylesheets/media';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 478px;
  background-color: var(--light);
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--peach);
    cursor: pointer;
  }

  &:hover h4,
  &:focus h4 {
    color: var(--white);
  }

  &:hover p,
  &:focus p {
    color: var(--white);
  }

  ${media.tablet(css`
    max-width: 329px;
  `)}

  ${media.desktop(css`
    max-width: 350px;
  `)}
`;

export const Image = styled.div`
  width: 100%;
  height: 320px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Text = styled.div`
  padding: 0 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  height: 158px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    h4 {
      font-size: 20px;
      line-height: 26px;
      letter-spacing: 5px;
      font-weight: 500;
      color: var(--peach);
      transition: color 0.3s ease-in-out;
    }

    p {
      font-size: 16px;
      line-height: 26px;
      color: var(--dark-grey);
      transition: color 0.3s ease-in-out;
    }

    ${media.tablet(css`
      margin-bottom: 60px;
    `)}

    ${media.desktop(css`
      margin-bottom: 60px;
    `)}
  }
`;
