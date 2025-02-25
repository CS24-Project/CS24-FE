import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Choice, questionData } from '@routes/Question/questionData';

export const useQuestion = () => {
	const [scrollHeight, setScrollHeight] = useState(window.innerHeight);
	const [answers, setAnswers] = useState<{ questionId: number; answer: number; content: string }[]>([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [tempQuestionIndex, setTempQuestionIndex] = useState(0);
	const [visibleQuestionIndexes, setVisibleQuestionIndexes] = useState<number[]>([]);
	const [isResolving, setIsResolving] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(true);
	const bottomSheetRef = useRef<HTMLDivElement | null>(null);
	const [bottomSheetHeight, setBottomSheetHeight] = useState(0);
	const [isToastEnabled, setIsToastEnabled] = useState(true);
	const [remainingTime, setRemainingTime] = useState(5);
	const [countdownInterval, setCountdownInterval] = useState<number | null>(null);
	const navigate = useNavigate();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isBottomSheetEnabled, setIsBottomSheetEnabled] = useState(false);
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

	const handleLogoClick = () => {
		navigate('/main');
	};

	const handleAnswerClick = () => {
		navigate('/answer');
	};

	const handleSubmit = () => {
		setIsSubmitted(true);
		setIsBottomSheetEnabled(true);
	};

	const handleSelectAnswer = (choice: Choice) => {
		setAnswers(prev => {
			const existingAnswer = prev.find(answer => answer.questionId === questionData[currentQuestionIndex].id);
			if (existingAnswer) {
				return prev.map(answer =>
					answer.questionId === existingAnswer.questionId
						? { questionId: answer.questionId, answer: choice.number, content: choice.content }
						: answer,
				);
			} else {
				return [
					...prev,
					{ questionId: questionData[currentQuestionIndex].id, answer: choice.number, content: choice.content },
				];
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
				answer.questionId === selectedQuestion
					? { questionId: answer.questionId, answer: answer.answer, content: '문제의 정답을 다시 골라보세요.' }
					: answer,
			),
		);
		setCurrentQuestionIndex(selectedQuestion - 1);
		setIsResolving(true);
	};

	const showToast = () => {
		if (countdownInterval) {
			clearInterval(countdownInterval);
		}

		setIsToastEnabled(false);
		setRemainingTime(5);
		setTimeout(() => {
			setIsToastEnabled(true);
		}, 5000);

		const newCountdownInterval = window.setInterval(() => {
			setRemainingTime(prev => {
				if (prev <= 1) {
					clearInterval(newCountdownInterval);
					setCountdownInterval(null);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		setCountdownInterval(newCountdownInterval);
	};

	const toggleBottomSheet = () => {
		setIsBottomSheetVisible(prev => !prev);
	};

	useEffect(() => {
		const newHeight = window.innerHeight - bottomSheetHeight - 44;
		setScrollHeight(newHeight);
	}, [isBottomSheetVisible, bottomSheetHeight]);

	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [answers, isBottomSheetVisible, bottomSheetHeight]);

	useEffect(() => {
		if (!visibleQuestionIndexes.includes(currentQuestionIndex)) {
			setVisibleQuestionIndexes(prev => [...prev, currentQuestionIndex]);
		}
	}, [currentQuestionIndex]);

	useEffect(() => {
		if (bottomSheetRef.current) {
			setBottomSheetHeight(bottomSheetRef.current.offsetHeight);
		}
	}, [
		currentQuestionIndex,
		isBottomSheetVisible,
		bottomSheetRef.current,
		isResolving,
		isSubmitEnabled,
		isBottomSheetEnabled,
	]);

	useEffect(() => {
		if (isResolving) {
			setIsBottomSheetEnabled(!isResolving);
		}
	}, [isResolving]);

	useEffect(() => {
		setIsSubmitEnabled(!isResolving && answers.length !== currentQuestionIndex);
	}, [isResolving, answers, currentQuestionIndex]);

	return {
		scrollHeight,
		answers,
		currentQuestionIndex,
		handleLogoClick,
		handleAnswerClick,
		handleSubmit,
		handleSelectAnswer,
		handleReset,
		showToast,
		toggleBottomSheet,
		visibleQuestionIndexes,
		isResolving,
		chatContainerRef,
		isBottomSheetVisible,
		bottomSheetRef,
		bottomSheetHeight,
		isToastEnabled,
		remainingTime,
		isSubmitted,
		isBottomSheetEnabled,
		isSubmitEnabled,
	};
};
