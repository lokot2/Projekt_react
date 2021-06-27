import React from 'react';

import { StyledIcon } from './NavIcon.styles';

export interface Props {
  notificationsCount?: number;
  onClick?: () => void;
  hideLg?: boolean;
}

const NavIcon: React.FC<Props> = ({notificationsCount, onClick, hideLg, children}) => {
  return (
    <StyledIcon onClick={onClick} hideLg={hideLg}>
      {notificationsCount && (<span>{notificationsCount}</span>)}
      {children}
    </StyledIcon>
  )
}

export default NavIcon;