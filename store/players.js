const URL_MEN = 'https://squashrating.ru/tables/data/all.php';
export const state = () => {
  this.$axios.$get(URL_MEN).then((response) => {
     console.log(response.data, this)
  })
};

export const getters = {
  getAll (state) {
    return state;
  }
}