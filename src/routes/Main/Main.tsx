import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
	const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

	// 현재 URL에서 code 추출
	const code = new URL(window.location.href).searchParams.get('code');

	// 카카오 로그인 페이지로 이동
	const handleKakaoLogin = () => {
		window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
	};

	// 로그인 API 요청
	const handleLogin = async (authCode: string) => {
		setLoading(true);

		try {
			const response = await axios.post<{ accessToken: string }>(
				'http://54.180.114.135:8080/api/v1/auth/login',
				null, // Body 없음
				{ params: { code: authCode } }, // Query Parameter로 전달
			);

			localStorage.setItem('accessToken', response.data.accessToken);
			alert('로그인 성공!');
			navigate('/'); // 로그인 성공 후 홈 이동
		} catch (error) {
			console.error('로그인 실패:', error);
			alert('로그인 실패! 콘솔을 확인하세요.');
		} finally {
			setLoading(false);
		}
	};

	// URL에 `code`가 있으면 자동 로그인 실행
	useEffect(() => {
		if (code) {
			handleLogin(code);
		}
	}, [code]);

	return (
		<div>
			<button onClick={handleKakaoLogin} disabled={loading}>
				{loading ? '로그인 중...' : '카카오 로그인'}
			</button>
		</div>
	);
}

export default Login;
