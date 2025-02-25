import { Header } from '@/components/Main/Header';
import { MainContent } from '@/components/Main/MainContent';
import * as S from './Main.style';

function Main() {
	return (
		<S.OuterContainer>
			<S.InnerContainer>
				<Header />
				<MainContent
					title={[
						{ text: '매일', bold: true },
						{ text: '도착하는', bold: false },
						{ text: '카카오톡', bold: true },
						{ text: '으로 동기부여', bold: false },
					]}
					description="카카오톡의 알림으로 확실한 문제풀이 동기를 제공합니다."
					default={true}
				/>

				<MainContent
					title={[
						{ text: '매일', bold: true },
						{ text: '도착하는', bold: true },
						{ text: '카카오톡', bold: false },
						{ text: '으로 동기부여', bold: false },
					]}
					description="카카오톡의 알림으로 확실한 문제풀이 동기를 제공합니다."
					default={false}
				/>
			</S.InnerContainer>
		</S.OuterContainer>
	);
}

export default Main;
