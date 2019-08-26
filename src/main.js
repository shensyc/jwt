import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false
// let whiteList = ['/'];

router.beforeEach(async (to, from, next) => {
  // if (whiteList.includes(to.path)) {
  //   return next();
  // }
  const flag = await store.dispatch('validate');
  if (flag) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    let flag = to.matched.some(item => item.meta.needLogin);
    if (flag) {
      next('/login');
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
