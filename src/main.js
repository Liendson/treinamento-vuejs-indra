import Vue from "vue";
import App from "./App";
import router from "./router/index";
// Plugins
import vuetify from '@/plugins/vuetify.plugin';
import { AxiosPlugin } from "@/plugins/axios.plugin";
// CSS imports
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/sass/paper-dashboard.scss";
import "@/assets/css/themify-icons.css";
// Componentes
import SideBarComponent from "@/components/sidebar-component/SideBarComponent.vue";
import SidebarLinkComponent from "@/components/sidebar-component/SidebarLinkComponent.vue";
// Mixins
import PageLoadingMixin from "@/mixins/page-loading.mixin";
import NotificationMixin from "@/mixins/notification.mixin";

// Componentes
Vue.component("side-bar-component", SideBarComponent);
Vue.component("sidebar-link-component", SidebarLinkComponent);

// Mixins
Vue.mixin(PageLoadingMixin);
Vue.mixin(NotificationMixin);

// Plugins
Vue.use(AxiosPlugin);

new Vue({
  data: () => ({
    loading: false,
  }),
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
