import { createRouter, createWebHistory } from 'vue-router'

import Home from '../../src/views/Home.vue'
import ContactUs from '../../src/views/ContactUs.vue'
import RequestIntegration from '../../src/views/RequestIntegration.vue'
import IntegrationInstructions from '../../src/views/IntegrationInstructions.vue'

const routes =  [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs
        },
        {
            path: '/request-integration',
            name: 'RequestIntegration',
            component: RequestIntegration,
        },
        {
            path: '/integration-instructions',
            name: 'RequestIntegrationInstructions',
            component: IntegrationInstructions
        },
    ]


    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
      })
      export default router