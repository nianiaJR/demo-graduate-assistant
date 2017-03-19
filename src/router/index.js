import Vue from 'vue'
import 'vue-awesome/icons'
import Router from 'vue-router'
import Launch from '@/components/Launch.vue'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Launch',
            component: Launch
        }
    ]
})