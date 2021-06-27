import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { useHistory } from 'react-router-dom';

import { Entities2Icon, PeopleIcon } from 'styles';
import { WorkspaceCard, WorkspacesWrapper, WorkspaceCardPhoto, WorkspaceCardHeading, WorkspaceIcon, WorkspaceCardMeta, WorkspaceCardDate } from './WorkspacesSlider.styles';
import 'pure-react-carousel/dist/react-carousel.es.css';

const WorkspacesSlider: React.FC = () => {
  const history = useHistory();

  const goToWorkspaces = () => {
    history.push('/workspaces');
  }

  return (
    <WorkspacesWrapper>
      <h2>Workspaces</h2>

      <CarouselProvider
        naturalSlideWidth={250}
        naturalSlideHeight={250}
        totalSlides={5}
        visibleSlides={4}
      >
        <Slider>
          <Slide index={0}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/id/237/200/300'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract 1</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  521 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 8 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={1}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/200/300?grayscale'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract 2</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  33 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 3 days ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={2}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/200/300/?blur'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract 3</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  87 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 2 months ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={3}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/id/870/200/300?grayscale&blur=2'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract 4</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  12 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 1 months ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>

          <Slide index={4}>
            <WorkspaceCard onClick={goToWorkspaces}>
              <WorkspaceCardPhoto src={'https://picsum.photos/200/300.jpg'} />
              <WorkspaceCardHeading>
                <WorkspaceIcon>
                  <Entities2Icon />
                </WorkspaceIcon>
                <h4>Client contract 5</h4>
              </WorkspaceCardHeading>
              <WorkspaceCardMeta>
                <span>
                  <Entities2Icon />
                  Contract
                </span>

                <span>
                  <PeopleIcon />
                  64 users
                </span>
              </WorkspaceCardMeta>
              <WorkspaceCardDate>
                Last update 5 months ago
              </WorkspaceCardDate>
            </WorkspaceCard>
          </Slide>
        </Slider>
      </CarouselProvider>
    </WorkspacesWrapper>
  )
}

export default WorkspacesSlider;