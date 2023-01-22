import styled from 'styled-components';

export const StyledInput = styled.input<{ hasError?: boolean }>`
  border: 1px solid #5f6c7b;
  border-radius: 5px;
  box-sizing: border-box;
  color: #5f6c7b;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  height: 2rem;

  &:focus {
    border: 2px solid #3d5eeb;
  }
`;

export const StyledLabel = styled.label`
  color: #000000;
  font-size: 0.8rem;
`;

export const StyledErrorLabel = styled.span`
  color: #ef4565;
  font-size: 0.8rem;
  margin-left: 1rem;
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    'label'
    'input'
    'error';
  font-family: sans-serif;

  ${StyledLabel} {
    grid-area: label;
  }

  ${StyledInput} {
    grid-area: input;
  }

  ${StyledErrorLabel} {
    grid-area: error;
  }
`;
