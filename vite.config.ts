import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import * as path from 'path'
// https://vitejs.dev/config/
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
export default defineConfig({
	plugins: [
		vue(),
		vueSetupExtend(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[name]'
		})
	],
	// 软链接
	resolve: {
		alias: {
			'@': path.join(__dirname, '/src')
		}
	},
	server: {
		proxy: {
			'/reponsive': {
				target: 'http://localhost:3000',
				changeOrigin: true
				// rewrite: path => path.replace(/^\/reponsive/, '/reponsive')
			},
			//	GET https://api.pexels.com/v1/curated
			'/pexels': {
				target: 'https://api.pexels.com',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/pexels/, '')
			}
		}
	}
})
