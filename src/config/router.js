import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../config/store';

Vue.use(VueRouter);
const menu = store.state.menu;
let routes = [];
menu.forEach(key => {
    routes.push({
        name: key.componentName,
        path: key.href,
        component: key.component
    });
});

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;