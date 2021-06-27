import React, { useState } from 'react';

type FullscreenContextType = {
  isFullscreenActive: boolean,
  setFullscreenActive: (active: boolean) => void
};

export const FullscreenContext = React.createContext<FullscreenContextType>({
  isFullscreenActive: false,
  setFullscreenActive: () => {}
});

interface Props {
  children: React.ReactNode;
}

const FullscreenContextProvider: React.FC<Props> = ({ children }) => {
  const [isFullscreenActive, setFullscreenActive] = useState<boolean>(false);

  const value = {isFullscreenActive, setFullscreenActive}

  return (
    <FullscreenContext.Provider value={value}>
      {children}
    </FullscreenContext.Provider>
  );
};

export default FullscreenContextProvider;
