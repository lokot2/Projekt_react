import styled from 'styled-components';

import { Card } from 'styles/shared';

export const GridWrapper = styled(Card)`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  min-height: unset;
  height: 180px;
  column-gap: 24px;
  p {
    margin: 0;
  }
`;

export const ProfileGeneralDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100px;
    max-width: 100%;
    height: 100px;
    border-radius: 100%;
    
    margin-bottom: 10px;
  }
`;

export const ProfileContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 14px;
`;