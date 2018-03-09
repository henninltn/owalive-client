<template>
  <section class="wrapper">
    <h1 class="title">急上昇</h1>
    <div class="columns">
      <div class="profile-1 column is-5">
        <img src="~/static/icon01.png"/>
        <div>name: Tom</div>
        <div>タグ: 漫談</div>
        <div>一言: よろしく</div>
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
                <img src="~/static/icon02.png"/>
              </div>
              <div class="column is-offset-1 is-5">
                <div>name: Michael</div>
                <div>タグ: 漫才</div>
                <div>一言: なし</div>
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
                <img src="~/static/icon03.png"/>
              </div>
              <div class="column is-offset-1 is-5">
                <div>name: Ken</div>
                <div>タグ: ものまね</div>
                <div>一言: 来てね</div>
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
                <img src="~/static/icon04.jpg"/>
              </div>
              <div class="column is-offset-1 is-5">
                <div>name: Momo</div>
                <div>タグ: 漫談</div>
                <div>一言: よろしくね</div>
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
    <div>{{name}}</div>
    <div>{{email}}</div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  asyncData() {
    return axios.post("http://api.nmkj.io:14080/profiles/1");
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 5rem;
}
.title {
  margin: 3rem;
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
