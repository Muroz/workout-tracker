import styled from 'styled-components';

export const RadioInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const ExerciseSpecsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExerciseTypeContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

export const ExerciseContainer = styled.fieldset`
  border: none;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  padding: 2rem;
  & ${RadioInput} + svg {
    border-radius: 5px;
    height: 3rem;
    width: 3rem;
  }

  & ${RadioInput}:checked + svg {
    fill: #3da9fc;
  }

  & label > svg:hover {
    background-color: #3da9fc1a;
  }
`;

export const UnitSelect = styled.select`
  padding: 1rem;
  font-size: 1rem;
  font-family: sans-serif;
`;

export const ExerciseInput = styled.input`
  border: none;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  font-size: 2rem;
  height: 2.5rem;
  outline: none;
  width: 100%;

  &:focus,
  &:focus-visible {
    border-bottom: 2px solid;
  }

  &:hover {
    background-color: #3da9fc1a;
  }
`;
