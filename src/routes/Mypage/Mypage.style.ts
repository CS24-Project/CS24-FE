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
	padding: 0 16px;
`;

export const HeaderContainer = styled.div`
	background-color: ${theme.COLOR.InnerBackground};
	display: flex;
	height: 44px;
	min-height: 44px;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 0 16px;
`;

export const HeaderLogo = styled.img`
	width: 24px;
	height: 22px;
	margin-right: 8px;
	cursor: pointer;
`;

export const HeaderTitle = styled.div`
	flex: 1;
	text-align: center;
	color: ${theme.COLOR.Neutral_3_Gray};
	font-size: 14px;
	font-weight: 400;
`;

export const ScrollableContainer = styled.div`
	overflow-y: scroll;

	/* Chrome, Safari, Opera */
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: ${theme.COLOR.Neutral_2_Gray};
		border-radius: 4px;
	}

	/* Firefox */
	scrollbar-color: ${theme.COLOR.Neutral_2_Gray} transparent;
	scrollbar-width: thin;
`;

export const ProfileSection = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 0;
`;

export const ProfileImage = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	background-color: #e0e0e0;
	margin-right: 12px;
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const UserName = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 4px;
`;

export const ProblemCount = styled.div`
	font-size: 8px;
	color: ${theme.COLOR.Neutral_3_Gray};
`;

export const MoreButton = styled.button`
	margin-left: auto;
	background: none;
	border: none;
	cursor: pointer;
	position: relative;
`;

export const DropdownMenu = styled.div<{ isOpen: boolean }>`
	position: absolute;
	top: 100%;
	right: 0;
	background-color: ${theme.COLOR.InnerBackground};
	border: 1px solid ${theme.COLOR.Neutral_3_Gray};
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	display: ${props => (props.isOpen ? 'block' : 'none')};
	z-index: 1000;
	min-width: 100px;
	overflow: hidden;
`;

export const DropdownItem = styled.div<{ color: string }>`
	padding: 8px 16px;
	color: ${props => props.color};
	cursor: pointer;
	&:hover {
		background-color: #f5f5f5;
	}

	&:first-child {
		border-top-left-radius: 9px;
		border-top-right-radius: 9px;
	}

	&:last-child {
		border-bottom-left-radius: 9px;
		border-bottom-right-radius: 9px;
	}
`;

export const TodayProblemButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 12px;
	border: 1px solid ${theme.COLOR.Neutral_3_Gray};
	background-color: ${theme.COLOR.InnerBackground};
	border-radius: 10px;
	margin-bottom: 16px;
	cursor: pointer;
	color: ${theme.COLOR.Neutral_3_Gray};
	position: relative;
	transition: all 0.3s ease;
	margin-top: 16px;
	z-index: 0;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 9px;
		background: linear-gradient(120deg, #ff69b4, #ff1493, #ff4500, #ffd700, #7fff00, #00ffff, #1e90ff);
		z-index: -1;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	span {
		position: relative;
		z-index: 2;
	}

	&:hover {
		background-color: ${theme.COLOR.Primary};
		border: 1px solid ${theme.COLOR.Primary};
	}

	/* &:hover {
		border: 1px solid ${theme.COLOR.InnerBackground};
		color: ${theme.COLOR.InnerBackground};
		&::before {
			opacity: 0.9;
			animation: rainbow 2s ease-in-out infinite;
		}
	} */

	@keyframes rainbow {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}
`;

export const SectionTitle = styled.div`
	font-weight: bold;
	margin-bottom: 12px;
`;

export const ProblemItem = styled.div`
	padding: 16px;
	border: 1px solid ${theme.COLOR.Primary};
	border-radius: 10px;
	margin-bottom: 10px;
	cursor: pointer;
`;

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	background-color: ${theme.COLOR.InnerBackground};
	padding: 24px;
	border-radius: 10px;
	width: 90%;
	max-width: 320px;
	border: 1px solid ${theme.COLOR.Error};
`;

export const ModalTitle = styled.h2`
	text-align: center;
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 16px;
	color: ${theme.COLOR.Neutral_4_Black};
`;

export const ModalText = styled.p`
	text-align: center;
	font-size: 14px;
	line-height: 1.5;
	margin-bottom: 24px;
	color: ${theme.COLOR.Neutral_3_Gray};
`;

export const ModalButtonContainer = styled.div`
	display: flex;
	gap: 16px;
	justify-content: center;
`;

export const ModalButton = styled.button<{ color?: string; textColor?: string }>`
	padding: 14px 39px;
	border-radius: 10px;
	border: 1px solid ${props => props.color || theme.COLOR.Error};
	background-color: ${props => props.color || theme.COLOR.InnerBackground};
	cursor: pointer;
	color: ${props => props.textColor || theme.COLOR.Error};
	font-weight: bold;
`;
