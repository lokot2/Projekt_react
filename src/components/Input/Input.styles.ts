import styled, { css } from 'styled-components';

import { InputProps } from './Input';

import { borders } from 'styles';

export const StyledInput = styled.input<InputProps>`
  border: ${borders.input};
  height: 3.5rem;
  border-radius: 4px;
  padding: 0 1rem;

  ::placeholder {
    color: #929292;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  
  svg {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    opacity: 0.3;
    
    &:hover {
      opacity: .7;
    }
  }
`;