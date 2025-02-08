const COLOR = {
	WHITE: '#FFFFFF',
	BLACK: '#000000',
} as const;

const FONT = {
	// 필요한 폰트 스타일 추가
} as const;

export const theme = {
	COLOR,
	FONT,
} as const;

export default theme;

// styled-components의 DefaultTheme 정의
import 'styled-components';
declare module 'styled-components' {
	export interface DefaultTheme {
		COLOR: typeof COLOR;
		FONT: typeof FONT;
	}
}
