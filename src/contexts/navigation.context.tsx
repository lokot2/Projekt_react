import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type NavigationContextType = {
  currentMenuItem: number,
  setCurrentMenuItem: (itemId: number) => void
};

export const NavigationContext = React.createContext<NavigationContextType>({
  currentMenuItem: 1,
  setCurrentMenuItem: () => {}
});

interface Props {
  children: React.ReactNode;
}

const NavigationContextProvider: React.FC<Props> = ({ children }) => {
  const history = useHistory();
  const [currentMenuItem, setCurrentMenuItemId] = useState<number>(1);

  const setCurrentMenuItem = (itemId: number) => {
    setCurrentMenuItemId(itemId);
    if (itemId === 1) {
      history.push('/');
    } else if (itemId >= 2 && itemId <= 5) {
      history.push('/entities');
    } else if (itemId >= 6 && itemId <= 10) {
      history.push('/workspaces');
    }
  }

  const value = {currentMenuItem, setCurrentMenuItem}

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
