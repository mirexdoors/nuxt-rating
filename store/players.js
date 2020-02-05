const URL_MEN = 'https://squashrating.ru/tables/all.php';
const URL_WOMEN = 'https://squashrating.ru/tables/allWomen.php';

export const state = () => ({
  players: {}
});

export const mutations = {
  storePlayers (state, data) {
   state.players =data;
  }
};

export const actions = {
  async getPlayers(store) {
    const players = {};
    const responseMen = await fetch(URL_MEN);
    players.men = await responseMen.json();
    const responseWomen = await fetch(URL_WOMEN);
    players.women = await responseWomen.json();
    store.commit('storePlayers', players);
  }
};
export const getters = {
  get(state) {
    return state.players;
  }
};