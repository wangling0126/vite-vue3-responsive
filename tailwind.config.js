/** @type {import('tailwindcss').Config} */
module.exports = {
	// 手动切换暗模式
	darkMode: 'class',
	content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// 自带的文字大小过大，重新设置文字大小
			fontSize: {
				xs: ['0.25rem', '0.35rem'],
				sm: ['0.35rem', '0.45rem'],
				base: ['0.42rem', '0.52rem'],
				lg: ['0.55rem', '0.65rem'],
				xl: ['0.65rem', '0.75rem']
			},
			// 自定义阴影样式
			boxShadow: {
				'l-white': '-10px 0 10px white',
				'l-zinc': '-10px 0 10px #18181b'
			},
			height: {
				header: '72px',
				main: 'calc(100vh - 72px)'
			},
			colors: {
				main: '#f44c58',
				'hover-main': '#f32836'
			}
		}
	},
	plugins: []
}
