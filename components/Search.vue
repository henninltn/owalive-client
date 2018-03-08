<template>
  <section class="wrapper">
    <div class="columns">
      <b-field class="column is-half is-offset-one-quarter searching-bar">
        <b-input placeholder="Search..."
                 type="search"
                 icon="magnify">
        </b-input>
      </b-field>
    </div>
    <div class="columns">
      <b-field class="column is-quarter is-offset-5 searching-button">
        <button class="button is-rounded">現在位置から探す</button>
      </b-field>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  background-image: url("~/static/header.jpg");
}
.searching-bar {
  padding-top: 8rem;
}
.searching-button {
  padding-bottom: 10rem;
}
</style>
