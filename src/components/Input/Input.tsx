import React from 'react';

import { StyledInput, InputWrapper } from './Input.styles';
import { SearchIcon } from 'styles/icons';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: 'search';
  align?: 'left';
  onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <InputWrapper>
      <StyledInput {...props}/>
      {props.inputType === 'search' && <SearchIcon/>}
    </InputWrapper>
  )
}
export default Input;