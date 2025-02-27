import * as S from '@/routes/Answer/Answer.style';

interface SolvedInfoProps {
	solvedDate: string;
	correctCount: number;
	totalCount: number;
}

function SolvedInfo({ solvedDate, correctCount, totalCount }: SolvedInfoProps) {
	return (
		<S.SolvedInfoContainer>
			<S.SolvedDate>풀이 날짜: {solvedDate}</S.SolvedDate>
			<S.ScoreInfo>
				정답률: {correctCount}/{totalCount}
			</S.ScoreInfo>
		</S.SolvedInfoContainer>
	);
}

export default SolvedInfo;
