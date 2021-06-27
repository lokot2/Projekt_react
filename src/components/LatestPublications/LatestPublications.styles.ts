import styled from 'styled-components';
import { colors, shadows, media } from 'styles';

export const LatestPublicationsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  
  ${media.xl} {
    grid-template-columns: 300px auto;
    height: 350px;
  }
  
  background-color: ${colors.surface};
  box-shadow: ${shadows.card};
  border-radius: 4px;
`;

export const CoverPhotoWrapper = styled.div<{photoSrc?: string}>`
  background: url(${({photoSrc}) => photoSrc}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  border-radius: 4px 0 0 4px;

  color: #fff;

  h4, p {
    margin: 0;
    color: #fff;
  }
  h4 {
    margin-bottom: 16px;
    font-size: 2rem;
  }
`;

export const LatestPublicationsContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  
  h3 {
    margin: 0;
    margin-bottom: 12px;
  }
  
  a {
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 0;
  }
`;

export const PublicationsList = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 8px;
  
  img {
    width: 60px;
    height: 60px;
    border-radius: 4px;
  }
  
  h5 {
    margin: 0;
    cursor: pointer;
  }
`;

export const Metadata = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  margin-top: 24px;
  
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    
    &:first-child {
      color: ${colors.mutedParagraph};
    }
  }

  img {
    border-radius: 100px;
    height: 20px;
    width: 20px;
  }
`;