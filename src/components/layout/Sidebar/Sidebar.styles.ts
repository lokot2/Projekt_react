import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { shadows, colors } from 'styles';

export const SidebarProfileSection = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: ${shadows.card};
  border-radius: 4px;
  padding: 20px 0;
  text-align: center;
  
  h3 {
    color ${colors.accentDark};
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 2rem;
  }
  
  p {
    color ${colors.accentMedium};
    line-height: 2em;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const Separator = styled.hr`
  height: 1px;
  background-color: ${colors.separator};
  border: none;
`;

export const SidebarProfileControl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin-top: 10px;
`;

export const SidebarProfileControlButton = styled.a`
  padding: .5rem;
  border: 1px solid #a0a0a0;
  box-shadow: 0 1px 3px #f1f1f1;
  height: 30px;
  width: 40px;

  transition-duration: .1s;
  cursor: pointer;

  svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const SidebarProfileControlLink = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: ${colors.accentMedium};
  
  svg {
    margin-right: 10px; 
  }
  
  &:hover {
    color: ${colors.accentLight};
  }
`;

export const SidebarNavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 10px;
  cursor: pointer;
  font-weight: 600;
  color: ${colors.paragraph};
  font-size: 1.7rem;
  height: 1.2em;
  
  svg {
    margin-right: 15px;
    width: 1.5em;
    max-height: 100%;
  }
`;

export const SidebarWrapper = styled.div`
  margin-bottom: 64px;
`;