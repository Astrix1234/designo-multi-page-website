import styled from 'styled-components';
import { media } from '../../../stylesheets/media';

export const Label = styled.label`
  width: 100%;
  position: relative;

  & textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--white);
    padding: 11px 14px;
    font-size: 15px;
    line-height: 26px;
    font-weight: 500;
    background-color: transparent;
    color: var(--white);
    margin-bottom: 14px;
    outline: none;
    resize: none;
    height: 113px;
    transition: border-bottom 0.3s ease-in-out;

    &:hover,
    &:focus {
      border-bottom: 2px solid var(--white);
    }
  }

  &.error textarea {
    border-bottom: 3px solid var(--white);
  }

  .formikMessage {
    position: absolute;
    right: 0;
    top: 11px;
    color: var(--white);
    font-size: 12px;
    line-height: 26px;
    font-style: italic;
  }
`;
