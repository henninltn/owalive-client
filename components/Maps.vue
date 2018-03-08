<template>
  <section>
    <div id="maps"></div>
  </section>
</template>

<script>
export default {
  mounted() {
    const map = new google.maps.Map(document.getElementById('maps'), {
        center: {
            lat: 34.7019399,
            lng: 135.51002519999997
        },
        zoom: 19
    });
  }
}
</script>

<style lang="scss" scoped>
#maps {
  width: 100vw;
  height: 100vh;
}
</style>
