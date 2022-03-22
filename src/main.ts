import Orion from '@armado/orion'
import { createApp } from 'vue'
import App from './App.vue'

import '@armado/orion/dist/style.css'

createApp(App).use(Orion).mount('#app')
