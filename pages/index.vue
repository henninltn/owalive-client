<template>
  <div class="container is-widescreen">
    <app-header/>
    <main>
      <search/>
      <ranking/>
      <announcement/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import Search from "~/components/Search.vue";
import Ranking from "~/components/Ranking.vue";
import Announcement from "~/components/Announcement.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    Search,
    Ranking,
    Announcement,
    AppFooter
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}
</style>
