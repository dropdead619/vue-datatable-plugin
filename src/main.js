import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import DataTable from '@/plugins/data-table.js'
import '@/scss/app.scss'

createApp(App).use(store).use(DataTable).mount('#app')
