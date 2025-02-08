import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@', replacement: '/src' },
			{ find: '@assets', replacement: '/src/assets' },
			{ find: '@components', replacement: '/src/components' },
			{ find: '@hooks', replacement: '/src/hooks' },
			{ find: '@lib', replacement: '/src/lib' },
			{ find: '@routes', replacement: '/src/routes' },
			{ find: '@store', replacement: '/src/store' },
			{ find: '@styles', replacement: '/src/styles' },
			{ find: '@types', replacement: '/src/types' },
			{ find: '@utils', replacement: '/src/utils' },
		],
	},
	server: {
		port: 3000,
	},
});
