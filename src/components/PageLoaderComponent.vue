<template>
  <div class="text-center">
    <v-dialog persistent v-model="value" width="100">
      <v-card color="secondary" class="text-center pt-3 loader">
        <v-card-text>
          <v-progress-linear
            :indeterminate="indeterminate"
            color="white"
            class="mt-2"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "PageLoader",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    indeterminate() {
      return isNaN(parseInt(this.progress));
    },
  },
};
</script>