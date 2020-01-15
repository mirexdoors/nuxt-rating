export const state = () => ({});
export const getters = {};
export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('players/getPlayers');
  }
};