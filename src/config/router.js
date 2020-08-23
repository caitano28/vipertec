import Vue from 'vue';
import VueRouter from 'vue-router';

import Solucoes from '../components/solucoes/Solucoes.vue';

Vue.use(VueRouter);

const routes = [{
    name: 'Solucoes',
    path: '/',
    component: Solucoes
}];

const router = new VueRouter({
    mode: 'history',
    routes
});
export default router;