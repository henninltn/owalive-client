<template>
  <section>
    <h1 class="title">告知 タイムライン</h1>
    <div class="columns">
      <div class="menu column is-one-third">
        <h2 class="subtitle">フィルター</h2>
        <div class="box">
          <div>
            <span class="tag">エリア</span>
            <div class="columns">
              <div class="column">関東</div>
              <div class="column">関西</div>
              <div class="column">九州・沖縄</div>
            </div>
            <div class="columns">
              <div class="column">北海道</div>
              <div class="column">東北</div>
              <div class="column">東海</div>
            </div>
            <div class="columns">
              <div class="column">中国</div>
              <div class="column">四国</div>
              <div class="column">北陸</div>
            </div>
          </div>
          <div>
            <span class="tag">タグ</span>
          </div>
        </div>
      </div>
      <div class="column is-two-third columns">
        <div class="column is-half list-wrapper box">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 5rem;
}
.menu {
  margin: 1rem 1rem 1rem 8rem;
}
.title {
  margin: 1rem;
}
.subtitle {
  text-align: center;
}
.list-wrapper {
  margin: 1rem 1rem 1rem 8rem;
}
</style>
