<template>
  <div class="container is-widescreen">
    <app-header/>
    <main>
      <sign-up/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import SignUp from "~/components/SignUp.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    SignUp,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
