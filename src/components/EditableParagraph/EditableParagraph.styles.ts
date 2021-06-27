import styled from 'styled-components';

import { colors } from 'styles';

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  
  svg {
    display: none;
    height: .9em;
    margin-left: 1rem;
  }
  
  svg:hover {
    stroke: ${colors.accentDark};
    cursor: pointer;
  }
  
  &:hover {
    svg {
      display: inline-block;
    }
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid ${colors.mutedParagraph};
  margin-bottom: -2px;
  max-width: 100%;
  min-width: 50%;
  height: 1.5em;
  font-size: inherit;
  color: inherit;
  
  &:focus, &:active {
    outline: none;
  }
`;