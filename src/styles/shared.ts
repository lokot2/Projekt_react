import styled, { css } from 'styled-components';

import { colors, shadows } from 'styles';

export const contained = css`
  max-width: 1300px;
  margin: 0 auto;
`;
export const wider = css`
  max-width: 90vw;
  margin: 0 auto;
`;

export const Card = styled.div`
  color: ${colors.mutedMedium};
  box-shadow: ${shadows.card};
  background-color: ${colors.surface};
  padding: 24px 12px;
  margin-bottom: 24px;
  border-radius: 2px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 16px;
  thead {
    font-weight: bold;
    color: ${colors.accentDark};
    border-bottom: 1px solid ${colors.accentDark};
  }
  td {
    text-overflow: ellipsis;
  }
`;