<template>
    <div>
        <table-list v-if="isMen" :items="players.men"/>
        <table-list v-else :items="players.women"/>
    </div>
</template>

<script>
  import tableList from '../components/tableList.vue';
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        title: 'Рейтинг федерации сквоша России',
      }
    },
    computed: mapGetters({
      players: 'players/get',
      isMen: 'isMen/get'
    }),
    components: {tableList}
  }
</script>