import * as S from './Mypage.style';
import Header from '@/components/MyPage/Header';
import { useState } from 'react';
import { useTapOutside } from '@/hooks/common/TapOutside';
import { theme } from '@/styles/theme';

interface ProblemItem {
	date: string;
	progress: string;
}

function Mypage() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);

	const dropdownRef = useTapOutside({
		onTapOutside: () => setIsDropdownOpen(false),
		isOpen: isDropdownOpen,
	});

	const modalRef = useTapOutside({
		onTapOutside: () => setIsWithdrawalModalOpen(false),
		isOpen: isWithdrawalModalOpen,
	});

	const problems: ProblemItem[] = [
		{ date: '2025.02.13.(목)', progress: '1/3' },
		{ date: '2025.02.12.(수)', progress: '2/3' },
		{ date: '2025.02.10.(월)', progress: '2/3' },
		{ date: '2000.00.00.(0)', progress: '0/0' },
		{ date: '2025.02.13.(목)', progress: '1/3' },
		{ date: '2025.02.12.(수)', progress: '2/3' },
		{ date: '2025.02.10.(월)', progress: '2/3' },
		{ date: '2000.00.00.(0)', progress: '0/0' },
		{ date: '2025.02.13.(목)', progress: '1/3' },
		{ date: '2025.02.12.(수)', progress: '2/3' },
		{ date: '2025.02.10.(월)', progress: '2/3' },
		{ date: '2000.00.00.(0)', progress: '0/0' },
		{ date: '2025.02.13.(목)', progress: '1/3' },
		{ date: '2025.02.12.(수)', progress: '2/3' },
		{ date: '2025.02.10.(월)', progress: '2/3' },
		{ date: '2000.00.00.(0)', progress: '0/0' },
		{ date: '2025.02.13.(목)', progress: '1/3' },
		{ date: '2025.02.12.(수)', progress: '2/3' },
		{ date: '2025.02.10.(월)', progress: '2/3' },
		{ date: '2000.00.00.(0)', progress: '0/0' },
	];

	const handleMoreClick = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleDropdownItemClick = (action: string) => {
		if (action === '회원탈퇴') {
			setIsWithdrawalModalOpen(true);
		}
		setIsDropdownOpen(false);
	};

	const handleWithdrawalConfirm = () => {
		console.log('회원탈퇴 처리');
		setIsWithdrawalModalOpen(false);
	};

	const handleWithdrawalCancel = () => {
		setIsWithdrawalModalOpen(false);
	};

	return (
		<S.OuterContainer>
			<S.InnerContainer>
				<Header onLogoClick={() => {}} />
				<S.ProfileSection>
					<S.ProfileImage />
					<S.ProfileInfo>
						<S.UserName>김유저</S.UserName>
						<S.ProblemCount>풀이 문제 수: 999문제</S.ProblemCount>
					</S.ProfileInfo>
					<S.MoreButton onClick={handleMoreClick}>
						...
						<S.DropdownMenu ref={dropdownRef} isOpen={isDropdownOpen}>
							<S.DropdownItem onClick={() => handleDropdownItemClick('로그아웃')} color={theme.COLOR.Neutral_3_Gray}>
								로그아웃
							</S.DropdownItem>
							<S.DropdownItem onClick={() => handleDropdownItemClick('회원탈퇴')} color={theme.COLOR.Error}>
								회원탈퇴
							</S.DropdownItem>
						</S.DropdownMenu>
					</S.MoreButton>
				</S.ProfileSection>

				<S.TodayProblemButton>오늘의 문제 풀러가기</S.TodayProblemButton>

				<S.SectionTitle>나의 문제 기록</S.SectionTitle>
				<S.ScrollableContainer>
					{problems.map((problem, index) => (
						<S.ProblemItem key={index}>
							<div>{problem.date}</div>
							<div>정답: {problem.progress}</div>
						</S.ProblemItem>
					))}
				</S.ScrollableContainer>
			</S.InnerContainer>

			{isWithdrawalModalOpen && (
				<S.Modal>
					<S.ModalContent ref={modalRef}>
						<S.ModalTitle>회원탈퇴</S.ModalTitle>
						<S.ModalText>
							회원 탈퇴 시 복구가 불가능합니다.
							<br />
							탈퇴하시겠습니까?
						</S.ModalText>
						<S.ModalButtonContainer>
							<S.ModalButton
								onClick={handleWithdrawalConfirm}
								color={theme.COLOR.Error}
								textColor={theme.COLOR.InnerBackground}>
								탈퇴
							</S.ModalButton>
							<S.ModalButton onClick={handleWithdrawalCancel}>취소</S.ModalButton>
						</S.ModalButtonContainer>
					</S.ModalContent>
				</S.Modal>
			)}
		</S.OuterContainer>
	);
}

export default Mypage;
