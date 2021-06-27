import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "components/pages/Home/Home";
import Profile from "components/pages/Profile/Profile";
import Entities from 'components/pages/Entities/Entities';
import Workspaces from 'components/pages/Workspaces/Workspaces';

import UserContextProvider from "contexts/profile.context";
import NavigationContextProvider from "contexts/navigation.context";
import { NavBar, Sidebar } from 'components';
import { FullscreenContext } from "contexts/fullscreen.context";

import { WebsiteContent } from './App.styles';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  const { isFullscreenActive } = useContext(FullscreenContext);

  return (
    <UserContextProvider>
      <Router>
        <NavigationContextProvider>
            <GlobalStyle />
            <NavBar />
            <WebsiteContent isFullscreen={isFullscreenActive}>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/entities">
                  <Entities />
                </Route>
                <Route path="/workspaces">
                  <Workspaces />
                </Route>
              </Switch>
            </WebsiteContent>
        </NavigationContextProvider>
      </Router>
    </UserContextProvider>
  )
}

export default App;
