import Vue from 'vue';
import './config/font-awesome';
import './config/bootstrap';
import store from './config/store';
import router from './config/router';
import App from './App.vue';



Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');