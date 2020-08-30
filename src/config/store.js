import Vue from 'vue';
import Vuex from 'vuex';
import Solucoes from '../components/solucoes/Solucoes.vue';
import About from '../components/about/About.vue';
import Clients from '../components/clients/Clients.vue';
import Help from '../components/help/Help.vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        isMenuVisible: false,
        menu: [{
                name: "Quem somos",
                icon: "fa fa-info-circle",
                href: "/about",
                component: About,
                componentName: "About"
            },
            {
                name: "Soluções",
                icon: "fa fa-rocket",
                href: "/",
                component: Solucoes,
                componentName: "Solucoes"
            },
            {
                name: "Clientes",
                icon: "fa fa-user-tie",
                href: "/clients",
                component: Clients,
                componentName: "Clients"
            },
            {
                name: "Suporte",
                icon: "fa fa-question-circle",
                href: "/help",
                component: Help,
                componentName: "Help"
            },
        ],
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible;
            } else {
                state.isMenuVisible = isVisible;
            }
        }
    }
});
export default store;