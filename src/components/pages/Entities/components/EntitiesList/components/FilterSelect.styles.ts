import styled from 'styled-components';

import { colors } from "styles";
import { Card } from "styles/shared";

export const FilterDropdownWrapper = styled.div`
  position: relative;
`;

export const FilterDropdownButton = styled.span`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
  padding: 8px;
  cursor: pointer;
  border: 1px solid ${colors.activeSwitchBackground};
  font-size: 1.4rem;
  color: ${colors.paragraph};
  
  svg {
    height: 1.1em;
  }
`;

export const FilterDropdownContent = styled(Card)`
  position: absolute;
  top: 35px;
  left: 0;
  min-width: 500px;
  max-width: 95vw;
  padding: 16px;
`;

export const FilterSelectInfo = styled.p`
  margin: 0;
  font-size: 1.3rem;
  color: ${colors.mutedParagraph};
`;

export const Filter = styled.p`
  display: flex;
  column-gap: 16px;
  font-size: 1.4rem;
  align-items: center;
  
  select {
    border: 0;
    font-size: 1.4rem;

    &:focus, &:active {
      outline: none;
    }
  }
  
  input {
    border: 0;
    background: ${colors.separator};
    padding-left: 2rem;
    height: 3rem;
    
    &:focus, &:active {
      outline: none;
    }
  }
  
  svg {
    cursor: pointer;
    
    &:hover {
      stroke: ${colors.deletion};
    }
  }
`;

export const AddFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  
  select {
    border: 0;
    font-size: 1.6rem;
    color: ${colors.accentDark};
    margin-left: 16px;
    
    &:active, &:focus {
      outline: none;
    }
  }
`;

export const AddFilterButton = styled.a`
  display: inline-flex;
  color: ${colors.accentDark};
  cursor: pointer;
  column-gap: 16px;
`;