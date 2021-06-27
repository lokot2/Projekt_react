import {AdministrationIcon, EntitiesIcon, HouseIcon, PeopleIcon, PublicationsIcon} from "styles";

export const dropdownItems = [
  {
    name: 'Platform',
    items: [
      {
        id: 1,
        name: 'Home',
        icon: <HouseIcon />
      },
      {
        id: 2,
        name: 'Publications',
        icon: <PublicationsIcon />
      },
      {
        id: 3,
        name: 'People',
        icon: <PeopleIcon />
      },
      {
        id: 4,
        name: 'Entities',
        icon: <EntitiesIcon />
      },
      {
        id: 5,
        name: 'Administration',
        icon: <AdministrationIcon />
      },
    ]
  },
  {
    name: 'Workspaces',
    items: [
      {
        id: 6,
        name: 'Client contract',
        icon: <HouseIcon />
      },
      {
        id: 7,
        name: 'Supplier contract',
        icon: <HouseIcon />
      },
      {
        id: 8,
        name: 'Corporate',
        icon: <EntitiesIcon />
      },
      {
        id: 9,
        name: 'Group Norms',
        icon: <HouseIcon />
      },
      {
        id: 10,
        name: 'Real estate contracts',
        icon: <HouseIcon />
      }
    ]
  }
]