import * as S from './Answer.style';
import AnswerItem, { AnswerItemProps } from '@/components/Answer/AnswerItem';
import SolvedInfo from '@/components/Answer/SolvedInfo';
import Header from '@/components/Answer/Header';
import { answerDatas } from './AnswerData';

function Answer() {
	return (
		<S.OuterContainer>
			<S.InnerContainer>
				<Header onLogoClick={() => {}} />
				<S.ScrollableContainer>
					<SolvedInfo solvedDate="2025.02.16.(일)" correctCount={1} totalCount={3} />
					{answerDatas.map((answer: AnswerItemProps) => (
						<AnswerItem key={answer.questionNumber} {...answer} />
					))}
				</S.ScrollableContainer>
			</S.InnerContainer>
		</S.OuterContainer>
	);
}

export default Answer;
