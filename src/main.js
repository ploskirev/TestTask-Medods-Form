import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import '@/styles/reset.css';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
}).$mount('#app')
