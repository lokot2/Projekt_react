import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import logo from 'assets/icons/logo.png';
import DropdownNavigation from "components/DropdownNavigation/DropdownNavigation";
import Input from 'components/Input/Input';
import NavIcon from 'components/NavIcon/NavIcon';
import { FullscreenContext } from 'contexts/fullscreen.context';

import { NavBarWrapper, SearchWrapper, NavIconsWrapper, NavBarContainer, CompanyLogo } from './NavBar.styles';
import { HouseLighterIcon, CommentsIcon, BellIcon, SearchIcon } from 'styles';

const NavBar: React.FC = () => {
  const history = useHistory();
  const {isFullscreenActive, setFullscreenActive} = useContext(FullscreenContext);

  const goToHomepage = () => {
    history.push('/');
  }

  return (

    <NavBarWrapper isFullscreen={isFullscreenActive}>
      <NavBarContainer>
        <div>
          <CompanyLogo src={logo} alt="" onClick={goToHomepage}/>
          <DropdownNavigation />
        </div>

        <SearchWrapper>
          <Input placeholder={'Search'} inputType={'search'} />
        </SearchWrapper>

        <NavIconsWrapper>
          <NavIcon onClick={goToHomepage}>
            <HouseLighterIcon />
          </NavIcon>

          <NavIcon notificationsCount={3} onClick={goToHomepage}>
            <CommentsIcon />
          </NavIcon>

          <NavIcon notificationsCount={3} onClick={goToHomepage}>
            <BellIcon />
          </NavIcon>

          <NavIcon hideLg>
            <SearchIcon />
          </NavIcon>
        </NavIconsWrapper>
      </NavBarContainer>
    </NavBarWrapper>
  )
}
export default NavBar;