import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/pages/HomePage.vue';
import ContactPage from './components/pages/ContactPage.vue';

//inizializzare il router
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/contacts', component: ContactPage, name: 'contacts'},
        {path: '*', component: NotFoundPage, name: 'notFound'}
    ]
});

export default router;