import Vue from 'vue'
import 'vue-awesome/icons'
import Router from 'vue-router'
import Launch from '@/components/Launch.vue'
import Icon from 'vue-awesome/components/Icon.vue'
import Sign from '@/components/Sign.vue'
import Home from '@/components/Home.vue'
import University from '@/components/University.vue'
import People from '@/components/People.vue'
import Search from '@/components/Search.vue'
import Result from '@/components/Result.vue'
import MUniversity from '@/components/MUniversity.vue'
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
        },
        {
            path: '/people',
            name: 'People',
            component: People
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/result',
            name: 'Result',
            component: Result
        },
        {
            path: '/my-university',
            Name: 'MyUniversity',
            component: MUniversity
        }
    ]
})
