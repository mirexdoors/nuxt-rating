<template>
    <v-app>
        <v-content>
            <headerBlock/>
            <navigation/>
            <nuxt/>
        </v-content>
        <v-footer
                app
        >
            <span>&copy; 2019 </span> <a :href="`mailto:${email}`">{{ email }}</a>
        </v-footer>
    </v-app>
</template>

<script>
  import headerBlock from './headerBlock.vue';
  import navigation from './navigation.vue';

  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        email: 'info@rating.sibsquash.ru'
      }
    },
    components: {
      headerBlock,
      navigation
    },
  }
</script>
<style>
    * {
        color: #393939;
        box-sizing: border-box;
    }

</style>