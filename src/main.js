import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch';

Vue.use(VueTouch);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App),
}).$mount('#app');

