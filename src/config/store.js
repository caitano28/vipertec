import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        menu: [{
                name: "Quem somos",
                icon: "fa fa-info-circle",
                href: "#",
            },
            {
                name: "Soluções",
                icon: "fa fa-rocket",
                href: "/",
            },
            {
                name: "Clientes",
                icon: "fa fa-user-tie",
                href: "#",
            },
            {
                name: "Suporte",
                icon: "fa fa-question-circle",
                href: "#",
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