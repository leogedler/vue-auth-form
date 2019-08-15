import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import Vuelidate from 'vuelidate';

import router from './router'
import store from './store'

Vue.use(Vuelidate);

axios.defaults.baseURL = 'https://vue-auth-8e181.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = '123123123';
axios.defaults.headers.get['Accerps'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptors', config);
  return config;
});
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response interceptors', res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
