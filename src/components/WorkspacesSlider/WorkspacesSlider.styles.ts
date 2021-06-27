import styled from 'styled-components';
import { colors, shadows } from 'styles';

export const WorkspaceCard = styled.div`
  background: ${colors.surface};
  cursor: pointer;
  
  border-radius: 4px;
  box-shadow: ${shadows.card};
  margin-right: 6px;
`;

export const WorkspaceCardPhoto = styled.div<{ src: string }>`
  height: 100px;
  width: 100%;
  border-radius: 4px 4px 0 0;

  background: url("${({src}) => src}") no-repeat center center;
  background-size: cover;
`;

export const WorkspacesWrapper = styled.div`
`;

export const WorkspaceCardHeading = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: 60px;
  margin-top: -28px;
  padding: 0 8px;
  column-gap: 8px;
  
  h4 {
    margin-top: 36px;
    font-size: 1.6rem;
  }
  
  svg path {
    fill: ${colors.accentDark};
  }
`;

export const WorkspaceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.surface};
  
  box-shadow: ${shadows.card};
  border-radius: 6px;
`;

export const WorkspaceCardMeta = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  color: ${colors.mutedMedium};
  font-size: 1.3rem;
  
  margin: 16px 0;
  padding: 0 8px;
  
  span {
    display: inline-flex;
    align-items: center;
    
    svg {
      height: 1em;
    }
    svg path {
      fill: ${colors.accentDark};
    }
  }
  
  span:not(:last-of-type)::after {
    display: inline-block;
    content: '';
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 100%;
    height: 4px;
    width: 4px;
    background-color: ${colors.mutedMedium};
  }
`;

export const WorkspaceCardDate = styled.p`
  color: ${colors.paragraph};
  font-size: 1.3rem;
  padding: 0 8px 16px 8px;
`;