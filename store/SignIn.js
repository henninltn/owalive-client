import axios from 'axios'

export const state = () => ({
  email: '',
  password: '',
  token: ''
})

export const mutations = {
  updateEmail (state, value) {
    state.email = value
  },
  updatePassword (state, value) {
    state.password = value
  },
  updateToken (state, value) {
    state.token = value
  }
}

export const actions = {
  signIn (context) {
    axios.post('/auth', { email: state.email, password: state.password })
    .then(response => {
      console.log(response)
      context.commit('updateToken', response.data.token)
    })
  }
}
