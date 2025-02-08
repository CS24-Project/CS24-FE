import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ScrollToTop from '@hooks/common/ScrollToTop';
// import { PrivateRoute } from '@/pages/PrivateRoute'; API 연동 전까지 주석 처리
import Example from '@/routes/Example/Example';
import '@/App.css';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Navigate to="/example" replace />} />
					{/* 비로그인 유저 URL 접근 제한 - API 연동 전까지 주석 처리 */}
					{/* <Route element={<PrivateRoute />}> */}
					<Route path="/example" element={<Example />} />
					{/* </Route> */}
				</Routes>
			</Router>
		</DndProvider>
	);
}

export default App;
