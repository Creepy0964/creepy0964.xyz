import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3838,
		host: true
	},
	preview: {
		port: 3838,
		host: true
	}
});
