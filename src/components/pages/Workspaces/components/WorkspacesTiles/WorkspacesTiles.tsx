import React, { useState } from 'react';

import { Excerpt, Tile, TilesWrapper } from './WorkspacesTiles.styles';
import { EntitiesIcon, CalendarIcon, ShareIcon } from "styles";

const WorkspacesTiles: React.FC = () => {
    return (
      <div>
        <Excerpt>
          <p>Start working on corporate matters</p>

        </Excerpt>

        <TilesWrapper>
          <Tile><EntitiesIcon />
            <h4>Explore your <strong>entities</strong></h4>
            <p>Take a few minutes to look around at the most important elements and specificities of your entities</p>
          </Tile>

          <Tile><ShareIcon />
            <h4>Structure the <strong>ownership</strong></h4>
            <p>Get a clear view of ownership by looking at the relations between individuals and entities.</p>
          </Tile>

          <Tile><CalendarIcon />
            <h4>Define the <strong>calendar</strong></h4>
            <p>Prepare future events by creating detailed plans around the life of your entity.</p>
          </Tile>
        </TilesWrapper>
      </div>
    )
};

export default WorkspacesTiles;