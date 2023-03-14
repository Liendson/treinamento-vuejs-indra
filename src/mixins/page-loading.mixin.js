const mixin = {
  methods: {
    $showPageLoading() {
      this.$root.loading = true;
    },
    $hidePageLoading(timeout = 500) {
      setTimeout(() => this.$root.loading = false, timeout);
    }
  }
}

export default mixin;