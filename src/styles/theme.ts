const COLOR = {
	Primary: '#1C81E0',
	Secondary: '#64B5F6',
	Neutral_1: '#FFFFFF',
	Neutral_2_Gray: '#DBDBDB',
	Neutral_3_Gray: '#434343',
	Neutral_4_Black: '#000000',
	Error: '#FF5252',
	Link: '#1565C0',
	Warning: '#FFD54F',
	Success: '#81C784',
	OuterBackground: '#F1F2F6',
	InnerBackground: '#FFFFFF',
	SelectAnswer: '#FDCC12',
	Kakao: '#FEE500',
} as const;

const FONT = {
	BOLD: (size: number, lineHeight?: number) => `
  font-weight: 700;
  font-size: ${size}px;
  line-height: ${lineHeight}%;
`,
	MEDIUM: (size: number, lineHeight?: number) => `
  font-weight: 500;
  font-size: ${size}px;
  line-height: ${lineHeight}%;
`,
	REGULAR: (size: number, lineHeight?: number) => `
  font-weight: 400;
  font-size: ${size}px;
  line-height: ${lineHeight}%;
`,
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
