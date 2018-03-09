import axios from "axios";

export const state = () => ({
  here: { lat: 0, lng: 0 },
  pins: []
});

export const mutations = {
  addPin(status, value) {
    state.pins.push(value);
  },
  updateHere(status, value) {
    state.here = value;
  }
};

export const actions = {};
