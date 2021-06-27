import styled from 'styled-components';

import { colors, media } from 'styles';
import { Card } from 'styles/shared';

export const Excerpt = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.accentLight};
  font-size: 1.6rem;
  font-weight: 600;
`;

export const Tile = styled(Card)`
  padding: 24px;
  cursor: pointer;
  
  svg {
    width: 30px;
    height: 50px;
    color: ${colors.accentDark};
  }
  
  h4 {
    color: ${colors.accentDark};
    font-weight: 400;
    font-size: 1.9rem;
    
    strong {
      font-weight: 600;
    }
    margin: 1rem 0;
  }
  
  p {
    font-size: 1.5rem;
    line-height: 1.5em;
    color: ${colors.paragraph};
    margin-bottom: 0;
  }
`;

export const TilesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 16px;
  
  ${media.sm} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${media.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;