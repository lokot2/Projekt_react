import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useDropdown from 'react-dropdown-hook';

import Input from "components/Input/Input";

import PlaceholderImage from 'assets/images/avatar-placeholder.jpg';
import { DropdownButton, DropdownWrapper, DropdownItem, DropdownListWrapper, SubMenuLabel, FilterWrapper, DropdownIcon, DropdownProfileSection, LogoutButton, ScrollableListArea } from './DropdownNavigation.styles';
import { HouseIcon, PrivacyIcon, SettingsIcon, LogoutIcon } from 'styles';
import { dropdownItems } from './dropdownItems';
import { ProfileContext } from 'contexts/profile.context';
import { NavigationContext } from "contexts/navigation.context";

const DropdownNavigation: React.FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  const [filterString, setFilterString] = useState<string>('');
  const { name } = useContext(ProfileContext);
  const { currentMenuItem: currentMenuItemId, setCurrentMenuItem } = useContext(NavigationContext);


  let currentMenuItem = {
    icon: <HouseIcon />,
    name: 'Home'
  };
  dropdownItems.forEach(itemsGroup => {
      itemsGroup.items.forEach(item => {
        if (item.id === currentMenuItemId) {
          currentMenuItem = item;
        }
      })
  });

  // dropdown menu items filtering logic
  let filteredDropdownItems = dropdownItems;
  if (filterString) {
    filteredDropdownItems = dropdownItems.filter(itemsList => {
      itemsList.items = itemsList.items.filter(item => {
        return item.name.toLowerCase().includes(filterString.toLowerCase());
      });
      return itemsList.items.length > 0;
    })
  }

  const handleFilterInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  const handleItemClick = (itemId: number) => () => {
    closeDropdown();
    setCurrentMenuItem(itemId);
  }

  return (
      <DropdownWrapper ref={wrapperRef}>
        <DropdownButton onClick={toggleDropdown}>
          <div>
            {currentMenuItem.icon}
            {currentMenuItem.name}
          </div>

          <DropdownIcon />
        </DropdownButton>
        {dropdownOpen &&
        <DropdownListWrapper>
          <FilterWrapper>
            <Input placeholder={'Filter...'} onChange={handleFilterInputChange} />
          </FilterWrapper>

          <ScrollableListArea>
            {filteredDropdownItems.map(itemsList => (
              <>
                <SubMenuLabel>{itemsList.name}</SubMenuLabel>
                {itemsList.items.map(item => (
                  <DropdownItem key={item.id} onClick={handleItemClick(item.id)}>
                    {item.icon}
                    {item.name}
                  </DropdownItem>
                ))}
              </>
            ))}
          </ScrollableListArea>

          <SubMenuLabel>Account</SubMenuLabel>
          <DropdownProfileSection>
              <img src={PlaceholderImage} alt=""/>

              <div>
                  <p>{name}</p>
                  <Link to={'/profile'}>See profile</Link>
              </div>
          </DropdownProfileSection>
          <DropdownItem>
              <PrivacyIcon />
              Privacy
          </DropdownItem>

          <DropdownItem>
              <SettingsIcon />
              Settings
          </DropdownItem>

          <LogoutButton>
              <LogoutIcon />
              Logout
          </LogoutButton>
        </DropdownListWrapper>
        }
      </DropdownWrapper>
  )
};

export default DropdownNavigation;