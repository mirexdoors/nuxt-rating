<template>
    <nav class="nav">
        <button type="button" v-on:click="change()" class="nav__item" v-bind:class="[isMen ? activeClass : '']">
            Мужчины
        </button>
        <button type="button" v-on:click="change()" class="nav__item" v-bind:class="[isMen ? '' : activeClass]">
            Женщины
        </button>
    </nav>
</template>
<script>

  import {mapMutations, mapGetters} from 'vuex';

  export default {
    name: 'navigation',
    data: () => ({
      activeClass: 'nav__item--active'
    }),
    computed:
      mapGetters({
        isMen: 'isMen/get'
      }),
    methods: {
      ...mapMutations({
        change: 'isMen/changeSex'
      })
    }
  }
</script>
<style scoped>
    .nav {
        display: flex;
        width: 100%;
    }

    .nav__item {
        display: block;
        width: 50%;
        color: #393939;
        padding: 1rem 2rem;
        font-size: 1.375rem;
        text-align: center;
        text-decoration: none;
        outline: none;
    }

    .nav__item:not(.nav__item--active):hover {
        background: #eae8e8;
        box-shadow: 0 .375rem #eae8e8;
    }

    .nav__item--active {
        border-color: transparent; /* remove the border's colour */
        box-shadow: 0 .375rem #cc2d32;
    }
</style>