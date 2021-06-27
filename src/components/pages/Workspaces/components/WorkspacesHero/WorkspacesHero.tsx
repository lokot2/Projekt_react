import React from 'react';

import workspacesHeroImage from 'assets/images/workspaces.jpg';
import { Wrapper, WorkspacesHeroContent } from './WorkspacesHero.styles';
import { Entities2Icon } from 'styles';

const WorkspacesHero: React.FC = () => {
  return (
    <Wrapper>
      <img src={workspacesHeroImage} alt=""/>

      <WorkspacesHeroContent>
        <Entities2Icon />

        <div>
          <h4>
            Corporate holdings
          </h4>
          <p>
            Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.
          </p>
        </div>
      </WorkspacesHeroContent>
    </Wrapper>
  );
}

export default WorkspacesHero;