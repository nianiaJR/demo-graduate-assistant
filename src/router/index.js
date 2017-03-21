import Vue from 'vue'
import 'vue-awesome/icons'
import Router from 'vue-router'
import Launch from '@/components/Launch.vue'
import Icon from 'vue-awesome/components/Icon.vue'
import Sign from '@/components/Sign.vue'
import Home from '@/components/Home.vue'
import University from '@/components/University.vue'
Vue.component('icon', Icon)
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Launch',
            component: Launch
        },
        {
            path: '/sign',
            name: 'Sign',
            component: Sign
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/university',
            name: 'University',
            component: University
        }
    ]
})
