import styled, { css } from 'styled-components';

import { media, colors } from 'styles';

import { Props } from './NavIcon';

export const StyledIcon = styled.div<Props>`
  position: relative;

  span {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${colors.link};
    color: white;
    font-size: 1rem;
    padding: .3rem .8rem;
    border-radius: 25px;
  }

  ${media.lg} {
    ${({hideLg}) => hideLg && css`display: none`};
  }
`;