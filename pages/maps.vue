<template>
  <div class="container is-widescreen">
    <app-header/>
    <main>
      <maps/>
    </main>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import Maps from "~/components/Maps.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    Maps,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
