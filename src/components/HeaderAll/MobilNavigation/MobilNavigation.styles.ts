import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  transform: translate(100%, 95px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.7);
  transition: transform 0.4s ease-in-out;

  &.opened {
    transform: translate(0, 95px);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 48px 24px;
  background-color: var(--black);
`;
