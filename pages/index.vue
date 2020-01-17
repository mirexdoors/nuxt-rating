<template>
    <div>
        <table-list :items="players"/>
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
    }),
    components: {tableList}
  }
</script>