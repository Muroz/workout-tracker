import styled from 'styled-components';

export const ExerciseContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-auto-rows: minmax(12rem, auto);
  grid-auto-flow: dense;
  grid-gap: 1rem;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 2rem;
  background: #3da9fc;
  width: 90%;
  margin: auto;
  color: white;
  border-radius: 10px;
  font-family: sans-serif;
`;
