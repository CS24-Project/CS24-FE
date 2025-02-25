import * as S from '@/routes/Question/Question.style';

interface Choice {
  number: string;
  content: string;
}

interface AnswerOptionsProps {
  choices: Choice[];
  onSelectAnswer: (choice: Choice) => void;
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({ choices, onSelectAnswer }) => (
  <S.AnswerOptionsContainer>
    {choices.map(choice => (
      <S.AnswerOption key={choice.number}>
        <S.AnswerOptionNumber>{choice.number}</S.AnswerOptionNumber>
        <S.AnswerOptionContent onClick={() => onSelectAnswer(choice)}>
          {choice.content}
        </S.AnswerOptionContent>
      </S.AnswerOption>
    ))}
  </S.AnswerOptionsContainer>
);

export default AnswerOptions;
