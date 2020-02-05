<template>
    <div>
        <div class="searchWrapper px-12">
            <v-text-field class="search" v-model="search" label="Поиск" single-line hide-details></v-text-field>
        </div>
        <v-data-table
                class="pa-12"
                :headers="headers"
                :items="items"
                :search="search"
                hide-default-footer
                disable-pagination
                fixed-header
                hide-default-header
        />
    </div>
</template>
<script>
  export default {
    name: 'tableList',
    props: {
      items: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data: () => ({
      search: "",
      headers: [
        {text: '#', value: "position"},
        {text: 'Игрок', value: "player_name"},
        {text: 'Сумма баллов', value: "summ"},
        {text: '8 лучших', value: "top_eight"},
        {text: 'Турниры', value: "tournaments", sortable: false},
        {text: 'Рейтинг', value: "rating"}
      ],
    })
  }
</script>
<style>
    .theme--light.v-data-table, th {
        background-color: #fafafa!important;
    }
    th span {
        font-weight: bold;
        font-size: 1rem;
    }

    th:first-child span {
        color: #cc2d32;
    }

    td:first-child {
        color: #cc2d32;
        font-weight: bold;
    }
</style>