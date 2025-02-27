import * as S from '@/routes/Mypage/Mypage.style';
import logo from '@assets/logos/main_logo.png';

interface HeaderProps {
	onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => (
	<S.HeaderContainer>
		<S.HeaderLogo src={logo} onClick={onLogoClick} />
	</S.HeaderContainer>
);

export default Header;
