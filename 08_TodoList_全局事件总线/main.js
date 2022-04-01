import Vue from "vue";
import App from "./App.vue";
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
