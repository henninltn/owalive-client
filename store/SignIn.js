import axios from "axios";

export const state = () => ({
  email: "",
  password: "",
  token: ""
});

export const mutations = {
  updateEmail(state, value) {
    state.email = value;
  },
  updatePassword(state, value) {
    state.password = value;
  },
  updateToken(state, value) {
    state.token = value;
  }
};

export const actions = {
  signIn(context) {
    axios
      .post(
        "http://api.nmkj.io:14080/auth",
        // email: state.email,
        // password: state.password
        {
          email: "chiho.aikawa@fuku-c.ed.jp",
          password: "chiho_aikawa"
        }
      )
      .then(response => {
        console.log(response);
        context.commit("updateToken", response.data.token);
      });
  }
};
