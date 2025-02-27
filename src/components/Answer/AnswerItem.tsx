import * as S from '@/routes/Answer/Answer.style';

export interface AnswerItemProps {
	questionNumber: number;
	isCorrect: boolean;
	questionText: string;
	options: string[];
	userAnswer: string;
	explanation: {
		correct: string[];
		wrong: string[];
	};
}

function AnswerItem({ questionNumber, isCorrect, questionText, options, userAnswer, explanation }: AnswerItemProps) {
	return (
		<>
			<S.AnswerContainer>
				<S.QuestionNumber>
					문제 {questionNumber} {isCorrect ? '⭕' : '❌'}
				</S.QuestionNumber>
				<S.QuestionText>{questionText}</S.QuestionText>
				<S.OptionsList>
					{options.map((option, index) => (
						<S.OptionItem key={index}>{option}</S.OptionItem>
					))}
				</S.OptionsList>
			</S.AnswerContainer>
			<S.AnswerSection>
				<S.AnswerLabel>내가 선택한 선지</S.AnswerLabel>
				<S.UserAnswer>{userAnswer}</S.UserAnswer>
			</S.AnswerSection>
			<S.ExplanationSection>
				<S.ExplanationLabel>AI 답안지</S.ExplanationLabel>
				<S.ExplanationContent>
					<S.CorrectAnswer>[정답 해설]</S.CorrectAnswer>
					<S.ExplanationText>
						{explanation.correct.map((text, index) => (
							<div key={index}>{text}</div>
						))}
					</S.ExplanationText>
					<S.WrongAnswers>[오답 해설]</S.WrongAnswers>
					<S.ExplanationText>
						{explanation.wrong.map((text, index) => (
							<div key={index}>{text}</div>
						))}
					</S.ExplanationText>
				</S.ExplanationContent>
			</S.ExplanationSection>
		</>
	);
}

export default AnswerItem;
