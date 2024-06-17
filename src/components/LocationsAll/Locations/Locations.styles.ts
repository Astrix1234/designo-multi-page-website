import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 310px;

  ${media.tablet`
    max-width: 768px;
   padding: 0 40px 384px 39px;
    gap: 120px;
  `}

  ${media.desktop`
    max-width: 1440px;
    padding: 0 164px 380px 165px;
    gap: 32px;
  `}
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${media.tablet`
        gap:24px;
    `}

  ${media.desktop`
        flex-direction: row;
        gap: 30px;

        &.content {
            flex-direction: row-reverse;
        }
    `}
`;

export const TextContainer = styled.div`
  width: 100%;
  background-color: var(--light);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 394px;
  text-align: center;
  color: var(--dark-grey);
  font-size: 15px;
  line-height: 25px;

  & h4 {
    font-size: 32px;
    line-height: 36px;
    font-weight: 500;
    margin-top: 80px;
    color: var(--peach);
  }

  & .contacts {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  & div div {
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    & p:first-of-type {
      font-weight: 700;
    }
  }

  ${media.tablet`
    border-radius: 20px;
    height: 326px;
    align-items: flex-start;
    text-align: left;
    padding-left: 70px;
    justify-content: center;
    font-size: 16px;
  line-height: 26px;
 
    
  & h4 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 500;
    margin-top: 0;
    color: var(--peach);
  }

  & .contacts {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
     margin-top: 24px;
      gap: 130px;
  }

  & div div {
    margin-top: 0;

    & p:first-of-type {
      font-weight: 700;
    }
  }
  `}

  ${media.desktop`
    height: 350px;

     & .contacts {
      gap: 150px;
  }
  `}
`;

export const CircleContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 102px;

  ${media.tablet`
    left: 0;
    bottom: 292px;
  `}
`;

export const Circle180Container = styled.div`
  position: absolute;
  left: 0;
  bottom: -190px;
  transform: rotate(180deg);

  ${media.tablet`
     left: 0;
  bottom: 0;
  `}

  ${media.desktop`
     left: 0;
  bottom: 0;
  `}
`;

export const Circle90Container = styled.div`
  position: absolute;
  left: 292px;
  bottom: -190px;
  transform: rotate(270deg);

  ${media.tablet`
     left: 292px;
  bottom: 0;
  `}

  ${media.desktop`
    left: 292px;
  bottom: 0;
  `}
`;
