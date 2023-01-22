import React, {
  ComponentPropsWithoutRef,
  ForwardRefRenderFunction,
  forwardRef
} from 'react';
import { NumericInputContainer, StyledNumericInput } from './styles';

interface NumericInputProps extends ComponentPropsWithoutRef<'input'> {
  units?: string;
  error?: string;
}

export const NumericInput: ForwardRefRenderFunction<
  HTMLInputElement,
  NumericInputProps
> = ({ error, units, ...inputProps }, ref) => {
  return (
    <NumericInputContainer unit={units}>
      <StyledNumericInput type="number" {...inputProps} ref={ref} />
    </NumericInputContainer>
  );
};

const NumericInputWithRef = forwardRef<HTMLInputElement, NumericInputProps>(
  NumericInput
);

export default NumericInputWithRef;
