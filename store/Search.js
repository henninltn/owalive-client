import axios from "axios";

export const state = () => ({});

export const mutations = {};

export const actions = {
  goToMap(context) {
    this.$router.push({ path: "/maps" });
  }
};
