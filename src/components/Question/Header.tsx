import * as S from '@/routes/Question/Question.style';
import logo from '@assets/logos/main_logo.png';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => (
  <S.HeaderContainer>
    <S.HeaderLogo src={logo} onClick={onLogoClick} />
    <S.HeaderTitle>문제 풀이</S.HeaderTitle>
  </S.HeaderContainer>
);

export default Header;
