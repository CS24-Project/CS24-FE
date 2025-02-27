import * as S from '@/routes/Answer/Answer.style';
import logo from '@assets/logos/main_logo.png';

interface HeaderProps {
	onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => (
	<S.HeaderContainer>
		<S.HeaderLogo src={logo} onClick={onLogoClick} />
		<S.HeaderTitle>AI 답안지 해설</S.HeaderTitle>
	</S.HeaderContainer>
);

export default Header;
