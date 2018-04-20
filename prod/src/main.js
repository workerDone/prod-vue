// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import { observable, isObservable, toJS } from 'mobx';
import VueMobx from 'vue-mobx';

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(VueMobx, {
  toJS: toJS,
  isObservable: isObservable, 
  observable: observable,
});
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/';

Vue.http.interceptors.push((request, next) => {
  request.headers.set('SUCURE', 'TOKEN');
  next((response) => {
    console.log(response);
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
