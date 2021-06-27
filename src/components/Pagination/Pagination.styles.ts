import styled from 'styled-components';

import { colors } from 'styles';

export const PaginationWrapper = styled.div`
  user-select: none;
  
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 15px;
    font-weight: 600;
    
    a {
      color: ${colors.accentMedium};
      cursor: pointer;
      
      &:hover {
        color: ${colors.accentDark};
      }
    }
    
    li.selected {
      font-weight: 400;
    }
  }
`;