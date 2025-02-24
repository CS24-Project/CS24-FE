// import * as S from './Question.style';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Choice {
	number: number;
	content: string;
}

interface QuestionData {
	id: number;
	content: string;
	hint: string;
	choices: Choice[];
}

const questionData: QuestionData[] = [
	{
		id: 1,
		content: '다음 중 운영체제(OS)에서 멀티프로세싱(Multiprocessing)에 대한 설명으로 올바른 것은?',
		hint: '이 방식은 여러 개의 코어를 활용하는 것이므로, 단일 코어에서 여러 프로세스를 실행하는 방식은 아닙니다.',
		choices: [
			{ number: 1, content: '멀티프로세싱은 하나의 CPU에서 여러 개의 스레드를 실행하는 기법이다.' },
			{ number: 2, content: '멀티프로세싱은 하나의 프로세스 내에서 여러 개의 스레드를 실행하는 방식이다.' },
			{ number: 3, content: '멀티프로세싱은 여러 개의 CPU 또는 코어에서 여러 개의 프로세스를 실행하는 방식이다.' },
			{ number: 4, content: '멀티프로세싱은 프로세스 간의 메모리 공유가 불가능하다.' },
		],
	},
	{
		id: 2,
		content: '다음 중 운영체제(OS)에서 스레드(Thread)에 대한 설명으로 올바른 것은?',
		hint: '스레드는 프로세스의 실행 단위로, 여러 개의 스레드가 하나의 프로세스 내에서 동시에 실행될 수 있습니다.',
		choices: [
			{ number: 1, content: '스레드는 프로세스와는 독립적으로 실행되는 단위이다.' },
			{ number: 2, content: '스레드는 프로세스 내에서만 실행될 수 있다.' },
			{ number: 3, content: '스레드는 프로세스보다 더 많은 자원을 소모한다.' },
			{ number: 4, content: '스레드는 메모리를 공유하지 않는다.' },
		],
	},
	{
		id: 3,
		content: '다음 중 운영체제(OS)에서 컨텍스트 스위칭(Context Switching)에 대한 설명으로 올바른 것은?',
		hint: '컨텍스트 스위칭은 CPU가 현재 실행 중인 프로세스의 상태를 저장하고, 다음에 실행할 프로세스의 상태를 불러오는 과정입니다.',
		choices: [
			{ number: 1, content: '컨텍스트 스위칭은 프로세스 간의 메모리 공유를 의미한다.' },
			{ number: 2, content: '컨텍스트 스위칭은 CPU가 동시에 여러 프로세스를 실행하는 것이다.' },
			{ number: 3, content: '컨텍스트 스위칭은 프로세스의 상태를 저장하고 불러오는 과정이다.' },
			{ number: 4, content: '컨텍스트 스위칭은 프로세스 간의 통신을 의미한다.' },
		],
	},
];

const Container = styled.div`
	height: 100vh;
	overflow-y: auto;
	border: 1px solid #ccc;
	padding: 10px;
`;

const MessageBubble = styled.div<{ isQuestion: boolean }>`
	background-color: ${({ isQuestion }) => (isQuestion ? '#f1f1f1' : '#e1ffe1')};
	padding: 10px;
	border-radius: 10px;
	margin: 5px 0;
`;

const QuestionComponent = () => {
	const [answers, setAnswers] = useState<{ questionId: number; answer: string }[]>([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [tempQuestionIndex, setTempQuestionIndex] = useState(0);
	const [visibleQuestionIndexes, setVisibleQuestionIndexes] = useState<number[]>([]);
	const [isResolving, setIsResolving] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement>(null);

	const handleSelectAnswer = (choice: Choice) => {
		setAnswers(prev => {
			const existingAnswer = prev.find(answer => answer.questionId === questionData[currentQuestionIndex].id);
			if (existingAnswer) {
				return prev.map(answer =>
					answer.questionId === existingAnswer.questionId
						? { questionId: answer.questionId, answer: choice.content }
						: answer,
				);
			} else {
				return [...prev, { questionId: questionData[currentQuestionIndex].id, answer: choice.content }];
			}
		});

		if (isResolving) {
			setIsResolving(false);
			setCurrentQuestionIndex(tempQuestionIndex);
		} else {
			if (currentQuestionIndex < questionData.length - 1) {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
			}
		}
	};

	const handleReset = (selectedQuestion: number) => {
		setTempQuestionIndex(currentQuestionIndex);
		setAnswers(prev =>
			prev.map(answer =>
				answer.questionId === selectedQuestion ? { questionId: answer.questionId, answer: '다시 풀기 중...' } : answer,
			),
		);
		setCurrentQuestionIndex(selectedQuestion - 1);
		setIsResolving(true);
	};

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [answers, currentQuestionIndex]);

	useEffect(() => {
		if (!visibleQuestionIndexes.includes(currentQuestionIndex)) {
			setVisibleQuestionIndexes(prev => [...prev, currentQuestionIndex]);
		}
	}, [currentQuestionIndex]);

	return (
		<Container ref={chatContainerRef}>
			{questionData.map((question, index) => (
				<React.Fragment key={question.id}>
					{visibleQuestionIndexes.includes(index) && (
						<MessageBubble isQuestion={true}>
							<h4>질문 {index + 1}</h4>
							<p>{question.content}</p>
						</MessageBubble>
					)}
					{answers.map(
						answer =>
							answer.questionId === question.id && (
								<MessageBubble isQuestion={false} key={answer.questionId}>
									<h4>질문 {index + 1}</h4>
									<p>{answer.answer}</p>
									{answer.answer !== '다시 풀기 중...' && (
										<button onClick={() => handleReset(answer.questionId)}>다시 풀기</button>
									)}
								</MessageBubble>
							),
					)}
				</React.Fragment>
			))}

			<div>
				<h3>문제{currentQuestionIndex}</h3>
				{questionData[currentQuestionIndex].choices.map(choice => (
					<button key={choice.number} onClick={() => handleSelectAnswer(choice)}>
						{choice.content}
					</button>
				))}
			</div>
		</Container>
	);
};

export default QuestionComponent;
