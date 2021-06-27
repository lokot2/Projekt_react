import styled from 'styled-components';

import { colors } from "styles";

export const ProfileTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
    
  & > svg:last-child {
    display: none;
    margin-left: 2rem;
  }
  
  & > svg:last-child:hover {
    stroke: ${colors.accentDark};
    cursor: pointer;
  }
  
  &:hover {
    & > svg:last-child {
      display: block; 
    }
  }
`;

export const ProfileTag = styled.span`
  display: inline-block;
  
  border-bottom: 2px solid ${colors.accentLight};
  
  margin: 10px 5px;
  padding: 6px;
  cursor: default;
  
  &:first-of-type {
    margin-left: 0;
  }
  
  svg {
    display: none;
    height: .9em;
    max-height: 100%;
  }
  
  svg:hover {
    stroke: ${colors.deletion};
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
  max-width: 50%;
  min-width: 20%;
  height: 1.5em;
  font-size: inherit;
  color: inherit;
  
  &:focus, &:active {
    outline: none;
  }
`;