import styled from 'styled-components';

export const SummaryContainer = styled.div`
  padding: 1rem;
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-rows: 2fr 1fr;
  grid-auto-rows: 1rem;
  min-height: 10rem;
  border-radius: 10px;

  & svg {
    fill: #094067;
  }
`;
