import { createRouter, createWebHistory } from 'vue-router'

import Form from './components/Form.vue'
import Table from './components/Table.vue'

const routes = [
    {
        path: '/',
        name: 'Form',
        component: Form
    },
    {
        path: '/table',
        name: 'Table',
        component: Table,
		props: {
			tableTitle: 'Datos recolectados',
			headerClass: {
				'header-table': true,
				'header-purple': false
			},
			rowStyle: ['background: white', 'background: gray', '; background: gold']
		}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
