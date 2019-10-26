import Vue from 'vue';
// 引入mintui全部组件   的tabbar
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vuex from 'vuex';
import '../public/iconfont/iconfont.css';

// element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

import http from './request/http';

// import '../public/iconfont/iconfont.css';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(Mint);

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
