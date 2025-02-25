import styled from 'styled-components';
import { theme } from '@styles/theme';

export const OuterContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${theme.COLOR.OuterBackground};
	display: flex;
	justify-content: center;
`;

export const InnerContainer = styled.div`
	width: 760px;
	height: 100vh;
	background-color: ${theme.COLOR.InnerBackground};
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	position: relative;
	overflow-x: hidden;
	gap: 32px;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height; auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 16px;
    gap: 20px;
`;

export const HeaderTitle = styled.text`
	font-size: 16px;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-weight: 700;
`;

export const HeaderSubtitle = styled.text`
	font-size: 14px;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-weight: 400;
`;

export const KakaoIcon = styled.div``;

export const LoginButton = styled.div`
	display: flex;
	padding: 16px;
	height: 48px;
	border: 0px;
	border-radius: 6px;
	background-color: ${theme.COLOR.Kakao};
	text-align: center;
	text-size: 16px;
	font-weight: 700;
	color: ${theme.COLOR.Neutral_3_Gray};
	cursor: pointer;
	gap: 16px;
`;

export const MainContentTitle = styled.span<{ fontweight: boolean }>`
	font-size: 16px;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-weight: ${props => (props.fontweight ? 'bold' : 'normal')};
`;

export const MainContentDescription = styled.p`
	font-size: 14px;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-weight: 400;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	height: auto;
	padding: 32px;
`;

export const MainImageBox = styled.img`
	width: 100%;
	height: 270px;
	object-fit: contain;
`;

export const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between; /* 공간을 위와 아래로 분배 */
	width: 100%;
	height: 100%; /* GridContainer의 전체 높이를 사용 */
`;

export const SubImageBox = styled.img`
	height: auto; /* 비율 유지 */
	width: 100%; /* ContentBox 너비에 맞춤 */
	margin-top: 10px; /* 위쪽 간격 */
`;
