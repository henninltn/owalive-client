<template>
  <section>
    <h1 class="title">OWALIVE</h1>
    <b-field>
      <b-input placeholder="username" @input="updateUserName"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="email" @input="updateEmail"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="password" @input="updatePassword"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="passwordAgain" @input="updatePasswordAgain"></b-input>
    </b-field>
    <b-field>
      <button class="button" @click="signUp()">Sign Up</button>
    </b-field>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SignUp',
  methods: {
    signUp() {
      this.$store.dispatch('SignUp/signUp')
    },
    ...mapMutations({
      'updateUserName': 'SignUp/updateUserName',
      'updateEmail': 'SignUp/updateEmail',
      'updatePassword': 'SignUP/updatePassword',
      'updatePasswordAgain': 'SignUP/updatePasswordAgain'
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding-top: 5rem;
}
</style>
