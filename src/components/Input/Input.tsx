import React, {
  ComponentPropsWithoutRef,
  ForwardRefRenderFunction,
  forwardRef
} from 'react';
import {
  StyledContainer,
  StyledErrorLabel,
  StyledInput,
  StyledLabel
} from './styles';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  error?: string;
}

export const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, name, ...inputProps },
  ref
) => {
  const hasError = !!error;
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        {...inputProps}
        id={name}
        name={name}
        ref={ref}
        hasError={hasError}
      />
      {error && <StyledErrorLabel>{error}</StyledErrorLabel>}
    </StyledContainer>
  );
};

const InputWithRef = forwardRef<HTMLInputElement, InputProps>(Input);

export default InputWithRef;
