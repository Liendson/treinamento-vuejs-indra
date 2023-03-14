<template>
  <v-app>
    <div class="nav-open">
      <router-view></router-view>
    </div>
    <PageLoaderComponent v-model="$root.loading"></PageLoaderComponent>
  </v-app>
</template>
<script>
import PageLoaderComponent from "@/components/PageLoaderComponent.vue";
import { createInterceptorError, createInterceptorLoading } from "@/plugins/axios.plugin";

export default {
  components: {
    PageLoaderComponent
  },
  mounted() {
    createInterceptorError(this);
    createInterceptorLoading(this);
  }
}
</script>
