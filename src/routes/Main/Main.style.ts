import styled from 'styled-components';
import { theme } from '@/styles/theme';
import kakaoImageMd from '../../assets/icons/kakao_md.png';

export const OuterContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: ${theme.COLOR.InnerBackground};
	display: flex;
	justify-content: center;
	overflow-y: auto;
`;

export const HeaderWrapper = styled.div<{ isScrolled: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${theme.COLOR.InnerBackground};
	z-index: 100;
	transition: box-shadow 0.3s ease;
	box-shadow: ${props => (props.isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none')};
`;

export const HeaderLogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const HeaderKakaoButton = styled.button`
	width: 91px;
	height: 45px;
	border-radius: 6px;
	background-image: url(${kakaoImageMd});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
	transition: transform 0.2s;

	@media (min-width: 1440px) {
		&:hover {
			transform: translateY(-2px);
		}
	}
`;

export const InnerContainer = styled.div`
	width: 760px;
	background-color: ${theme.COLOR.InnerBackground};
	position: relative;
	padding: 0 20px;
	margin: 82px 0;
`;

export const HeaderContainer = styled.div`
	max-width: 760px;
	margin: 0 auto;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderLogo = styled.img`
	width: 32px;
	height: 32px;
`;

export const HeaderTitle = styled.h1`
	font-size: 24px;
	font-weight: 600;
	color: ${theme.COLOR.Neutral_4_Black};

	@media (max-width: 480px) {
		display: none;
	}
`;

export const ScrollableContainer = styled.div`
	padding: 40px 0;
`;

export const Section = styled.section<{ isIntro?: boolean }>`
	margin-bottom: 120px;
	text-align: center;
	${props =>
		props.isIntro &&
		`
		background: linear-gradient(135deg,rgb(227, 230, 241) 0%,rgb(211, 219, 245) 50%,rgb(182, 204, 241) 100%);
		padding: 80px 0;
		border-radius: 24px;
	`}

	@media (max-width: 768px) {
		margin-bottom: 80px;
		${props =>
			props.isIntro &&
			`
			padding: 60px 0;
		`}
	}

	@media (max-width: 480px) {
		margin-bottom: 60px;
		${props =>
			props.isIntro &&
			`
			padding: 40px 0;
			border-radius: 16px;
		`}
	}
`;

export const SectionTitle = styled.h2<{ isIntro?: boolean }>`
	font-size: 48px;
	font-weight: 700;
	color: ${theme.COLOR.Neutral_4_Black};
	margin-bottom: 24px;
	${props =>
		props.isIntro &&
		`
		margin-bottom: 0;
	`}

	@media (max-width: 768px) {
		font-size: 36px;
		margin-bottom: 20px;
	}

	@media (max-width: 480px) {
		font-size: 28px;
		margin-bottom: 16px;
		padding: 0 16px;
	}
`;

export const SectionDescription = styled.p<{ isIntro?: boolean }>`
	font-size: 18px;
	line-height: 1.6;
	color: ${theme.COLOR.Neutral_3_Gray};
	margin-bottom: 40px;
	${props =>
		props.isIntro &&
		`
		margin-bottom: 0;
	`}

	@media (max-width: 768px) {
		font-size: 16px;
		margin-bottom: 32px;
		padding: 0 20px;
	}

	@media (max-width: 480px) {
		font-size: 14px;
		margin-bottom: 24px;
		padding: 0 16px;
		line-height: 1.5;
	}
`;

export const KakaoIcon = styled.img`
	width: 100%;
`;

export const FlexContainer = styled.div<{ reverse?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 60px;
	margin-bottom: 100px;
	flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		gap: 40px;
		margin-bottom: 60px;
		padding: 0 20px;
	}

	@media (max-width: 480px) {
		gap: 32px;
		margin-bottom: 48px;
		padding: 0 16px;
	}
`;

export const MockupImage = styled.img`
	width: 50%;
	max-width: 255px;
	height: auto;
	object-fit: contain;

	@media (max-width: 768px) {
		width: 100%;
		max-width: 300px;
	}

	@media (max-width: 480px) {
		max-width: 240px;
	}
`;

export const ContentBox = styled.div`
	flex: 1;
`;

export const SubTitle = styled.h3`
	font-size: 20px;
	font-weight: 600;
	color: ${theme.COLOR.Neutral_3_Gray};
	margin-bottom: 12px;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 480px) {
		font-size: 16px;
		margin-bottom: 8px;
	}
`;

export const Title = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: #333333;
	margin-bottom: 24px;

	@media (max-width: 768px) {
		font-size: 28px;
		margin-bottom: 20px;
	}

	@media (max-width: 480px) {
		font-size: 24px;
		margin-bottom: 16px;
	}
`;

export const Description = styled.p`
	font-size: 18px;
	line-height: 1.6;
	color: #666666;

	@media (max-width: 768px) {
		font-size: 16px;
		br {
			display: none;
		}
	}

	@media (max-width: 480px) {
		font-size: 14px;
		line-height: 1.5;
	}
`;
