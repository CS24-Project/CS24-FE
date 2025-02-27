import * as S from '@/routes/Question/Question.style';
import React from 'react';
import { useQuestion } from '@/hooks/question/useQuestion';
import Header from './Header';
import MessageBubble from './MessageBubble';
import BottomSheet from './BottomSheet';
import HintContainer from './HintContainer';
import { questionData } from '@/routes/Question/questionData';

const QuestionComponent: React.FC = () => {
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
				<Header onLogoClick={handleLogoClick} />

				<S.ScrollableContainer style={{ height: `${scrollHeight}px` }} ref={chatContainerRef}>
					{questionData.map((question, index) => (
						<React.Fragment key={question.id}>
							{visibleQuestionIndexes.includes(index) && (
								<MessageBubble isQuestion={true} title={`질문 ${index + 1}`} content={question.content}>
									<S.HintButton onClick={showToast} isBottomSheetEnabled={isBottomSheetEnabled}>
										힌트보기
									</S.HintButton>
								</MessageBubble>
							)}
							{answers.map(
								answer =>
									answer.questionId === question.id && (
										<S.MessageContainer key={answer.questionId}>
											<MessageBubble
												isQuestion={false}
												title={
													answer.content === '문제의 정답을 다시 골라보세요.'
														? '다시 풀기'
														: `정답 ${index + 1} - ${answer.answer}`
												}
												content={answer.content}
											/>
											<S.ReslovingButton
												isBottomSheetEnabled={isBottomSheetEnabled}
												onClick={() => handleReset(answer.questionId)}>
												다시 풀기
											</S.ReslovingButton>
										</S.MessageContainer>
									),
							)}
						</React.Fragment>
					))}
					{isBottomSheetEnabled && (
						<MessageBubble
							isQuestion={true}
							title="답안 제출 완료"
							content="오늘의 질문을 다 풀었어요! AI의 답안지 설명을 확인해볼까요?">
							<S.AnswerButton onClick={handleAnswerClick}>AI의 답안지 설명 보러가기</S.AnswerButton>
						</MessageBubble>
					)}
				</S.ScrollableContainer>

				<HintContainer
					isEnabled={isToastEnabled}
					hint={questionData[currentQuestionIndex].hint}
					remainingTime={remainingTime}
					bottomSheetHeight={bottomSheetHeight}
				/>

				<BottomSheet
					isBottomSheetVisible={isBottomSheetVisible}
					isBottomSheetEnabled={isBottomSheetEnabled}
					isSubmitEnabled={isSubmitEnabled}
          questionNumber={currentQuestionIndex + 1}
					onToggle={toggleBottomSheet}
					onSubmit={handleSubmit}
					choices={questionData[currentQuestionIndex].choices}
					onSelectAnswer={handleSelectAnswer}
          bottomSheetRef={bottomSheetRef}
				/>
			</S.InnerContainer>
		</S.OuterContainer>
	);
};

export default QuestionComponent;
