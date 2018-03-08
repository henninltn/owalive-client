<template>
  <section class="container">
    <app-header/>
    <div>
    </div>
  </section>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";

export default {
  components: {
    AppHeader
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
