import axios from 'axios'

export const state = () => ({
  userName: '',
  email: '',
  password: '',
  passwordAgain: '',
})

export const mutations = {
  updateUserName (state, value) {
    state.userName = value
  },
  updateEmail (state, value) {
    state.email = value
  },
  updatePassword (state, value) {
    state.password = value
  },
  updatePasswordAgain (state, value) {
    state.passwordAgain = value
  }
}

export const actions = {
  signUp (context) {
    // TODO
    /*
    axios.post('/auth', { email: state.email, password: state.password })
    .then(response => {
      console.log(response)
      context.commit('updateToken', response.data.token)
    })
    */
  }
}
