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
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const HeaderContainer = styled.div`
	background-color: ${theme.COLOR.InnerBackground};
	display: flex;
	height: 44px;
	align-items: center;
	z-index: 1000;
	padding: 0 16px;
`;

export const HeaderLogo = styled.img`
	width: 24px;
	height: 22px;
	margin-right: 8px;
	cursor: pointer;
`;

export const HeaderTitle = styled.div`
	flex: 1;
	text-align: center;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 14px;
	font-weight: 400;
`;

export const ScrollableContainer = styled.div<{ bottomSheetHeight: number }>`
	height: ${({ bottomSheetHeight }) => `calc(100% - ${bottomSheetHeight}px)`};
	overflow-y: auto;
	margin: 0 16px;
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
`;

export const MessageContainer = styled.div`
	margin-bottom: 4px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const ReslovingButton = styled.text`
	font-size: 14px;
	color: ${theme.COLOR.Link};
	cursor: pointer;
	text-decoration: underline;
`;

export const BottomSheet = styled.div<{ isBottomSheetVisible: boolean }>`
	height: ${({ isBottomSheetVisible }) => (isBottomSheetVisible ? 'auto' : '55px')};
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${theme.COLOR.InnerBackground};
	padding: 16px;
	box-shadow: 0 -2px 10px ${theme.COLOR.Neutral_2_Gray};
	border-radius: 10px 10px 0 0;
	z-index: 1000;
	overflow: hidden;

	${({ isBottomSheetVisible }) =>
		!isBottomSheetVisible &&
		`
        overflow: auto;
    `}
`;

export const BottomSheetHeader = styled.div`
	display: flex;
	align-items: top;
	justify-content: space-between;
	margin: 8px;
`;

export const BottomSheetTitle = styled.text`
	display: block;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 16px;
	font-weight: 500;
`;

export const BottomSheetButton = styled.div`
	cursor: pointer;
`;

export const AnswerOptionsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 8px 16px;
`;

export const AnswerOption = styled.div`
	display: flex;
	align-items: top;
	gap: 4px;
	padding: 16px 10px 16px 12px;
	border-radius: 10px;
	border: 1px solid ${theme.COLOR.Neutral_3_Gray};
	cursor: pointer;
`;

export const AnswerOptionNumber = styled.div`
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${theme.COLOR.Neutral_3_Gray};
	border-radius: 3px;
	color: ${theme.COLOR.InnerBackground};
	font-size: 14px;
	font-weight: 500;
`;

export const AnswerOptionContent = styled.div`
	background-color: ${theme.COLOR.Neutral_1};
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 14px;
	font-weight: 500;
`;

export const HintButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
	cursor: pointer;
	border-radius: 10px;
	border: 1px solid ${theme.COLOR.Neutral_3_Gray};
	padding: 16px;
	background-color: ${theme.COLOR.InnerBackground};
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 12px;
	font-weight: 500;
`;

export const HintContainer = styled.div<{ isVisible: boolean; bottomSheetHeight: number }>`
	position: absolute;
	width: calc(100% - 32px); /* 32px을 빼서 너비 조정 */
	left: 50%;
	transform: translateX(-50%);
	bottom: calc(${({ bottomSheetHeight }) => bottomSheetHeight}px + 16px);
	background-color: ${theme.COLOR.InnerBackground};
	color: ${theme.COLOR.Neutral_3_Gray};
	border: 1px solid ${theme.COLOR.Primary};
	padding: 16px;
	border-radius: 10px;
	transition:
		bottom 0.3s ease-in-out,
		opacity 0.3s ease-in-out;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

export const HintHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`;

export const HintTitle = styled.div`
	display: flex;
	align-items: center;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 16px;
	font-weight: 500;
`;

export const HintImage = styled.img`
	width: 24px;
	height: auto;
	margin-right: 8px;
`;

export const HintTimer = styled.div`
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 12px;
	font-weight: 400;
`;
