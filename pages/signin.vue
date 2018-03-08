<template>
  <div class="container is-widescreen">
    <app-header/>
    <main>
      <sign-in/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import SignIn from "~/components/SignIn.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    SignIn,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
