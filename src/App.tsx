import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ScrollToTop from '@hooks/common/ScrollToTop';
// import { PrivateRoute } from '@/pages/PrivateRoute'; API 연동 전까지 주석 처리
import Main from '@/routes/Main/Main';
import Question from '@/routes/Question/Question';
import Answer from '@/routes/Answer/Answer';
import Mypage from '@/routes/Mypage/Mypage';
import '@/App.css';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Navigate to="/main" replace />} />
					{/* 비로그인 유저 URL 접근 제한 - API 연동 전까지 주석 처리 */}
					{/* <Route element={<PrivateRoute />}> */}
					<Route path="/main" element={<Main />} />
					<Route path="/question" element={<Question />} />
					<Route path="/answer" element={<Answer />} />
					<Route path="/mypage" element={<Mypage />} />
					{/* </Route> */}
				</Routes>
			</Router>
		</DndProvider>
	);
}

export default App;
