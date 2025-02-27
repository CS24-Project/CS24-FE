import * as S from '@/routes/Question/Question.style';
import bottomsheetHide from '@assets/icons/bottomsheet_hide.svg';
import bottomsheetShow from '@assets/icons/bottomsheet_show.svg';
import React from 'react';

interface Choice {
  number: number;
  content: string;
}

interface BottomSheetProps {
  isBottomSheetVisible: boolean;
  isBottomSheetEnabled: boolean;
  isSubmitEnabled: boolean;
  questionNumber: number;
  onToggle: () => void;
  onSubmit: () => void;
  choices: Choice[];
  onSelectAnswer: (choice: Choice) => void;
  bottomSheetRef: React.RefObject<HTMLDivElement>;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isBottomSheetVisible,
  isBottomSheetEnabled,
  isSubmitEnabled,
  questionNumber,
  onToggle,
  onSubmit,
  choices,
  onSelectAnswer,
  bottomSheetRef,
}) => (
  <S.BottomSheet 
    isBottomSheetVisible={isBottomSheetVisible} 
    isBottomSheetEnabled={isBottomSheetEnabled}
    ref={bottomSheetRef}
  >
    <S.BottomSheetHeader>
      {isSubmitEnabled ? (
        <p>문제 제출하기</p>
      ) : (
        <S.BottomSheetTitle>문제 {questionNumber}</S.BottomSheetTitle>
      )}
      <S.BottomSheetButton onClick={onToggle}>
        <img
          src={isBottomSheetVisible ? bottomsheetHide : bottomsheetShow}
          alt="Toggle Bottom Sheet"
        />
      </S.BottomSheetButton>
    </S.BottomSheetHeader>
    {isSubmitEnabled ? (
      <S.SubmitButton onClick={onSubmit}>제출하기</S.SubmitButton>
    ) : (
      <S.AnswerOptionsContainer>
        {choices.map((choice) => (
          <S.AnswerOption key={choice.number}>
            <S.AnswerOptionNumber>{choice.number}</S.AnswerOptionNumber>
            <S.AnswerOptionContent onClick={() => onSelectAnswer(choice)}>
              {choice.content}
            </S.AnswerOptionContent>
          </S.AnswerOption>
        ))}
      </S.AnswerOptionsContainer>
    )}
  </S.BottomSheet>
);

export default BottomSheet;