import styled from 'styled-components';

export const NumericInputContainer = styled.div<{ unit?: string }>`
  display: flex;
  position: relative;
  width: 100%;

  &::after {
    ${({ unit }) => unit && `content: "${unit}"`};

    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.05s ease-in-out;
  }

  &:hover::after,
  &:focus-within::after {
    right: 1.5em;
  }

  @supports (-moz-appearance: none) {
    &::after {
      right: 1.5em;
    }
  }
`;

export const StyledNumericInput = styled.input`
  color: #5f6c7b;
  font-size: 1rem;
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;
