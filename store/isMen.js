export const state = () => ({
  isMen: true
});

export const mutations = {
  changeSex (state) {
    state.isMen = !state.isMen;
  }
};

export const getters = {
  get(state) {
    return state.isMen;
  }
};
