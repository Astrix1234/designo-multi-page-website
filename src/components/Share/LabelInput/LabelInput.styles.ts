import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  position: relative;

  & div {
    display: flex;
    align-items: center;
    gap: 9px;
  }

  & input {
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
    transition: border-bottom 0.3s ease-in-out;

    &:hover,
    &:focus {
      border-bottom: 2px solid var(--white);
    }
  }

  &.error input {
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
