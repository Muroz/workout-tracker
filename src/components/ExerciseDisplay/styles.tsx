import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
  border-radius: 5px;
  display: grid;
  font-family: sans-serif;
  grid-gap: 1rem;
  padding: 1rem;
`;

export const DataRow = styled.div`
  align-items: center;
  display: grid;
  grid-auto-columns: minmax(min-content, max-content);
  grid-auto-flow: column;
  grid-gap: 1rem;
  font-size: 1.25rem;
`;

export const SetContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
`;

export const SetRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2rem;
  align-items: center;
  grid-gap: 1rem;
`;
