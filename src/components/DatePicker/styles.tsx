import styled from 'styled-components';

interface DateContainerProps {
  isSelected?: boolean;
  isFuture?: boolean;
}

export const DateContainer = styled.div<DateContainerProps>`
  border-radius: 5px;
  box-sizing: content-box;
  color: #5f6c7b;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  width: 3rem;

  ${({ isFuture }) => isFuture && `color: #90b4ce`};

  ${({ isSelected }) => isSelected && `background: #3da9fc`};
  ${({ isSelected }) => isSelected && `color: #fffffe`};

  div:nth-of-type(2) {
    font-size: 2rem;
  }

  &:hover {
    box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
  }
`;

export const DateRowContainer = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ArrowContainer = styled.img`
  height: 3rem;
  padding: 1rem;

  &:hover {
    box-shadow: 0 5px 15px -10px rgb(31 18 53 / 60%);
  }
`;
