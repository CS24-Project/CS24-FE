import * as S from './Main.style';
import answerImage from '../../assets/images/answer.png';
import arlamImage from '../../assets/images/arlam.png';
import questionImage from '../../assets/images/question.png';
import logoImage from '../../assets/logos/main_logo.png';
import { useEffect, useState } from 'react';

function Main() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY || document.documentElement.scrollTop;
			setIsScrolled(scrollPosition > 10);
		};

		// 초기 스크롤 상태 확인
		handleScroll();

		// 이벤트 리스너 등록
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<S.OuterContainer className="outer-container">
			<S.HeaderWrapper isScrolled={isScrolled}>
				<S.HeaderContainer>
					<S.HeaderLogoContainer>
						<S.HeaderLogo src={logoImage} alt="로고" />
						<S.HeaderTitle>CS24</S.HeaderTitle>
					</S.HeaderLogoContainer>
					<S.HeaderKakaoButton />
				</S.HeaderContainer>
			</S.HeaderWrapper>
			<S.InnerContainer>
				<S.ScrollableContainer>
					{/* 인트로 섹션 */}
					<S.Section isIntro>
						<S.SectionTitle isIntro>매일 새로운 CS 도전, CS24와 함께</S.SectionTitle>
						<S.SectionDescription isIntro>
							매일 카카오톡으로 제공되는 AI 생성 CS 문제를 풀며 실시간으로 지식을 습득하고 성장하세요.
						</S.SectionDescription>
					</S.Section>

					{/* 목업 설명 섹션 */}
					<S.Section>
						<S.FlexContainer>
							<S.MockupImage src={arlamImage} alt="알림 목업 이미지" />
							<S.ContentBox>
								<S.SubTitle>매일 도착하는</S.SubTitle>
								<S.Title>카카오톡으로 동기부여</S.Title>
								<S.Description>
									카카오톡의 알림으로
									<br />
									확실한 문제풀이 동기를 제공합니다.
								</S.Description>
							</S.ContentBox>
						</S.FlexContainer>

						<S.FlexContainer reverse>
							<S.MockupImage src={questionImage} alt="채팅 목업 이미지" />
							<S.ContentBox>
								<S.SubTitle>채팅으로</S.SubTitle>
								<S.Title>쉽고 빠른 문제 풀이</S.Title>
								<S.Description>
									채팅 방식으로 CS 문제를 풀어
									<br />
									직관적이고 편리한 UI를 제공합니다.
								</S.Description>
							</S.ContentBox>
						</S.FlexContainer>
						<S.FlexContainer>
							<S.MockupImage src={answerImage} alt="답변 목업 이미지" />
							<S.ContentBox>
								<S.SubTitle>답안과 함께</S.SubTitle>
								<S.Title>나만의 피드백 제공</S.Title>
								<S.Description>
									답안과 함께 AI 피드백을 제공하여
									<br />
									사용자가 부족한 점을 확인할 수 있습니다.
								</S.Description>
							</S.ContentBox>
						</S.FlexContainer>
					</S.Section>
				</S.ScrollableContainer>
			</S.InnerContainer>
		</S.OuterContainer>
	);
}

export default Main;
