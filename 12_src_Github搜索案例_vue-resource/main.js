import Vue from "vue";
import App from "./App.vue";
//引入插件
import vueResource from 'vue-resource'
//使用插件
Vue.use(vueResource)

// import plugins from '@/plugins'
/* 全局混入 */
// import { mixin, mixin2 } from "./mixin";

Vue.config.productionTip = false;
// Vue.mixin(mixin);
// Vue.mixin(mixin2);

// Vue.use(plugins)

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
});
