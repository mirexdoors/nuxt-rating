const URL_MEN = 'https://squashrating.ru/tables/all.php';

export const state = () => ({
  players: []
});

export const mutations = {
  storePlayers (state, data) {
    state.players.push(...data)
  }
};

export const actions = {
  async getPlayers(store) {
    const response = await fetch(URL_MEN);
    const players = await response.json();
    store.commit('storePlayers', players);
  }
};
export const getters = {
  get(state) {
    return state.players;
  }
};