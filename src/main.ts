import { createApp } from 'vue'
import App from './App.vue'
import { useREM } from '@/utils/flexible'
import mLibs from './libs/index'
import pinia from './store/index'
import 'virtual:svg-icons-register'
import './styles/index.scss'
import changeThemeMethod from './utils/theme'
useREM()
import router from '@/router'
createApp(App).use(router).use(mLibs).use(pinia).mount('#app')
changeThemeMethod()
