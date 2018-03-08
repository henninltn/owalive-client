<template>
  <section class="wrapper">
    <h1 class="title">急上昇</h1>
    <div class="columns">
      <div class="profile-1 column is-5">
        <img src="~/static/egg256.png"/>
        <div>name: 名無し</div>
        <div>タグ: </div>
        <div>一言: コメントなし</div>
        <b-collapse :open="false">
          <button class="button is-primary" slot="trigger">read more</button>
            <div class="notification">
              <div class="content">
                <h3>
                  Subtitle
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                  Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                  Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                </p>
              </div>
            </div>
        </b-collapse>
      </div>
      <div class="column is-7">
        <ul>
          <li>
            <div class="profile columns">
              <div class="column is-offset-3 is-3">
                <img src="~/static/egg128.png"/>
              </div>
              <div class="column is-offset-1 is-5">
                <div>name: 名無し</div>
                <div>タグ: </div>
                <div>一言: コメントなし</div>
                <b-collapse :open="false">
                  <button class="button is-primary" slot="trigger">read more</button>
                  <div class="notification">
                    <div class="content">
                      <h3>
                        Subtitle
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </li>
          <li>
            <div class="profile columns">
              <div class="column is-offset-3 is-3">
                <img src="~/static/egg128.png"/>
              </div>
              <div class="column is-offset-1 is-5">
                <div>name: 名無し</div>
                <div>タグ: </div>
                <div>一言: コメントなし</div>
                <b-collapse :open="false">
                  <button class="button is-primary" slot="trigger">read more</button>
                  <div class="notification">
                    <div class="content">
                      <h3>
                        Subtitle
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </li>
          <li>
            <div class="profile columns">
              <div class="column is-offset-3 is-3">
                <img src="~/static/egg128.png"/>
              </div>
              <div class="column is-offset-1 is-5">
                <div>name: 名無し</div>
                <div>タグ: </div>
                <div>一言: コメントなし</div>
                <b-collapse :open="false">
                  <button class="button is-primary" slot="trigger">read more</button>
                  <div class="notification">
                    <div class="content">
                      <h3>
                        Subtitle
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                      </p>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 5rem;
}
.title {
  margin: 1rem;
}
.profile-1 {
  text-align: center;
  margin-top: 3rem;
  div {
    margin-top: 1rem;
  }
}
.profile {
  margin-top: 2rem;
}
</style>
