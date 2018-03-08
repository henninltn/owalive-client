<template>
  <section>
    <h1 class="title">OWALIVE</h1>
    <b-field>
      <b-input placeholder="email" @input="updateEmail"></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="password" @input="updatePassword"></b-input>
    </b-field>
    <b-field>
      <button class="button" @click="signIn()">Sign In</button>
    </b-field>
    <a href="signup">Sign Up</a>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'SignIn',
  methods: {
    signIn() {
      console.log(this.$store)
      console.log('email: ', this.$store.state.SignIn.email)
      console.log('password: ', this.$store.state.SignIn.password)
      this.$store.dispatch('SignIn/signIn')
    },
    ...mapMutations({
      'updateEmail': 'SignIn/updateEmail',
      'updatePassword': 'SignIn/updatePassword'
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding-top: 5rem;
}
</style>
