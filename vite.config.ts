import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	// 软链接
	resolve: {
		alias: {
			'@': join(__dirname, '/src')
		}
	},
	server: {
		proxy: {
			'/reponsive': {
				target: 'http://localhost:3000',
				changeOrigin: true
				// rewrite: path => path.replace(/^\/reponsive/, '/reponsive')
			}
		}
	}
})
