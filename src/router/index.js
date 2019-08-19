import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '../components/common/404.vue';
import Home from '../components/Dashboard.vue';
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";


Vue.use(Router);

export default new Router({
    routes: [
        {path: '/',             name: 'dashboard',      component: Home},
        {path: '/tasks',        name: 'tasks',          component: Login},

        {path: '/login',        name: 'login',          component: Login},
        {path: '/profile',      name: 'profile',        component: Profile},
        {path : '*',                                    component: NotFound},
    ]
});