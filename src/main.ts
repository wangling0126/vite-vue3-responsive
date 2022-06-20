import { createApp } from 'vue'
import App from './App.vue'
import { useREM } from '@/utils/flexible'
import mLibs from './libs/index'

import 'virtual:svg-icons-register'
import './styles/index.scss'

useREM()
import router from '@/router'
createApp(App).use(router).use(mLibs).mount('#app')
