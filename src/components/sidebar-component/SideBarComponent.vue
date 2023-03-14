<template>
  <div class="sidebar" data-background-color="black" data-active-color="success">
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a class="simple-text">
          <div class="logo-img">
            <img src="@/assets/img/vue-logo.png" alt="" />
          </div>
          {{ title }}
        </a>
      </div>
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-link-component
            v-for="(link, index) in sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon">
          </sidebar-link-component>
        </slot>
      </ul>
      <div class="moving-arrow" :style="arrowStyle"></div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      default: "Sistema de Alunos",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
      addLink: this.addLink,
      removeLink: this.removeLink,
    };
  },
  computed: {
    arrowStyle() {
      return {
        transform: `translate3d(0px, ${this.linkHeight * this.activeLinkIndex}px, 0px)`,
      };
    },
  },
  data() {
    return {
      linkHeight: 65,
      activeLinkIndex: 0,
      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false,
      links: [],
    };
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index;
        }
      });
    },
    addLink(link) {
      const index = this.$slots.links.indexOf(link.$vnode);
      this.links.splice(index, 0, link);
    },
    removeLink(link) {
      const index = this.links.indexOf(link);
      if (index > -1) {
        this.links.splice(index, 1);
      }
    },
  },
  mounted() {
    this.$watch("$route", this.findActiveLink, {
      immediate: true,
    });
  },
};
</script>
<style lang="scss">
$bg-nude: #f4f3ef !default;

.moving-arrow {
  border-right: 17px solid $bg-nude;
  border-top: 17px solid transparent;
  border-bottom: 17px solid transparent;
  display: inline-block;
  position: absolute;
  left: 243px;
  top: 95px;
  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
}

@media (max-width: 992px) {
  .moving-arrow {
    display: none;
  }
}
</style>
