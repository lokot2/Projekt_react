import styled from 'styled-components';

import { colors } from 'styles';
import { Card } from 'styles/shared';

export const Wrapper = styled(Card)`
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  
  overflow: hidden;
  position: relative;
  
  height: 350px;
  
  img {
    width: 100%;
  }
`;

export const WorkspacesHeroContent = styled.div`
  background-color: ${colors.surface};
  
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  padding: 8px 24px;
  display: flex;
  align-items: center;
  column-gap: 24px;
  
  p {
    font-size: 1.4rem;
    color: ${colors.paragraph};
    margin-bottom: 20px;
  }
  
  h4 {
    margin-top: 20px;
    margin-bottom: 1rem;
    font-weight: 600;
    color: ${colors.paragraph};
  }
  
  svg {
    height: 30px;
    width: 50px;
    
    path {
      fill: ${colors.accentDark};
    }
  }
`;