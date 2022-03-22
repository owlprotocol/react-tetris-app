import React from 'react';
import { StyledInputWrapper, StyledInput } from './styles/StyledInput';

const Input = ({ text, name, callback, disabled }) => (
  <StyledInputWrapper>
    {text}
    <StyledInput value={name} onChange={callback} disabled={disabled} />
  </StyledInputWrapper>
);

export default Input;
