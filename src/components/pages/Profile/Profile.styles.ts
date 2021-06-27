import styled from 'styled-components';

import { colors } from 'styles';

export const ProfileLabel = styled.p`
  color: ${colors.mutedParagraph};
`;

export const ProfileHeading = styled.h3`
  font-size: 1.6rem;
  color: ${colors.accentDark};
  margin-top: 0;
`;

export const FileAttachment = styled.p`
  background-color: ${colors.surface};
  border-radius: 4px;
  padding: 12px 8px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  
  &:before {
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-image-fill' viewBox='0 0 16 16'%3E%3Cpath d='M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z'/%3E%3C/svg%3E");
    margin-right: 8px;
  }
`;

export const Correspondant = styled.p`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.surface};
  padding: 12px 16px;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 8px;
  margin-top: 0;
  gap: 36px;
  
  div {
    display: flex;
    gap: 36px;
  }
`;

const Button = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    color: ${colors.accentLight};
  }
`;

export const MessageButton = styled(Button)`
  &:before {
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chat-left' viewBox='0 0 16 16'%3E%3Cpath d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/%3E%3C/svg%3E");
    margin-right: 8px;
  }
`;

export const ProfileButton = styled(Button)`
  &:before {
    display: inline-block;
    
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-person' viewBox='0 0 16 16'%3E%3Cpath d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'/%3E%3C/svg%3E");;
    margin-right: 8px;
  }
`;