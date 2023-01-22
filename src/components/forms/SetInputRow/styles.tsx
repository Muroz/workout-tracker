import styled from 'styled-components';

export const SetContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: 10rem 1fr 10rem;
  grid-auto-columns: 1fr;
  justify-items: start;
  padding: 1rem 0;

  & svg {
    justify-self: center;
    height: 2rem;
    width: 2rem;
  }
`;

export const SetRowContent = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
  grid-gap: 1rem;
`;

export const SetNumberLabel = styled.div`
  align-items: center;
  background: #3da9fc;
  border-radius: 25px;
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  justify-self: center;
  text-align: center;
  width: 2rem;
`;
