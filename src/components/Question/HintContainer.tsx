import * as S from '@/routes/Question/Question.style';
import logo from '@assets/logos/main_logo.png';

interface HintContainerProps {
	isEnabled: boolean;
	hint: string;
	remainingTime: number;
	bottomSheetHeight: number;
}

const HintContainer: React.FC<HintContainerProps> = ({ isEnabled, hint, remainingTime, bottomSheetHeight }) => (
	<S.HintContainer isHintEnabled={isEnabled} bottomSheetHeight={bottomSheetHeight}>
		<S.HintHeader>
			<S.HintTitle>
				<S.HintImage src={logo} />
				힌트보기
			</S.HintTitle>
			<S.HintTimer>{remainingTime}초 후 창이 닫힙니다.</S.HintTimer>
		</S.HintHeader>
		{hint}
	</S.HintContainer>
);

export default HintContainer;
