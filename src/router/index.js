import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/DashboardLayoutComponent.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Página Inicial",
        component: () => import("@/pages/HomePage.vue"),
      },
      {
        path: "alunos",
        name: "Alunos",
        component: () => import("@/pages/AlunosPage.vue"),
      }
    ],
  },
];

const updateTitle = (to) => {
  document.title = to.matched.slice().reverse().find(v => v).name;
}

// configure router
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, _from, next) => {
  updateTitle(to);
  next();
});

export default router;
