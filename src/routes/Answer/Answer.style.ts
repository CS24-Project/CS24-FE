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
	min-height: 44px;
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
	padding-right: 32px;
`;

export const ScrollableContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	padding: 0 16px;
	padding-top: 8px;
`;

export const SolvedInfoContainer = styled.div`
	padding: 8px;
	margin-bottom: 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 560px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
	}
`;

export const SolvedDate = styled.span`
	font-size: 1rem;
	color: #666;
`;

export const ScoreInfo = styled.span`
	font-size: 1rem;
	color: #666;
`;

export const AnswerContainer = styled.div`
	background-color: ${theme.COLOR.InnerBackground};
	color: ${theme.COLOR.Neutral_3_Gray};
	border: 1px solid ${theme.COLOR.Primary};
	padding: 16px;
	border-radius: 10px;
	margin-bottom: 24px;
`;

export const QuestionNumber = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const QuestionText = styled.p`
	font-size: 1.1rem;
	margin-bottom: 1.5rem;
`;

export const OptionsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const OptionItem = styled.div`
	padding: 1rem;
	border: 1px solid #ddd;
	border-radius: 8px;
`;

export const AnswerSection = styled.div`
	margin-bottom: 2rem;
`;

export const AnswerLabel = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const UserAnswer = styled.div`
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
`;

export const ExplanationSection = styled.div`
	margin-bottom: 2rem;
`;

export const ExplanationLabel = styled.h3`
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const ExplanationContent = styled.div`
	padding: 1rem;
	background-color: #f8f9fa;
	border-radius: 8px;
`;

export const CorrectAnswer = styled.h4`
	font-weight: bold;
	margin-bottom: 1rem;
`;

export const WrongAnswers = styled.h4`
	font-weight: bold;
	margin: 1rem 0;
`;

export const ExplanationText = styled.p`
	white-space: pre-line;
	line-height: 1.6;
`;
