<template>
  <div class="wrapper">
    <side-bar-component>
      <template slot="links">
        <sidebar-link-component to="/home" name="Página Inicial" icon="ti-panel" />
        <sidebar-link-component to="/alunos" name="Alunos" icon="ti-user" />
      </template>
    </side-bar-component>
    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">{{ routeName }}</a>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
