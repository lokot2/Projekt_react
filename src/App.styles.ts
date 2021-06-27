import styled, { css } from 'styled-components';

import { media } from 'styles';
import { contained, wider } from 'styles/shared';

export const WebsiteContent = styled.div<{isFullscreen?: boolean}>`
  ${contained};
  
  display: grid;
  column-gap: 20px;
  grid-template-columns: 100%;
  padding: 0 20px;
  
  ${media.md} {
    grid-template-columns: 270px auto;

    ${({isFullscreen}) => isFullscreen && css`
      grid-template-columns: 100%;
      & > div:first-of-type {
        display: none;
      }
      ${wider};
    `}
  }
`;