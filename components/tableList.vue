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
        >
            <template v-slot:body.prepend="{headers}">
                <tr>
                    <th
                            v-for="header in headers"
                            v-bind:key="header.text"
                    >{{header.text}}
                    </th>
                </tr>
            </template>
            <template v-slot:item="{item}">
                <tr class="player__row">
                    <td>
                        <nuxt-link :to="translit(item.player_name)" class="player__link">{{item.position}}</nuxt-link>
                    </td>
                    <td><nuxt-link :to="translit(item.player_name)" class="player__link">{{item.player_name}}</nuxt-link></td>
                    <td><nuxt-link :to="translit(item.player_name)" class="player__link">{{item.summ}}</nuxt-link></td>
                    <td><nuxt-link :to="translit(item.player_name)" class="player__link">{{item.top_eight}}</nuxt-link></td>
                    <td><nuxt-link :to="translit(item.player_name)" class="player__link">{{item.tournaments}}</nuxt-link></td>
                    <td><nuxt-link :to="translit(item.player_name)" class="player__link">{{item.rating}}</nuxt-link></td>
                </tr>
            </template>
        </v-data-table>
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
      slots: ["body.prepend", "item", "header"],
      headers: [
        {text: '#', value: "position"},
        {text: 'Игрок', value: "player_name"},
        {text: 'Сумма баллов', value: "summ"},
        {text: '8 лучших', value: "top_eight"},
        {text: 'Турниры', value: "tournaments", sortable: false},
        {text: 'Рейтинг', value: "rating"}
      ],
    }),
    methods: {
      translit: (name) => {
        const ru = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
          'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
          'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
          'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
          'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
          'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
        }, n_name = [];

        name = name.replace(/[ъь]+/g, '').replace(/й/g, 'i');
        name = name.replace(' ', '_').replace(/й/g, 'i');

        for (let i = 0; i < name.length; ++i) {
          n_name.push(
            ru[name[i]]
            || ru[name[i].toLowerCase()] == undefined && name[i]
            || ru[name[i].toLowerCase()].replace(/^(.)/, function (match) {
              return match
            })
          );
        }
        return n_name.join('');
      }
    }
  }
</script>
<style>
    .theme--light.v-data-table, th {
        background-color: #fafafa !important;
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
    .player__row:nth-of-type(odd) {
        background-color: rgba(0,0,0,.05);
    }
    a.player__link {
        display: flex;
        align-items: center;
        height: 100%;
        color: #393939;
        text-decoration: none;
    }
</style>