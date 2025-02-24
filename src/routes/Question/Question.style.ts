import styled from 'styled-components';
import { theme } from '@styles/theme';

export const OuterContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${theme.COLOR.OuterBackground};
	display: flex;
	justify-content: center;
`;

export const InnerContainer = styled.div`
	width: 760px;
	height: 100vh;
	background-color: ${theme.COLOR.InnerBackground};
	overflow-y: auto;
	padding: 10px;
`;

export const MessageBubble = styled.div<{ isQuestion: boolean }>`
	background-color: ${({ isQuestion }) => (isQuestion ? theme.COLOR.Primary : theme.COLOR.InnerBackground)};
	border: 1px solid ${({ isQuestion }) => (isQuestion ? theme.COLOR.InnerBackground : theme.COLOR.Primary)};
	border-radius: 10px;
	padding: 16px 12px;
    margin: 4px 0px;
	max-width: 55%;
    min-width: 284px;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 14px;
	font-weight: 400;
`;

export const MessageTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
`

export const MessageContainer = styled.div`
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ReslovingButton = styled.text`
	font-size: 14px;
	color: #0077ff;
	cursor: pointer;
	text-decoration: underline;
`;
