<template>
  <header class="header">
    <div class="columns">
      <div class="column is-6">
        <h1><img src="~/static/logo.png" style="width: 150px;"/></h1>
      </div>
      <div class="column is-6">
        <div class="tabs">
          <ul>
            <li class="is-active"><a href="/">Home</a></li>
            <li><a href="maps">マップ</a></li>
            <li><a href="signin">ログイン</a></li>
            <li><a href="profile">プロフィール</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  margin-top: 1rem;
  background-color: rgba(255, 255, 255, 0);
  width: 100vw;
  height: 3rem;
  z-index: 8;
}

.header :hover {
  background-color: white;
}
</style>
