import * as S from '@routes/Question/Question.style';
import React from 'react';
import logo from '@assets/logos/main_logo.png';
import bottomsheetHide from '@assets/icons/bottomsheet_hide.svg';
import bottomsheetShow from '@assets/icons/bottomsheet_show.svg';
import { useQuestion } from '@/hooks/question/useQuestion';
import { questionData } from '@routes/Question/questionData';

const QuestionComponent = () => {
	const {
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
		chatContainerRef,
		isBottomSheetVisible,
		bottomSheetRef,
		bottomSheetHeight,
		isToastEnabled,
		remainingTime,
		isBottomSheetEnabled,
		isSubmitEnabled,
	} = useQuestion();

	return (
		<S.OuterContainer>
			<S.InnerContainer>
				<S.HeaderContainer>
					<S.HeaderLogo src={logo} onClick={handleLogoClick} />
					<S.HeaderTitle>문제 풀이</S.HeaderTitle>
				</S.HeaderContainer>

				<S.ScrollableContainer style={{ height: `${scrollHeight}px` }} ref={chatContainerRef}>
					{questionData.map((question, index) => (
						<React.Fragment key={question.id}>
							{visibleQuestionIndexes.includes(index) && (
								<S.MessageBubble isQuestion={true}>
									<S.MessageTitle>질문 {index + 1}</S.MessageTitle>
									{question.content}
									<S.HintButton onClick={showToast} isBottomSheetEnabled={isBottomSheetEnabled}>
										힌트보기
									</S.HintButton>
								</S.MessageBubble>
							)}
							{answers.map(
								answer =>
									answer.questionId === question.id && (
										<S.MessageContainer key={answer.questionId}>
											<S.MessageBubble isQuestion={false}>
												<S.MessageTitle>
													{answer.content === '문제의 정답을 다시 골라보세요.'
														? '다시 풀기'
														: `정답 ${index + 1} - ${answer.answer}`}
												</S.MessageTitle>
												{answer.content}
											</S.MessageBubble>
											<S.ReslovingButton
												onClick={() => handleReset(answer.questionId)}
												isBottomSheetEnabled={isBottomSheetEnabled}>
												다시 풀기
											</S.ReslovingButton>
										</S.MessageContainer>
									),
							)}
						</React.Fragment>
					))}
					{isBottomSheetEnabled && (
						<S.MessageBubble isQuestion={true}>
							<S.MessageTitle>답안 제출 완료</S.MessageTitle>
							오늘의 질문을 다 풀었어요!<br/>AI의 답안지 설명을 확인해볼까요?
							<S.AnswerButton onClick={handleAnswerClick}>AI의 답안지 설명 보러가기</S.AnswerButton>
						</S.MessageBubble>
					)}
				</S.ScrollableContainer>

				<S.HintContainer isHintEnabled={isToastEnabled} bottomSheetHeight={bottomSheetHeight}>
					<S.HintHeader>
						<S.HintTitle>
							<S.HintImage src={logo} />
							힌트보기
						</S.HintTitle>
						<S.HintTimer>{remainingTime}초 후 창이 닫힙니다.</S.HintTimer>
					</S.HintHeader>
					{questionData[currentQuestionIndex].hint}
				</S.HintContainer>

				<S.BottomSheet
					isBottomSheetVisible={isBottomSheetVisible}
					isBottomSheetEnabled={isBottomSheetEnabled}
					ref={bottomSheetRef}>
					<S.BottomSheetHeader>
						{isSubmitEnabled ? (
							<p>문제 제출하기</p>
						) : (
							<S.BottomSheetTitle>문제 {currentQuestionIndex + 1}</S.BottomSheetTitle>
						)}

						<S.BottomSheetButton onClick={toggleBottomSheet}>
							<img src={isBottomSheetVisible ? bottomsheetHide : bottomsheetShow} />
						</S.BottomSheetButton>
					</S.BottomSheetHeader>
					{isSubmitEnabled ? (
						<S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
					) : (
						<S.AnswerOptionsContainer>
							{questionData[currentQuestionIndex].choices.map(choice => (
								<S.AnswerOption key={choice.number}>
									<S.AnswerOptionNumber>{choice.number}</S.AnswerOptionNumber>
									<S.AnswerOptionContent onClick={() => handleSelectAnswer(choice)}>
										{choice.content}
									</S.AnswerOptionContent>
								</S.AnswerOption>
							))}
						</S.AnswerOptionsContainer>
					)}
				</S.BottomSheet>
			</S.InnerContainer>
		</S.OuterContainer>
	);
};

export default QuestionComponent;
