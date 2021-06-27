import React from 'react';

import WorkspacesHero from "./components/WorkspacesHero/WorkspacesHero";
import WorkspacesTiles from "./components/WorkspacesTiles/WorkspacesTiles";
import LatestUpdates from "./components/LatestUpdates/LatestUpdates";

const Workspaces: React.FC = () => {
  return (
    <div>
      <WorkspacesHero />
      <WorkspacesTiles />
      <LatestUpdates />
    </div>
  )
}

export default Workspaces;