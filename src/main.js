// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from "./routes";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
  routes
}).$mount('#app');
