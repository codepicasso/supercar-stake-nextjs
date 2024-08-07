import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ChatMessageMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        width: 100%;
        display: grid;
        grid-template-columns: 30px auto;
        gap: ${theme.spacing(2.5)};
    `}
`;

export const ChatMessageAvatar = styled.img<{ theme?: Theme }>`
  width: 30px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const ChatMessageTextContainer = styled.div<{ theme?: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  align-items: flex-start;
`;

export const ChatMessageText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        border: 1px solid ${theme.palette.default.main};
        border-radius: ${theme.spacing(5)};
        font-size: 12px;
        color: ${theme.palette.common.gray[5]};
        height: 100%;
        width: auto;
        padding: ${theme.spacing(2)};
        display: flex;
        align-items: center;
    `}
`;

export const ChatMessageTime = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        font-size: 10px;
        color: ${theme.palette.common.gray[5]};
        position: absolute;
        top: -15px;
    `}
`;
