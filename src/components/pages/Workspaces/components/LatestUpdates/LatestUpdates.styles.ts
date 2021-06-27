import styled, { css } from 'styled-components';

import { Card } from 'styles/shared';
import { shadows, colors } from 'styles';

export const LastUpdatesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  div {
    display: flex;
    column-gap: 8px;
  }
  
  h4 {
    margin: 0;
  }
`;

export const LatestUpdatesWrapper = styled.div`
  padding: 16px 24px;
`;

export const FilterTags = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 12px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const Tag = styled.span<{backgroundColor?: string, textColor?: string, link?: boolean}>`
  display: inline-flex;
  box-shadow: ${shadows.card};
  border: 1px solid ${colors.separator};
  background: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  
  ${({backgroundColor}) => backgroundColor && css`
    background-color: ${backgroundColor};
    border-color: transparent;
  `}
  
  ${({textColor}) => textColor && css`
    color: ${textColor};
    
    svg {
      height: 1em;
      path {
        stroke: ${textColor};
        fill: ${textColor};
      }
    }
  `}
  
  ${({link}) => link && css`
    box-shadow: none;
    border: none;
    padding: 0;
  `}
`;

export const Update = styled(Card)`
  margin-top: 16px;
  cursor: pointer;
  
  h4 {
    margin: 0;
    color: ${colors.accentDark};
    font-size: 1.8rem;
  }
  
  p {
    color: ${colors.paragraph};
    line-height: 1.4em;
    font-size: 1.5rem;
  }
`;

export const UpdateMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;
  font-size: 1.4rem;
  
  span:not(:last-of-type) {
    display: inline-flex;
    align-items: center;
    
    &:after {
      display: block;
      content: '';
      height: 5px;
      width: 5px;
      margin-left: 12px;
      border-radius: 100%;
      background-color: ${colors.separator};  
    }
  }
`;